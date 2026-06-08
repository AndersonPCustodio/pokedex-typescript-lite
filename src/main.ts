import { buscarPokemon } from './services/PokeApiService.js';
import { BoxService } from './services/BoxService.js';

async function main() {
  console.log("--- Iniciando Testes da Pokédex --- \n");

  // Instancia o serviço de catálogo em memória
  const catalogo = new BoxService();

  // Teste de Busca válida e adição
  const pikachu = await buscarPokemon("pikachu");
  if (pikachu !== null) {
    catalogo.adicionar(pikachu);
  }

  // Teste de Exibição do Catálogo Atualizado
  catalogo.listar();

  // Teste de Outra busca válida e adição
  const charmander = await buscarPokemon("charmander");
  if (charmander !== null) {
    catalogo.adicionar(charmander);
  }

  // Teste de Exibição do Catálogo Atualizado
  catalogo.listar();
  
  // Teste de Duplicidade (Deve exibir o aviso)
  const pikachuDuplicado = await buscarPokemon("pikachu");
  if (pikachuDuplicado !== null) {
    catalogo.adicionar(pikachuDuplicado);
  }

  // Teste de Busca Inválida (Deve exibir o erro)
  await buscarPokemon("pokemon-inexistente");

  // Teste de Exibição do Catálogo Atualizado
  catalogo.listar();

  // Teste de Remoção pelo ID (Remove o Pikachu - ID 25)
  catalogo.remover(25);

  // Listar novamente para garantir que sobrou apenas o Charmander
  catalogo.listar();

  console.log("--- Fim dos Testes ---");
}

main();
