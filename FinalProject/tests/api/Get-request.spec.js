const { test, expect } = require('@playwright/test');
const { GetPage } = require('./GetPage')

let getPage
test.beforeEach(async({request})=>{
  getPage = new GetPage(request);
})

test('Проверка статуса GET запроса к Lamoda', async ({ request }) => {
  const url = 'https://www.lamoda.by/c/859/clothes-sports-fytbolki-polo/';

  const response = await getPage.getPageUrl(url);

  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('Женские спортивные футболки и поло');
});

test('Проверка статуса GET запроса к Lamoda with invalid url', async ({ request }) => {
  const url = 'https://www.lamoda.by/c/859/clothes-sports-fytbolki-polo/cfjkghfclkjg';

  const response = await getPage.getPageUrl(url);
  expect(response.status()).toBe(404);
});
