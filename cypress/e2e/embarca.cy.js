// cypress/integration/embarca_staging_test.js

import faker from "faker-br"

describe('Embarca.ai - Fluxo de Compra de Passagem', () => {
  it('Realizar o login, buscar passagem, selecionar viagem e assento, e preencher os dados do passageiro', () => {
    // Acessa o ambiente de staging
    cy.viewport(1024, 768)
    cy.visit('https://www.embarca-staging.com.br/sessions/new')
    cy.window().its('document.readyState').should('eq', 'complete')

    // Login
    cy.wait(1800);
    cy.get('.col-lg-5').contains('Entrar').click()
    cy.get('#email').type('testeqa@embarca.ai')
    cy.get('#pass_log_id').type('Arca123')
    cy.get('.eye-slash').click()
    cy.get('#email').should('have.value', 'testeqa@embarca.ai')
    cy.get('#pass_log_id').should('have.value', 'Arca123')
    cy.get('form').submit()
    cy.wait(1800)
    cy.get('.col-lg-3 > .card').contains('Meu Perfil') // Válida que o acesso ao Login foi efetuado.

    // Verifica se está na home do website
    cy.visit('https://www.embarca-staging.com.br/')
    cy.url().should('include', '/')

    // Busca pela rota Curitiba - PR / Ponta Grossa - PR com data 15 dias após o teste
    const data = new Date()
    data.setDate(data.getDate() + 15)
    const dataBusca = data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })

    cy.get('#origin_text').type('C')
    cy.get('[data-id="1"]').click()
    cy.get('#destination_text').type('PONTA')
    cy.get('[data-id="0"]').click()
    cy.get('#origin_text').should('have.value', 'CURITIBA - PR')
    cy.get('#destination_text').should('have.value', 'PONTA GROSSA - PR')
    cy.get('#departure').invoke('val', dataBusca)
    cy.get('#search-trips-btn').click()
    cy.wait(800)

    // Seleciona o primeiro resultado e clica em "Reservar poltrona"
    cy.get('#routes-found').first().within(() => {
      cy.contains('Reservar poltrona').click({ force: true })
    })
    cy.wait(5000)

    // Seleciona uma poltrona aleatória
    cy.get('.bus-container .seats .seat')
      .should('be.visible')
      .then(seats => {
        const randomSeat = seats.eq(Math.floor(Math.random() * 10)) // Seleciona um assento de 1 a 10
        randomSeat.click()
      });

    // Avança para a próxima etapa
    cy.wait(800)
    cy.get('.card-wrapper').contains('Avançar').click()
    

    // Preenche os dados do passageiro com informações aleatórias
    cy.wait(500)
    cy.get('#order_reservations_attributes_0_seats_attributes_0_name').type(faker.name.firstName())
    cy.get('#order_reservations_attributes_0_seats_attributes_0_birthdate').type(faker.date.past(30, new Date('2000-01-01')).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }))
    cy.get('#order_reservations_attributes_0_seats_attributes_0_rg').type(faker.br.rg())
    cy.screenshot('cypress/screenshot.jpg')
  })
})