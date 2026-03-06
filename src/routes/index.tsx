import {createFileRoute, Link} from '@tanstack/react-router';
import {HomeLayout} from 'fumadocs-ui/layouts/home';
import {baseOptions} from '@/lib/layout.shared';
import {CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger} from 'fumadocs-ui/components/codeblock';
import {DynamicCodeBlock} from 'fumadocs-ui/components/dynamic-codeblock';

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
logger.dispose();`

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
                                  className="inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors bg-fd-primary text-gray-100 text-brand-foreground max-sm:text-sm"
                            >
                                Get Started in 60 Seconds
                            </Link>
                            <a
                                href="https://github.com/kurtiz/vedatrace-docs"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent max-sm:text-sm"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* 60-Second Quickstart Code Block */}
                <div className="grid grid-cols-1 gap-10 mt-12 px-6 mx-auto w-full max-w-350 md:px-12">
                    <div className="col-span-full">
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
                            <Link to="/docs/edge-ingestion"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Edge Ingestion</h3>
                                <p className="text-fd-muted-foreground text-sm">Process logs in {'<'}50ms without
                                    slowing down your app</p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/auto-scrubbing"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Auto-Scrubbing</h3>
                                <p className="text-fd-muted-foreground text-sm">Redact PII before logs leave your
                                    server</p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/ai-debugger"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">AI Debugger</h3>
                                <p className="text-fd-muted-foreground text-sm">Llama 3 integration turns stack traces
                                    into plain-English fixes</p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/graceful-overflow"
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
                            <Link to="/docs/api-reference"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">API Reference</h3>
                                <p className="text-fd-muted-foreground text-sm">Direct access to the POST /v1/logs
                                    endpoint</p>
                            </Link>
                            {/* @ts-ignore */}
                            <Link to="/docs/webhooks"
                                  className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Webhooks</h3>
                                <p className="text-fd-muted-foreground text-sm">Receive real-time notifications for log
                                    events</p>
                            </Link>
                        </div>
                    </div>

                    {/* GitHub Stars and Social Proof */}
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
