const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const consts = require('./../pageobjects/constants.js');

let mailObject = require('./../pageobjects/Mail.js');
let mail = new mailObject();

let yandexByObject = require('./../pageobjects/YandexBy.js');
let yandexBy = new yandexByObject();

//setDefaultTimeout(60 * 1000);

// Given(/^loaded mail page$/, async () => {
//     await browser.driver.get("https://mail.yandex.by/");
// });

When(/^clicking on a head div with class "ns-view-head-user" and clicking on a head link with class "b-user-dropdown-content b-user-dropdown-content-with-exit"$/, async () => {
    await mail.logOut();
});

Then(/^check that the link entered mail is visible$/, async () => {
    yandexBy.checkEnteredMailButtonText(consts.signIn);
});