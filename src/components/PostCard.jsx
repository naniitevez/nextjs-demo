"use client";

import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <h3>
          {post.id} . {post.title}
        </h3>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        ligula auctor, efficitur odio a, aliquet eros. Integer vel tortor neque.
        Nullam ac justo id libero auctor posuere. Nulla facilisi. Sed at arcu a
        risus pulvinar interdum. Vivamus auctor massa ut velit gravida, id
        tristique erat luctus.
      </p>
      <button onClick={() => alert("Hiciste click")}>Click</button>
    </div>
  );
};

export default PostCard;
