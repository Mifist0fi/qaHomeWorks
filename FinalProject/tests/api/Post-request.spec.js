const { test, expect } = require('@playwright/test');
const { PostPage } = require('./PostPage');

test('POST-запрос к API /banner/get возвращает 204', async ({ request }) => {
  const postPage = new PostPage(request);
  const response = await postPage.sendPost();

  expect(response.status()).toBe(207);
});
test('Проверка POST-запроса к Sentry API возвращает 403', async ({ request }) => {
  const postPage = new PostPage(request);
    const response = await postPage.sendPostSentry();

  expect(response.status()).toBe(403);
});