import { LinksFunction } from "@remix-run/node";
import chartStyles from "../styles/charts.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: chartStyles,
    },
    {
      rel: "stylesheet",
      href: "https://externalsite.com/css/printStyles.css",
      media: "print"
    },
  ];
};

export default function About() {
  return (
    <main>
      <h1>About page</h1>
    </main>
  );
}
