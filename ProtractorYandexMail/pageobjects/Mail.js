const helpers = require('./../helpers/element.js');

class Mail {
    get writeMessageLink() {
        return element(by.xpath('//div[@class="mail-ComposeButton-Wrap js-compose-button-container"]/child::a'));
    }

    get createFolderSpan() {
        return element(by.css('span.mail-FolderList-Setup_link'));
    }

    get folderNameInput() {
        return element(by.xpath('//span[@class="b-form-element"]/child::input'));
    }

    get createFolderButton() {
        return element(by.xpath('//div[@class="b-popup__confirm"]/child::button[1]'));
    }

    get folderLink() {
        return folderName => element(by.xpath(`//a[@title="${folderName}"]`));
    }

    get settingMailLink() {
        return element(by.css('a.mail-FolderList-Setup_link'));
    }

    get headUserDiv() {
        return element(by.xpath('//div[contains(@class,"ns-view-head-user")]'));
    }

    get logOutLink() {
        return element(by.xpath('//div[@class="b-user-dropdown-content b-user-dropdown-content-with-exit"]//descendant::a[6]'));
    }

    async getNewMessagePage() {
        await helpers.waitForElementAndClick(this.writeMessageLink);
    }

    async createFolder(name) {
        await helpers.waitForElementAndClick(this.createFolderSpan);
        await helpers.waitForElementAndSendKeys(this.folderNameInput, name);
        await helpers.waitForElementAndClick(this.createFolderButton);
    }

    async checkFolderNameText(folderName, text) {
        return await helpers.checkElementHasText(this.folderLink(folderName), text);
    }

    async getSettingMailPage() {
        await helpers.waitForElementAndClick(this.settingMailLink);
    }

    async checkInvisibilityFolder(folderName) {
        return await helpers.checkElementIsInvisible(this.folderLink(folderName));
    }

    async logOut() {
        await helpers.waitForElementAndClick(this.headUserDiv);
        await helpers.waitForElementAndClick(this.logOutLink);
    }
}

module.exports = Mail;