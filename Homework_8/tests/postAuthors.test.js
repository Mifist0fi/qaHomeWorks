const { default: axios } = require("axios")
const validator = require("jsonschema")
const authorsSchema = require("../schemas/post-authors-v1.json")



describe('Api test', () => {

    test('POST should be able to list of authors with status code 200', async () => {
        const response = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Authors", {
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

    test('POST should be able to list of authors with json schema', async () => {
        const response = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Authors", {
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
            await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Authors", {
                id:0,
                idBook:"D",
                firstName:"lufy",
                lastName:"Monkey"
            })
        } catch (error) {
            expect(error.response).toBeDefined()
            expect(error.response.status).toBe(400)
        }
      });
})

