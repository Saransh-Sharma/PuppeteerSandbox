
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
    //Open RMS login page
    I.amOnPage(url);
    I.see('Sign In with Google');
    I.click('Sign In with Google');
    
    //enter username, submit page
    I.fillField(
     '#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > span > div.cDSmF > div > div.aCsJod.oJeWuf > div > div.Xb9hP > div',
     'saransh.sharma@shuttl.com');
    I.click('#identifierNext > content > span');
    I.wait(3);

    //enter passwaord, submit page
    I.fillField(
      '#password > div.aCsJod.oJeWuf > div > div.Xb9hP > div',
      // 'PASSWORD_HERE'
      'gZ*IR$dwsH*G'
    );
    I.click('#passwordNext > content > span');
    I.wait(3);
  });
