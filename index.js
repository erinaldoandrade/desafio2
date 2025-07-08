let vitoria = prompt("Digite seu numero de vitorias: ");
let derrota = prompt("Digite seu numero de derrotas:" );

function analisar()
{
    let rendimento = vitoria - derrota;
    return rendimento ;
}

function rankear(vitoria)
{
let nivel; 
// analise da taxa de vitoria
if (vitoria < 10)
{
    nivel = "Ferro";
}
else if (vitoria >= 11 && vitoria <= 20)
{
    nivel ="Bronze";
}
else if (vitoria >= 21 && vitoria <= 50)
{
    nivel = "Prata";
}
else if (vitoria >= 51 && vitoria <= 80)
{
    nivel = "Ouro";
}
else if (vitoria >= 81 && vitoria <= 90)
{
    nivel = "Diamante";
}
else if (vitoria >= 91 && vitoria <= 100)
{
    nivel = "Lendário";
}
else if (vitoria >= 101)
{
    nivel = "Imortal";
}
return nivel;
}

let saldo = analisar();
let ranking = rankear();
// saída 
console.log("O Herói tem de saldo de " + saldo + "está no nível de " + ranking);






