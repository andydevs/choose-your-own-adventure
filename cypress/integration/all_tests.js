/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
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
        cy.contains('.option', 'Remain Quiet').click()

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
        cy.contains('.option', 'Shout "It was me!"').click()

        // There should be text
        cy.get('#cyoa-text').should('not.be.empty')

        // There is only ending in controls
        cy.get('#cyoa-controls > *').should('have.length', 1)
        cy.get('#cyoa-controls > .options').should('not.exist')
        cy.get('#cyoa-controls > .ending').should('exist')

        // Ending should contain ending text
        cy.get('.ending > .ending-text')
            .should('contain', 'Honesty\'s the Best Policy')

        // Ending should contain an option
        cy.get('.ending')
            .contains('.option', 'Play Again')
            .should('exist')
    })

    specify('Run a scenario', () => {
        // Click a series of options
        cy.contains('.option', 'Remain Quiet').click()
        cy.contains('.option', 'Apologize').click()
        cy.contains('.option', 'Leave her Alone').click()
        cy.contains('.option', 'Go to the Office').click()
        cy.contains('.option', 'Joke about Being Promoted').click()

        // Check ending text
        cy.get('.ending > .ending-text')
            .should('contain', 'Dat Middle Manager Life')

        // Click play again
        cy.get('.ending')
            .contains('.option', 'Play Again')
            .click()
    })
})