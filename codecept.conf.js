exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://rms-admin.shuttlstage.com',
      browser: 'chrome',
      show: false,
      waitForNavigation: [ 'domcontentloaded', 'networkidle0' ],
      waitForAction: 1500,
      restart: true, //change this to false
      keepBrowserState: true,
      keepCookies: true,
      fullPageScreenshots: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    allure: {},
    retryFailedStep: {
      enabled: true
   },
   screenshotOnFail: {
    enabled: true
  }
},
  name: 'codeceptjs_Sandbox'
}