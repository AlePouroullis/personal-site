import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata = {
  title: "Writing - Alé Pouroullis",
  description:
    "Thoughts on software engineering, systems programming, and the intersection of technology and creativity.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Header */}
        <header className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <h1 className="text-2xl font-medium mb-2">Writing</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Some ramblings, as an outlet for my thoughts.
          </p>
        </header>

        {/* Posts */}
        <main className="space-y-1">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group py-6 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h2 className="font-medium mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    <Link href={`/blog/${post.slug}`} className="block">
                      {post.title}
                    </Link>
                  </h2>

                  {post.excerpt && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    {post.readingTime && (
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readingTime} min read
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </main>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500 dark:text-zinc-400">
              Just waiting for inspiration...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
