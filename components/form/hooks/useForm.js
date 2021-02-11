import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import postsActions from "../../../redux/actions/postsActions";

const useForm = ({ post, isCreate }) => {
  const [title, setTitle] = useState(post ? post.title : " ");
  const [body, setBody] = useState(post ? post.body : " ");

  const dispatch = useDispatch();
  const router = useRouter();

  const bodyInputHandler = (e) => {
    setBody(e.target.value);
  };
  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isCreate) {
      dispatch(
        postsActions.createNewPost({
          title,
          body,
        })
      );
    } else {
      dispatch(
        postsActions.updatePost(post.id, {
          title,
          body,
        })
      );
    }

    setBody("");
    setTitle("");
    router.push("/");
  };

  return {
    title,
    body,
    bodyInputHandler,
    titleInputHandler,
    submitHandler,
  };
};

export default useForm;
