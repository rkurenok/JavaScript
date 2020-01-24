const helpers = require('./../helpers/element.js');

class NewMessage {
    get whomMessageDiv() {
        return element(by.xpath('//div[@class="mail-Compose-Field-Input"]/child::div'));
    }

    get messageSubjectInput() {
        return element.all(by.xpath('//input[@type="text"]'));
    }

    get textMessageDiv() {
        return element(by.xpath('//div[@role="textbox"]'));
    }

    get sendMessageButton() {
        return element(by.xpath('//button[contains(@class,"_nb-action-button")]'));
    }

    get doneSendMessageDiv() {
        return element(by.css('div.mail-Done-Title'));
    }

    async sendMessage(name, textSubject, textMessage) {
        await helpers.waitForElementAndSendKeys(this.whomMessageDiv, name);
        await helpers.waitForElementAndSendKeys(this.messageSubjectInput.last(), textSubject);
        await helpers.waitForElementAndSendKeys(this.textMessageDiv, textMessage);
        await helpers.waitForElementAndClick(this.sendMessageButton);
    }

    async checkDoneSendMessageText(text) {
        return await helpers.checkElementHasText(this.doneSendMessageDiv, text);
    }
}

module.exports = NewMessage;