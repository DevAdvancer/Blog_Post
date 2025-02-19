import post1 from '../data/Posts/post1.md?raw';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    content: post1,
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    date: '2025-02-19',
    author: {
      name: 'Abhirup Kumar',
      avatar: '/images/Avatar/post1.jpeg',
    },
    tags: ['Web Development', 'Technology', 'Future'],
  }
];
