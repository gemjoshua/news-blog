// import useRouter from "next/router";
import postDetailStyle from "../../../styles/postItem.module.css";
import Link from "next/link";
import { server } from "../../../config/proxy";

export default function Post({ article }) {
  // const { query } = useRouter;

  return (
    <div className={postDetailStyle.container}>
      <h2 className={postDetailStyle.postDetailTitle}>
        {article.title
          .split(" ")
          .map((each) => each.substr(0, 1).toUpperCase() + each.substr(1))
          .join(" ")}
      </h2>
      <div className={postDetailStyle.postBody}>{article.body}</div>

      <Link href="/">
        <a className={postDetailStyle.backBtn}>Go Back</a>
      </Link>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${server}/api/articles/${params.id}`);

  const article = await res.json();
  return { props: { article } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const data = await res.json();

  const paths = data.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
};

/*
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const post = await res.json();
  return { props: { post } };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
};

*/
// export const getServerSideProps = async ({params}) => {
//   const resp = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const data = await resp.json();

//   return { props: { post: data } };
// };
