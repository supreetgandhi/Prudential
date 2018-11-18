//var BasePage = require('./BasePage')
import BasePage from './BasePage'

class HomePage extends BasePage{

    get banner() { return browser.element('//a[@class="navbar-brand"]//img[@alt="openweathermap"]'); }
     get searchbox() {return browser.element('//input[@placeholder="Your city name"]'); }
     get searchbutton() { return browser.element('//btn[@class="btn btn-orange"]'); }
     get signIn() { return browser.element('//a[@class="pull-right"]//a[text(), "Sign In"]'); }


    openBrowser(){
       super.openBrowser.call('https://openweathermap.org');
       waitForLoad(3000);
     }

    isPageLoaded(){
     return this.searchbox.isVisible();
     waitForLoad(3000);
    }

    isSearchButtonEnabled(){
         return this.searchbutton.isEnabled();
        }

    isSignInLinkVisible(){
             return this.signIn.isVisible();
            }

    waitForLoad(timeinmilliseconds){
                    browser.timeoutsImplicitWait(timeinmilliseconds);
    }
}

export default new HomePage();