import { getAllPosts } from "@/lib/blog";
import Terminal from "./Terminal";
import Link from "next/link";
import { formatDate } from "@/lib/date";

const allPosts = getAllPosts();
const recentPosts = allPosts.slice(0, 3);
const hasMorePosts = allPosts.length > 3;

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-3xl mx-auto px-8 py-16">
        <main>
          <Terminal />
          <div className="font-mono text-sm space-y-2 bg-zinc-900 p-4 rounded border border-zinc-800">
            <div className="text-zinc-500"># Recent thoughts</div>
            {recentPosts.length === 0 ? (
              <div className="text-zinc-400 italic">
                Just waiting for inspiration...
              </div>
            ) : (
              <>
                <div className="space-y-1 mt-3">
                  {recentPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={`/blog/${post.slug}`}
                      className="flex justify-between items-center text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors px-1 -mx-1 rounded"
                    >
                      <span className="flex-1">{post.title}</span>
                      <div className="text-zinc-500 text-xs ml-4">
                        {formatDate(post.date)}
                      </div>
                    </Link>
                  ))}
                </div>
                {hasMorePosts && (
                  <Link
                    href="/blog"
                    className="text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded text-sm block mt-3"
                  >
                    → See more
                  </Link>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
