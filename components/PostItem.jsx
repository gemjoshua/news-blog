import Link from "next/link";

import postStyle from "../styles/PostItem.module.css";

export const PostItem = ({ post }) => {
  return (
    <>
      <Link href="/articles/[id]" as={`/articles/${post.id}`}>
        <a className={postStyle.post}>
          <h4 className={postStyle.title}>
            {post.title}
            <span>&rarr; </span>
          </h4>
          <p className={postStyle.body}>{post.body}</p>
        </a>
      </Link>
    </>
  );
};
