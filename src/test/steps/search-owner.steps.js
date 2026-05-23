const { When, Then } = require('@cucumber/cucumber');

const assert = require('assert');

When('selecciona Search', async () => {

    await global.page.click('text=Search');

    await global.page.waitForURL('**/owners');
});

When('escribe el apellido del propietario', async () => {

    await global.page.fill('#lastName', 'Franklin');
});

When('presiona Find Owner', async () => {

    await global.page.click('button[type="submit"]');
});

Then('el sistema muestra los resultados de búsqueda', async () => {

    await global.page.waitForTimeout(3000);

    const contenido = await global.page.textContent('body');

    assert(contenido.length > 0);

    await global.page.screenshot({
        path: 'reports/search-owner.png',
        fullPage: true
    });
});