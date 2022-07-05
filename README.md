# Instalação do Angular

## Fazer a instalação do CLI
`npm install -g @angular/cli`

## Criação do projeto angular
`ng new <nome_projeto>`

## Para testar a aplicação pode ser usado o comando:
`ng serve --open`

## Estrutura do Angular

- node_modules: dependências do projeto;
- src: onde vamos programar a aplicação;
- src/app: pasta principal para componentes, services, etc;
- Os componentes são divididos em partes: TS, HTML, CSS e testes;

## Criando um componente

- Pode ser criado pelo CLI;
- Comando:  `ng generate component <nome_componente>`;
- Todos os arquivos necessários são criados no projeto;
- Para importar o componente, é necessário importar seu seletor em um HTML;

## Interpolação de dados

- A interpolação é um reurso que vai nos ensinar a trabalhar com os componentes do Angular;
- Vamos criar nossas variáveis no arquivo .ts, dentro da classe;
- Ou seja, estas variáveis são propriedades da classe;
- E então teremos acessos a esses dados no arquivo .html, o template;
- A impressão é feita através de: {{dado}}