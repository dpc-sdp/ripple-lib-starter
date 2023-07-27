Feature: Demo test

  Example test - update as required or delete.

  Background:
    Given the endpoint "/api/tide/page" with query "?path=/test-content-type&site=8888" returns fixture "/demo/demo" with status 200
    And the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/reference" with status 200
    When I visit the page "/test-content-type"

  @mockserver
  Scenario: On load
    Then the title should be "Demo page"
