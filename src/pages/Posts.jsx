import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Posts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>{post.id}</div>
      ))}
    </div>
  );
};

export default Posts;
