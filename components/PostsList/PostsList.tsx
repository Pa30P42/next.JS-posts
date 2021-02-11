import React, { FC } from "react";
import Link from "next/link";
import { IPost } from "../../helpers/types";
import usePostsList from "./hooks/usePostsList";
import { Title, Button, PostItem, List, PageTitle } from "./PostsListStyled";

interface IPostsList {
  postsArr: IPost[];
}

const PostsLists: FC<IPostsList> = ({ postsArr }) => {
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
