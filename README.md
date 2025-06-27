# Projeto React + .NET

Este projeto é uma aplicação full-stack que utiliza **React** no frontend e **.NET** no backend. A aplicação foi construída com foco em arquitetura limpa, escalabilidade e boas práticas, incluindo camadas bem definidas no frontend e padrões avançados no backend, como CQRS e DDD.

A aplicação trata de Leads com status: Pendente, Aprovado, Recusado.

- GET para pendentes e aprovados
- POST para aprovar e recusar

---

## Vídeo de demonstração
[Assista o vídeo no YouTube](https://www.youtube.com/watch?v=DtFbKXB-niY)


## Tecnologias Utilizadas

### Frontend (React)

- **React** – Biblioteca principal para construção da interface.
- **ShadcnUI** – Componentes estilizados para React, baseada em Tailwind CSS, com possibilidade de alterações.
- **Axios** – Cliente HTTP para comunicação com a API.
- **React Query** – Gerenciamento de estado e cache de dados para requisições assíncronas.
- **Arquitetura em Camadas**:
  - **Models** – Definição de tipos e interfaces.
  - **Services** – Comunicação com API e lógica relacionada a dados.
  - **Components** – Componentes reutilizáveis de UI.

### Backend (.NET)

- **ASP.NET Core Web API** – API RESTful para fornecer os dados e a lógica do negócio.
- **SQL Server** – Banco de dados relacional.
- **Entity Framework Core (EF Core)** – ORM para abstração da camada de acesso a dados.
- **CQRS (Command Query Responsibility Segregation)** – Separação das operações de leitura e escrita.
- **MediatR** – Implementação do padrão Mediator para facilitar CQRS e o desacoplamento.
- **DDD (Domain-Driven Design)** – Organização da lógica de negócio em entidades, agregados, serviços de domínio, etc.

---

## Funcionalidades Principais

- Comunicação eficiente entre frontend e backend via Axios e React Query.
- Implementação de CQRS para melhorar a separação de responsabilidades.
- Organização clara e modular para facilitar manutenção e escalabilidade.
- Interface responsiva e acessível utilizando componentes ShadcnUI.
- Validação e regras de negócio aplicadas conforme os princípios do DDD.
- ExceptionMiddleware para gerenciamento de erros
- Feedback de ações para o usuário no Front-End

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js (v16+)
- .NET
- SQL Server (local ou container)
- Npm

### Rodando o Backend

1. Configure a connection string do SQL Server no arquivo `appsettings.json`.
2. Execute as migrations para criar o banco de dados, na pasta raíz da API:
   ```bash
   dotnet ef migrations add CreateDatabase --project Infrastructure --startup-project LeadHandlerApi
   dotnet ef database update --project Infrastructure --startup-project LeadHandlerApi
   ```
3. Rode a API:
    ```bash
   dotnet run
    ```
### Rodando o Front-End

1. Navegue para pasta raíz do front-end
2. Instale as dependências:
   ```bash
   npm install
    ```
3. Execute a aplicação:
    ```bash
   npm start
    ```