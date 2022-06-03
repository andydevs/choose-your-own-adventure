/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import moreOption from '../fixtures/more-option.json'
import ending from '../fixtures/ending.json'
import scenario from '../fixtures/scenario.json'

describe('App Tests', () => {
    beforeEach(() => {
        // Visit site before each
        cy.visit('/')
    })

    specify('Starting window', () => {
        // There should be text
        cy.get('#cyoa-text').should('not.be.empty')

        // There is only options in controls
        cy.get('#cyoa-controls > *').should('have.length', 1)
        cy.get('#cyoa-controls > .options').should('exist')
        cy.get('#cyoa-controls > .ending').should('not.exist')

        // Options should only contain options
        cy.get('.options *').should('have.class', 'option')
    })

    specify('Click an option with more options', () => {
        // Click an option
        cy.contains('.option', moreOption.text).click()

        // There should be text
        cy.get('#cyoa-text').should('not.be.empty')

        // There is only options in controls
        cy.get('#cyoa-controls > *').should('have.length', 1)
        cy.get('#cyoa-controls > .options').should('exist')
        cy.get('#cyoa-controls > .ending').should('not.exist')

        // Options should only contain options
        cy.get('.options *').should('have.class', 'option')
    })

    specify('Click an option with an ending', () => {
        // Click an option with ending
        cy.contains('.option', ending.text).click()

        // There should be text
        cy.get('#cyoa-text').should('not.be.empty')

        // There is only ending in controls
        cy.get('#cyoa-controls > *').should('have.length', 1)
        cy.get('#cyoa-controls > .options').should('not.exist')
        cy.get('#cyoa-controls > .ending').should('exist')

        // Ending should contain ending text
        cy.get('.ending > .ending-text').should('exist')

        // Ending should contain an option
        cy.get('.ending')
            .contains('.option', 'Play Again')
            .should('exist')
    })

    specify('Run a scenario', () => {
        // Click a series of options
        for (const option of scenario.options) {
            cy.contains('.option', option).click()
        }

        // Check ending text
        cy.get('.ending > .ending-text')
            .should('contain', scenario.ending)

        // Click play again
        cy.get('.ending')
            .contains('.option', 'Play Again')
            .click()
    })
})