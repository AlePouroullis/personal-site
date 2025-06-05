"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Post } from "@/lib/blog";
import { formatDate } from "@/lib/date";

interface TerminalProps {
  recentPosts: Post[];
}

const Terminal = ({ recentPosts }: TerminalProps) => {
  const [techMode, setTechMode] = useState(true);

  return (
    <div className="font-mono text-sm space-y-2 bg-zinc-900 p-4 rounded border border-zinc-800">
      <div>
        <span className="text-amber-400">ale@london</span>
        <span className="text-zinc-500">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-zinc-300">$ </span>
        <button
          onClick={() => setTechMode(!techMode)}
          className="text-zinc-300 hover:text-amber-400 underline transition-colors"
        >
          switch --mode {techMode ? "vanilla" : "extra-spicy"}
        </button>
      </div>
      <div className="text-zinc-500">$ ssh ale@london.local</div>
      <div className="text-green-400">Connection established.</div>

      <div
        className="text-amber-400 leading-none my-3"
        style={{ fontFamily: "monospace", whiteSpace: "pre" }}
      >
        {`  █████╗ ██╗     ███████╗    ██████╗`}<br />
        {` ██╔══██╗██║     ██╔════╝    ██╔══██╗`}<br />
        {` ███████║██║     █████╗      ██████╔╝`}<br />
        {` ██╔══██║██║     ██╔══╝      ██╔═══╝ `}<br />
        {` ██║  ██║███████╗███████╗    ██║     `}<br />
        {` ╚═╝  ╚═╝╚══════╝╚══════╝    ╚═╝     `}
      </div>
      <div className="text-zinc-500">Product Engineer</div>

      {techMode ? (
        // Tech Mode
        <>
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
            18a3f2e 2025-03-XX: git checkout humanloop --branch product-eng
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
            <span className="text-zinc-300">$ ps aux | grep current_state</span>
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
              lrwxr-xr-x linkedin → corporate_performance_art
            </a>
            <a
              href="https://github.com/AlePouroullis"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
            >
              lrwxr-xr-x github → commit_archaeology_site
            </a>
            <a
              href="mailto:alexpouroullis@gmail.com"
              className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
            >
              lrwxr-xr-x email → bypass_the_algorithms
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
            >
              -rw-r--r-- resume → curated_mythology.pdf
            </a>
          </div>
        </>
      ) : (
        // Human Mode
        <>
          <div>
            <span className="text-amber-400">ale@london</span>
            <span className="text-zinc-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-zinc-300">$ cat about.txt</span>
          </div>
          <div className="text-zinc-300 space-y-3 mt-2">
            <p>
              I&apos;m a Product Engineer at Humanloop, where I build tools that
              help enterprises integrate AI into their applications.
            </p>
            <p>
              Originally from South Africa, I studied Computer Science and
              Applied Statistics at the University of Cape Town (2022-2024). I
              moved to London in early 2025 to explore the tech scene here.
            </p>
            <p>
              When I&apos;m not coding, I enjoy running through London&apos;s
              parks, practicing handstands, and slowly getting back into music
              production and guitar playing.
            </p>
          </div>

          <div>
            <span className="text-amber-400">ale@london</span>
            <span className="text-zinc-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-zinc-300">$ ls contacts/</span>
          </div>
          <div className="space-y-1">
            <a
              href="https://www.linkedin.com/in/alexandros-pouroullis-a105051b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
            >
              📧 LinkedIn - Professional network
            </a>
            <a
              href="https://github.com/AlePouroullis"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
            >
              💻 GitHub - Code projects
            </a>
            <a
              href="mailto:alexpouroullis@gmail.com"
              className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
            >
              ✉️ Email - Get in touch
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors underline px-1 -mx-1 rounded"
            >
              📄 Resume - Full background
            </a>
          </div>
        </>
      )}

      <div className="flex items-center gap-1">
        <span className="text-amber-400">ale@london</span>
        <span className="text-zinc-500">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-zinc-300">$</span>
        <div className="w-2 h-4 bg-amber-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Terminal;
