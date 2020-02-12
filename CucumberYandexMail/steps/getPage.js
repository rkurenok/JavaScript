const {Given, When, Then, setDefaultTimeout} = require('cucumber');

//setDefaultTimeout(60 * 1000);

// Given(/^loaded (.+?) page$/, async (page) => {
//     if (page === 'login') {
//         await browser.driver.get("https://passport.yandex.by/auth/add");
//     }
//     else if (page === 'mail') {
//         await browser.driver.get("https://mail.yandex.by/");
//     }
// });

Given(/^loaded "(.+?)" page$/, async (page) => {
    await browser.get(page);
});