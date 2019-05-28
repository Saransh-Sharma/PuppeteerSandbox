exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://rms-admin.shuttlstage.com',
      show: true,
      waitForNavigation: [ 'domcontentloaded', 'networkidle0' ],
      waitForAction: 1500,
      restart: true, //change this to false
      keepBrowserState: true,
      keepCookies: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_Sandbox'
}