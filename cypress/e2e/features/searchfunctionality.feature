
Feature: Verifying the Search functionality on the NHS webiste

    Scenario: Users should be able to search for jobs successfully
        Given I am a jobseeker on NHS Jobs website
        When I type my references "Test" into  "#keyword"
        And  I type my references "London" into  "#location"
        When I click on the "Search" button
        Then I should get a list of jobs which matches my preferences "Test"
        And sort my search results with the "Date Posted (newest)"
