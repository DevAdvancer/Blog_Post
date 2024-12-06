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
    content: `
# The Future of Web Development

Web development is constantly evolving, with new technologies and frameworks emerging regularly.
The rise of AI-powered development tools, WebAssembly, and edge computing are revolutionizing how we build
web applications.

## Key Trends

### 1. AI-Powered Development

AI is transforming how we write code. Here's a simple example of AI-assisted code generation:

\`\`\`javascript
// AI-powered code completion
function calculateOptimalRoute(points) {
  return points.reduce((optimal, point) => {
    // AI suggests the most efficient path
    return [...optimal, point].sort((a, b) =>
      calculateDistance(a, b));
  }, []);
}
\`\`\`

### 2. WebAssembly

![WebAssembly Performance](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

WebAssembly is enabling high-performance web applications that were previously only possible in native code.

### 3. Edge Computing

Edge computing is bringing computation closer to the data source:

\`\`\`typescript
// Edge function example
export default async function handler(request: Request) {
  const userLocation = request.headers.get('cf-ipcountry');

  return new Response(JSON.stringify({
    nearest: findNearestEdgeNode(userLocation)
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
\`\`\`

As we move forward, we're seeing a greater emphasis on:
- Performance optimization
- Accessibility standards
- Enhanced user experiences
    `,
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    date: '2024-03-15',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    tags: ['Web Development', 'Technology', 'Future'],
  }
];
