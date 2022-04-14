const data = [
    {id: 1, nome: "Lis", idade: 15, sexo: "M",especie: "bode"},
    {id: 2, nome: "Macos", idade: 10, sexo: "M", especie: "gato"},
];

function listar() {
    return data;
}

function listarPorId(id) {
    const pet = data.find(pet => pet.id === id)
    if (!pet) {
        return { erro: true, mensagem: "Pet não encontrado!"};
    }
    return pet;
}

function cadastrar(pet) {


    if (pet.hasOwnProperty('nome') == false) {
        return { erro: true, mensagem: "Campo 'nome' é obrigatório!" }
    } else if(pet.hasOwnProperty('idade') == false){
        return { erro: true, mensagem: "Campo 'idade' é obrigatório!" }

    }
    else if(pet.hasOwnProperty('sexo') == false){
        return { erro: true, mensagem: "Campo 'sexo' é obrigatório!" }

    }
    else if(pet.hasOwnProperty('especie') == false){
        return { erro: true, mensagem: "Campo 'especie' é obrigatório!" }

    }
    else if(pet.idade < 0){ return {erro: true, mensagem: "Campo 'idade' deve ser maior ou igual a zero!"}
    }

    else if(pet.sexo != ('M' || 'F')){ return {erro: true, mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"}
    }
    else{
        pet.id = data.length + 1;
        data.push(pet);
        return pet;
    } }
    
function editarPorId(id, pet){
    const index = data.findIndex(pet => pet.id === id);
    if (index === -1){
        return { erro: true, mensagem: "Pet não encontrado!" }
    } else if(pet.idade < 0){
        return{erro: true, mensagem: "Campo 'idade' deve ser maior ou igual a zero!"}
    } else if(pet.sexo != ('M' || 'F')) {
        return{erro: true, mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"}
    }
    else{
        pet.id = id 
         data[index] = pet
         return data[index]
    }
}

function deletarPorId(id) {
    const index = data.findIndex(pet => pet.id === id);
    if(index === -1){ return { erro: true, mensagem: "Pet não encontrado!" }
    } else {
        data.splice(index , 1 )
        return { erro: false, mensagem: "Pet deletado com sucesso!"}
    }
}

module.exports = {
    listar, listarPorId, cadastrar, editarPorId, deletarPorId
}