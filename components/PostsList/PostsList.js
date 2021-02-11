import React from "react";
import Link from "next/link";
import usePostsList from "./hooks/usePostsList";
import { Title, Button, PostItem, List, PageTitle } from "./PostsListStyled";

const PostsLists = ({ postsArr }) => {
  const { deletePost } = usePostsList();
  return (
    <>
      <PageTitle>Lates posts</PageTitle>
      <List>
        {postsArr.map((post) => (
          <PostItem key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Title>{post.title}</Title>
            </Link>
            <Button onClick={() => deletePost(post.id)}>X</Button>
          </PostItem>
        ))}
      </List>
    </>
  );
};

export default PostsLists;
