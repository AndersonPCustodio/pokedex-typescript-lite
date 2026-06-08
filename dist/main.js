"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokeApiService_js_1 = require("./services/PokeApiService.js");
const BoxService_js_1 = require("./services/BoxService.js");
async function main() {
    console.log("--- Iniciando Testes da Pokédex --- \n");
    // Instancia o serviço de catálogo em memória
    const catalogo = new BoxService_js_1.BoxService();
    // Teste de Busca válida e adição
    const pikachu = await (0, PokeApiService_js_1.buscarPokemon)("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }
    // Teste de Exibição do Catálogo Atualizado
    catalogo.listar();
    // Teste de Outra busca válida e adição
    const charmander = await (0, PokeApiService_js_1.buscarPokemon)("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander);
    }
    // Teste de Exibição do Catálogo Atualizado
    catalogo.listar();
    // Teste de Duplicidade (Deve exibir o aviso)
    const pikachuDuplicado = await (0, PokeApiService_js_1.buscarPokemon)("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo.adicionar(pikachuDuplicado);
    }
    // Teste de Busca Inválida (Deve exibir o erro)
    await (0, PokeApiService_js_1.buscarPokemon)("pokemon-inexistente");
    // Teste de Exibição do Catálogo Atualizado
    catalogo.listar();
    // Teste de Remoção pelo ID (Remove o Pikachu - ID 25)
    catalogo.remover(25);
    // Listar novamente para garantir que sobrou apenas o Charmander
    catalogo.listar();
    console.log("--- Fim dos Testes ---");
}
main();
//# sourceMappingURL=main.js.map