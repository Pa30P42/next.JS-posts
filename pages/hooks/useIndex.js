import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useIndex = () => {
  const posts = useSelector((state) => state.posts);
  const [postsArr, setPostsArr] = useState(posts);

  useEffect(() => {
    if (posts) {
      setPostsArr(posts);
    } else return;
  }, [posts]);

  return {
    postsArr,
  };
};

export default useIndex;
