import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPokemon } from "~/models/pokemon.server";

type LoaderData = {
  pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    pokemon: await getPokemon(params.name)
  });
};

export const meta: MetaFunction = ({ data }: { data: LoaderData | undefined }) => {
  if (!data) {
    return {
      title: "Pokémon not found",
      description: "We could not find this Pokémon"
    };
  }

  const name = data.pokemon.name;
  return {
    title: `This is the amazing ${name}`,
    description: `We caught the Pokémon with the name: ${name}`
  };
};

export default function PostSlug() {
  const { pokemon } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        You caught: {pokemon.name}
      </h1>
      <img className="mx-auto" src={pokemon.img} />
    </main>
  );
}
