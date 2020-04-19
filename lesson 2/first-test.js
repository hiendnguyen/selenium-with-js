// Load dependecies
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');

// Our test
describe('Test', function () {
    it('Title should be "Google"', async function () {
        // Set timeout to 10 seconds
        this.timeout(10000);

        // // Get driver
        // // var driver = new webdriver.Builder().
        // // withCapabilities(webdriver.Capabilities.firefox()).
        // // build();
        // // var driver = new webdriver.Builder().
        // // withCapabilities(webdriver.Capabilities.edge()).
        // // build();
        // // var driver = new webdriver.Builder().
        // // withCapabilities(webdriver.Capabilities.ie()).
        // // build();
        // // *************
        // var driver = new webdriver.Builder().
        //     withCapabilities(webdriver.Capabilities.chrome()).build();
        var driver = new webdriver.Builder().forBrowser('chrome').build();

        // Go to URL
        await driver.get('https://www.google.com');

        // Find title and assert
        await driver.executeScript('return document.title').then(
            function(return_value) {
                assert.equal(return_value, 'Google')
            }
        );

        // Quit webdriver
        driver.quit();
    });
});
