module.exports = function(config) {

  // Browsers to run on Sauce Labs

  var PROJECT_NAME = "YOUR_PROJECT_NAME";
  var TUNNEL_IDENTIFIER = "YOUR_TUNNEL_IDENTIFIER";
  var HOSTNAME = "YOUR_HOSTNAME";
  var SAUCE_RDC_USERNAME = "USERNAME";
  var SAUCE_RDC_USER_API_KEY = "ACCESS_KEY"

  var customLaunchers = {
    'RDC_iOS': {
      base: 'SauceLabs',
      browserName: 'safari',
      platformName: 'iOS',
      projectName: PROJECT_NAME,
      //TODO: Doesn't work. Need to find a way to change tunnel-identifier to tunnelIdentifier 
      // from the custom setting karma already has
      tunnelIdentifier: TUNNEL_IDENTIFIER
    },
    'RDC_iOS': {
      base: 'SauceLabs',
      browserName: 'chrome',
      platformName: 'Android',
      projectName: PROJECT_NAME,
      //TODO: Doesn't work. Need to find a way to change tunnel-identifier to tunnelIdentifier 
      // from the custom setting karma already has
      tunnelIdentifier: TUNNEL_IDENTIFIER
    },
  };

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    hostname: HOSTNAME,
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'test/*.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    sauceLabs: {
      username: SAUCE_RDC_USERNAME,
      accessKey: SAUCE_RDC_USER_API_KEY,
      testName: 'Karma and Sauce Labs demo',
      connectLocationForSERelay: "us1.appium.testobject.com",
      connectPortForSERelay: 80,
      tunnelIdentifier: TUNNEL_IDENTIFIER,
      connectOptions: {
        restUrl: 'https://us1.api.testobject.com/sc/rest/v1',
        verboseDebugging: true,
        verbose: true,
        noSslBumpDomains: "all"
      }
    },
    captureTimeout: 120000,
    customLaunchers: customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};
