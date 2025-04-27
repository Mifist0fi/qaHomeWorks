
import { test, expect } from '@playwright/test';


test.describe('test playwright', () =>{
  
  
  test('Проверка заголовка страницы', async ({ page }) => {
    await page.goto('/'); 
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); 
  });
  
  test('Проверка наличия элемента "Get started"', async ({ page }) => {
    await page.goto('/'); 
    const getStarted = page.locator('text=Get started');
    await expect(getStarted).toBeVisible();
  });
  test('Переход по ссылке "Get started" и проверка URL', async ({ page }) => {
    await page.goto('/'); 
    await page.locator('text=Get started').click();
    await expect(page).toHaveURL(/docs\/intro/);
  });
  test('Поиск "locator" и проверка результатов', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('//*[@class="DocSearch DocSearch-Button"]').click();
    await page.locator('//input[@class="DocSearch-Input"]').fill('locator');
    await page.locator('//input[@class="DocSearch-Input"]').press('Enter');
    await expect(page.locator('text=Locator').first()).toBeVisible();
  });
})

