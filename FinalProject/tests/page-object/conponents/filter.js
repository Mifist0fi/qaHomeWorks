import { Base } from "../Base";
import { expect } from '@playwright/test';



class Filter extends Base{
    constructor(page){
        super(page)
        this.itemOfCatalog = this.page.locator('[class="_gridItem_fofh3_11"]');
        this.pricewithSale = '[class="_price_163e7_8 x-product-card-description__price-new x-product-card-description__price-WEB8507_price_bold"]';
        this.priceWithoutSale = '[class="_price_163e7_8 x-product-card-description__price-single x-product-card-description__price-WEB8507_price_bold"]';
    }
    get priceButton(){
        return '//span[contains(@class, "_title_xwbaf_43") and text()="Цена"]/ancestor::div[contains(@class, "_item_xwbaf_2")]'
    }
    get minPriceInput(){
        return '[name="minRange"]'
    }
    get maxPriceInput(){
        return '[name="maxRange"]'
    }
    get submitFilterButton(){
        return '[class="x-button x-button_primaryNewFilled x-button_48 x-button_intrinsic-width _apply_15rdu_20"]'
    }
    
    
    async inputPriceMinMax(minPrice,maxPrice){
        await this.page.locator(this.priceButton).click()
        await this.page.locator(this.minPriceInput).fill(minPrice)
        await this.page.locator(this.maxPriceInput).fill("")
        await this.page.locator(this.maxPriceInput).fill(maxPrice)
        await this.page.locator(this.submitFilterButton).click()
    }
    async waitUpdateState(){
        await this.page.waitForLoadState('networkidle',{ timeout: 3000 })
    }
    async getItemsCount() {
        return await this.itemOfCatalog.count();
    }

    async getItem(index) {
        return this.itemOfCatalog.nth(index);
    }

    async getPriceText(item) {
        const countWithSale = await item.locator(this.pricewithSale).count();
        if (countWithSale > 0) {
            return await item.locator(this.pricewithSale).innerText();
        }
        const countWithoutSale = await item.locator(this.priceWithoutSale).count();
        if (countWithoutSale > 0) {
            return await item.locator(this.priceWithoutSale).innerText();
        }
    }

    parsePrice(text) {
        const match = text.match(/[\d,.]+/);
        if (match) {
            return parseFloat(match[0].replace(',', '.'));
        }
    }


    get brandButton(){
        return '//span[contains(@class, "_title_xwbaf_43") and text()="Бренд"]/ancestor::div[contains(@class, "_item_xwbaf_2")]'
    }
    get inputBrandPlaceholder(){
        return '[class="_input_12e24_9"]'
    }
    get selectBrandFromDropdown(){
        return '//span[@class="_valueTitle_zesp7_47" and normalize-space(text())="Nike"]'
    }
     async inputBrandByName(brand){
        await this.page.locator(this.brandButton).click()
        await this.page.locator(this.inputBrandPlaceholder).fill(brand)
        await this.page.locator(this.selectBrandFromDropdown).click()
        await this.page.locator(this.submitFilterButton).click()
    }
    get brandOfElement(){
        return '.x-product-card-description__brand-name_faded'
    }
    async getBrandText(item) {
        const countBrand = await item.locator(this.brandOfElement).count();
        if (countBrand > 0) {
            return await item.locator(this.brandOfElement).innerText();
        }
    }
    get saleButton(){
        return '//span[contains(@class, "_title_xwbaf_43") and text()="Только со скидкой"]/ancestor::div[contains(@class, "_item_xwbaf_2")]'
    }
    async selectSaleFilter(){
        await this.page.locator(this.saleButton).click()
    }
    async getPriceSaleText(item) {
        const countWithSale = await item.locator(this.pricewithSale).count();
        if (countWithSale > 0) {
            return await item.locator(this.pricewithSale).innerText();
        }else{
            return 0;
        }
    }





    async sizeOfElement(rowNumber){
        return `[class="_items_1d79y_6"]:nth-of-type(${rowNumber})`
    }
    async getSizeOfElement(rowNumber) {
    const sizeSelector = await this.sizeOfElement(rowNumber);
    const sizeElement = this.page.locator(sizeSelector);
    
    if (await sizeElement.isVisible()) {
        await sizeElement.click();
        return; 
    } else {
        const sizeDropdown = this.page.locator('[class="_sizeValue_14ecl_285"]');
        if (await sizeDropdown.isVisible()) {
            // Кликаем по нужному элементу по rowNumber
            const sizeDropdownElement = this.page.locator(
                `[class="_colspan_14ecl_152 ui-product-page-sizes-chooser-item_enabled ui-product-page-sizes-chooser-item"]:nth-of-type(${rowNumber})`
            );
            await sizeDropdownElement.click();
        }
    }
    }
    
}
export {Filter}
