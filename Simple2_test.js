
Feature('_rough_workspace');

let url = "https://rms-admin.shuttlstage.com/dash/routes"

Scenario('other ', (I) => {
    I.amOnPage(url);
    I.see('Route');
  });

  Scenario('this test fails by design ', (I) => {
    I.amOnPage(url);
    I.see('dust');
  });