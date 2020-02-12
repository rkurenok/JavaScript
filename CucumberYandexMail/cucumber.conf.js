const yargs = require('yargs').argv;

exports.config  = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    //getPageTimeout: 60000,
    //allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    capabilities: {
        'browserName': 'chrome',
        //shardTestFiles: yargs.instances = 3,
        //maxInstances: yargs.instances || 1
    },
    specs: [
        "./features/*.feature",
    ],
    //baseURL: 'http://localhost:8080/',
    cucumberOpts: {
        require: 'steps/*.js',
        // tags: false,
        // //format: 'pretty',
        // profile: false,
        // 'no-source': true
    },
    onPrepare: function() {
        browser.waitForAngularEnabled(false);
        //browser.manage().window().maximize();
    },
}