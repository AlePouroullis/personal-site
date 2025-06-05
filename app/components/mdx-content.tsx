"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

interface MDXComponentProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
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
      className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg mb-4 overflow-x-auto text-sm"
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

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <MDXRemote {...source} components={mdxComponents} />
    </article>
  );
}
