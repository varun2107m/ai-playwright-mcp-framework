import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class InventoryPage extends BasePage {
  private readonly inventoryTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryTitle = page.locator('span.title');
  }

  async assertLoaded(): Promise<void> {
    await expect(this.inventoryTitle).toBeVisible();
  }
}
