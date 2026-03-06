# VedaTrace Documentation

This is the official documentation for **VedaTrace** - an AI-powered observability platform that provides a complete solution for log management, distributed tracing, and error debugging with a minimalist interface.

## About VedaTrace

VedaTrace is built for modern developers who want simplicity without sacrificing power. It delivers:
- **AI-powered debugging** with plain-English error analysis
- **Instant log ingestion** with zero configuration
- **Zero-config PII scrubbing** for compliance
- **Edge-powered performance** with <50ms latency
- **Complete SDK ecosystem** for all major programming languages
- **Beautiful, minimalist dashboard** for log management

## Documentation Features

- **Modern Fumadocs UI** with animated scroll indicator (clerk style)
- Comprehensive documentation for all VedaTrace products
- AI-powered search functionality
- Responsive design for all devices
- Dark/light mode support
- Integration with Cloudflare Workers

## Prerequisites

- **Bun Runtime** (primary package manager)
- Git

## Getting Started

### 1. Clone the repository
```bash
git clone git@github.com:kurtiz/vedatrace-docs.git
cd vedatrace-docs
```

### 2. Install dependencies
```bash
bun install
```

### 3. Run development server
```bash
bun run dev
```

The documentation will be available at `http://localhost:3000`

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `deploy` | Build and deploy to Cloudflare Workers |
| `preview` | Preview production build locally |
| `types:check` | Run type checking |
| `postinstall` | Generate Fumadocs collections |

## Deployment

The documentation is deployed to **Cloudflare Workers** for optimal performance. To deploy:

```bash
bun run deploy
```

### Prerequisites for Deployment
- Cloudflare account
- Wrangler CLI (automatically installed via bun)

## Technology Stack

- **Framework:** Tanstack Start with React 19
- **Documentation:** Fumadocs UI and MDX
- **Styling:** Tailwind CSS v4
- **Package Manager:** Bun
- **Build Tool:** Vite
- **Deployment:** Cloudflare Workers

## Project Structure

```
vedatrace-docs/
├── content/                          # Documentation content (MDX files)
│   └── docs/
│       ├── index.mdx                 # Introduction
│       ├── meta.json                 # Sidebar configuration
│       ├── python-sdk/               # Python SDK documentation
│       ├── javascript-sdk/           # JavaScript/TypeScript SDK documentation
│       └── dart-sdk/                 # Dart SDK documentation
├── src/                              # Source code
│   ├── components/                   # React components
│   ├── lib/                         # Utilities and shared functions
│   ├── routes/                      # Tanstack Router routes
│   └── styles/                      # Global styles
├── .source/                         # Generated Fumadocs collections
└── node_modules/                    # Dependencies
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes in the `content/docs` directory
4. Test your changes locally using `bun run dev`
5. Commit your changes with a meaningful commit message
6. Push to your fork and create a pull request

## License

MIT
