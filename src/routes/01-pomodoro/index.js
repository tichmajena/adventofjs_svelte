import * as marked from "marked";

export const GET = async () => {
  //   const readme = import.meta.glob("$lib/assets/04/*.md");
  //   const iterable = Object.entries(readme);
  //   const file = Promise.all(
  //     iterable.map(async ([path, resolver]) => {
  //       const resolvedPost = marked.parse(resolver);

  //       console.log(resolvedPost);
  //       return { html: resolvedPost };
  //     })
  //   );
  return {
    body: {
      readme: "file[0]",
    },
  };
};
