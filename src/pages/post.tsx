import { useParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { posts } from '@/data/posts';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { MarkdownContent } from '@/components/markdown-content';

export function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <div className="flex items-center gap-4 mb-6">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-medium">{post.author.name}</h3>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(post.date)}
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex gap-2 mb-8">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <MarkdownContent content={post.content} />
    </article>
  );
}