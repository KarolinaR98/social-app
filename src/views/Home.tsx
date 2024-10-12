import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { SinglePost } from "../types";

const Home = () => {
  const [posts, setPosts] = useState<SinglePost[]>([]);

  const getLatestPosts = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/latest")
      .then((req) => {
        setPosts(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getLatestPosts();
  }, []);

  console.log(posts)
  return (
    <>
      <div className="container my-20 mx-auto">
        <div className="postLists w-4/5 m-auto max-w-xl">
            {posts.map((post) => {
                return (
                <Post key={post.id} post={post}/>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
