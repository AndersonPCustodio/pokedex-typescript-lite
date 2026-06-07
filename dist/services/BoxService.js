"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxService = void 0;
class BoxService {
    pokemons = [];
    adicionar(pokemon) {
        const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);
        if (jaExiste) {
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
            return;
        }
        this.pokemons.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }
    listar() {
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }
        console.log("\nCatálogo atual:");
        this.pokemons.forEach((pokemon) => {
            console.log(`#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`);
        });
        console.log("");
    }
    remover(id) {
        const existe = this.pokemons.some((pokemon) => pokemon.id === id);
        if (!existe) {
            console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
            return;
        }
        this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
        console.log("[OK] Pokémon removido do catálogo.");
    }
}
exports.BoxService = BoxService;
//# sourceMappingURL=BoxService.js.map