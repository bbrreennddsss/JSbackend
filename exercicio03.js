// let nota = 82;
// let conceito;

// if (nota >= 90){
//     conceito = 'A';
// } else if (nota >= 80){
//     conceito = 'B';
// }else if (nota >=70){
//     conceito = 'C';
// }else{
//     conceito = 'Reprovado';
// }
// const statusFinal = nota >= 70 ? 'Aprovado' : 'Recuperação';

// console.log(`Nota: ${nota}`);
// console.log(`Conceito: ${conceito}`);
// console.log(`Status final: ${statusFinal}`);

const express = require('express')
const app = express();

app.get('/api/classificar-idade',(req,res) =>{
    const idade = number(req.query.idade);
    if (!idade || isNaN (idade)){
        return res.status(400).json({erro: 'O parametro idade é obrigatorio e deve ser númerico'})
    }
    let categoria = idade <12 ? 'Criança' : idade <18 ? 'Adolescente': idade <60 ? 'Adulto' : 'Idoso';
    return res.json({idade, categoria});
});

app.listen(3000, () => {
    console.log('Servidor: http://localhost:3000')
});

