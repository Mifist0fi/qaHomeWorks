import { test, expect } from '@playwright/test';
import { Navigation } from './page-object/conponents/navigation';
import { CatalogConponent } from './page-object/conponents/CatalogComponent';

import { DeliveryPage } from './page-object/DeliveryPage';



test.describe('Delivery Page', async ()=>{
  let navigation
  let catalog
  let delivery
  

  test.beforeEach(async({page})=>{
  
    navigation = new Navigation(page)
    catalog = new CatalogConponent(page)
    delivery = new DeliveryPage(page)

    await delivery.navigate('https://www.lamoda.by/')
    
  })
  
  test('should to go to delivery page with invalid data', async ({browser}) => {
    
    await navigation.goToPageByName("accessories")
    await catalog.goToPageByElement("1")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToShoppingCartButton()

    await delivery.goToLocationOfDelivery()
    await delivery.inputDeliveryData("г.Витебск"," ","д.51"," ")
    
    await delivery.expectErrorMessage('Выберите улицу');
    
    
    
  })
  test('should to go to delivery page with valid data', async ({ page }) => {
    await navigation.goToPageByName("accessories")
    await catalog.goToPageByElement("4")
    await catalog.getAddToShoppingCartButton()
    await catalog.goToShoppingCartButton()

    await delivery.goToLocationOfDelivery()
    await delivery.inputDeliveryData("г.Витебск","ул.Гагарина","д. 51"," ")
    
    await delivery.expectOrderMessege('Оформление заказа')
  })
  
  

})
