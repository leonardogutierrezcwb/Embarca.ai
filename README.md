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

Em seguida, selecione o arquivo de teste localizado em cypress/e2e/ para iniciar a execução.

# Gerando Dados Dinâmicos
Este projeto utiliza a biblioteca Faker para gerar dados aleatórios e dinâmicos durante os testes. Isso ajuda a simular diferentes cenários de entrada de dados no fluxo de compra de passagens.

# Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.

# Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Este `README.md` oferece uma visão clara sobre como configurar, rodar os testes, e a importância do uso do Faker para a geração de dados. Se precisar de ajustes ou adições, me avise!
