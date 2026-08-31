import express from 'express';

const app = express();
const PORT = 3000;

// 1. Rota de Boas-vindas
app.get('/', (req, res) => {
    res.send('Bem-vindo à Pizzaria Pizzaria Fazbear! O verdadeiro sabor da Itália.');
});

// 2. Rota Sobre
app.get('/sobre', (req, res) => {
    res.send('Pizzaria Pizzaria Fazbear - Endereço: Rua XXXXX, XXX | Horário de funcionamento: Terça a Domingo, das 18h às 23h30.');
});

// 3. Rota Cardápio (Retorna o array JSON com as 3 pizzas)
app.get('/cardapio', (req, res) => {
    res.json([
        {
            sabor: "Frango com Catupiry",
            tamanho: "Grande",
            preco: 49.90
        },
        {
            sabor: "Calabresa com Queijo",
            tamanho: "Média",
            preco: 39.90
        },
        {
            sabor: "Quatro Queijos",
            tamanho: "Grande",
            preco: 45.90
        }
    ]);
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor da Pizzaria Fazbear rodando em http://localhost:${PORT}`);
});