const user = {
    nome: "Daiane",
    idade: 17, 
    email: "daianesousah@gmail.com",
    brasileira: true,
    genero: "masculino"

}

const filmes = [ 
    { 
        titulo: "vingadores",
        ano: 2012,
        genero: "Ação",
        paraMaiorDeIdade: false
   
    },

    {
        titulo: "Tropa de Elite",
        ano: 2007,
        genero: "Ação",
        paraMaiorDeIdade: true 

    }


]


// && = e
// || = ou 
// == = igual 
// === = igual e do mesmo tipo
// ! = = diferente 
// ! == = diferente e do mesmo tipo 



if(user.idade >=18 && user.genero === "masculino"){console.log(`${user.nome} Deve se ealistar!`)
    console.log ("deve votar!")
    return

}

console.log(`não precisa se alistar!`)
