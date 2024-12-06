import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
        variant === 'secondary' && 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100',
        className
      )}
    >
      {children}
    </span>
  );
}