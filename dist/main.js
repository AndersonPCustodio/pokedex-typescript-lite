"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokeApiService_js_1 = require("./services/PokeApiService.js");
const BoxService_js_1 = require("./services/BoxService.js");
async function main() {
    console.log("--- Iniciando Testes da Pokédex --- \n");
    // Instancia o serviço de catálogo em memória
    const catalogo = new BoxService_js_1.BoxService();
    // 1. Teste de Busca válida e adição
    const pikachu = await (0, PokeApiService_js_1.buscarPokemon)("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }
    // 2. Teste de Outra busca válida e adição
    const charmander = await (0, PokeApiService_js_1.buscarPokemon)("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander);
    }
    // 3. Teste de Duplicidade (Deve exibir o aviso)
    const pikachuDuplicado = await (0, PokeApiService_js_1.buscarPokemon)("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo.adicionar(pikachuDuplicado);
    }
    // 4. Teste de Busca Inválida (Deve exibir o erro)
    await (0, PokeApiService_js_1.buscarPokemon)("pokemon-inexistente");
    // 5. Exibir catálogo atualizado com os dois Pokémon salvos
    catalogo.listar();
    // 6. Teste de Remoção pelo ID (Remove o Pikachu - ID 25)
    catalogo.remover(25);
    // 7. Listar novamente para garantir que sobrou apenas o Charmander
    catalogo.listar();
    console.log("--- Fim dos Testes ---");
}
main();
//# sourceMappingURL=main.js.map