/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: [".*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  mdx: async (filename) => {
    const [rehypeSlug, rehypeAutolinkHeadings, rehypeToc] = await Promise.all([
      import('rehype-slug').then((mod) => mod.default),
      import('rehype-autolink-headings').then((mod) => mod.default),
      import('rehype-toc').then((mod) => mod.default),
    ]);
    return {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeToc],
    };
  },
};
