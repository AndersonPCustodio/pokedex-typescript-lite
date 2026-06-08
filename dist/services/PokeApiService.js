"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPokemon = buscarPokemon;
async function buscarPokemon(nomeOuId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase().trim()}`;
    //Bloco try/catch para capturar falhas de rede ou Pokémon inexistente
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            console.log(`\n[ERRO] Pokémon não encontrado: ${nomeOuId}`);
            return null;
        }
        const dados = await resposta.json();
        const tipos = dados.types.map((item) => item.type.name);
        const pokemonSimplificado = {
            id: dados.id,
            nome: dados.name,
            tipos: tipos,
            altura: dados.height,
            peso: dados.weight
        };
        console.log(`[OK] Pokémon encontrado: ${pokemonSimplificado.nome}`);
        return pokemonSimplificado;
    }
    catch (erro) {
        console.log(`[ERRO] Não foi possível buscar o Pokémon.`);
        return null;
    }
}
//# sourceMappingURL=PokeApiService.js.map