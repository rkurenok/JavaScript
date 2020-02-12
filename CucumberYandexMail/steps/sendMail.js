const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const consts = require('./../pageobjects/constants.js');

let mailObject = require('./../pageobjects/Mail.js');
let mail = new mailObject();

let newMessageObject = require('./../pageobjects/NewMessage.js');
let newMessage = new newMessageObject();

//setDefaultTimeout(60 * 1000);

// Given(/^loaded login page$/, async function () {
//     await browser.driver.get("https://passport.yandex.by/auth/add");
// });

When(/^click on a link with class "mail-ComposeButton-Wrap js-compose-button-container"$/, async () => {
    await mail.getNewMessagePage();
});

When(/^write a message and click on a button with class "_nb-action-button"$/, async () => {
    await newMessage.sendMessage(consts.mailAddres, consts.messageSubject, consts.textMessage);
});

When(/^write a message$/, async (table) => {
    params = table.raw()
    .map(row => row[0]);
    await newMessage.sendMessage(...params);
});

Then(/^check that div has text about done send message$/, async () => {
    await newMessage.checkDoneSendMessageText(consts.doneSendMessage);
});