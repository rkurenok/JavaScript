const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const consts = require('./../pageobjects/constants.js');

let mailObject = require('./../pageobjects/Mail.js');
let mail = new mailObject();

//setDefaultTimeout(60 * 1000);

When(/^click on a span with class "mail-FolderList-Setup_link" and write folder name and click on a create folder button$/, async () => {
    await mail.createFolder(consts.folderName);
});

Then(/^check that link has text equal folder name$/, async () => {
    await mail.checkFolderNameText(consts.folderName, consts.folderName);
});