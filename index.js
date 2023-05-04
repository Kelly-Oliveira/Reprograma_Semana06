let preco = parseFloat(prompt("Qual o valor do produto?"));
let desconto = parseFloat(prompt("Qual a porcentagem de desconto?"));

function calcularDesconto(preco, desconto) {
  let valorParaDescontar = preco * (desconto / 100);
  let valorTotal = preco - valorParaDescontar;
  alert("Valor após desconto: R$ " + valorTotal);
}

calcularDesconto(preco, desconto);
