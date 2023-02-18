// Crie uma função que retorna a string "Ola, " concatenada com um argumento text (a ser passado para a função) 
// e com ponto de exclamação "!" no final.

function cumprimentar (name) {
    let cumprimento = "Olá, " + name + "!"
    return cumprimento
}
console.log(cumprimentar("Maria"))

//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

function converterIdadeEmAnosParaDias(idade){
    return idade*365
}
console.log(converterIdadeEmAnosParaDias(25))

// Desenvolva uma função que recebe dois parametros , um é a quantidade de horas trabalhadas por um funcionario num mes, e o quanto (...)

function calcularSalario(horas, ganho){
    return "Salário igual a R$ "+ horas*ganho
}
console.log(calcularSalario(150,40.5))

// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string.

function nomeDoMes(numero) {
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    let mes = meses[numero-1]
    return mes
}
console.log(nomeDoMes(1))

//Crie uma função que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(num1,num2){
    if(typeof(num1)!=typeof(num2)) 
        return false
    return num1>=num2
}
console.log(maiorOuIgual(0,"0"))

//Escreva uma função que receba um valor booleano ou numerico. Se o parametro fornecido for booleano, o retorno deverá ser o inverso. (...)

function inverso(valor){
    if(typeof(valor)=="boolean")
        return !valor
    else if(typeof(valor)=="number")
        return -valor
    return "booleano ou numero esperados, mas o parametro e do tipo "+typeof(valor)
}
console.log(inverso(-2000))

// Crie uma função que receba quatro números como parÂmetro (numero, minimo, maximo, inclusivo) e retorne se o parametro numero (o primeiro)
// está entre minimo e maximo. Quando o parametro inclusive for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual
// a minimo ou a maximo. Caso o parametro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a logica será exclusiva,
// não considerando se numero é igual a minimo ou a maximo

function estaEntre (num, min, max, incl = false) {
    if (incl)
        return num>=min && num<=max
    return num>min && num<max 
}
console.log(estaEntre(55,50,100))

//Desenvolva uma função que recebe dois numeros inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles.

function multiplicar(num1, num2){
    let resultado = 0
    for(let i=0; i<num1; i++)
        resultado += num2
    return resultado
}
console.log(multiplicar(5,5))

//Escreva uma função que receba dois parametros. O primeiro é o elemento que repetirá, enquanto que o segundo será o numero de vezes (...)

function repetir(elemento, qtd){
    final = []
    for (let i=0; i<qtd; i++)
        final.push(elemento)
    return final
}
console.log(repetir("arroz", 4))

// Elabore uma função que recebe um número como parametro e retorne uma string com o simbolo "+" na quantidade especificada no parametro.

function simboloMais (numero){
    let sinal = ""
    for(let i=0; i<numero; i++)
        sinal += "+"
    return sinal
}
console.log(simboloMais(2))

// Crie uma função que receba uma array e retorne o primeiro e o ultimo elemento desse array como um novo array.

function receberPrimeiroEUltimoElemento(array){
    return [array[0],array[array.length-1]]
}
console.log(receberPrimeiroEUltimoElemento([8,-98,"arroz"]))

// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em (...)

function removerPropriedade(obj, prop){
    let semProp = Object.assign({}, obj)
    delete semProp[prop]
    return semProp
}
console.log(removerPropriedade({a:1, b:2}, "a"))

// Crie uma função que receba um array de elementos e retorne um array somente com os numeros presentes no array recebido como parametro.

function filtrarNumeros (elem) {
    let numeros = []
    for (let i of elem)
        if(typeof i === "number")
            numeros.push(i)
    return numeros
}
console.log(filtrarNumeros(["abc", 1, "2", "cde", 3]))

//Desenvolva uma função que recebe como parametro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares (...)

function objetoParaArray (obj){
    return Object.entries(obj)
}
console.log(objetoParaArray({nome: "Maria", profissao: "estudante"}))

// Elabore uma função que receba um array de numeros e retorne um array que tenha todos os numeros que são pares e que tambem tenham indices pares.

function receberSomenteOsParesDeIndicesPares(array){
    return array.filter((num, indice) => num%2==0 && indice%2==0)
}
console.log(receberSomenteOsParesDeIndicesPares([10,70,22,43]))

// A fim de manter o calendario anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez
// dos 365 presentes nos anos normais. (...)

function checarAnoBissexto (ano) {
    return ano%4==0 && (ano%100!=0 || ano%400==0)
}
console.log(checarAnoBissexto(2100))

// Escreva uma função que receba um array de numeros e retornará a soma de todos os numeros desse array.

function somarNumeros (array){
    const soma = (acumulador, atual) => acumulador+atual
    return array.reduce(soma)
}
console.log(somarNumeros([10,10,10]))

// Voce esta trabalhando numa aplicacao pessoal de controle de despesas. Na tela principal dessa aplicação (...)

function despesasTotais(produtos){
    gastos = produtos.map(item => item.preco)
    return somarNumeros(gastos)
}
console.log(despesasTotais([{nome: "pipoca", categoria: "comida", preco: 89.99},
{nome: "karate", categoria: "esporte", preco: 150}]))

// Numa aplicação web de investimento financeiro da qual você faz parte da equipe de desenvolvimento (...)

function calcularMedia (array){
    media = somarNumeros(array)/array.length
    return media
}
console.log(calcularMedia([0,10]))

//Faça uma função que recebe a base e a altura de um triangulo e retorne a area desse triangulo.

function areaDoTriangulo(base, altura){
    return (base*altura/2).toFixed(2)
}
console.log(areaDoTriangulo(9.25,13.1))

// Criar uma função que receba um array de numeros e retorne o menor numero desse array.

function menorNumero(array){
    let ordenado = array.sort((a,b) => a-b)
    return ordenado[0]
}
console.log(menorNumero([10,5,35,65]))

// Desenvolva uma função que receba como parametro um numero de 1 a 10. Internamente, na função, será gerado um (...)

function funcaoDaSorte (num) {
    const max = 10
    const min = 0
    let aleatorio = Math.floor(Math.random()*(max-min)+min)
    if(aleatorio == num)
        return "Parabéns o numero sorteado foi o "+aleatorio
    return "Que pena! O numero sorteado foi o "+aleatorio
}
console.log(funcaoDaSorte(10))

// Criar uma função que receba uma string como parametro e conte quantas palavras tem nela.

function contarPalavras(frase){
    let palavras = frase.split(" ")
    return palavras.length
}
console.log(contarPalavras("Meu nome é maria beatriz"))

// Desenvolva uma função que recebe um caractere e uma string como parametros e retorne a quantidade de vezes que o caractere (...)

function contarCaractere(caractere, str){
    let cont = 0
    for (let i=0; i<str.length; i++)
        if(str.charAt(i) == caractere)
            cont++
    return cont
}
console.log(contarCaractere("r", "A sorte favorece os audazes"))

// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar (...)

function buscarPalavrasSemelhantes(busca, biblioteca){
    return biblioteca.filter(palavra => palavra.includes(busca))
}
console.log(buscarPalavrasSemelhantes("abc",["abcdef", "ghi", "abcgh"]))

//Desenvolva uma função que receba uma string como parametro e retorne essa string somente com as consoantes, ou seja, sem vogais.

function removerVogais (str){
    vogais = ["a","A","e","E","i","I","o","O","u","U"]
    vogais.forEach(element => str = str.replace(element,""))
    return str
}
console.log(removerVogais("gatinhO"))

//Desenvolva uma função que recebe um objeto como parametro e retorne um outro objeto que corresponde ao objeto recebido (...)

function inverter(obj){
    let termos = Object.entries(obj).map(elem => elem.reverse())
    return Object.fromEntries(termos)
}
console.log(inverter({a:1, b:2, c:3}))

//Elabore uma função que recebe dois parametros: o primeiro é um array de numeros e o segundo é um numero que especifica (...)

function filtrarPorQuantidadeDeDigitos (array, qtd) {
    return array.filter(num => String(num).length == qtd)
}
console.log(filtrarPorQuantidadeDeDigitos([27,8,876,28,289,77],2))

// Crie uma função que recebe um array de numeros e retorna o segundo maior numero presente nesse array.

function segundoMaior(numeros){
    let Ordenado = numeros.sort((a,b) => b-a)
    return Ordenado[1]
}
console.log(segundoMaior([12,16,1,51]))

// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão em um array, conforme (...)

function receberMelhorEstudante(alunos){
    let notas = Object.entries(alunos).map(aluno => {return {nome: aluno[0], media: calcularMedia(aluno[1])}})
    let Ordenado = notas.sort((a,b) => b.media-a.media)
    return Ordenado[0]
}
console.log(receberMelhorEstudante({
    Joao: [8,7.6,8.9,6],
    Mariana: [9,6.6,7.9,8],
    Carla: [7,7,8,9]
}))