import { test } from '@playwright/test';
import { InventoryPage } from '../../../pages/auth/InventoryPage';
import { LoginPage } from '../../../pages/auth/LoginPage';

const SAUCE_DEMO_URL = 'https://www.saucedemo.com/';

test.describe('SauceDemo - Login', () => {
  test('shows error for empty username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(SAUCE_DEMO_URL);
    await loginPage.assertLoaded();
    await loginPage.login('', '');
    await loginPage.expectError('Epic sadface: Username is required');
  });

  test('shows error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(SAUCE_DEMO_URL);
    await loginPage.assertLoaded();
    await loginPage.login('random_user', 'random_password');
    await loginPage.expectError(
      'Epic sadface: Username and password do not match any user'
    );
  });

  test('navigates to inventory page after valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto(SAUCE_DEMO_URL);
    await loginPage.assertLoaded();
    await loginPage.login('standard_user', 'secret_sauce');

    // Products title can be styled/structured differently across browsers; assert on a stable element.
    await inventoryPage.assertLoaded();
  });
});
