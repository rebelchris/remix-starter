type Post = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Array<Post>> {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "post-2",
      title: "My second post",
    },
  ];
}

export async function getPost(slug: string | undefined): Promise<Post> {
  const posts = await getPosts();
  return posts.filter(post => post.slug === slug)[0]
}
