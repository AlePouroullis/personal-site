import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate, formatDateLong } from "@/lib/date";
import { ArrowLeft, Clock } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Alé Pouroullis`,
    description: post.excerpt || `Read ${post.title} by Alé Pouroullis`,
  };
}

interface MDXComponentProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const mdxComponents = {
  h1: (props: MDXComponentProps) => (
    <h1
      className="text-2xl font-medium mb-6 text-zinc-900 dark:text-zinc-100"
      {...props}
    />
  ),
  h2: (props: MDXComponentProps) => (
    <h2
      className="text-xl font-medium mb-4 mt-8 text-zinc-800 dark:text-zinc-200"
      {...props}
    />
  ),
  h3: (props: MDXComponentProps) => (
    <h3
      className="text-lg font-medium mb-3 mt-6 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  p: (props: MDXComponentProps) => (
    <p
      className="mb-4 leading-relaxed text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  ul: (props: MDXComponentProps) => (
    <ul className="mb-4 space-y-2 pl-4" {...props} />
  ),
  ol: (props: MDXComponentProps) => (
    <ol className="mb-4 space-y-2 pl-4" {...props} />
  ),
  li: (props: MDXComponentProps) => (
    <li
      className="text-zinc-700 dark:text-zinc-300 relative before:content-['−'] before:absolute before:-left-4 before:text-amber-600 dark:before:text-amber-400"
      {...props}
    />
  ),
  blockquote: (props: MDXComponentProps) => (
    <blockquote
      className="border-l-2 border-amber-600 dark:border-amber-400 pl-4 mb-4 italic text-zinc-600 dark:text-zinc-400"
      {...props}
    />
  ),
  code: (props: MDXComponentProps) => (
    <code
      className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: MDXComponentProps) => (
    <pre
      className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg mb-4 overflow-x-auto text-sm font-mono"
      {...props}
    />
  ),
  a: (props: MDXComponentProps) => (
    <a
      className="text-amber-600 dark:text-amber-400 hover:underline"
      {...props}
    />
  ),
};

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      <div className="max-w-2xl mx-auto px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to writing
          </Link>

          <h1 className="text-2xl font-medium mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <time className="font-mono" dateTime={post.date}>
              {formatDateLong(post.date)}
            </time>
            {post.readingTime && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {post.readingTime} min read
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/blog"
            className="text-sm text-zinc-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            ← Back to all posts
          </Link>
        </footer>
      </div>
    </div>
  );
}