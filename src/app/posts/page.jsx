import React from "react";
import PostCard from "@/components/PostCard";

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  // await new Promise(resolve => setTimeout(resolve, 3000))
  return data;
}

async function PostsPage() {
  const posts = await loadPosts();

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostsPage;
