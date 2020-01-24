const helpers = require('./../helpers/element.js');

class Autorization {
    get loginInput() {
        return element(by.xpath('//input[@type="text"]'));
    }

    get submitButton() {
        return element(by.xpath('//button[@type="submit"]'));
    }

    get passwordInput() {
        return element(by.xpath('//input[@name="passwd"]'));
    }

    get passwordFieldErrorDiv() {
        element(by.css('div.passp-form-field__error'));
    }

    async entryLogin(text) {
        await helpers.waitForElementAndSendKeys(this.loginInput, text);
        await helpers.waitForElementAndClick(this.submitButton);
    }
    
    async entryPassword(text) {
        await helpers.waitForElementAndSendKeys(this.passwordInput, text);
        await helpers.waitForElementAndClick(this.submitButton);
    }

    async checkPasswordFieldErrorText(invalidPassword ,text) {
        this.entryPassword(invalidPassword);
        return await helpers.checkElementHasText(this.passwordFieldErrorDiv, text)
    }
}

module.exports = Autorization;