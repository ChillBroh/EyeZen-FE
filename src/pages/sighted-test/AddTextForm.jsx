import React, { useState } from 'react';

const TextForm = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextList([...textList, text]);
    setText('');
  };

  return (
    <div className="container mx-auto  h-screen lg:p-24">
        <div className='flex justify-end'>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
          onClick={() => alert(textList.join('\n'))}
        >
          View All Text
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Add Text</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="w-full px-3 py-2 rounded-lg border"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 bg-[#004AAD] text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default TextForm;
