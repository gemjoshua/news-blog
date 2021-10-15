import Articles from "../../../Data.json";

export default function article({ query: { id } }, res) {
  const Article = Articles.find((article) => article.id == id);

  if (!Article) return res.status(404).json({ message: "No Article Found!" });
  return res.status(200).json(Article);
}
