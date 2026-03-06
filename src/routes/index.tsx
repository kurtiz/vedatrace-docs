import {createFileRoute, Link} from '@tanstack/react-router';
import {HomeLayout} from 'fumadocs-ui/layouts/home';
import {baseOptions} from '@/lib/layout.shared';
import {CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger} from 'fumadocs-ui/components/codeblock';
import {DynamicCodeBlock} from 'fumadocs-ui/components/dynamic-codeblock';
import {useState} from 'react';

const jsCode = `// npm install @vedatrace/sdk

import { vedatrace } from 'vedatrace'

const logger = vedatrace({
  apiKey: 'your-api-key',
  service: 'my-app'
})

logger.info('User signed up', { userId: '123' })
logger.error('Payment failed', { error: err.message })`;

const pythonCode = `# pip install vedatrace

from vedatrace import VedaTrace, VedaTraceConfig

config = VedaTraceConfig(
    api_key="YOUR_API_KEY",
    service="your-service",
    console_enabled=False,
)

logger = VedaTrace("YOUR_API_KEY", service="your-service", config=config)
logger.info("Service started", {"env": "production"})`;

const dartCode = `// dart pub add vedatrace

final logger = vedatrace(
    const VedatraceConfig(
        service: 'my-service',
        consoleEnabled: true,
    ),
);

logger.info('Application started');
logger.warn('Cache miss', metadata: <String, Object?>{'key': 'user:42'});

await logger.flush();
logger.dispose()`;

const terminalCode = `pnpm create vedatrace-app

◇ Project name
│ my-app

◆ Choose a framework
│ ● Next.js
│ ○ Express
│ ○ Fastify
│ ○ Bun

◇ API Key
│ vedatrace_xxxx_xxxx

New App launched!

Terminal

> pnpm vedatrace dev

○ Ready on http://localhost:8787`;

const writerCode = `---
title: Hello World
---

## Overview

I love **VedaTrace**!

\`\`\`ts tab="Tab 1"
console.log("Hello World")
\`\`\`

\`\`\`ts tab="Tab 2"
return 0;
\`\`\``;

const developerCode = `---
title: Hello World
---

import { logger } from "@/lib/logger";

## Overview

<LoggerDemo title="Test" />

\`\`\`ts twoslash
console.log("Hello World");

// give your code decorations [!code ++]
const name = "vedatrace";
\`\`\``;

const automationCode = `---
title: Log Pipeline
---

import { pipeline } from "@/lib/pipeline";

export async function DataView() {
  const logs = await db.select().from("logs");
  return logs.map(log => <LogCard key={log.id} {...log} />)
}

<DataView />

<auto-type-table path='./types.ts' name='LogEntry' />`;

export const Route = createFileRoute('/')({
    component: Home,
});

function Home() {
    return (
        <HomeLayout {...baseOptions()}>
            <main className="text-landing-foreground pt-4 pb-6 dark:text-landing-foreground-dark md:pb-12">
                {/* Hero Section - 60-Second Quickstart */}
                <div
                    className="relative flex min-h-150 h-[70vh] max-h-225 border rounded-2xl overflow-hidden mx-auto w-full max-w-350 bg-origin-border bg-[url('https://assets.vedatrace.dev/misc/ttten.svg')] bg-cover">
                    <img
                        alt="hero-image"
                        className="absolute top-115 left-[35%] max-w-300 rounded-xl border-2 lg:top-90"
                        src="https://assets.vedatrace.dev/misc/vedatrace-dashboard.png"
                        style={{color: 'transparent'}}
                    />
                    <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
                        <p className="mt-12 text-xs text-brand font-medium rounded-full p-2 border border-brand/50 w-fit bg-fd-primary">
                            Minimalist log observability built on Cloudflare Workers
                        </p>
                        <h1 className="text-4xl my-2 leading-tighter font-medium xl:text-5xl xl:mb-12 bg-fd-background w-fit p-3">
                            The anti-Sentry.<br className="md:hidden"/>
                            The anti-Datadog.
                        </h1>
                        <p className="text-lg mb-2 max-w-200 bg-fd-background p-3">
                            Stop wrestling with complex dashboards. Get the signal you need to fix bugs, not more noise
                            to manage.
                        </p>
                        <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit">
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="inline-flex justify-center px-5 py-3 rounded-lg font-medium tracking-tight transition-colors bg-fd-primary text-gray-100 text-brand-foreground max-sm:text-sm"
                            >
                                Get Started in 60 Seconds
                            </Link>
                            <a
                                href="https://github.com/kurtiz/vedatrace-docs"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex justify-center px-5 py-3 rounded-lg font-medium tracking-tight transition-colors border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent max-sm:text-sm"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Terminal Demo Section */}
                <div className="grid grid-cols-1 gap-10 mt-12 px-6 mx-auto w-full max-w-350 md:px-12">
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-4 font-medium tracking-tight text-center">
                            Try it out.
                        </h2>
                        <div className="rounded-xl border bg-fd-card overflow-hidden font-mono text-sm">
                            <div className="flex items-center gap-2 px-4 py-2 border-b bg-fd-muted">
                                <div className="size-3 rounded-full bg-red-500"/>
                                <div className="size-3 rounded-full bg-yellow-500"/>
                                <div className="size-3 rounded-full bg-green-500"/>
                                <span className="ml-2 text-fd-muted-foreground text-xs">localhost:8787</span>
                            </div>
                            <pre className="p-4 overflow-x-auto text-fd-muted-foreground">
                                <code>{terminalCode}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Testimonials Section */}
                    <div className="col-span-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 bg-fd-card border">
                                <p className="text-lg mb-4 italic text-fd-foreground">
                                    "VedaTrace cut our log costs by 80% while giving us better debugging capabilities. The AI debugger is a game-changer for our team."
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/10645823"
                                        alt="David Blass"
                                        className="size-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-sm">David Blass</p>
                                        <p className="text-xs text-fd-muted-foreground">CTO at Arktype</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl p-6 bg-fd-card border">
                                <p className="text-lg mb-4 italic text-fd-foreground">
                                    "Finally, logging that doesn't feel like navigating a spaceship cockpit. Simple, fast, and just works."
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/38025074"
                                        alt="Aiden Bai"
                                        className="size-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-sm">Aiden Bai</p>
                                        <p className="text-xs text-fd-muted-foreground">Creator of Million.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Previews Grid */}
                    <div className="col-span-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="rounded-xl overflow-hidden border bg-fd-card">
                                <img
                                    src="https://assets.vedatrace.dev/misc/vedatrace-dashboard.png"
                                    alt="Dashboard"
                                    className="w-full aspect-video object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-medium">Dashboard</h3>
                                    <p className="text-sm text-fd-muted-foreground">Real-time log streaming</p>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden border bg-fd-card">
                                <div className="w-full aspect-video bg-fd-muted flex items-center justify-center">
                                    <svg className="size-12 text-fd-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium">API Reference</h3>
                                    <p className="text-sm text-fd-muted-foreground">REST API documentation</p>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden border bg-fd-card">
                                <div className="w-full aspect-video bg-fd-muted flex items-center justify-center">
                                    <svg className="size-12 text-fd-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium">Integrations</h3>
                                    <p className="text-sm text-fd-muted-foreground">Connect your favorite tools</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customization Section */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-4 font-medium tracking-tight text-center">
                            Minimal aesthetics, Maximum customizability.
                        </h2>
                        <p className="text-center text-fd-muted-foreground mb-6">
                            VedaTrace offers well-designed themes, with configuration options to fit your needs.
                        </p>
                        <div className="rounded-xl border bg-fd-card p-4 font-mono text-sm">
                            <pre className="overflow-x-auto text-fd-muted-foreground">
                                <code>{`# Customize your VedaTrace setup
npx vedatrace init

> Choose a theme...
> Configure retention...
> Set up alerts...`}</code>
                            </pre>
                        </div>
                    </div>

                    {/* "Anybody can write" Section */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-4 font-medium tracking-tight text-center">
                            Anybody can write.
                        </h2>
                        <p className="text-center text-fd-muted-foreground mb-6">
                            Native support for structured logging, with intuitive syntax for all skill levels.
                        </p>
                        <WriterDeveloperTabs 
                            writerCode={writerCode}
                            developerCode={developerCode}
                            automationCode={automationCode}
                        />
                    </div>

                    {/* Feature Checkmark Lists */}
                    <div className="col-span-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-medium mb-4">The familiar syntax.</h3>
                                <p className="text-fd-muted-foreground mb-4 text-sm">
                                    Structured logging made simple, with intuitive conventions.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Multiple log levels (debug, info, warn, error)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Structured metadata with JSON support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Request/response correlation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Custom context injection</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-4">Extensive but simple.</h3>
                                <p className="text-fd-muted-foreground mb-4 text-sm">
                                    Advanced features for developers who need more.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Child loggers with context</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Framework integrations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>TypeScript type safety</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Plugin ecosystem</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-4">Content, always up-to-date.</h3>
                                <p className="text-fd-muted-foreground mb-4 text-sm">
                                    Logs that reflect your application's current state.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Real-time streaming</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Live tail viewing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Auto-refresh dashboards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Instant alert triggers</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Framework Section */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight text-center">Docs For Engineers.</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-medium mb-4">Framework Agnostic</h3>
                            <p className="text-fd-muted-foreground mb-6">
                                Official support for Next.js, Express, Fastify, Bun — portable to any JavaScript runtime.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="size-6" />
                                    <span className="font-medium">Next.js</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" className="size-6" />
                                    <span className="font-medium">Express</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" alt="Fastify" className="size-6" />
                                    <span className="font-medium">Fastify</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" alt="Bun" className="size-6" />
                                    <span className="font-medium">Bun</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-4">A truly composable SDK.</h3>
                            <p className="text-fd-muted-foreground mb-6">
                                Modular packages that work together — use what you need.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-fd-card border">
                                    <h4 className="font-medium mb-2">@vedatrace/core</h4>
                                    <p className="text-sm text-fd-muted-foreground">Core logging primitives</p>
                                </div>
                                <div className="p-4 rounded-xl bg-fd-card border">
                                    <h4 className="font-medium mb-2">@vedatrace/node</h4>
                                    <p className="text-sm text-fd-muted-foreground">Node.js runtime integration</p>
                                </div>
                                <div className="p-4 rounded-xl bg-fd-card border">
                                    <h4 className="font-medium mb-2">@vedatrace/ai</h4>
                                    <p className="text-sm text-fd-muted-foreground">AI-powered debugging</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Section */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-4 font-medium tracking-tight text-center">
                            Enhance your search experience.
                        </h2>
                        <p className="text-center text-fd-muted-foreground mb-6">
                            Integrate with Orama Search and Algolia Search in your logs easily.
                        </p>
                        <div className="rounded-xl border bg-fd-card p-6 max-w-md mx-auto">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-fd-muted text-fd-muted-foreground">
                                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span>Search logs...</span>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-sm font-medium">Getting Started</p>
                                <p className="text-sm text-fd-muted-foreground">Use VedaTrace in your project.</p>
                                <p className="text-sm font-medium">API Reference</p>
                                <p className="text-sm text-fd-muted-foreground">REST API documentation.</p>
                                <p className="text-sm font-medium">Configuration</p>
                                <p className="text-sm text-fd-muted-foreground">Setup and configuration options.</p>
                            </div>
                        </div>
                    </div>

                    {/* 60-Second Quickstart Code Block */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight">Get Started</h2>
                        <CodeBlockTabs defaultValue="javascript" className="w-full">
                            <CodeBlockTabsList className="grid grid-cols-3 mb-0">
                                <CodeBlockTabsTrigger value="javascript">JavaScript</CodeBlockTabsTrigger>
                                <CodeBlockTabsTrigger value="python">Python</CodeBlockTabsTrigger>
                                <CodeBlockTabsTrigger value="dart">Dart</CodeBlockTabsTrigger>
                            </CodeBlockTabsList>
                            <CodeBlockTab value="javascript">
                                <DynamicCodeBlock
                                    lang="js"
                                    code={jsCode}
                                />
                            </CodeBlockTab>
                            <CodeBlockTab value="python">
                                <DynamicCodeBlock
                                    lang="py"
                                    code={pythonCode}
                                />
                            </CodeBlockTab>
                            <CodeBlockTab value="dart">
                                <DynamicCodeBlock
                                    lang="dart"
                                    code={dartCode}/>
                            </CodeBlockTab>
                        </CodeBlockTabs>
                    </div>

                    {/* Choose Your Weapon - SDK Grid */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight">Choose Your Weapon</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="flex flex-col items-center p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <div
                                    className="size-12 mb-4 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                                    <img
                                        alt="JavaScript"
                                        className="size-10 rounded-md"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">Node.js / Bun</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">
                                    Server-side JavaScript applications
                                </p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/python-sdk"
                                  className="flex flex-col items-center p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <div
                                    className="size-12 mb-4 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                                    <img
                                        alt="Python"
                                        className="size-10 rounded-md"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">Python</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">
                                    Python applications and services
                                </p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/dart-sdk"
                                  className="flex flex-col items-center p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <div
                                    className="size-12 mb-4 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                                    <img
                                        alt="Dart"
                                        className="size-10 rounded-md"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"/>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">Dart</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">
                                    Dart and Flutter applications and services
                                </p>
                            </Link>
                            <div className="flex flex-col items-center p-6 bg-fd-card rounded-xl border opacity-75">
                                <div className="size-12 mb-4 bg-fd-muted rounded-lg flex items-center justify-center">
                                    <img
                                        alt="Go"
                                        className="size-10 rounded-md"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"/>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">Go</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">Coming soon</p>
                            </div>
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk/framework-integrations"
                                  className="flex flex-col items-center p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <div
                                    className="size-12 mb-4 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                                    <img
                                        alt="React"
                                        className="size-10 rounded-md"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">React / Next.js</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">
                                    React and Next.js applications
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Core Concepts - The "Why" */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight">Core Concepts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Edge Ingestion</h3>
                                <p className="text-fd-muted-foreground text-sm">Process logs in {'<'}50ms without
                                    slowing down your app</p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Auto-Scrubbing</h3>
                                <p className="text-fd-muted-foreground text-sm">Redact PII before logs leave your
                                    server</p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">AI Debugger</h3>
                                <p className="text-fd-muted-foreground text-sm">Llama 3 integration turns stack traces
                                    into plain-English fixes</p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Graceful Overflow</h3>
                                <p className="text-fd-muted-foreground text-sm">Soft-cap pricing that never drops
                                    logs</p>
                            </Link>
                        </div>
                    </div>

                    {/* API Reference & Webhooks */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight">Advanced Usage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">API Reference</h3>
                                <p className="text-fd-muted-foreground text-sm">Direct access to the POST /v1/logs
                                    endpoint</p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Webhooks</h3>
                                <p className="text-fd-muted-foreground text-sm">Receive real-time notifications for log
                                    events</p>
                            </Link>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="col-span-full rounded-2xl p-8 bg-origin-border border bg-fd-card text-center">
                        <h2 className="text-3xl font-medium mb-4">Build Better Logs</h2>
                        <p className="text-fd-muted-foreground mb-6 max-w-lg mx-auto">
                            Light and gorgeous, just like it should be.
                        </p>
                        <ul className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="size-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Battery guaranteed</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="size-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Fully open-source</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="size-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Within seconds</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="inline-flex justify-center px-5 py-3 rounded-lg font-medium tracking-tight transition-colors bg-fd-primary text-gray-100 text-brand-foreground max-sm:text-sm"
                            >
                                Read docs
                            </Link>
                            <a
                                href="https://github.com/kurtiz/vedatrace-docs"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex justify-center px-5 py-3 rounded-lg font-medium tracking-tight transition-colors border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent max-sm:text-sm"
                            >
                                Open GitHub
                            </a>
                        </div>
                    </div>

                    {/* GitHub Stars - kept at bottom */}
                    <div
                        className="rounded-2xl text-sm p-6 bg-origin-border shadow-lg border bg-fd-card flex flex-col items-center text-center col-span-full"
                    >
                        <div className="flex flex-row items-center gap-4 mb-4">
                            <a
                                href="https://github.com/kurtiz/vedatrace-docs"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent transition-colors"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                </svg>
                                <span className="font-medium">Star on GitHub</span>
                            </a>
                            <div className="text-fd-muted-foreground text-sm">
                                <span className="font-medium">100+</span> stars
                            </div>
                        </div>
                        <p className="text-fd-muted-foreground max-w-150">
                            Join our growing community of developers using VedaTrace for their log observability needs.
                        </p>
                    </div>
                </div>
            </main>
        </HomeLayout>
    );
}

function WriterDeveloperTabs({writerCode, developerCode, automationCode}: {writerCode: string, developerCode: string, automationCode: string}) {
    const [activeTab, setActiveTab] = useState<'writer' | 'developer' | 'automation'>('writer');
    
    return (
        <div className="rounded-xl border bg-fd-card overflow-hidden">
            <div className="flex border-b">
                <button
                    onClick={() => setActiveTab('writer')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'writer' 
                            ? 'bg-fd-primary text-gray-100' 
                            : 'text-fd-muted-foreground hover:text-fd-foreground'
                    }`}
                >
                    Writer
                </button>
                <button
                    onClick={() => setActiveTab('developer')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'developer' 
                            ? 'bg-fd-primary text-gray-100' 
                            : 'text-fd-muted-foreground hover:text-fd-foreground'
                    }`}
                >
                    Developer
                </button>
                <button
                    onClick={() => setActiveTab('automation')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'automation' 
                            ? 'bg-fd-primary text-gray-100' 
                            : 'text-fd-muted-foreground hover:text-fd-foreground'
                    }`}
                >
                    Automation
                </button>
            </div>
            <div className="p-4">
                {activeTab === 'writer' && <DynamicCodeBlock lang="md" code={writerCode} />}
                {activeTab === 'developer' && <DynamicCodeBlock lang="tsx" code={developerCode} />}
                {activeTab === 'automation' && <DynamicCodeBlock lang="ts" code={automationCode} />}
            </div>
        </div>
    );
}
