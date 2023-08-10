import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'

const Cards = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getPosts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

    return (
        <div className="posts-page">
          <div className="posts-container flex-col">
            {posts.map((post, index) => (
              <div key={index} className="post-card">
                <div className="post-header">
                  <img src={post.img_url} alt={`Post ${index}`} className="user-avatar" />
                  <div className="post-author">{post.name}</div>
                </div>
                <img src={post.img_url} alt={`Post ${index}`} className="post-image" />
                <div className="post-caption">{post.caption}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Cards;
