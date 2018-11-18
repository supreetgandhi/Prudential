
//import homepage from '../Pages/HomePage';
const { Given, When, Then } = require('cucumber')

var assert = require('assert');
const homepage = '../Pages/HomePage';

Given(/^I navigate to the weather map application$/, function() {
    browser.url("https://openweathermap.org");
});
Given(/^I wait till the page loads$/, function() {
    browser.click("input.form-control:nth-child(2)");
});

Then(/^I verify the user is navigated to the correct homepage$/, function() {
    assert.assertEquals(browser.getTitle(), 'Сurrent weather and forecast - OpenWeatherMap');
  //  expect(browser.getTitle()).to.contain('Сurrent weather and forecast - OpenWeatherMap');
});

Then('the variable should contain {int}', function(number) {

});