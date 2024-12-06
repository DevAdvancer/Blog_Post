import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      className="prose prose-lg max-w-none"
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        img: ({ node, ...props }) => (
          <img {...props} className="w-full rounded-lg my-8" />
        ),
        code: ({ node, inline, ...props }) => (
          <code
            {...props}
            className={`${
              inline
                ? 'bg-gray-100 rounded px-1 py-0.5'
                : 'block bg-gray-900 text-white p-4 rounded-lg overflow-x-auto'
            }`}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}