import React from "react";
import Link from "next/link";

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Header */}
        <header className="flex justify-between items-start mb-5">
          <div>
            <h1 className="text-xl font-medium tracking-tight">
              Alé Pouroullis
            </h1>
            <p className="text-sm mt-1 text-zinc-400">Product Engineer</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          <div className="font-mono text-sm space-y-2 bg-zinc-900 p-4 rounded border border-zinc-800">
            <div className="text-zinc-500">$ ssh ale@london.local</div>
            <div className="text-green-400">Connection established.</div>
            <div className="text-zinc-400 leading-tight">
              {`    _    _      `}
              <br />
              {`   /_\\  | | ___ `}
              <br />
              {`  //_\\\\ | |/ _ \\`}
              <br />
              {` /  _  \\| |  __/`}
              <br />
              {` \\_/ \\_/|_|\\___|`}
              <br />
            </div>
            <div className="text-zinc-500">Product Engineer</div>

            <div>
              <span className="text-amber-400">ale@london</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-zinc-300">$ whoami</span>
            </div>
            <div className="text-zinc-300">Product Engineer @ Humanloop</div>

            <div>
              <span className="text-amber-400">ale@london</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-zinc-300">$ git log --oneline journey</span>
            </div>
            <div className="text-zinc-400">HEAD → london/present</div>
            <div className="text-green-400">
              18a3f2e 2025-03-18: git checkout humanloop --branch product-eng
            </div>
            <div className="text-blue-400">
              7b9d1c4 2025-02-XX: git mv ~/za/cape-town ~/uk/london
            </div>
            <div className="text-purple-400">
              4e8a6f3 2024-12-XX: Graduated BSc CompSci + Applied Stats @ UCT
            </div>
            <div className="text-cyan-400">
              1f5c9a2 2022-02-XX: git init university --repo cape-town
            </div>
            <div className="text-zinc-500">...</div>
            <div className="text-yellow-400">
              0000000 2003-09-19: Initial commit
            </div>

            <div>
              <span className="text-amber-400">ale@london</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-zinc-300">
                $ ps aux | grep current_state
              </span>
            </div>
            <div className="text-green-400">
              running.exe --mode daily --location london_parks
            </div>
            <div className="text-green-400">
              handstands.py --progress decent --balance improving
            </div>
            <div className="text-yellow-400">
              guitar.daemon --status rekindling --nostalgia high
            </div>
            <div className="text-blue-400">
              writing.process --status waiting_for_inspiration
            </div>

            <div>
              <span className="text-amber-400">ale@london</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-zinc-300">$ ls -la /social</span>
            </div>
            <div className="space-y-1">
              <a
                href="https://www.linkedin.com/in/alexandros-pouroullis-a105051b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
              >
                → lrwxr-xr-x linkedin → corporate_performance_art
              </a>
              <a
                href="https://github.com/AlePouroullis"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
              >
                → lrwxr-xr-x github → commit_archaeology_site
              </a>
              <a
                href="mailto:alexpouroullis@gmail.com"
                className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
              >
                → lrwxr-xr-x email → bypass_the_algorithms
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
              >
                • -rw-r--r-- curated_mythology.pdf
              </a>
              <Link
                href="/blog"
                className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
              >
                drwxr-xr-x writing/ → occasional_brain_dumps
              </Link>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-amber-400">ale@london</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-zinc-300">$</span>
              <div className="w-2 h-4 bg-amber-400 animate-pulse"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalWebsite;
