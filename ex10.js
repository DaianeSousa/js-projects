const user = {
    nome: "Daiane"
    email: "daianesousah@gmail.com"
    senha: "123456"

}

const email = "daianesousah@gmail.com"
const senha = "123456"

if (email !== user.email || senha !== user.senha) {
    console.log("email ou sednha inválidos")
    return

}

console.log (`Bem vindo ${user.nome}!`)