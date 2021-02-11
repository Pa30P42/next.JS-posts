import { useDispatch } from "react-redux";
import postsActions from "../../../redux/actions/postsActions";

const usePostsList = () => {
  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(postsActions.deleteChosenPost(id));
  };

  return {
    deletePost,
  };
};

export default usePostsList;
