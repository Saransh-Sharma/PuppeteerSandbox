
Feature('Do Simple Stuff');
let url = "https://rms-admin.shuttlstage.com";
let userEmail = 'saransh.sharma@shuttl.com';
let userPassword = 'gZ*IR$dwsH*G';

Scenario('Is RMS online?!', (I) => {
    I.amOnPage(url);
    I.see('Shuttl');
    I.see('Route');
    I.see('Management');
    I.see('System');
    I.say('RMS web portal is online !')
  });


  Scenario('Sign into RMS', (I) => {
    //Open RMS login page
    I.amOnPage(url);
    I.see('Sign In with Google');
    I.click('Sign In with Google');
    I.say('Signing into RMS via gAuth');
    
    //enter username, submit page
    I.say('Signing in with email: ')
    I.fillField(
     '#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > span > div.cDSmF > div > div.aCsJod.oJeWuf > div > div.Xb9hP > div',
     userEmail);
    I.click('#identifierNext > span');
    I.wait(3);

    //enter passwaord, submit page
    I.fillField(
      '#password > div.aCsJod.oJeWuf > div > div.Xb9hP > div',
      // 'PASSWORD_HERE'
      userPassword
    );
    I.click('#passwordNext > span');
    I.wait(3);
  });
