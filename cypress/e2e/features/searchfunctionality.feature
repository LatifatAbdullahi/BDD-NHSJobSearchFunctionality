
Feature: Verifying the Search functionality on the NHS webiste


    Scenario: Users should be able to search for jobs successfully
        Given I am a jobseeker on NHS Jobs website
        When I type my references "Test" into  "#keyword"
        And  I type my references "London" into  "#location"
        When I click on the "Search" button
        Then I should get a list of jobs which matches my preferences "Test"
        And sort my search results with the "Date Posted (newest)"
        Then the result displayed are sorted correctly by Date Posted

    Scenario: Job search successfully using More search Options without Job reference and pay range
        Given I am a jobseeker on NHS Jobs website
        When I type my references "Test" into  "#keyword"
        And  I type my references "London" into  "#location"
        And I click on the "More search options"
        # And  I type my references "NHS" into  "#employer"
        When I click on the "Search" button
        Then I should get a list of jobs which matches my preferences "Test"
        And sort my search results with the "Date Posted (newest)"
        Then the result displayed are sorted correctly by Date Posted

    Scenario: Job search successfully using only the "what" field
        Given I am a jobseeker on NHS Jobs website
        When I type my references "Test" into  "#keyword"
        # And  I type my references "London" into  "#location"
        # And I click on the "More search options"
        # And  I type my references "NHS" into  "#employer"
        When I click on the "Search" button
        Then I should get a list of jobs which matches my preferences "Test"
        And sort my search results with the "Date Posted (newest)"
        Then the result displayed are sorted correctly by Date Posted

    Scenario: Users should be able to clear out filters
        Given I am a jobseeker on NHS Jobs website
        When I type my references "Test" into  "#keyword"
        And  I type my references "London" into  "#location"
        And I click on the "More search options"
        # And  I type my references "NHS" into  "#employer"
        When I click on the "Clear filters" button
        Then All fields should be empty

    Scenario: Users should be able to see all available jobs without typing in preferences
        Given I am a jobseeker on NHS Jobs website
        #When I type my references "Test" into  "#keyword"
        #And  I type my references "London" into  "#location"
        #And I click on the "More search options"
        # And  I type my references "NHS" into  "#employer"
        When I click on the "Search" button
        Then User sees all available jobs
        

    Scenario Outline: Sorting by all options
        Given I am a jobseeker on NHS Jobs website
        When I type my references "Test" into  "#keyword"
        And  I type my references "London" into  "#location"
        When I click on the "Search" button
        Then I should get a list of jobs which matches my preferences "Test"
        And sort my search results with the "<info-source>"


        Examples:
            | info-source              |
            | Closing Date             |
            | Best Match               |
            | Salary lowest to highest |
            | Salary highest to lowest |
