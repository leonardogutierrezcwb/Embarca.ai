# Embarca.ai - Teste de Qualidade de Software

Este repositório contém scripts automatizados para testar os fluxos de compra de passagens no site Embarca.ai utilizando Cypress, JavaScript e Faker para gerar dados dinâmicos.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/leonardogutierrezcwb/Embarca.ai.git
    cd Embarca.ai
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Estrutura do Projeto

- **cypress/**: Diretório principal do Cypress que contém as configurações e testes.
  - **e2e/**: Local onde os testes de ponta a ponta estão armazenados. O arquivo de teste principal pode ser encontrado aqui.
- **cypress.config.js**: Arquivo de configuração do Cypress.

## Executando os Testes

Para executar os testes automatizados, utilize o seguinte comando para abrir a interface do Cypress:

```bash
npx cypress open
