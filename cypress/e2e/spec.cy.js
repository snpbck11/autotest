describe('My First Test', () => {
  beforeEach(() => {
    cy.intercept({ method: 'GET', url: '**/*' }, { log: false })
    cy.intercept({ method: 'POST', url: '**/*' }, { log: false })
  });

  it('Test Autotest', () => {
    cy.visit('https://www.etagi.com/realty_rent');

    cy.get('.filter-toggle').eq(0).click();

    cy.contains('button', 'Квартиры').click();

    cy.get('.BU4Zh').eq(3).click();

    cy.get('.qH11p').eq(0).type('10000');

    cy.get('.qH11p').eq(1).type('30000');

    cy.get('.klryT').click();

    cy.contains('button', 'Длительный срок').click();
   
    cy.get('.FV26R').eq(2).click();

  });
});