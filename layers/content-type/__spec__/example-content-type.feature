Feature: Example content type

  This is an example of a custom content type

  Background:
    Given the site endpoint returns fixture "/site/reference" with status 200
    Given the page endpoint for path "/page" returns fixture "/content-type/example" with status 200
    And I am using a "macbook-16" device

  @mockserver
  Scenario: Example - Content type loads
    Given I visit the page "/page"
    Then the title should be "Example content type header"
