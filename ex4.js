// crie um algoritimo que calcule a area da parede 
// o valor do pintor 
// e a quantidade de tinta necessária (Em baldes)

const altura = 3
const largura = 5
const valorPintorm = 15
const rendimentoTinta = 12 // m² por balde 

// calculo da area 

const area = altura * largura
const valor = area * valorPintor
const balde = rendimentoTinta * area / rendimentoTinta

console.log(`
    A area da parede é ${area}m²
    A area do pintor é ${valor.toFixed(2)}
    A quantidade de baldes é ${Math.ceil (baldes)}
    `)





