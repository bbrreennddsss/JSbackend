# 🚀 API - Pizzaria Pizzaria Fazbear

## 📌 Sobre o Projeto
Esta API foi feita para gerenciar o cardápio e a operação digital da Pizzaria Fazbear. O objetivo principal é deixar rotas para cardápios, sobre a pizzaria, etc..

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express.js
- Thunder Client (para testes)

## 📡 Endpoints da API (Rotas)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Boas-vindas |
| `GET` | `/sobre` | Informações institucionais |
| `GET` | `/itens` | Lista todos os itens cadastrados |
| `GET` | `/itens/:id` | Busca um item específico pelo ID |
| `POST`| `/itens` | Cadastra um novo item via JSON |

## 🧪 Como Rodar e Testar
1. Clone o repositório
2. Execute `npm install`
3. Inicie com `node server.js`
4. Teste as rotas no Thunder Client 
