const helpers = require('./../helpers/element.js');

class YandexBy {
    get enteredMailLink() {
        return element(by.xpath('//div[contains(@class,"desk-notif-card_login")]//a[@role="button"]'));
    }

    async checkEnteredMailButtonText(text) {
        await helpers.checkElementHasText(this.enteredMailLink, text);
    }

    async enteredMail() {
        await helpers.waitForElementAndClick(this.enteredMailLink);
    }
}

module.exports = YandexBy;