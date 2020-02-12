const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const consts = require('./../pageobjects/constants.js');

let authorizationObject = require('./../pageobjects/Authorization.js');
let authorization = new authorizationObject();

//setDefaultTimeout(60 * 1000);

// When(/^login is entered into input with type "text"$/, async function () {
//     await authorization.entryLogin(consts.login);
// });

When(/^login is entered into input with name "passwd"$/, async () => {
    await authorization.entryPassword(consts.login);
});

Then(/^check that the error field is visible$/, async () => {
    await authorization.checkPasswordFieldErrorText(consts.invalidPassword);
});