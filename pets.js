const data = [
    {id:1, nome:"Capitu", idade:15, sexo:"M", especie:"Calopisita"},
    {id:2, nome:"Xuxu", idade:5, sexo:"M", especie:"Gato"},
    {id:3, nome:"Mag", idade:10, sexo:"F", especie:"Galinha"},
    {id:4, nome:"Zezinho", idade:11, sexo:"M", especie:"Tartaruga"},
    {id:5, nome:"Gertrudi", idade:12, sexo:"F", especie:"Mula"},

];

function listar() {return data}
function listarPorId(id) {let pet = data.find(pet => pet.id == id)
     if(pet){return pet}else{return({erro: "True",mensagem:"Pet não encontrado!"})}}
function cadastrar(x) {
    x.id=data.length + 1
    data.push(x);
    return x
}

module.exports = {
    listar:listar,
    listarPorId:listarPorId,
    cadastrar:cadastrar,
}