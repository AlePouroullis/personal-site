---
title: "Building a Terminal-Style Personal Website"
date: "2024-03-20"
description: "How I built my personal website to look like a terminal, and why I chose this approach."
---

# Building a Terminal-Style Personal Website

I recently rebuilt my personal website with a terminal-inspired design. This post explores the why and how of creating a website that feels like you're SSHing into my brain.

## Why a Terminal?

Terminals are where I spend most of my time as a developer. They're powerful, efficient, and have a certain aesthetic that I find appealing. I wanted my website to reflect this part of my identity while still being accessible to non-technical visitors.

## The Tech Stack

- **Next.js 14** - For the framework and server components
- **Tailwind CSS** - For styling
- **React** - For the interactive components
- **MDX** - For blog posts

## Key Features

### 1. Mode Switching

The website has two modes:

- **Tech Mode**: A full terminal experience with git logs, process lists, and file system navigation
- **Human Mode**: A more traditional about page, but still within the terminal aesthetic

This dual-mode approach lets visitors choose their preferred level of technical detail.

### 2. ASCII Art

The header uses ASCII art to display my name. This was created using a text-to-ASCII art generator and then manually tweaked for better alignment.

```bash
 █████╗ ██╗     ███████╗    ██████╗
 ██╔══██╗██║     ██╔════╝    ██╔══██╗
 ███████║██║     █████╗      ██████╔╝
 ██╔══██║██║     ██╔══╝      ██╔═══╝
 ██║  ██║███████╗███████╗    ██║
 ╚═╝  ╚═╝╚══════╝╚══════╝    ╚═╝
```

### 3. Git History

In tech mode, my journey is displayed as a git log:

```bash
18a3f2e 2025-03-XX: git checkout humanloop --branch product-eng
7b9d1c4 2025-02-XX: git mv ~/za/cape-town ~/uk/london
4e8a6f3 2024-12-XX: Graduated BSc CompSci + Applied Stats @ UCT
```

This provides a familiar format for developers while telling my story in a unique way.

## Challenges and Solutions

### 1. Accessibility

Terminal UIs aren't known for their accessibility. To address this:

- High contrast colors
- Clear text hierarchy
- Proper semantic HTML
- Keyboard navigation support

### 2. Mobile Responsiveness

Terminal interfaces are typically fixed-width. To make it mobile-friendly:

- Responsive font sizes
- Flexible container widths
- Touch-friendly interactive elements

### 3. Performance

The terminal-style UI could be heavy on animations and state. To keep it performant:

- Server-side rendering for initial load
- Client components only where needed
- Minimal JavaScript
- Efficient CSS with Tailwind

## The Code

The website is split into two main components:

- A server component (`page.tsx`) that handles data fetching
- A client component (`terminal.tsx`) that manages the interactive UI

This separation allows for optimal performance while maintaining the interactive terminal experience.

## Future Improvements

Some ideas for future enhancements:

- Command history navigation
- More interactive terminal commands
- Custom terminal themes
- Easter eggs (because why not?)

## Conclusion

Building a terminal-style website was a fun project that let me combine my love for terminals with web development. It's not the most conventional approach, but it's uniquely me.

The source code is available on [GitHub](https://github.com/AlePouroullis) if you want to see how it's implemented or use it as inspiration for your own project.

---

_P.S. If you're reading this on the website, try switching between tech and human mode using the `switch --mode` command!_
