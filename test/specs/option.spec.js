const option = require('../pageobjects/option.page');

describe('selected', () => {
    
    it('second exists', async () => {
        await option.open();
        await expect(option.option).toBeExisting();
       // await option.ASelected()
        //await option.BSelected()
        
       
    });
    
    it('second selected', async () => {
        await option.open();
        
       await option.ASelected()
       
        
       
    });
    it('third selected', async () => {
        await option.open();
        
       
       await option.BSelected()
        
       
    });
    /**it('third selected', async () => {
        await option.open();
       
       await option.BSelected()
       
        
       
    });**/
});