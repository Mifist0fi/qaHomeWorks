import { test, expect } from '@playwright/test';
import { Filter } from './page-object/conponents/filter';
import { Navigation } from './page-object/conponents/navigation';

test.describe('Filter Elements', async ()=>{
    let filter
    let navigation
    test.beforeEach(async({page})=>{
        filter = new Filter(page)
        navigation = new Navigation(page)
        await filter.navigate('https://www.lamoda.by/')
    
    })

    test('should to check filter price', async ({ page }) => {
        await navigation.goToPageByName("accessories")
        await filter.inputPriceMinMax("10","50")
        
        await filter.waitUpdateState();

        const count = await filter.getItemsCount();

        for (let i = 0; i < count; i++) {
            const item = await filter.getItem(i);
            const priceText = await filter.getPriceText(item);

            const price = filter.parsePrice(priceText);

            expect(price).toBeGreaterThanOrEqual(10);
            expect(price).toBeLessThanOrEqual(51);
        }
    })
    test('should to check filter Brand', async ({ page }) => {
        await navigation.goToPageByName("accessories")

        await filter.inputBrandByName("nike")
        
        await filter.waitUpdateState();

        const count = await filter.getItemsCount();

        for (let i = 0; i < count; i++) {
            const item = await filter.getItem(i);
            const brandText = await filter.getBrandText(item);
                    
            expect(brandText.toLowerCase()).toContain('nike');
        }
    })
    test('should to check filter Sale', async ({ page }) => {
        await navigation.goToPageByName("accessories")
        await filter.selectSaleFilter();
        
        await filter.waitUpdateState();

        const count = await filter.getItemsCount();

        for (let i = 0; i < count; i++) {
            const item = await filter.getItem(i);
            const priceSaleText = await filter.getPriceSaleText(item);
            const price = filter.parsePrice(priceSaleText);

            expect(price).toBeGreaterThanOrEqual(0);
            
        }
    })
    test('should to check navigation filter Sale', async ({ page }) => {
        await navigation.goToPageByName("sale")
        
        await filter.waitUpdateState();

        const count = await filter.getItemsCount();

        for (let i = 0; i < count; i++) {
            const item = await filter.getItem(i);
            const priceSaleText = await filter.getPriceSaleText(item);
            const price = filter.parsePrice(priceSaleText);

            expect(price).toBeGreaterThanOrEqual(0);
            
        }
    })
    test('should to check Dropdown of navigation filter Brand', async ({ page }) => {
        await navigation.selectDropdownElement("shoes","adidas")
        
        await filter.waitUpdateState();

        const count = await filter.getItemsCount();

        for (let i = 0; i < count; i++) {
            const item = await filter.getItem(i);
            const brandText = await filter.getBrandText(item);
                    
            expect(brandText.toLowerCase()).toContain('adidas');
        }
    })
});