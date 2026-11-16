module.exports = c => {
  c.addPassthroughCopy({ "src/admin": "admin" });
  c.addPassthroughCopy("src/css");c.addPassthroughCopy("src/js");c.addPassthroughCopy("src/images"); c.addPassthroughCopy("src/uploads");
  c.addCollection("posts", a => a.getFilteredByGlob("src/posts/*.md").sort((x, y) => y.date - x.date));
  c.addCollection("ebooks", a => a.getFilteredByGlob("src/ebooks/*.md").sort((x, y) => (x.data.order || 99) - (y.data.order || 99)));
  c.addFilter("iso", d => new Date(d).toISOString().slice(0, 10));
  c.addFilter("pretty", d => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }));
  c.addFilter("limit", (a, n) => a.slice(0, n));
  return { dir: { input: "src", output: "_site" } };
};
