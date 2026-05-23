const { When, Then } = require('@cucumber/cucumber');

const assert = require('assert');

When('selecciona Add New', async () => {

    await global.page.click('text=Add New');

    await global.page.waitForURL('**/owners/add');
});

When('completa el formulario del propietario', async () => {

    await global.page.fill('#firstName', 'Carlos');

    await global.page.fill('#lastName', 'Playwright');

    await global.page.fill('#address', 'Calle Testing 123');

    await global.page.fill('#city', 'Lima');

    await global.page.fill('#telephone', '999888777');
});

When('guarda el propietario', async () => {

    await global.page.click('button[type="submit"]');
});

Then('el sistema muestra el propietario creado', async () => {

    await global.page.waitForLoadState('networkidle');

    const url = global.page.url();

    assert(url.includes('/owners'));

    await global.page.screenshot({
        path: 'reports/owner-creado.png',
        fullPage: true
    });
});