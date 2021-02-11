import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const usePost = () => {
  const [isEdit, setIsEdit] = useState(false);

  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    if (posts.length > 0) {
      return;
    }
    store.dispatch(postsActions.getPosts());
  }, []);

  const showIsEdit = () => {
    setIsEdit(true);
  };

  const hideIsEdit = () => {
    setIsEdit(false);
  };

  return {
    showIsEdit,
    hideIsEdit,
    isEdit,
  };
};

export default usePost;
