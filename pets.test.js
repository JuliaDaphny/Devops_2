const pets = require("./pets");

describe("Teste de funcionalidade listar", () => {

    //it ou test
    test("Listar todos os pets", () => {
        expect(pets.listar()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    nome: expect.any(String),
                    idade: expect.any(Number),
                    sexo: expect.any(String),
                    especie: expect.any(String)
                })
            ])
        )

    });

    it("Listar pet por ID", () => {
        expect(pets.listarPorId(2)).toEqual(
            expect.objectContaining({
                id:2,
                nome: expect.any(String),
                idade: expect.any(Number),
                sexo: expect.any(String),
                especie: expect.any(String),
            })
        );
    });

    it("Listar por ID - Pet não encontrado", () => {
        expect(pets.listarPorId(999999)).toEqual(
            expect.objectContaining({
                erro: "True",
                mensagem:"Pet não encontrado!"
            })
        );
    });

    it("Cadastrar novo pet", () => {
        expect(pets.cadastrar({ nome:"Gertrudi", idade:12, sexo:"F", especie:"Mula"})).toEqual(
            expect.objectContaining({nome:"Gertrudi", idade:12, sexo:"F", especie:"Mula"})
        );
    });

    it("Cadastrar", () => {
        expect(pets.cadastrar1({ nome:"Júlia"})).toEqual(
            expect.objectContaining({
                mensagem: "Campo 'nome' é obrigatorio"
            })
        );
    });

});

