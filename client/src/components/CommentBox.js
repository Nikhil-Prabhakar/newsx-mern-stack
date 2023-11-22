// CommentBox.js
import React, { useState } from 'react';
import './CommentBox.css'; // Import the CSS file
import userImage from './user.png'; // Import a sample user image

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      setComments([
        ...comments,
        { text: newComment, timestamp: new Date(), user: { name: '@TEAM 280 - ', image: userImage } },
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-box-container">
      <h2 className="comment-box-heading">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          rows="4"
          cols="50"
          placeholder="Add a public comment..."
          value={newComment}
          onChange={handleInputChange}
          className="comment-input"
        />
        <br />
        <button type="submit" className="comment-button">
          Comment
        </button>
      </form>

      <div className="comment-list">
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="comment-item">
                <div className="user-image">
                  <img src={comment.user.image} class='user-image' alt={comment.user.name} />
                </div>
                <div className="comment-content">
                  <p>{comment.text}</p>
                  <small>{comment.user.name}</small>
                  <small>{comment.timestamp.toLocaleString()}</small>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-comments">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
