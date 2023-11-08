import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Posts = () => {
  const { id } = useParams();

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      console.log(data);
    }
    fetchPosts();
  }, []);
  return (
    <div>
      {id} {/* dynamic route */}
    </div>
  );
};

export default Posts;
