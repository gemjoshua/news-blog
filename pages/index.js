import React from "react";
import Styles from "../styles/home.module.css";
import { PostList } from "../components/PostList";
import { server } from "../config/proxy";

export default function Home({ articles, error }) {
  return (
    <>
      {error ? (
        <div className={Styles.content}>Errors: {error}</div>
      ) : (
        <div className={Styles.content}>
          <h2 className={Styles.postTitle}>Recent News</h2>
          <PostList posts={articles} />
        </div>
      )}
    </>
  );
}

//fetch data @Buiild
export const getStaticProps = async () => {
  try {
    const res = await fetch(`${server}/api/articles`);

    const articles = await res.json();

    return { props: { articles } };
  } catch (err) {
    if (err) {
      return { props: { error: err.message } };
    }
  }
};
