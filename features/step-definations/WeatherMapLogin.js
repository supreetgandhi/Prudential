import defineSupportCode from 'cucumber';
import HomePage from '../Pages/HomePage';

const { Given, When, Then } = require('cucumber')
var expect = require('chai').expect


defineSupportCode (function({Given}){
Given(/^I navigate to the weather map application$/, function() {
  //  browser.url("https://openweathermap.org");
    HomePage.openweathermap();
});

Given(/^I wait till the page loads$/, function() {
   // browser.timeouts(5000);
   homepage.isPageLoaded();
});
});
Then(/^I verify the user is navigated to the correct homepage$/, function() {
    expect(browser.getTitle()).to.equal('Сurrent weather and forecast - OpenWeatherMap');
    isSearchButtonEnabled();
    console.log("Expected title visible is :" + browser.getTitle());
     //browser.timeouts(5000);
});

When(/^I enter an invalid city name$/, function() {
    browser.setValue('input.form-control:nth-child(2)','asdby');
     browser.timeouts(2000);
});

Then(/^Error message displays$/, function() {

    console.log("Expected error message is :" + browser.getText('div.alert:nth-child(1)'));
    expect(browser.getText('div.alert:nth-child(1)')).to.equal(' Not found');
     browser.timeouts(5000);
});

When(/^I enter an valid city name$/, function() {

    browser.setValue('input.form-control:nth-child(2)','Mumbai');
    browser.timeouts(2000);
    browser.click('button.btn:nth-child(2)');
    browser.timeouts(5000);
});

When(/^I search the weather$/, function() {
    var cityname = browser.getText('.table > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)');
    console.log("City Name is :" + cityname);
    expect(cityname).to.getText().to.equal("Mumbai");
     browser.timeouts(5000);
});

Then(/^weather is displayed the city$/, function() {

    var temp = browser.getText('.badge');
    console.log("temperature is :" + temp);
});