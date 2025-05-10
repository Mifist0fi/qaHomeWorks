import { Base } from "../Base";
import { expect } from '@playwright/test';



class Navigation extends Base{
    constructor(page){
        super(page)
        this.resultOfSearch = page.locator('.ui-catalog-search-head-title')
        this.errorMessage = page.locator('._text_1m10r_30')
    }
    
    async getWomanNavMenuItemByName(itemName){
        const items={
            clothes: '[href="/c/355/clothes-zhenskaya-odezhda/?sitelink=topmenuW&l=2"]',
            shoes: '[href="/c/15/shoes-women/?sitelink=topmenuW&l=3"]',
            accessories: '[href="/c/557/accs-zhenskieaksessuary/?sitelink=topmenuW&l=4"]',
            sale: '[href="/c/4153/default-women/?is_sale=1&display_locations=outlet&sitelink=topmenuW&l=11"]',
    
        }

        return items[itemName];
    }

    async goToPageByName(itemName){
        await this.page.locator(await this.getWomanNavMenuItemByName(itemName)).click()
    }
    get searchButton(){
        return '._button_mh0i8_11'
    }
    get searchField(){
        return '._inputShown_mh0i8_43'
    }
    
    async inputSearchData(searchData){
        await this.page.locator(this.searchButton).click()
        await this.page.locator(this.searchField).fill(searchData)
    }
    async goToPageBySearch(){
        await this.page.locator(this.searchButton).click()
    }
    async expectResultOfSearch(){
        await expect(this.resultOfSearch).toBeVisible();
    }
    async expectErrorMessage(text) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(text);
    }
    async goToPageByDropdownElement(rowNumber){
        await this.page.locator(`._suggestItem_mh0i8_77:nth-of-type(${rowNumber})`).click()
    }
    async selectDropdownElement(itemName,elementDropdown){
        await this.page.locator(await this.getWomanNavMenuItemByName(itemName)).hover()
        await this.page.locator(`//a[contains(@class, "_root_aroml_2") and normalize-space() = "${elementDropdown}"]`).click()
    }
}
export {Navigation}