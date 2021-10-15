import React from "react";
import { PostItem } from "./PostItem";
import postsStyle from "../styles/posts.module.css";

export const PostList = ({ posts }) => {
  return (
    <div className={postsStyle.card}>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};
