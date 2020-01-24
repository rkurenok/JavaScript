const consts = require('./../pageobjects/constants.js');

let EC = protractor.ExpectedConditions;

async function waitForElementAndClick(element) {
    await browser.wait(EC.visibilityOf(element), consts.timeWaiting);
    await element.click();
}

async function waitForElementAndSendKeys(element, value) {
    await browser.wait(EC.visibilityOf(element), consts.timeWaiting);
    await element.sendKeys(value);
}

// async function getTextElement(element) {
//     browser.wait(EC.visibilityOf(element), consts.timeWaiting);
//     return await element.getText();
// }

async function checkElementHasText(element, text) {
    await browser.wait(EC.visibilityOf(element), consts.timeWaiting);
    await expect(element.getText()).toEqual(text);
}

async function mouseLeftClick(element) {
    await browser.wait(EC.visibilityOf(element), consts.timeWaiting);
    await browser.actions().mouseMove(element).click(protractor.Button.LEFT).perform();
}

async function checkElementIsInvisible(element) {
    await expect(browser.wait(EC.invisibilityOf(element), consts.timeWaiting));
}

exports.waitForElementAndClick = waitForElementAndClick;
exports.waitForElementAndSendKeys = waitForElementAndSendKeys;
exports.checkElementHasText = checkElementHasText;
exports.mouseLeftClick = mouseLeftClick;
exports.checkElementIsInvisible = checkElementIsInvisible;