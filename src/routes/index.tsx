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

const terminalCode = `> vedatrace dev
[12:00:01] INFO Starting VedaTrace collector on :8787
[12:00:02] INFO Connected to Cloudflare Workers

[12:00:03]  INFO my-app | User signed up {"userId": "usr_123", "email": "user@example.com"}
[12:00:05]  WARN my-app | Cache miss for key "user:123"
[12:00:06] ERROR my-app | Payment failed {"error": "insufficient_funds", "amount": 99}

> Live tail active - streaming logs...`;

const simpleLogCode = `// Simple as this
logger.info('Server started')

// With metadata
logger.warn('Cache miss', { key: 'user:123' })

// Errors with stack traces
try {
  await processPayment(order)
} catch (err) {
  logger.error('Payment failed', { error: err.message })
}`;

const advancedLogCode = `// Child loggers with context
const userLogger = logger.child({ userId: user.id })
userLogger.info('User action', { action: 'checkout' })

// Request-scoped logging
app.use((req, res, next) => {
  const reqLogger = logger.child({ 
    requestId: req.id,
    path: req.path 
  })
  reqLogger.info('Request started')
  next()
})`;

const pipelineLogCode = `// Batch processing logs
const batchLogger = logger.child({ 
  batchId: batch.id,
  source: 'csv-import' 
})

for (const row of rows) {
  batchLogger.debug('Processing row', { row: row.id })
  
  try {
    await processRow(row)
    batchLogger.info('Row processed', { row: row.id })
  } catch (err) {
    batchLogger.error('Row failed', { row: row.id, error: err.message })
  }
}

batchLogger.info('Batch complete', { total: rows.length, failed: failedCount })`;

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

                {/* Live Tail Demo Section */}
                <div className="grid grid-cols-1 gap-10 mt-12 px-6 mx-auto w-full max-w-350 md:px-12">
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-4 font-medium tracking-tight text-center">
                            See your logs live.
                        </h2>
                        <div className="rounded-xl border bg-fd-card overflow-hidden font-mono text-sm">
                            <div className="flex items-center gap-2 px-4 py-2 border-b bg-fd-muted">
                                <div className="size-3 rounded-full bg-red-500"/>
                                <div className="size-3 rounded-full bg-yellow-500"/>
                                <div className="size-3 rounded-full bg-green-500"/>
                                <span className="ml-2 text-fd-muted-foreground text-xs">VEDATRACE DASHBOARD</span>
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
                                    alt="Live Tail"
                                    className="w-full aspect-video object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-medium">Live Tail</h3>
                                    <p className="text-sm text-fd-muted-foreground">Stream logs in real-time</p>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden border bg-fd-card">
                                <div className="w-full aspect-video bg-fd-muted flex items-center justify-center">
                                    <svg className="size-12 text-fd-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium">Log Search</h3>
                                    <p className="text-sm text-fd-muted-foreground">Query by level, service, time</p>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden border bg-fd-card">
                                <div className="w-full aspect-video bg-fd-muted flex items-center justify-center">
                                    <svg className="size-12 text-fd-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium">Alerts</h3>
                                    <p className="text-sm text-fd-muted-foreground">Get notified instantly</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Configuration Section */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-4 font-medium tracking-tight text-center">
                            Configure, don't complicate.
                        </h2>
                        <p className="text-center text-fd-muted-foreground mb-6">
                            Smart defaults out of the box. Tweak only what you need.
                        </p>
                        <div className="rounded-xl border bg-fd-card p-4 font-mono text-sm">
                            <pre className="overflow-x-auto text-fd-muted-foreground">
                                <code>{`// vedatrace.config.js
export default {
  // Your API key from dashboard
  apiKey: process.env.VEDATRACE_API_KEY,
  
  // Service name for grouping
  service: 'my-app',
  
  // Log levels to send
  levels: ['error', 'warn', 'info'],
  
  // Sample 50% of debug logs in production
  sampling: {
    debug: process.env.NODE_ENV === 'production' ? 0.5 : 1
  },
  
  // Auto-scrub sensitive data
  scrub: {
    email: true,
    creditCard: true,
    ipAddress: true
  },
  
  // Flush interval (ms)
  flushInterval: 1000
}`}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Simple to Advanced Section */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-4 font-medium tracking-tight text-center">
                            From simple to powerful.
                        </h2>
                        <p className="text-center text-fd-muted-foreground mb-6">
                            Start with one line. Scale with child loggers, batching, and more.
                        </p>
                        <SimpleAdvancedTabs 
                            simpleCode={simpleLogCode}
                            advancedCode={advancedLogCode}
                            pipelineCode={pipelineLogCode}
                        />
                    </div>

                    {/* Feature Checkmark Lists */}
                    <div className="col-span-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-medium mb-4">Edge-first.</h3>
                                <p className="text-fd-muted-foreground mb-4 text-sm">
                                    Built on Cloudflare Workers for minimal latency.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{'<'}5ms ingestion latency</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Zero cold starts</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Global edge network</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Async, non-blocking</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-4">Secure by default.</h3>
                                <p className="text-fd-muted-foreground mb-4 text-sm">
                                    Your data stays protected with automatic PII handling.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Auto PII scrubbing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>GDPR compliant</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>End-to-end encryption</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Custom redaction rules</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-4">Soft-cap pricing.</h3>
                                <p className="text-fd-muted-foreground mb-4 text-sm">
                                    Never lose a log. Pay for what you use, fairly.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>No log drops ever</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>1M free logs/month</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>$0.50/1M after</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="size-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>No credit card needed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SDKs Section */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight text-center">SDKs for every stack.</h2>
                        <div className="mb-8">
                            <p className="text-fd-muted-foreground mb-6">
                                First-party SDKs for major languages. More coming soon.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="size-6" />
                                    <span className="font-medium">JavaScript</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="size-6" />
                                    <span className="font-medium">TypeScript</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="size-6" />
                                    <span className="font-medium">Python</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" alt="Dart" className="size-6" />
                                    <span className="font-medium">Dart</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fd-card border opacity-50">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" alt="Go" className="size-6" />
                                    <span className="font-medium">Go (soon)</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-fd-muted-foreground mb-6">
                                Framework integrations included.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-fd-card border">
                                    <h4 className="font-medium mb-2">Next.js</h4>
                                    <p className="text-sm text-fd-muted-foreground">App Router & Pages Router</p>
                                </div>
                                <div className="p-4 rounded-xl bg-fd-card border">
                                    <h4 className="font-medium mb-2">Express</h4>
                                    <p className="text-sm text-fd-muted-foreground">Middleware auto-logging</p>
                                </div>
                                <div className="p-4 rounded-xl bg-fd-card border">
                                    <h4 className="font-medium mb-2">Fastify</h4>
                                    <p className="text-sm text-fd-muted-foreground">Plugin support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Log Query Section */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-4 font-medium tracking-tight text-center">
                            Query logs, not dashboards.
                        </h2>
                        <p className="text-center text-fd-muted-foreground mb-6">
                            Powerful query language to find what matters.
                        </p>
                        <div className="rounded-xl border bg-fd-card p-6 max-w-2xl mx-auto font-mono text-sm">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-fd-muted text-fd-muted-foreground mb-4">
                                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span>level:error service:apiGateway</span>
                            </div>
                            <div className="space-y-2 text-fd-muted-foreground">
                                <div className="flex gap-2">
                                    <span className="text-red-400">ERROR</span>
                                    <span className="text-fd-muted-foreground">apiGateway</span>
                                    <span className="text-fd-muted-foreground">|</span>
                                    <span>Payment processing failed</span>
                                    <span className="text-fd-muted-foreground ml-auto">12:00:05</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-yellow-400">WARN</span>
                                    <span className="text-fd-muted-foreground">apiGateway</span>
                                    <span className="text-fd-muted-foreground">|</span>
                                    <span>Rate limit approaching</span>
                                    <span className="text-fd-muted-foreground ml-auto">12:00:04</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-red-400">ERROR</span>
                                    <span className="text-fd-muted-foreground">apiGateway</span>
                                    <span className="text-fd-muted-foreground">|</span>
                                    <span>Database connection timeout</span>
                                    <span className="text-fd-muted-foreground ml-auto">12:00:02</span>
                                </div>
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
                                    Dart and Flutter applications
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
                        <h2 className="text-3xl font-medium mb-4">Start logging in minutes</h2>
                        <p className="text-fd-muted-foreground mb-6 max-w-lg mx-auto">
                            No credit card. No complex setup. Just add the SDK and start logging.
                        </p>
                        <ul className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="size-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>1M logs free/month</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="size-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>5 minute setup</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="size-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>No credit card</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* @ts-ignore */}
                            <Link to="/docs/javascript-sdk"
                                  className="inline-flex justify-center px-5 py-3 rounded-lg font-medium tracking-tight transition-colors bg-fd-primary text-gray-100 text-brand-foreground max-sm:text-sm"
                            >
                                Get Started
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

function SimpleAdvancedTabs({simpleCode, advancedCode, pipelineCode}: {simpleCode: string, advancedCode: string, pipelineCode: string}) {
    const [activeTab, setActiveTab] = useState<'simple' | 'advanced' | 'pipeline'>('simple');
    
    return (
        <div className="rounded-xl border bg-fd-card overflow-hidden">
            <div className="flex border-b">
                <button
                    onClick={() => setActiveTab('simple')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'simple' 
                            ? 'bg-fd-primary text-gray-100' 
                            : 'text-fd-muted-foreground hover:text-fd-foreground'
                    }`}
                >
                    Simple
                </button>
                <button
                    onClick={() => setActiveTab('advanced')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'advanced' 
                            ? 'bg-fd-primary text-gray-100' 
                            : 'text-fd-muted-foreground hover:text-fd-foreground'
                    }`}
                >
                    Advanced
                </button>
                <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'pipeline' 
                            ? 'bg-fd-primary text-gray-100' 
                            : 'text-fd-muted-foreground hover:text-fd-foreground'
                    }`}
                >
                    Pipeline
                </button>
            </div>
            <div className="p-4">
                {activeTab === 'simple' && <DynamicCodeBlock lang="ts" code={simpleCode} />}
                {activeTab === 'advanced' && <DynamicCodeBlock lang="ts" code={advancedCode} />}
                {activeTab === 'pipeline' && <DynamicCodeBlock lang="ts" code={pipelineCode} />}
            </div>
        </div>
    );
}
