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
        return element(by.css('div.passp-form-field__error'));
    }

    get titlePage() {
        return element(by.xpath('//title'));
    }

    async entryLogin(text) {
        await helpers.waitForElementAndSendKeys(this.loginInput, text);
        await helpers.waitForElementAndClick(this.submitButton);
    }
    
    async entryPassword(text) {
        await helpers.waitForElementAndSendKeys(this.passwordInput, text);
        await helpers.waitForElementAndClick(this.submitButton);
    }

    async checkPasswordFieldErrorText(text) {
        return await helpers.checkElementHasText(this.passwordFieldErrorDiv, text)
    }

    async checkPageTitle(title) {
        return await helpers.checkElementHasText(this.titlePage, title)
    }
}

module.exports = Autorization;