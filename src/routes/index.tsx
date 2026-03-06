import { createFileRoute, Link } from '@tanstack/react-router';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'fumadocs-ui/components/tabs';

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
                        className="absolute top-115 left-[20%] max-w-300 rounded-xl border-2 lg:top-90"
                        src="https://assets.vedatrace.dev/misc/vedatrace-dashboard.png"
                        style={{ color: 'transparent' }}
                    />
                    <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
                        <p className="mt-12 text-xs text-brand font-medium rounded-full p-2 border border-brand/50 w-fit bg-fd-primary">
                            Minimalist log observability built on Cloudflare Workers
                        </p>
                        <h1 className="text-4xl my-8 leading-tighter font-medium xl:text-5xl xl:mb-12 bg-fd-background w-fit p-3">
                            The anti-Sentry.<br className="md:hidden" />
                            The anti-Datadog.
                        </h1>
                        <p className="text-lg mb-8 max-w-200 bg-fd-background p-3">
                            Stop wrestling with complex dashboards. Get the signal you need to fix bugs, not more noise to manage.
                        </p>
                        <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit">
                            <Link
                                to="/docs/javascript-sdk"
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
                        <Tabs defaultValue="javascript" className="w-full">
                            <TabsList className="grid grid-cols-3 mb-4">
                                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                <TabsTrigger value="python">Python</TabsTrigger>
                                <TabsTrigger value="cloudflare">Cloudflare Workers</TabsTrigger>
                            </TabsList>
                            <TabsContent value="javascript" className="bg-fd-card rounded-xl border p-6 shadow-lg">
                                <h3 className="font-medium tracking-tight text-xl mb-4">Node.js / Bun</h3>
                                <div className="relative">
                                    <div className="empty:hidden absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 p-1 [&_svg]:size-4 hover:text-fd-accent-foreground"
                                            aria-label="Copy Text"
                                            onClick={() => {
                                                navigator.clipboard.writeText('npm install @vedatrace/sdk');
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-clipboard"
                                                aria-hidden="true"
                                            >
                                                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <pre className="text-sm">
                                        <code className="language-bash">
                                            <span className="line">npm install @vedatrace/sdk</span>
                                            <span className="line"></span>
                                            <span className="line">import { VedaTrace } from '@vedatrace/sdk';</span>
                                            <span className="line">const vt = new VedaTrace("vt_key_...");</span>
                                            <span className="line"></span>
                                            <span className="line">vt.error("Payment failed", { userId: "123", amount: 50 });</span>
                                        </code>
                                    </pre>
                                </div>
                            </TabsContent>
                            <TabsContent value="python" className="bg-fd-card rounded-xl border p-6 shadow-lg">
                                <h3 className="font-medium tracking-tight text-xl mb-4">Python</h3>
                                <div className="relative">
                                    <div className="empty:hidden absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 p-1 [&_svg]:size-4 hover:text-fd-accent-foreground"
                                            aria-label="Copy Text"
                                            onClick={() => {
                                                navigator.clipboard.writeText('pip install vedatrace');
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-clipboard"
                                                aria-hidden="true"
                                            >
                                                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <pre className="text-sm">
                                        <code className="language-python">
                                            <span className="line">pip install vedatrace</span>
                                            <span className="line"></span>
                                            <span className="line">from vedatrace import VedaTrace</span>
                                            <span className="line">vt = VedaTrace("vt_key_...")</span>
                                            <span className="line"></span>
                                            <span className="line">vt.error("Payment failed", {"{"} "userId": "123", "amount": 50 {"}"});</span>
                                        </code>
                                    </pre>
                                </div>
                            </TabsContent>
                            <TabsContent value="cloudflare" className="bg-fd-card rounded-xl border p-6 shadow-lg">
                                <h3 className="font-medium tracking-tight text-xl mb-4">Cloudflare Workers</h3>
                                <div className="relative">
                                    <div className="empty:hidden absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 p-1 [&_svg]:size-4 hover:text-fd-accent-foreground"
                                            aria-label="Copy Text"
                                            onClick={() => {
                                                navigator.clipboard.writeText('npm install @vedatrace/cloudflare');
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-clipboard"
                                                aria-hidden="true"
                                            >
                                                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <pre className="text-sm">
                                        <code className="language-javascript">
                                            <span className="line">npm install @vedatrace/cloudflare</span>
                                            <span className="line"></span>
                                            <span className="line">import { VedaTrace } from '@vedatrace/cloudflare';</span>
                                            <span className="line">const vt = new VedaTrace("vt_key_...");</span>
                                            <span className="line"></span>
                                            <span className="line">vt.error("Payment failed", { userId: "123", amount: 50 });</span>
                                        </code>
                                    </pre>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Choose Your Weapon - SDK Grid */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight">Choose Your Weapon</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Link
                                to="/docs/javascript-sdk"
                                className="flex flex-col items-center p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <div className="size-12 mb-4 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="text-fd-primary font-bold text-lg">JS</span>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">Node.js / Bun</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">Server-side JavaScript applications</p>
                            </Link>
                            <Link
                                to="/docs/python-sdk"
                                className="flex flex-col items-center p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <div className="size-12 mb-4 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="text-fd-primary font-bold text-lg">Py</span>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">Python</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">Python applications and services</p>
                            </Link>
                            <Link
                                to="/docs/cloudflare-sdk"
                                className="flex flex-col items-center p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <div className="size-12 mb-4 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="text-fd-primary font-bold text-lg">CF</span>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">Cloudflare Workers</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">Native edge support for Cloudflare Workers</p>
                            </Link>
                            <div className="flex flex-col items-center p-6 bg-fd-card rounded-xl border opacity-75">
                                <div className="size-12 mb-4 bg-fd-muted rounded-lg flex items-center justify-center">
                                    <span className="text-fd-muted-foreground font-bold text-lg">Go</span>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">Go</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">Coming soon</p>
                            </div>
                            <Link
                                to="/docs/react-sdk"
                                className="flex flex-col items-center p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <div className="size-12 mb-4 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="text-fd-primary font-bold text-lg">⚛️</span>
                                </div>
                                <h3 className="font-medium tracking-tight text-lg mb-2">React / Next.js</h3>
                                <p className="text-fd-muted-foreground text-sm text-center">React and Next.js applications</p>
                            </Link>
                        </div>
                    </div>

                    {/* Core Concepts - The "Why" */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight">Core Concepts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Link
                                to="/docs/edge-ingestion"
                                className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Edge Ingestion</h3>
                                <p className="text-fd-muted-foreground text-sm">Process logs in <50ms without slowing down your app</p>
                            </Link>
                            <Link
                                to="/docs/auto-scrubbing"
                                className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Auto-Scrubbing</h3>
                                <p className="text-fd-muted-foreground text-sm">Redact PII before logs leave your server</p>
                            </Link>
                            <Link
                                to="/docs/ai-debugger"
                                className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">AI Debugger</h3>
                                <p className="text-fd-muted-foreground text-sm">Llama 3 integration turns stack traces into plain-English fixes</p>
                            </Link>
                            <Link
                                to="/docs/graceful-overflow"
                                className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Graceful Overflow</h3>
                                <p className="text-fd-muted-foreground text-sm">Soft-cap pricing that never drops logs</p>
                            </Link>
                        </div>
                    </div>

                    {/* API Reference & Webhooks */}
                    <div className="col-span-full">
                        <h2 className="text-3xl text-brand mb-8 font-medium tracking-tight">Advanced Usage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Link
                                to="/docs/api-reference"
                                className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">API Reference</h3>
                                <p className="text-fd-muted-foreground text-sm">Direct access to the POST /v1/logs endpoint</p>
                            </Link>
                            <Link
                                to="/docs/webhooks"
                                className="flex flex-col p-6 bg-fd-card rounded-xl border hover:bg-fd-accent transition-colors"
                            >
                                <h3 className="font-medium tracking-tight text-lg mb-3">Webhooks</h3>
                                <p className="text-fd-muted-foreground text-sm">Receive real-time notifications for log events</p>
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
