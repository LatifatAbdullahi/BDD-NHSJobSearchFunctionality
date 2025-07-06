let resultspage
let searchpage



beforeEach(()=>{

    cy.fixture('elements').then(sel=>{
        searchpage = sel.elements.searchpage
        resultspage = sel.elements.resultspage
    })
})




Cypress.Commands.add('typeInAnyValue', (element, text)=>{

    cy.get(element).type(text)

})

Cypress.Commands.add('clickButtonText', (text )=>{
    cy.get(searchpage.button).contains(text).click()
})

Cypress.Commands.add('getJobMatches', (text)=>{
    cy.get(resultspage.jobCard).each(()=>{
       cy.get(resultspage.jobTitle).should('contain', text) 
    })
})

Cypress.Commands.add('sortOptions', (text)=>{
 cy.get(resultspage.sortBy).select(text)
 cy.log(" Search test passed")
})

Cypress.Commands.add('clickAnyLinkWithText', (text)=>{
cy.get('a').contains(text).click()
})



Cypress.Commands.add('verifySortedByRecentDate', (selector) => {
  cy.get(selector).then(($dateEls) => {
    const dateTexts = [...$dateEls].map(el => el.innerText.trim());

    // Convert strings to Date objects
    const dates = dateTexts.map(dateStr => {
      const parsedDate = new Date(dateStr);
      if (isNaN(parsedDate)) {
        throw new Error(`Invalid date format: ${dateStr}`);
      }
      return parsedDate;
    });

    // Check if all dates are weekdays (Mon–Fri)
    const allWeekdays = dates.every(date => {
      const day = date.getDay();
      return day !== 0 && day !== 6; // Not Sunday (0) or Saturday (6)
    });

    expect(allWeekdays, 'All dates should be weekdays (Mon–Fri)').to.be.true;

    // Check if dates are sorted in descending order
    const isSortedDescending = dates.every((date, index) => {
      return index === 0 || date <= dates[index - 1];
    });

    expect(isSortedDescending, 'Dates should be sorted by most recent first').to.be.true;
  })
});
