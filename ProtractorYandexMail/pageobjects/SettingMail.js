const helpers = require('./../helpers/element.js');

class SettingMail {
    get settingFolderSpan() {
        return element(by.xpath('//div[contains(@class,"js-folders-item")]//descendant::span[5]'));
    }

    get deleteFolderButton() {
        return element(by.xpath('//div[@class="b-manager__buttons"]/child::button[5]'));
    }

    get mailLink() {
        return element(by.xpath('//div[@class="b-heading b-heading_reg b-heading_breadcrumbs"]/child::a[1]'));
    }

    async deleteFolder() {
        await helpers.mouseLeftClick(this.settingFolderSpan);
        await helpers.waitForElementAndClick(this.deleteFolderButton);
        await helpers.waitForElementAndClick(this.mailLink);
    }
}

module.exports = SettingMail;