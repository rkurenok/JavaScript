const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const consts = require('./../pageobjects/constants.js');

let authorizationObject = require('./../pageobjects/Authorization.js');
let authorization = new authorizationObject();

let yandexPassportObject = require('./../pageobjects/YandexPassport.js');
let yandexPassport = new yandexPassportObject();

//setDefaultTimeout(60 * 1000);

// Given(/^loaded login page$/, async function () {
//     await browser.driver.get("https://passport.yandex.by/auth/add");
// });

When(/^login is entered into input with type "text"$/, async function () {
    await authorization.entryLogin(consts.login);
});

When(/^password is entered into input with name "passwd"$/, async function () {
    await authorization.entryPassword(consts.password);
});

Then(/^the span with class name "user-account" is visible$/, async function () {
    await yandexPassport.checkUserAccountText(consts.login);
});