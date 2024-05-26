// src/MyPosts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyPosts = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      const response = await axios.get(`http://localhost/blog-backend/get_user_posts.php?userId=${user.id}`);
      setPosts(response.data);
    };
    fetchMyPosts();
  }, [user.id]);

  const handleDelete = async (postId) => {
    try {
      await axios.post('http://localhost/blog-backend/delete_post.php', { id: postId, userId: user.id });
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error("There was an error deleting the post!", error);
    }
  };

  return (
    <div>
      <h2>My Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <Link to={`/edit_post/${post.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
