import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Posts = () => {
    const { id } = useParams();

    useEffect(() => {
        const data = fetch("https://jsonplaceholder.typicode.com/posts/1")
        console.log(data)
    }, []);
    return (
        <div>
            {id} {/* dynamic route */}
        </div>
    );
}

export default Posts;
