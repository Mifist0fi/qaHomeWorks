class Base {
    constructor(page){
        this.page = page;
    }
    async navigate(url){
        return this.page.goto(url);
    }
}

export {Base};