import { Base } from "../Base";
import { expect } from '@playwright/test';



class CatalogConponent extends Base{
    constructor(page){
        super(page)
        this.quantityOfElements = page.locator('[class="vue-recycle-scroller__item-view"]')
    }
    
    async selectElementFromCatalog(rowNumber){
        return `[class="_gridItem_fofh3_11"]:nth-of-type(${rowNumber})`;
    }
    async goToPageByElement(rowNumber){
        await this.page.locator(await this.selectElementFromCatalog(rowNumber)).click()
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
    




    async getAddToShoppingCartButton(){
        await this.page.locator('[aria-label="Добавить в корзину"]').click()
    }
    async goToShoppingCartButton(){
        await this.page.locator('[class="x-button x-button_primaryFilledWeb7184 x-button_32 x-button_link x-button_link_32 x-button_intrinsic-width"]').click()
    }
    async goToCatalogBack(){
        await this.page.locator('[class="x-button x-button_secondaryFilledWeb7184 x-button_32 x-button_intrinsic-width _continue_hwauu_16"]').click()
    }
    async deleteAllElementsFromShoppingCart(){

        await this.page.locator('[class="_inner_unp9l_2"]').click()
        await this.page.locator('[class="x-button x-button_primaryFilledWeb7184 x-button_32 x-button_intrinsic-width _actionButton_4stt4_7"]').click()
    }
    async selectCheckboxOfElement(rowNumber){
        await this.page.locator(`.vue-recycle-scroller__item-view:nth-of-type(${rowNumber}) .x-checkbox.x-checkbox_alignment_top`).click()

    }
    async elementsOfShoppingCart(quantity){
        await expect(this.quantityOfElements).toHaveCount(quantity)
    }
        
    

}
export {CatalogConponent}