const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const consts = require('./../pageobjects/constants.js');

let mailObject = require('./../pageobjects/Mail.js');
let mail = new mailObject();

let settingMailObject = require('./../pageobjects/SettingMail.js');
let settingMail = new settingMailObject();

//setDefaultTimeout(60 * 1000);

When(/^click on a setting mail link$/, async () => {
    await mail.getSettingMailPage();
});

When(/^click on a setting folder span and click on a delete folder button$/, async () => {
    await settingMail.deleteFolder();
});

Then(/^check that folder is delete$/, async () => {
    await mail.checkInvisibilityFolder(consts.folderName);
});