import React, { useEffect, useState } from "react";
import useIndex from "./hooks/useIndex";
import PostsLists from "../components/PostsList/PostsList";
import { wrapper } from "../redux/store";
import Layout from "../components/Layout";
import postsActions from "../redux/actions/postsActions";

const Posts = () => {
  const { postsArr } = useIndex();
  return (
    <Layout>
      <PostsLists postsArr={postsArr} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(postsActions.getPosts());
  }
);

export default Posts;
