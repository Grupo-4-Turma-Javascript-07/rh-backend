# 📁 Sistema de Cadastro RH – Projeto Integrador

Projeto do **Desafio 1 – Backend** do Projeto Integrador da Generation Brasil: construção de uma API completa utilizando **NestJS**, com CRUD de uma entidade.  
📌 Modelo de negócio escolhido: **Sistema de Cadastro de Recursos Humanos (RH)**

🔗 Repositório: https://github.com/Grupo-4-Turma-Javascript-07/rh-backend

---

## 📌 Descrição Geral

A API simula um sistema de cadastro de colaboradores para o setor de RH. É possível cadastrar, listar, atualizar e excluir registros, além de fazer buscas específicas por cargo.

---

## 🧾 Entidade: Colaborador

A entidade `Colaborador` possui os seguintes atributos:

- `id` (gerado automaticamente)
- `nome` (string)
- `cpf` (string)
- `cargo` (string)
- `dataAdmissao` (date)

---

## 🛠️ Funcionalidades CRUD

- `GET /colaboradores` → Listar todos os colaboradores  
- `GET /colaboradores/:id` → Buscar colaborador por ID  
- `POST /colaboradores` → Cadastrar novo colaborador  
- `PUT /colaboradores/:id` → Atualizar dados de colaborador  
- `DELETE /colaboradores/:id` → Remover colaborador  
- `GET /colaboradores/cargo/:cargo` → Buscar colaboradores por cargo  

---

## ✅ Requisitos Atendidos

✔ Projeto executando sem erros  
✔ TypeORM criando a tabela com os atributos definidos  
✔ CRUD completo implementado  
✔ Endpoint adicional de busca por cargo  
✔ Testes manuais realizados com Postman/Insomnia

---

## 🧰 Tecnologias Utilizadas

- **NestJS** (TypeScript)  
- **TypeORM**  
- **MySQL**  
- **Node.js**  
- **npm**

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/Grupo-4-Turma-Javascript-07/rh-backend.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados no arquivo `.env` (modelo disponível no projeto)

4. Execute a aplicação:
```bash
npm run start:dev
```

---

## 🔍 Testes

Utilize Insomnia para testar os endpoints da API.

---

## :busts_in_silhouette: Autores

- [@marinavarroo](https://github.com/marinavarroo)  
- [@VanessaTargino](https://github.com/VanessaTargino)  
- [@oligEdu](https://github.com/oligEdu)  
- [@melcsilva](https://github.com/melcsilva)  
- [@igorpardinho](https://github.com/igorpardinho)  
- [@Juliotbr](https://github.com/Juliotbr)  
- [@larissa-pinheiro](https://github.com/larissa-pinheiro)

---

Projeto desenvolvido em grupo como parte do aprendizado prático no bootcamp FullStack JavaScript da Generation Brasil.
