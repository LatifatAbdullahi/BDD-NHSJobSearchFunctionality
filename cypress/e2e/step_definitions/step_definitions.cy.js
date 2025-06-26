
import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';



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
