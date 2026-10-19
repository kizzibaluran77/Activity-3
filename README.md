# Activity-3

# Word & Line Counter CLI

A small Node.js command-line tool that reads a text file and prints the number of lines, words, and characters it contains.

## Requirements

- [Node.js](https://nodejs.org) v18 or higher

## Installation

```bash
git clone https://github.com/kizzibaluran77/Activity-3.git
cd Activity-3
```

There are no dependencies to install.

## Usage

```bash
npm start <filename>
```

Example:

```bash
npm start sample.txt
```

### Example output

```text
File: sample.txt
Lines: 7
Words: 40
Characters: 250
```

### Error handling

If you forget the filename, the tool prints a usage message:

```text
Usage: npm start <filename>
Example: npm start sample.txt
```

If the file does not exist, it prints a friendly error instead of crashing:

```text
Error: file "nope.txt" was not found.
```

## How it works

- `process.argv` reads the filename from the command line.
- `fs/promises` reads the file asynchronously.
- `path.resolve` turns the filename into a full file path.
- A `try/catch` block handles missing or unreadable files.
- The project uses ES modules (`"type": "module"` in `package.json`).

## Project structure

```text
word-counter/
├── index.js        # CLI entry point
├── sample.txt      # Sample input file
├── package.json
└── README.md
```

## Debrief answers

**What happened when you passed a file that didn't exist?**
Node threw an error with the code `ENOENT`. The `try/catch` block caught it and printed a friendly message instead of a stack trace.

**Why use the promises version of `fs` instead of the sync version?**
`readFileSync` blocks the whole program while it reads. The promises version lets Node keep doing other work while waiting on the disk.

**What would happen if this ran on a server handling 1,000 requests at once?**
With sync reads, each request would block all the others and the server would freeze. With async reads, Node handles them concurrently using its event loop.
