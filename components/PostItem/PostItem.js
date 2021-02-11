import React from "react";
import { Title, Body, Button, Wrapper } from "./PostItemStyled";

const PostItem = ({ post, showIsEdit }) => {
  return (
    <Wrapper>
      <Title> {post.title}</Title>
      <Body>{post.body}</Body>

      <Button onClick={showIsEdit}>Edit</Button>
    </Wrapper>
  );
};

export default PostItem;
