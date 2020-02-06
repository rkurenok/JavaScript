const consts = require('./../pageobjects/constants.js');

let authorizationObject = require('./../pageobjects/Authorization.js');
let authorization = new authorizationObject();

let yandexPassportObject = require('./../pageobjects/YandexPassport.js');
let yandexPassport = new yandexPassportObject(); 

let mailObject = require('./../pageobjects/Mail.js');
let mail = new mailObject();

let newMessageObject = require('./../pageobjects/NewMessage.js');
let newMessage = new newMessageObject();

let settingMailObject = require('./../pageobjects/SettingMail.js');
let settingMail = new settingMailObject();

let yandexByObject = require('./../pageobjects/YandexBy.js');
let yandexBy = new yandexByObject();

describe('Protractor Tests Yandex Mail', function() {

    beforeAll(function() {
        browser.get('https://passport.yandex.by/auth/add');
    });

    it('valid login', function() {
        authorization.entryLogin(consts.login);
        authorization.entryPassword(consts.password);
        yandexPassport.checkUserAccountText(consts.login);
    });

    it('send mail', function() {
        yandexPassport.getMailPage();
        mail.getNewMessagePage();
        newMessage.sendMessage(consts.mailAddres, consts.messageSubject, consts.textMessage);
        newMessage.checkDoneSendMessageText(consts.doneSendMessage);
    });

    it('create folder', function() {
        mail.createFolder(consts.folderName);
        mail.checkFolderNameText(consts.folderName, consts.folderName);
    });

    it('delete folder', function() {        
        mail.getSettingMailPage();
        settingMail.deleteFolder();
        mail.checkInvisibilityFolder(consts.folderName);
    });

    it('logout account', function() {
        mail.logOut();
        yandexBy.checkEnteredMailButtonText(consts.signIn);
    });

    it('invalid login', function() {
        yandexBy.enteredMail();
        authorization.entryPassword(consts.login);
        authorization.checkPasswordFieldErrorText(consts.invalidPassword);
    });
});