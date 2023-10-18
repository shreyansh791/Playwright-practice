import {test,expect} from "@playwright/test"
import { log } from "console";
test('Handle Tool Tip', async ({ page }) => {
  await  page.goto('http://localhost:4200')
  await page.getByTitle('Modal & Overlays').click()
  await page.getByTitle('Tooltip').click()

  await page.getByRole('button',{name:'TOP'}).hover()

//   await page.waitForTimeout(3000);

  const toolTipText = await page.locator('nb-tooltip').textContent()
    await expect(toolTipText).toEqual('This is a tooltip')

});