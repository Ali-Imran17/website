'use client';

import { useState, useEffect } from 'react';

export default function CommentBox() {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(savedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !comment) return;
    const newComment = { username, comment, id: Date.now() };
    setComments([...comments, newComment]);
    setUsername('');
    setComment('');
  };

  const handleDelete = (id) => {
    const updatedComments = comments.filter((c) => c.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-red-950 to-black px-4 py-10">
      <div className="w-full max-w-xl p-6 border-2 border-red-700 rounded-3xl bg-[#0e0e0e] shadow-lg hover:shadow-red-600">
        <h2 className="text-red-600 text-center text-2xl font-semibold mb-6">Leave a Comment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-red-600 text-white bg-transparent p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-700"
          />
          <textarea
            placeholder="Your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-red-600 text-white bg-transparent p-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-700"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 rounded hover:bg-[#0e0e0e] border border-red-600 transition"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-6">
          <h3 className="text-white text-xl font-semibold mb-3 text-center md:text-left">Comments:</h3>
          {comments.length > 0 ? (
            <ul className="space-y-3">
              {comments.map((c) => (
                <li key={c.id} className="p-4 border border-red-600 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center bg-black/30">
                  <div className="mb-2 sm:mb-0">
                    <strong className="text-red-600">{c.username}</strong>
                    <p className="text-white">{c.comment}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="bg-red-700 text-white px-3 py-1 text-sm rounded hover:bg-red-800"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
