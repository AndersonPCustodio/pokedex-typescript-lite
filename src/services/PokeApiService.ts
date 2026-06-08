import { PokemonApiResponse, PokemonResumo } from '../models/types.js';

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase().trim()}`;

  //Bloco try/catch para capturar falhas de rede ou Pokémon inexistente
  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.log(`\n[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    const dados: PokemonApiResponse = await resposta.json();

    const tipos = dados.types.map((item) => item.type.name);

    const pokemonSimplificado: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: tipos,
      altura: dados.height,
      peso: dados.weight
    };

    console.log(`[OK] Pokémon encontrado: ${pokemonSimplificado.nome}`);
    return pokemonSimplificado;

  } catch (erro) {
    console.log(`[ERRO] Não foi possível buscar o Pokémon.`);
    return null;
  }
}
