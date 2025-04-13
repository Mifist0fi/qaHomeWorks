const Calculator = require('./calculator');


describe('test Classes',()=>{
    let res;
    beforeEach(() => {
        res = new Calculator(0)
    })

    test('test of add calculator should receive 31', async () => {
        
        const result = res.add(10,5,3,6,7);
        expect(result).toEqual(31)
    })
    test('test of add calculator should receive 31', async () => {
        
        const result = res.add(10,5,6,7);
        expect(result).toEqual(31)
    })


    test('test of multiply calculator should receive 6300', async () => {
        
        const result = res.multiply(10,5,3,6,7);
        expect(result).toEqual(6300)
    })
    test('test of multiply calculator should receive 6300', async () => {
        
        const result = res.multiply(10,5,6,7);
        expect(result).toEqual(6300)
    })


    test('test of subtraction calculator should receive 5', async () => {
        
        const result = res.subtraction(10,5);
        expect(result).toEqual(5)
    })
    test('test of subtraction calculator should receive 5', async () => {
        
        const result = res.subtraction(5,5);
        expect(result).toEqual(5)
    })


    test('test of divide calculator should receive 5', async () => {
        
        const result = res.divide(25,5);
        expect(result).toEqual(5)
    })
    test('test of divide calculator should receive 5', async () => {
        
        const result = res.divide(10,5);
        expect(result).toEqual(5)
    })


    test('test of exponentiation calculator should receive 25', async () => {
        
        const result = res.exponentiation(5);
        expect(result).toEqual(25)
    })
    test('test of exponentiation calculator should receive 25', async () => {
        
        const result = res.exponentiation(10);
        expect(result).toEqual(25)
    })
    
});


