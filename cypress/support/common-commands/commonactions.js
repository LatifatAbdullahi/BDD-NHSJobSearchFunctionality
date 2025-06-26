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