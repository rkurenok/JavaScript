exports.config  = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/**/*.js'],
    onPrepare: function() {
        browser.waitForAngularEnabled(false);
        //browser.manage().window().maximize();
    },
    // multiCapabilities: [{
    //     browserName: 'chrome'
    // }, {
    //     browserName: 'firefox'
    // }]
}