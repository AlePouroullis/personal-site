import { getAllPosts } from "@/lib/blog";
import Terminal from "./Terminal";
import Link from "next/link";
import { formatDate } from "@/lib/date";

export default function Page() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-3xl mx-auto px-8 py-16">
        <main>
          <Terminal recentPosts={recentPosts} />
          <div className="font-mono text-sm space-y-2 bg-zinc-900 p-4 rounded border border-zinc-800">
            <div className="text-zinc-500"># Recent thoughts</div>
            {recentPosts.length === 0 ? (
              <div className="text-zinc-400 italic">
                Just waiting for inspiration...
              </div>
            ) : (
              <div className="space-y-2">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-400 hover:text-amber-400 transition-colors flex-1"
                    >
                      {post.title}
                    </Link>
                    <span className="text-zinc-500 text-xs ml-4">
                      {formatDate(post.date)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
