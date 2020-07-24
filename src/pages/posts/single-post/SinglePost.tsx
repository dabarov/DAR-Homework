import React, { useEffect, useState } from "react";
import "./SinglePost.scss";
import { Post } from "../../../types/interfaces";
import { getPost } from "../../../services/api";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
  let { postId } = useParams();
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    getPost(postId).then((data) => setPost(data));
  }, [postId]);

  return (
    <div className="single-post">
      <h1>{post?.title}</h1>
      <img src="https://picsum.photos/1920/520" alt={post?.title}/>
      <div>
        By: <em>User{post?.userId}</em>
      </div>
      <p>{post?.body}</p>
    </div>
  );
};
