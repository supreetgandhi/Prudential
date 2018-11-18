Feature: WeatherMap_01VerifyLandingPage

  Scenario: WeatherMap_TC_1.1_Verify login with valid credentials (TC_1.1)
    Given I navigate to the weather map application
    And I wait till the page loads
    Then I verify the user is navigated to the correct homepage

  Scenario: WeatherMap_TC_1.2_Verify invalid city search shows no result (TC_1.2)
    Given I navigate to the weather map application
    And I wait till the page loads
    When I enter an invalid city name
    And I search the weather
    Then Error message displays

  Scenario: WeatherMap_TC_1.3_Retrieve Weather Details for a city (TC_1.3)
    Given I navigate to the weather map application
    And I wait till the page loads
    When I enter an valid city name
    And I search the weather
    Then weather is displayed the city