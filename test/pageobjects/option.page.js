const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class optionPage extends Page {
    /**
     * define selectors using getter methods
     */
     get option() {
        return $('select'); //uses Element with certain text selector
   }
     get optionA() {
        return $('select option:nth-child(2)'); //uses Element with certain text selector
   }
   get optionB() {
    return $('select option:nth-child(3)'); //uses Element with certain text selector
}
   
async ASelected (){
    

    await this.open();
    await this.option.selectByIndex(1);

        await expect(this.option).toHaveValueContaining('1')
        

    

    
}

async BSelected (){
    await this.open();
    await this.option.selectByIndex(2);

    await expect(this.option).toHaveValueContaining('2')
    
}
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dropdown');
    }
}

module.exports = new optionPage();