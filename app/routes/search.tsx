import { Form, useLoaderData, useSearchParams } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search);
  return json({search: search.get('query')});
};

export default function Search() {
  const data = useLoaderData();
  const [params] = useSearchParams()

  return (
    <main>
      <h1>Search page</h1>
      <Form method='get'>
        <input type="text" name="query" placeholder="Search for something" defaultValue={params.get("query")} />
      </Form>
    </main>
  );
}
