# Test Jungle Devs - Hapu homepage <a name="list"/>

-   [Sobre este projeto](#about)
-   [Como instalar o projeto](#instalacao)
-   [Como executar o projeto](#exec)
-   [Como criar uma versão de produção](#build)
-   [Teste A/B](#a/b)
-   [Melhorias](#melhorias)

## Sobre o projeto <a name="about"/>

Este projeto é uma versão semi-funcional da homepage da Hapu, criado com [React](https://github.com/facebook/create-react-app), [Redux](https://redux-toolkit.js.org/introduction/getting-started) e testado com [Jest](https://jestjs.io/pt-BR/docs/tutorial-react); Para a estilização dos componentes foi utilizado o pre-procesasdor [SASS](https://sass-lang.com/) com [CSS Modules](https://github.com/css-modules/css-modules) e para visualização das notificações foi utilizada a biblioteca [react-toastify](https://www.npmjs.com/package/react-toastify).

<!-- toc -->

## Como instalar o projeto <a name="instalacao"/> [^](#instalacao)

Para instalar o projeto é necessário ter previamente instalado o [Node.js](https://nodejs.org/en/) e o seu gerenciador de pacotes [NPM](https://nodejs.org/en/) e [clonar este repositório](https://www.atlassian.com/br/git/tutorials/setting-up-a-repository/git-clone). Para garantir a melhor experiencia no desenvolvimento é recomendado instalar no seu editor os plugins do Eslint e do Prettier.

Apos ter realizado estes procedimentos execute o comando a seguir na pasta que foi criada pela clonagem do repositorio `/test-jungle-devs` para instalar as dependencias do projeto.

### `npm install`

## Como executar o projeto <a name="exec"/> [^](#exec)

Para iniciar o projeto em modo de desenvolvimento na porta 3000 ([http://localhost:3000](http://localhost:3000)), vá ate a pasta do projeto `/test-jungle-devs` e execute:

### `npm start`

pressione `Ctrl + c` para encerrar a execução do projeto.

Para iniciar os testes de unidade, na pasta do projeto `/test-jungle-devs` execute:

### `npm test`

pressione `q` para encerrar o executor de testes.

## Como criar uma versão de produção <a name="build"/> [^](#build)

Para criar uma versão de produção para vá ate a pasta do projeto `/test-jungle-devs` e execute:

### `npm build`

Este comando vai criar um nova pasta `/build`, esta pasta contem todo o codigo minificado e transpilado para versões mais antigas do javascript como forma de garantir o funcionamento em navegadores mais antigos. Use esta pasta como conteudo nos seus deploys.

## Teste A/B <a name="a/b"/> [^](#a/b)

Este projeto realiza um experimento onde 50% do publico recebe uma mensagem diferente no componente Hero,
os resultados do teste podem vistos [aqui](https://app.optimizely.com/l/nRjsaTIcRgeWj4ePDxzNLg)

<p align="center">
    <p> variant 1:</p>
    <img src="./src/assets/readme/heroVariant1.png" width="600" height="300" alt="todo-list-usage"/>
</p>
<p align="center">
    <p> variant 2:</p>
    <img src="./src/assets/readme/heroVariant2.png" width="600" height="300" alt="todo-list-usage"/>
</p>

## Melhorias <a name="melhorias"/> [^](#list)

-   implementação de testes de integração nas funções criticas ao usuario
    -   Renderização correta da tela
    -   funcionamento do formualrio
-   Foi adicionada a biblioteca toastify para melhorar o feedback das API's.
