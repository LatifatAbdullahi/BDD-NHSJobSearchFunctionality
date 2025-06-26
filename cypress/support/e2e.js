
// Import commands.js using ES2015 syntax:
import './commands';
import './common-commands/commonactions'
            

beforeEach(()=>{
    cy.on('uncaught:exception', ()=>{
        return false
    })
    cy.visit('/');
})