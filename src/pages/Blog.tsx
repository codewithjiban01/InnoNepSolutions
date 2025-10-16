import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
          Blogs Coming Soon
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We're working on creating amazing content for you. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Blog;
