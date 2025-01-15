import React, { useState } from 'react';
import './Forum.css';

function Forum() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handlePost = () => {
        if (newPost.trim()) {
            const newPostWithTimestamp = {
                content: newPost,
                timestamp: new Date().toLocaleString(),
            };
            setPosts([...posts, newPostWithTimestamp]);
            setNewPost('');
        }
    };

    return (
        <div className="forum">
            <h2>Community Forum</h2>
            <div className="new-post">
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your thoughts..."
                ></textarea>
                <button onClick={handlePost}>Post</button>
            </div>
            <div className="posts">
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <p>{post.content}</p>
                        <small>{post.timestamp}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forum;
