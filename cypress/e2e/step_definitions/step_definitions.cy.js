
import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

let resultspage;
let jobCardDate

Given(/^I am a jobseeker on NHS Jobs website$/, () => {
	cy.visit('/')
});



When(/^I type my references "([^"]*)" into  "([^"]*)"$/, (text, element) => {
    cy.get(element).type (text)
});


When(/^I click on the "([^"]*)" button$/, (text) => {
	cy.clickButtonText(text)
});


Then(/^I should get a list of jobs which matches my preferences "([^"]*)"$/, (Text) => {
	cy.getJobMatches(Text)
});





Then(/^sort my search results with the "([^"]*)"$/, (text) => {
		cy.sortOptions(text)
});


When(/^I click on the "([^"]*)"$/, (text) => {
        cy.clickAnyLinkWithText(text)
});


Then(/^All fields should be empty$/, () => {
	cy.get("#keyword").should('be.empty')
    cy.get('#location').should('be.empty')
    cy.clickAnyLinkWithText('More search options')
    cy.get('#jobReference').should('be.empty')
    cy.get('#employer').should('be.empty')
    cy.get('#payRange').contains('Please select')
    cy.log('All fields are empty')
});


Then(/^User sees all available jobs$/, () => {
	cy.get('#search-results-heading').contains(' jobs found')
    cy.log('Jobs available')
});


  
Then(/^the result displayed are sorted correctly by Date Posted$/, () => {
	cy.verifySortedByRecentDate('ul > li:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul > li:nth-child(2) > strong');
});

