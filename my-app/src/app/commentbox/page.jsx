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

  return (<div className='w-screen bg-gradient-to-r items-center justify-between flex from-black via-red-950 to-black h-auto '>
    <div className="max-w-lg mx-auto mt-5 p-4 border-x-2 
     border-y-2 border-red-700 rounded-3xl bg-[#0e0e0e]  hover:shadow-lg hover:shadow-red-600 shadow-md ">
      <h2 className="text-red-600 text-center text-2xl mt-2 mb-4 font-semibold">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border-red-600 text-white bg-[#0e0e0e] p-2 border rounded"
        />
        <textarea
          placeholder="Your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full  border-red-600 text-white focus:border-red-600 hover:border-red-600 p-2 bg-[#0e0e0e] border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-36 ml-40  bg-red-700 text-white p-2 rounded border border-red-600  hover:bg-[#0e0e0e]"
        >
          Submit
        </button>
      </form>
      <div className="mt-5 ">
        <h3 className="text-lg ml-[185px] text-white font-semibold">Comments:</h3>
        {comments.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {comments.map((c) => (
              <li key={c.id} className="p-3 border border-red-600 rounded flex justify-between items-center">
                <div>
                  <strong className='text-red-600'>{c.username}</strong>
                  <p className='text-white'>{c.comment}</p>
                </div>
                <button 
                  onClick={() => handleDelete(c.id)} 
                  className="ml-4 bg-red-700 text-sm text-white p-1 rounded hover:bg-red-800"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500  ml-[173px] ">No comments yet.</p>
        )}
      </div>
    </div>
    </div>
  );
}

