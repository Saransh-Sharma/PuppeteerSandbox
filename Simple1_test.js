
Feature('Do Simple Stuff');
let url = "https://rms-admin.shuttlstage.com"

Scenario('Is RMS online?!', (I) => {
    I.amOnPage(url);
    I.see('Shuttl');
    I.see('Route');
    I.see('Management');
    I.see('System');
  });

  Scenario('Is login button visible?', (I) => {
    I.amOnPage(url);
    I.see('Sign In with Google');
  });
