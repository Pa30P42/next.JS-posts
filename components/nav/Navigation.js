import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <Link href="/">
        <a>Posts</a>
      </Link>
      <Link href="/post/new">
        <a>Create Post</a>
      </Link>
    </div>
  );
};

export default Navigation;
