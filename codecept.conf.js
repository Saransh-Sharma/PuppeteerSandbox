exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://rms-admin.shuttlstage.com',
      show: true,
      waitForNavigation: 'networkidle0'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_Sandbox'
}