require('dotenv').config()

describe('My First Test', () => {
    it('Testing GregWilliams.com', () => {
        const randomString = Math.random().toString(36).substring(7);
        const randomString2 = Math.random().toString(36).substring(7);
        cy.visit('https://gregwilliams.com/007-x-gwp?'+ randomString + '=' + randomString2);
        cy.contains('007 x GWP 001')
        cy.contains('007 x GWP 025')
        cy.get('a[href="/product/007-x-gwp-1/"]').click()
        cy.get('input[name="woovr_6745_628395b1a1267"]').click({multiple: true})
        cy.get('button.single_add_to_cart_button').click()
        cy.get('.checkout-button').click()
        cy.get('input#billing_email').type('juliantestmail@yopmail.com')
        cy.get('#ContinueButton').click()

    })
})