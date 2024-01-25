let num = [5 , 8, 2, 9, 3 ]
num[5] = 6 // Vai acrescentar um número que você quer, na posição que você indicar.
num.push(8)// Irá acrescentar um número na última posição do ARREY, independente da quantidade de elementos do ARRREY.

console.log(`Tamanho do nosso array ; ${num.length}`) // Nesse caso, o .length, vai mostra o tamanho do nosso ARRAY,ou seja a quantidade de índices//
console.log(`Nosso vetor é :${num}`)

console.log(`Nosso ARRAY em ordem crescente: ${num.sort()}`)// .sort(), vai mudar a ordem dos elementos, para uma ordem crescente.