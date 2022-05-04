import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import * as firstArticle from "./my-first-article.md";
import * as secondArticle from "./mdx-sample.mdx";

function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  return json([
    postFromModule(firstArticle),
    postFromModule(secondArticle),
  ]);
}

export default function Index() {
  const posts = useLoaderData();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
          {post.description ? (
            <p>{post.description}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
