import AxeBuilder from '@axe-core/playwright';
import { expect, type Page, test } from '@playwright/test';
import { publishedStories } from '../lib/stories';

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

// Story routes come from the data so new case studies are scanned automatically.
const routes = [
  '/',
  '/about',
  '/resume',
  '/accessibility',
  '/privacy',
  ...publishedStories.map((story) => `/work/${story.slug}`),
];

const scan = (page: Page) => new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();

test.describe('axe: WCAG 2.2 AA', () => {
  for (const route of routes) {
    test(route, async ({ page }) => {
      await page.goto(route);
      const { violations } = await scan(page);
      expect(violations).toEqual([]);
    });
  }

  test('mobile nav open', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    const mobileNav = page.getByRole('navigation', { name: 'Mobile navigation' });
    await expect(mobileNav).toBeVisible();
    for (const story of publishedStories) {
      await expect(mobileNav.getByRole('link', { name: story.title })).toBeVisible();
    }
    const { violations } = await scan(page);
    expect(violations).toEqual([]);
  });

  test('work dropdown open (keyboard)', async ({ page }) => {
    await page.goto('/about');
    const trigger = page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('button', { name: 'Work' });
    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');

    const firstStory = page.getByRole('link', { name: publishedStories[0].title });
    await expect(firstStory).toBeVisible();

    const { violations } = await new AxeBuilder({ page })
      .withTags(WCAG_TAGS)
      // base-ui focus guards: aria-hidden + tabindex=0 by design; they redirect
      // focus on arrival (keyboard flow verified below). Rest of popup is scanned.
      .exclude('[data-base-ui-focus-guard]')
      .analyze();
    expect(violations).toEqual([]);

    // Tab moves into the popup; Escape closes it and returns focus to the trigger.
    await page.keyboard.press('Tab');
    await expect(firstStory).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();
  });
});

test('/work redirects to the home page work section', async ({ page }) => {
  await page.goto('/work');
  await expect(page).toHaveURL(/\/#work$/);
  await expect(page.getByRole('heading', { name: 'Selected Work' })).toBeVisible();
});
