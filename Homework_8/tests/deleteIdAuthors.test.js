const { default: axios } = require("axios")



describe('Api test', () => {

    test('DELETE should be able to list of id authors', async () => {
        const response = await axios.delete("https://fakerestapi.azurewebsites.net/api/v1/Authors/1",{
            id:1
        })
        await expect(response.status).toEqual(200);
        await expect(response.data).toBeFalsy()
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