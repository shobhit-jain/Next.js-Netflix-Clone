/// <reference types="cypress"/>
/* eslint-disable no-undef */
/* -------------------------- testing landing page -------------------------- */

context('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should find our landing page and message', () => {
    cy.get('[data-cy=heading-main]').contains(
      'Unlimited movies, TV shows and more.'
    )
  })
})

/* -------------------------------------------------------------------------- */
