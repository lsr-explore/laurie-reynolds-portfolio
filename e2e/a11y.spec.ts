import AxeBuilder from '@axe-core/playwright';
import { expect, type Page, test } from '@playwright/test';
import { publishedStories } from '../lib/stories';

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

// Story routes come from the data so new case studies are scanned automatically.
const routes = [
  '/',
  '/about',
  '/work',
  '/resume',
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
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
    const { violations } = await scan(page);
    expect(violations).toEqual([]);
  });
});
