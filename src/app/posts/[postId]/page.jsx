import React from "react";

async function loadPost(postId) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  const data = await result.json();

  return data;
}
async function PostPage({ params }) {
  const post = await loadPost(params.postId);

  return (
    <>
      <h1>Post ID: {post.id}</h1>
      <h2>Post title: {post.title}</h2>
    </>
  );
}

export default PostPage;
