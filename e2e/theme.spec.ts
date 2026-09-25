import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { publishedStories } from '../lib/stories';

const themeControl = (page: import('@playwright/test').Page) =>
  page.getByRole('group', { name: 'Color theme' });

test('theme follows the system and remembers explicit preferences across pages and tabs', async ({
  page,
  context,
}) => {
  // Vercel serves analytics in deployment; the local production server has no script endpoint.
  await page.route('**/_vercel/insights/script.js', (route) =>
    route.fulfill({ contentType: 'application/javascript', body: '' }),
  );
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await expect(themeControl(page).getByRole('button', { name: 'System theme' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await themeControl(page).getByRole('button', { name: 'Dark theme', exact: true }).focus();
  await page.keyboard.press('Enter');
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'About', exact: true })
    .click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(
    themeControl(page).getByRole('button', { name: 'Dark theme', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true');
  const otherPage = await context.newPage();
  await otherPage.goto('/');
  await expect(otherPage.locator('html')).toHaveClass(/dark/);
  await themeControl(page).getByRole('button', { name: 'Light theme', exact: true }).click();
  await expect(otherPage.locator('html')).not.toHaveClass(/dark/);
  await themeControl(page).getByRole('button', { name: 'System theme' }).click();
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveClass(/dark/);
  expect(errors).toEqual([]);
});

test('mobile theme control sits beside LinkedIn and remains accessible', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 812 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await themeControl(page).getByRole('button', { name: 'Dark theme', exact: true }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' });
  const linkedIn = await nav
    .getByRole('link', { name: 'LinkedIn profile (opens in new tab)' })
    .boundingBox();
  const control = await themeControl(page).boundingBox();
  if (!control || !linkedIn) throw new Error('Theme control or LinkedIn is not visible');
  expect(control.x).toBeGreaterThan(linkedIn.x + linkedIn.width);
  expect(await page.locator('body').evaluate((body) => body.scrollWidth)).toBeLessThanOrEqual(320);
  const { violations } = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();
  expect(violations).toEqual([]);
});

for (const route of [
  '/',
  '/about',
  '/resume',
  '/accessibility',
  '/privacy',
  '/sitemap',
  ...publishedStories.map((story) => `/work/${story.slug}`),
]) {
  test(`dark theme accessibility: ${route}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto(route);
    await expect(page.locator('html')).toHaveClass(/dark/);
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(violations).toEqual([]);
  });
}

test('dark theme prints using the light palette', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/work/wic');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('body')).toHaveCSS('color', 'rgb(26, 26, 26)');
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
});
