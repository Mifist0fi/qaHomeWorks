import { test, expect } from '@playwright/test';
import { Footer } from './page-object/conponents/footer';
import { Filter } from './page-object/conponents/filter';

test.describe('Footer Elements', async ()=>{
    let filter
    let footer
    test.beforeEach(async({page})=>{
        footer = new Footer(page)
        filter = new Filter(page)
        await footer.navigate('https://www.lamoda.by/')
        await page.evaluate(() => {window.scrollTo(0, document.body.scrollHeight);})
    })

    test('should', async ({ page }) => {
        await footer.goToPageByHelp("1")
        await footer.expectStatusOrder()
        
    });
    test('should receive table of sizes to choose', async ({ page }) => {
        await footer.goToPageByHelp("6")
        await footer.goToPageByNumberOfElement("5")
        await footer.expectTableOfSizes()
        
    });
    test('should to apply target files cookie', async ({ page }) => {
        await footer.goToPageByHelp("10")
        await footer.getCheckboxCookie()
        await footer.turnOnTargetCookie()
    });

    

})