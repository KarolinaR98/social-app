import { useState } from "react";
import { SinglePost } from "../types";

type PostProps = {
  post: SinglePost;
};

const Post = (props: PostProps) => {
  const [likeCount, setLikeCount] = useState<number>(props.post.likes.length);

  const formatPostDate = (date: string) => {
    const index = date.indexOf("T");

    const formattedDate = date.substring(0, index);
    const formatedTime = date.substring(index + 1, index + 6);

    return formatedTime + " " + formattedDate;
  };

  return (
    <div className="post text-white border-[1px] border-gray-500 mb-[-1px] p-5 flex-col ">
      <div className="flex mb-5">
        <div className="image-holder mr-5">
          <img
            className="user-photo w-10 rounded-[50%]"
            src={props.post.user.avatar_url}
            alt={props.post.user.avatar_url}
          />
        </div>
        <div className="wrapper">
          <div className="post-heading flex">
            <h2 className="username mr-3 font-semibold">{props.post.user.username}</h2>
            <p className="date">{formatPostDate(props.post.created_at)}</p>
          </div>
          <div className="post-body">
            <p className="post-content">{props.post.content}</p>
          </div>
        </div>
      </div>
      <div className="post-footer">
        <p className="post-likes">
          <span className="bold">{likeCount}</span>
          {likeCount === 1 ? " like" : " likes"}
        </p>
      </div>
    </div>
  );
};

export default Post;
