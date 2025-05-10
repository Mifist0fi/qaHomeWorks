import { Base } from "../Base";
import { expect } from '@playwright/test';


class Footer extends Base {

    constructor(page){
        super(page);
        this.checkStatusOrder = page.locator('[class="_header_1j50h_7"]')
        this.tableOfSizes = page.locator('._table_u99i1_30')
        this.checkboxCookie = page.locator('[class="x-checkbox x-checkbox_alignment_center"]')
    }

    async goToPageByHelp(rowNumber){
        await this.page.locator(`[class="x-footer__link"]:nth-of-type(${rowNumber})`).click()
    }
    get selectNumberOfOrder(){
        return '[name="input-order-number"]'
    }
    get selectPhoneNumber(){
        return '[name="input-phone"]'
    }
    get checkSubmitButton(){
        return '[type="submit"]'
    }
    async inputDataOfOrder(numberOfOrder,phoneNumber){
        await this.page.locator(this.selectNumberOfOrder).fill(numberOfOrder)
        await this.page.locator(this.selectPhoneNumber).fill(phoneNumber)

        await this.page.locator(this.checkDataOfOrderButton).click()
    }
    async expectStatusOrder(){
        await expect(this.checkStatusOrder).toBeVisible()
    }
    async goToPageByNumberOfElement(rowNumber){
        await this.page.locator(`._item_y4ujd_9:nth-of-type(${rowNumber})`).click()
    }
    async expectTableOfSizes(){
        await expect(this.tableOfSizes).toBeVisible()
    }
    async getCheckboxCookie(){
        await this.page.locator('[class="x-checkbox x-checkbox_alignment_center"]').click()
    }
    async turnOnTargetCookie(){
        await this.page.locator(this.checkSubmitButton).click()
        await expect(this.checkboxCookie).toHaveAttribute('aria-checked', 'true')
    }
    

}
export {Footer}
