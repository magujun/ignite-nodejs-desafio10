[![Build Status](https://travis-ci.com/magujun/ignite-nodejs-desafio10.svg?branch=main)](https://travis-ci.com/magujun/ignite-nodejs-desafio10)

# 💻 Rocketseat's Ignite - Trilha Node.js

## [Desafio 10](https://www.notion.so/Desafio-01-Construindo-com-serverless-1fdde2c717a94f7aa077e746cb077bec) 🚀

## Sobre o desafio

Nesse desafio você irá recriar uma parte da API de _todos_
que foi desenvolvida no desafio
[Conceitos do Node.js](https://www.notion.so/Desafio-01-Conceitos-do-Node-js-59ccb235aecd43a6a06bf09a24e7ede8)
mas dessa vez deverá ser usado o framework
[Serverless](https://www.serverless.com/).

Cada funcionalidade deverá ser criada em um arquivo de
função separada de acordo com o que foi visto nesse último
módulo.

### Sobre as rotas

- **POST -** `/todos/{userid}`

  Essa rota deve receber o `id` de um usuário pelo
  `pathParameters` (você pode criar esse id manualmente
  apenas para preencher o campo) e os seguintes campos no
  corpo da requisição: `title` e `deadline`, onde `deadline`
  é a data limite para o _todo_.

  O _todo_ deverá ser salvo com os seguintes campos no
  DynamoDB:

  ```json
  {
  	id: 'uuid', // id gerado para garantir um único todo com o mesmo id
  	user_id: 'uuid' // id do usuário recebido no pathParameters
  	title: 'Nome da tarefa',
  	done: false, // inicie sempre como false
  	deadline: new Date(deadline)
  }
  ```

- **GET-** `/todos/{userid}`

  Essa rota deve receber o `id` de um usuário pelo
  `pathParameters` (o mesmo id que foi usado para criar
  algum _todo_).

  A rota deve retornar os _todos_ que possuírem o `user_id`
  igual ao `id` recebido pelos parâmetros.

## 🤔 Contribute

- Fork this repository;
- Create a branch with your feature:
  `git checkout -b my-feature`;
- Commit your changes:
  `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete
your branch.

## 📝 License

This project is under the MIT license.<br/> See the
[LICENSE](LICENSE) file for more details.

---

<h4 align="center">
  Done with ❤ by <a href="https://www.linkedin.com/in/marcelo-guimaraes-junior/" target="_blank">Marcelo Guimarães Junior.</a><br/>
</h4>
