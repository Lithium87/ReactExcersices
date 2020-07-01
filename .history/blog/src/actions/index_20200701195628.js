import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return function () {
    const response = jsonPlaceholder.get("/post");

    return {
      type: "FETCH_POSTS",
      payload: response,
    };
  };
};
