import React, { FC } from "react";
import { NextPageContext } from "next";
import usePost from "./hooks/usePost";
import { store } from "../../redux/store";
import Form from "../../components/form/Form";
import PostItem from "../../components/PostItem/PostItem";
import postsActions from "../../redux/actions/postsActions";
import Layout from "../../components/Layout";
import { IPost } from "../../helpers/types";

// interface IChosenPost {
//   post: IPost;
// }

const Post = ({ post }) => {
  const { showIsEdit, hideIsEdit, isEdit } = usePost();
  return (
    <Layout>
      {!isEdit ? (
        <PostItem post={post} showIsEdit={showIsEdit} />
      ) : (
        <Form isCreate={false} post={post} hideIsEdit={hideIsEdit} />
      )}
    </Layout>
  );
};

export async function getServerSideProps({
  query: { postId },
}: NextPageContext) {
  const posts = await store.getState();
  let result;
  if (posts.posts.length > 0) {
    const allPosts = posts.posts;
    result = allPosts.find((post) => post.id == postId);
  } else {
    await store.dispatch(postsActions.getPosts());
    const posts = await store.getState();
    const allPosts = posts.posts;
    result = allPosts.find((post) => post.id == postId);
  }
  return {
    props: { post: result },
  };
}

export default Post;
