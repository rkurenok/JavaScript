const consts = require('./../pageobjects/constants.js');
const expect = require('chai').expect;

let EC = protractor.ExpectedConditions;

async function waitForElementAndClick(element) {
    await browser.wait(EC.visibilityOf(element), consts.timeWaiting);
    await element.click();
}

async function waitForElementAndSendKeys(element, value) {
    await browser.wait(EC.visibilityOf(element), consts.timeWaiting);
    await element.sendKeys(value);
}

async function checkElementHasText(element, text) {
    await browser.wait(EC.visibilityOf(element), consts.timeWaiting);
    expect(await element.getText()).to.be.equal(text);
}

async function mouseLeftClick(element) {
    await browser.wait(EC.visibilityOf(element), consts.timeWaiting);
    await browser.actions().mouseMove(element).click(protractor.Button.LEFT).perform();
}

async function checkElementIsInvisible(element) {
    expect(await browser.wait(EC.invisibilityOf(element), consts.timeWaiting));
}

exports.waitForElementAndClick = waitForElementAndClick;
exports.waitForElementAndSendKeys = waitForElementAndSendKeys;
exports.checkElementHasText = checkElementHasText;
exports.mouseLeftClick = mouseLeftClick;
exports.checkElementIsInvisible = checkElementIsInvisible;