import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPokemon } from "~/models/pokemon.server";

type LoaderData = {
  pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

export const loader: LoaderFunction = async ({params,}) => {
  return json({
    pokemon: await getPokemon(params.name),
  });
};

export default function PostSlug() {
  const { pokemon } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        You caught: {pokemon.name}
      </h1>
      <img className='mx-auto' src={pokemon.img} />
    </main>
  );
}
