import React from 'react';
import Profile from '../images/Profile_pic.jpg'

export function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Picture Section */}
        <div className="w-full md:w-1/3">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">About Modern Blog</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p>
            Welcome to My Blog, a personal space where I share my knowledge and insights about web development, programming, and technology. My goal is to provide high-quality content that helps developers like you stay up-to-date with the latest trends and best practices.
            </p>
            <p>
            Whether you're a seasoned developer or just starting your journey in tech, I'm committed to sharing valuable insights and practical knowledge that you can directly apply to your projects. Through my blog, I want to create a connection with fellow developers, sharing my experiences, learnings, and perspectives from my own coding adventures.
            </p>
            <p>
            Each post is a reflection of my personal growth, challenges I've overcome, and the exciting technologies I'm exploring. I hope that by sharing my journey, I can inspire, educate, and support you in your own development path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
