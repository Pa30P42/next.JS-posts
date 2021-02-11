import React, { FC } from "react";
import { IPost } from "../../helpers/types";
import { Title, Body, Button, Wrapper } from "./PostItemStyled";

interface IPostItem {
  post: IPost;
  showIsEdit: () => void;
}

const PostItem: FC<IPostItem> = ({ post, showIsEdit }) => {
  return (
    <Wrapper>
      <Title> {post.title}</Title>
      <Body>{post.body}</Body>

      <Button onClick={showIsEdit}>Edit</Button>
    </Wrapper>
  );
};

export default PostItem;
