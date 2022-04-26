import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    description: "Welcome to our Remix app",
    keywords: "Remix,app",
    "twitter:image": "https://remix.app/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@DailyDevTips1",
    "twitter:site": "@DailyDevTips1",
    "twitter:title": "Remix app",
    "twitter:description": "Chris created this Remix app, check it out",
    "custom": "Something custom you like"
  };
};

export function ErrorBoundary({ error }) {
  return (
    <html>
    <head>
      <title>Oh no!</title>
      <Meta />
      <Links />
    </head>
    <body className='m-4'>
    <h1 className='text-2xl'>Something went wrong!</h1>
    <p>{error.message}</p>
    <Scripts />
    </body>
    </html>
  );
}

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
