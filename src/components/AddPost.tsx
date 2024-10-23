import { useState } from "react";
import postsApiService from "../apiService/postsApiService";

type AddPostProps = {
    getNewerPost: () => void,
}

const AddPost = (props: AddPostProps) => {
  const [postContent, setPostContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!postContent) {
      return;
    }

    postsApiService.addPost(postContent);
    props.getNewerPost();
    setPostContent("");
  };

  return (
    <form className="mb-6  w-4/5 m-auto max-w-xl" onSubmit={handleSubmit}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a post..."
          value={postContent}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setPostContent(e.target.value)
          }
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-gray-700"
      >
        Add post
      </button>
    </form>
  );
};

export default AddPost;
