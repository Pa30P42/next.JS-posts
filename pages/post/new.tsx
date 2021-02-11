import React from "react";
import Layout from "../../components/Layout";
import { PageTitle } from "./newStyled";
import Form from "../../components/form/Form";

const NewPost = () => {
  return (
    <Layout>
      <PageTitle>Create a new post</PageTitle>
      <Form isCreate={true} />
    </Layout>
  );
};

export default NewPost;
