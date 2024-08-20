# Embarca.ai - Testes Automatizados de Qualidade de Software

Este repositório abriga uma suíte de testes automatizados voltada para a validação dos fluxos de compra de passagens no site Embarca.ai. Utilizando Cypress, JavaScript e Faker, os testes garantem a robustez e a confiabilidade do sistema, gerando dados dinâmicos para uma ampla variedade de cenários.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Faker](https://www.npmjs.com/package/faker)

## Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/leonardogutierrezcwb/Embarca.ai.git
    cd Embarca.ai
    ```

2. Instale as dependências necessárias:
    ```bash
    npm install
    ```

## Estrutura do Projeto

- **cypress/**: Contém a estrutura do Cypress, incluindo testes, fixtures, e suporte.
  - **e2e/**: Diretório onde os testes de ponta a ponta estão localizados.
- **cypress.config.js**: Arquivo de configuração principal do Cypress.

## Executando os Testes

Para executar os testes automatizados, utilize o comando abaixo para abrir a interface do Cypress:

```bash
npx cypress open
