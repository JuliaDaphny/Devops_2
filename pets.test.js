const pets = require("./pets");

describe("Cadastramento de pets", () => {
    it("Cadastrar novo pet", () => {
        const length = pets.listar().length;
        expect(pets.cadastrar({ nome: "Vitor", idade: 1, sexo: "M", especie: "Papagaio"})).toEqual(
            expect.objectContaining({ id: expect.any(Number), nome: expect.any(String), idade: expect.any(Number), sexo: 'M' || 'F', especie: expect.any(String)})
        );
        
        expect(pets.listar().length).toEqual(length+1);
    });

    it("Cadastrar - Campo 'nome' é obrigatório", () => {
        const resultado = pets.cadastrar({ idade: 5, sexo: "M", especie: "Papagaio" });
        expect(resultado).toEqual(expect.objectContaining({erro: true, mensagem: "Campo 'nome' é obrigatório!"})
        );
    });

    it("Cadastrar - Campo 'idade' é obrigatório", () => {
        const resultado = pets.cadastrar({ nome: "mu", sexo: "M", especie: "Papagaio" });
        expect(resultado).toEqual(expect.objectContaining({erro: true, mensagem: "Campo 'idade' é obrigatório!"})
        );
    });

    it("Cadastrar - Campo 'sexo' é obrigatório", () => {
        const resultado = pets.cadastrar({ nome: "Zey", idade: 10, especie: "Papagaio" });
        expect(resultado).toEqual(expect.objectContaining({erro: true, mensagem: "Campo 'sexo' é obrigatório!"})
        );
    });

    it("Cadastrar - Campo 'espécie' é obrigatório", () => {
        const resultado = pets.cadastrar({ nome: "Zey", idade: 10, sexo: "M" });
        expect(resultado).toEqual(expect.objectContaining({ erro: true, mensagem: "Campo 'especie' é obrigatório!"})
        );
    });

    it("Cadastrar - campo 'idade' deve ser maior ou igual a 0", () => {
        pet = { nome: "Luck", idade: -1, sexo: 'M', especie: 'Gatinho'};
        expect(pets.cadastrar(pet)).toEqual(
            expect.objectContaining({erro: true, mensagem: "Campo 'idade' deve ser maior ou igual a zero!"})
        );
    });

    it("Cadastrar - campo 'sexo' deve ser 'M' ou 'F'", () => {
        pet = { nome: "Luck", idade: 5, sexo: 'Masculino', especie: 'Gatinho'};
        expect(pets.cadastrar(pet)).toEqual(
            expect.objectContaining({erro: true, mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"})
        );
    });
});

describe("Edição de pets por id", () => {

    it("Editar pet por id", () => {
        const edicao = pets.editarPorId(2, { nome: "Zezinho", idade: 2, sexo: "M", especie: "Gatinho"
        });
        
        expect(edicao).toEqual(
            expect.objectContaining({ id: expect.any(Number), nome: expect.any(String), idade: expect.any(Number), sexo: expect.any(String), especie: expect.any(String)})
        );
        
        expect(pets.listarPorId(edicao.id)).toEqual(expect.objectContaining({ 
            nome: "Zezinho", idade: 2, sexo: "M", especie: "Gatinho"
        }));
    });

    it("Editar - pet não encontrado", () => {
        expect(pets.editarPorId(999999, { nome: "Zezinho", idade: 2, sexo: "M", especie: "Gatinho"})).toEqual(
            expect.objectContaining({ erro: true, mensagem: "Pet não encontrado!"})
        );
    });

    it("Editar - campo 'idade' deve ser maior ou igual a 0", () => {
        pet = { nome: "Luck", idade: -1, sexo: 'M', especie: 'Gatinho'};
        expect(pets.editarPorId(1, pet)).toEqual(
            expect.objectContaining({ erro: true, mensagem: "Campo 'idade' deve ser maior ou igual a zero!"})
        );
    });

    it("Editar - campo 'sexo' deve ser 'M' ou 'F'", () => {
        pet = { nome: "Luck", idade: 5, sexo: 'Masculino', especie: 'Gatinho'};
        expect(pets.editarPorId(1, pet)).toEqual(
            expect.objectContaining({ erro: true, mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"})
        );
    });

});

describe("Deleção de pets", () => {

    it("Deletar - Pet não encontrado", () => {
        expect(pets.deletarPorId(9999999)).toEqual(
            expect.objectContaining({ erro: true, mensagem: "Pet não encontrado!"})
        )
    });
});