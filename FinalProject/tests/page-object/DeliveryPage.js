import { Base } from "./Base";
import { expect } from '@playwright/test';



class DeliveryPage extends Base{
    constructor(page){
        super(page)
        this.page = page;
        this.errorMessage = page.locator('//*[contains(@class,"input-material__validation-message") and contains(text(),"Выберите улицу")]');
        this.makingOrder = page.locator('[class="_title_ky5sq_6"]')

    }
    get inputDeliveryButton(){
        return '[class="x-button x-button_primaryPremium x-button_52 _button_810e2_6"]'
    }
    async goToLocationOfDelivery(){
        await this.page.locator(this.inputDeliveryButton).click()
    }
    

    get cityField(){
        return '[id="city"]'
    }
    
    get streetField(){
        return '[id="street"]'
    }
    get houseField(){
        return '[id="house"]'
    }
    get flatField(){
        return '[id="house"]'
    }
    get deliveryHereButton(){
        return '[class="_submit_9083t_19"]'
    }
    async inputDeliveryData(city,street,house,flat){
        await this.page.locator(this.cityField).fill(city)
        await this.page.locator(this.streetField).fill(street)
        await this.page.locator(this.houseField).fill(house)
        await this.page.locator(this.flatField).fill(flat)
        await this.page.locator(this.deliveryHereButton).click()
    }
    
    async expectErrorMessage(text) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(text);
      }
    async expectOrderMessege(text) {
        await expect(this.makingOrder).toBeVisible();
        await expect(this.makingOrder).toHaveText(text);
      }
}
export {DeliveryPage}