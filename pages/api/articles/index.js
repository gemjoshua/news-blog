import Articles from "../../../Data.json";

export default function articles(req, res) {
  if (!Articles) {
    return res.status(404).json({ message: "No Article Found!" });
  }
  return res.status(200).json(Articles);
}
