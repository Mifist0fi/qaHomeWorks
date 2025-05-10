import { test, expect } from '@playwright/test';
import { Navigation } from './page-object/conponents/navigation';
import { CatalogConponent } from './page-object/conponents/CatalogComponent';




test.describe('Catalog Page', async ()=>{
  
  let catalog
  let navigation

  test.beforeEach(async({page})=>{
    navigation = new Navigation(page)
    catalog = new CatalogConponent(page)
    await catalog.navigate('https://www.lamoda.by/')
  })
  
  test.afterEach(async()=>{
    await catalog.deleteAllElementsFromShoppingCart()
  })

  test('should choose and add 1 element of accessories to shopping cart', async ({ page }) => {
    await navigation.goToPageByName("clothes")
    await catalog.goToPageByElement("2")
    await catalog.getAddToShoppingCartButton()
    await catalog.getSizeOfElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToShoppingCartButton()
     
    await catalog.elementsOfShoppingCart(1)
  });
  
  
  test('should choose and add few elements of accessories to shopping cart', async ({ page }) => {
    await navigation.goToPageByName("clothes")
    await catalog.goToPageByElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.getSizeOfElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToCatalogBack()

    await navigation.goToPageByName("clothes")
    await catalog.goToPageByElement("3")
    await catalog.getAddToShoppingCartButton()
    await catalog.getSizeOfElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToCatalogBack()
    
    await navigation.goToPageByName("clothes")
    await catalog.goToPageByElement("5")
    await catalog.getAddToShoppingCartButton()
    await catalog.getSizeOfElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToShoppingCartButton()

    await catalog.elementsOfShoppingCart(3)
    
  })
  test('should add few elements of accessories to shopping cart and delete one', async ({ page }) => {
    await navigation.goToPageByName("clothes")
    await catalog.goToPageByElement("2")
    await catalog.getAddToShoppingCartButton()
    await catalog.getSizeOfElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToCatalogBack()

    await navigation.goToPageByName("clothes")
    await catalog.goToPageByElement("3")
    await catalog.getAddToShoppingCartButton()
    await catalog.getSizeOfElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToCatalogBack()
    
    await navigation.goToPageByName("clothes")
    await catalog.goToPageByElement("5")
    await catalog.getAddToShoppingCartButton()
    await catalog.getSizeOfElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToShoppingCartButton()
    await catalog.selectCheckboxOfElement("1")

    await catalog.elementsOfShoppingCart(2)
  })
  
  
  

})
