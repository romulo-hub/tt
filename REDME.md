# Introduction 
TODO: Faça uma breve introdução do seu projeto. Deixe esta seção explicar os objetivos ou a motivação por trás deste projeto. 

# Getting Started
TODO: Oriente os usuários a colocar seu código em funcionamento em seu próprio sistema. Nesta seção você pode falar sobre:

# Pré-requisitos:
De que coisas você precisa para instalar o software e como instalá-lo?
- Possuir conhecimento do funcionamento dos testes automatizados
- Possuir Visual Studio Code na sua máquina local
- Possuir NodeJS - interpretador javascript na sua máquina local
- Possuir Cypress - Framework de automação na sua máquina local

# Resumo 
O Cypress.io é um framework de testes automatizados com linguagem em JavaScript. O conceito utilizado é baixa configuração, ou seja, após instalar e inicializar, tudo já esta pronto para codificar a automação. 


# Configurações necessárias para o seu projeto:

- Para um Projeto Cypress, antes de qualquer coisa, é preciso preparar o ambiente com Node.JS e Visual Studio Code (VS Code)
  baixando as duas ferramentas 
- Clonar o projeto direto do repositorio dentro do Azure para sua maquina localmente 


1. Processo de instalação

    Crie uma pasta local e abra ela dentro do VS.code, depois execute os seguinte comandos:

     npm init --yes : Ele criará o arquivo package.json
     npm install -D cypress : esse comando é para baixar e instalar o cypress


2. Processo

     ./node_modules/.bin/cypress open : esse comando é para abrir a interface do cypress e assim executar a automação


3. Processo

     Exite um plugin que foi instalado chamado Allure, ele serve para gerar os relatorios dos testes, essa é a sequencia de comandos para pode executa-lo

     npx cypress run --config video=false --env allure=true : rodar a automação sem a interface 

     allure generate allure-results : gerar resultados
    
     allure open allure-report : para abrir o gerador de relatorio


# Observações finais

Dentro da pasta (e2e) possue o BDD informando qual cenário sera executado na automação, e tambem possue o cy.js
que é onde roda os testes

Na pasta de (Pages) possue os elementos e as syntaxes utilizadas no codigo onde é usada uma tecnica de testes 
chamada Page Objects onde possue o passo a passo da sequencia do teste