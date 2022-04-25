export async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then((res) => res.json());

  return res.results;
}

export async function getPokemon(name: string | undefined) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json());

  return {
    name: name,
    img: res.sprites.front_default
  }
}
