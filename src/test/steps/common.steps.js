const {
    Given,
    When,
    Before,
    After,
    setDefaultTimeout
} = require('@cucumber/cucumber');

const { chromium } = require('playwright');

setDefaultTimeout(30000);

global.browser = null;
global.page = null;

Before(async () => {

    global.browser = await chromium.launch({
        headless: false,
        slowMo: 500
    });

    const context = await global.browser.newContext();

    global.page = await context.newPage();
});

After(async () => {

    await global.browser.close();
});

Given('el usuario abre PetClinic', async () => {

    await global.page.goto('http://localhost:4200/petclinic/');
});

When('navega al módulo Owners', async () => {

    await global.page.waitForTimeout(2000);

    await global.page.click('a.dropdown-toggle');

    await global.page.waitForTimeout(1000);
});