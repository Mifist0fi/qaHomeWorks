import  CatalogComponent  from './page-object/conponents/CatalogComponent';

class CatalogFacade extends CatalogComponent{
  constructor(page) {
    super(page)
    this.catalog = new CatalogComponent(page);
  }

  async navigateToHome() {
    await this.catalog.navigate('https://www.lamoda.by/');
  }

  async addItemsToCartByIndices(indices) {
    for (const index of indices) {
      await this.catalog.goToPageByElement(index);
      await this.catalog.getAddToShoppingCartButton();
    }
  }

  async removeAllItemsFromCart() {
    await this.catalog.deleteAllElementsFromShoppingCart();
  }

  async verifyNumberOfItemsInCart(expectedCount) {
    await this.catalog.elementsOfShoppingCart(expectedCount);
  }

  async selectItemSize(rowNumber) {
    await this.catalog.getSizeOfElement(rowNumber);
  }

  async goToCart() {
    await this.catalog.goToShoppingCartButton();
  }

  async removeItemByRow(rowNumber) {
    await this.catalog.selectCheckboxOfElement(rowNumber);
  }
}

export { CatalogFacade };