import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Post } from '@/data/posts';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/post/${post.id}`}>
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium dark:text-white">{post.author.name}</h3>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.date)}
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}