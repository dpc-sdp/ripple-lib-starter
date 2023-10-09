Feature: Example content type

  This is an example of a custom content type

  Background:
    Given the page endpoint for path "/" returns fixture "/content-type/example" with status 200
    And the site endpoint returns fixture "/site/reference" with status 200

  @mockserver
  Scenario: Example - Content type loads
    Given I visit the page "/"
    Then the title should be "Example content type"
