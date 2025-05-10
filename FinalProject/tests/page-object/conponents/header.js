import { Base } from "../Base";

class Header extends Base{
    constructor(page){
        super(page);
    }

    get acceptCookieButton(){
        return '//button[span/text()="Принять"]'
    }
    async acceptCookie(){
        await this.page.locator(this.acceptCookieButton).click()
    }
    
}
export {Header}