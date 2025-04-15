
const { default: axios } = require("axios")
const validator = require("jsonschema")
const idBooksSchema = require("../schemas/get-idBooks-v1.json")

describe('Api test', () => {

    test('GET should be able to list of id Books with satus code 200', async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/1")
        await expect(response.status).toEqual(200);
        await expect(response.data).toBeTruthy()
    })

    test('GET should be able to list of id Books with json schema', async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/1")
        const result = await validator.validate(response.data, idBooksSchema)
        await expect(result.valid).toEqual(true)
        });
    test('Negative test with wrong url', async () => {
        try {
            await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Authorsaaaa");
        } catch (error) {
            expect(error.response.status).toEqual(404);
            expect(error.response.statusText).toEqual("Not Found");
        }
    });
})

