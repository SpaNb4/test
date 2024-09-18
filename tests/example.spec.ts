import { test } from '@playwright/test';
import { argosScreenshot } from '@argos-ci/playwright';

test('Main page', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await argosScreenshot(page, 'homepage');
});
