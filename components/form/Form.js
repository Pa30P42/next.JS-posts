import React from "react";
import { FormWrapper, Input, Textarea, Label, Button } from "./FormStyled";
import useForm from "./hooks/useForm";

const Form = ({ hideIsEdit, post, isCreate }) => {
  const {
    title,
    body,
    bodyInputHandler,
    titleInputHandler,
    submitHandler,
  } = useForm({ post, isCreate });
  return (
    <FormWrapper onReset={hideIsEdit} onSubmit={submitHandler}>
      <Label>
        Title:
        <Input value={title} onChange={titleInputHandler} />
      </Label>
      <Label>
        Body:
        <Textarea
          value={body}
          onChange={bodyInputHandler}
          rows={10}
          cols={30}
        />
      </Label>
      {isCreate ? (
        <Button type="submit">Create post</Button>
      ) : (
        <>
          <Button type="reset">Cancel</Button>
          <Button type="submit">Save changes</Button>
        </>
      )}
    </FormWrapper>
  );
};

export default Form;
