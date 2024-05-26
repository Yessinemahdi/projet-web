// src/EditPost.js
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const EditPost = ({ user }) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost/blog-backend/get_post.php?id=${id}`);
      const post = response.data;
      setTitle(post.title);
      setContent(post.content);
      setCategory(post.category);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/blog-backend/update_post.php', {
        id,
        title,
        content,
        category,
        userId: user.id,
      });
      if (response.status === 200) {
        history.push('/myposts');
      }
    } catch (error) {
      console.error("There was an error updating the post!", error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <ReactQuill value={content} onChange={setContent} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="art">Art</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
