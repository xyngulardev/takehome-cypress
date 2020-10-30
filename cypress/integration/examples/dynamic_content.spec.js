/// <reference types="cypress" />

context('Dynamic Content', () => {

  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/dynamic_content')
  })

  // https://on.cypress.io/interacting-with-elements

  // Write a test that fails if there are two or more images that are the same
  it('', () => {
    
  })

  //Write a test where you find the longest word in the lorem ipsum and will fail if there is a duplicate of that word anywhere on that page.
  it('', () => {

  })

  //Write a test that will fail if an image contains Wolverine and the lorem ipsum next to it contains the word “magni”
  it('', () => {

  })

  //Write a test that will refresh the page until it sees the Mario image 3 times. It fails if it did not see Mario 3 times in 5 refreshes.
  it('', () => {

  })

})
