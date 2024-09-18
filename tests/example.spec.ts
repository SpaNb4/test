// import { test } from '@playwright/test';
// import { argosScreenshot } from '@argos-ci/playwright';

// test('Main page', async ({ page }) => {
//   await page.goto('http://localhost:5173');

//   await argosScreenshot(page, 'homepage');
// });

import { test } from '@playwright/test';
import percyScreenshot from '@percy/playwright';

test('Main page', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await percyScreenshot(page, 'Main page');
});
