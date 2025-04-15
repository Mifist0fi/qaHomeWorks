const { default: axios } = require("axios")
const validator = require("jsonschema")
const authorsSchema = require("../schemas/get-authors-v1.json")


describe('Api test', () => {


    test('GET should be able to list of authors with status code 200', async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Authors")
        await expect(response.status).toEqual(200);
        await expect(response.data).toBeTruthy()
        });
        
    test('GET should be able to list of authors with json schema', async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Authors")
        const result = await validator.validate(response.data, authorsSchema)
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

