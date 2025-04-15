const { default: axios } = require("axios")
const validator = require("jsonschema")
const authorsSchema = require("../schemas/put-idAuthors-v1.json")

describe('Api test', () => {

    

    test('PUT should be able to list of  id authors with status code 200', async () => {
        const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Authors/1", {
            id:0,
            idBook:0,
            firstName:"string",
            lastName:"string"
            }, {
            headers: {
              "Content-Type": "application/json"
            }
            
        })
        await expect(response.status).toEqual(200);
        await expect(response.data).toBeTruthy()
    })
    test('PUT should be able to list of authors with json schema', async () => {
        const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Authors/1", {
            id:0,
            idBook:0,
            firstName:"string",
            lastName:"string"
            }, {
                headers: {
                  "Content-Type": "application/json"
                }
            })
        const result = await validator.validate(response.data, authorsSchema)
        await expect(result.valid).toEqual(true)
    })


    test("Negative test with false data", async () => {
        try {
            await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Authors/1", {
                id: "test",
                firstName: "alexanr",
                lastName: "Pushkin"
            })
        } catch (error) {
            expect(error.response.status).toBe(400)
        }
    });
})