import React from 'react';
import './App.css';

const BlogSection = () => {
    // Dummy blog post data for demonstration purposes
    const blogPosts = [
      {
        id: 1,
        title: 'Blog Post 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 2,
        title: 'Blog Post 2',
        content: 'Praesent eget justo sed odio euismod malesuada vel ac lorem.',
      },
    ];
  
    return (
      <div className="blog-section-container">
        <h2 className="blog-section-heading">Latest Blog Posts</h2>
        <div className="blog-posts-container">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-content">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BlogSection;
