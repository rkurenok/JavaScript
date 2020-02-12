const helpers = require('./../helpers/element.js');

class YandexPassport {
    get userAccountSpan() {
        return element(by.xpath('//span[contains(@class, "name user-account")]'));
    }

    get elementMailLink() {
        return element(by.xpath('//a[contains(@class, "mail")]'));
    }

    async checkUserAccountText(text) {
        return await helpers.checkElementHasText(this.userAccountSpan, text);
    }

    async getMailPage() {
        await helpers.waitForElementAndClick(this.userAccountSpan);
        await helpers.waitForElementAndClick(this.elementMailLink);
    }
}

module.exports = YandexPassport;