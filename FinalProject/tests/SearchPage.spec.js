import { test, expect } from '@playwright/test';
import { Navigation } from './page-object/conponents/navigation';



test.describe('Search Page', async ()=>{

  let navigation

  test.beforeEach(async({page})=>{
    navigation = new Navigation(page)

    await navigation.navigate('https://www.lamoda.by/')
    
  })
  
  

  test('should receive result of search with valid language', async ({ page }) => {
    
    await navigation.inputSearchData("штаны")
    await navigation.goToPageBySearch()
    await navigation.expectResultOfSearch()
  });
  test('should receive result of search with invalid language', async ({ page }) =>{
    await navigation.inputSearchData("infys")
    await navigation.goToPageBySearch()
    await navigation.expectResultOfSearch()

  });
  test('should should receive error of search with invalid data', async ({ page }) => {

    await navigation.inputSearchData("штаныsss")
    await navigation.goToPageBySearch()
    await navigation.expectErrorMessage("Измените поисковый запрос или посмотрите наши рекомендации.")
  });
  test('should choose dropdown result of search with valid language', async ({ page }) => {
    await navigation.inputSearchData("штаны")
    await navigation.goToPageByDropdownElement("1")
    await navigation.expectResultOfSearch()

  });
  test('should choose dropdown result of search with invalid language', async ({ page }) => {

    await navigation.inputSearchData("infys")
    await navigation.goToPageByDropdownElement("2")
    await navigation.expectResultOfSearch()



  });
  
})