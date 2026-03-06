import {createFileRoute, Link} from '@tanstack/react-router';
import {HomeLayout} from 'fumadocs-ui/layouts/home';
import {baseOptions} from '@/lib/layout.shared';

export const Route = createFileRoute('/')({
    component: Home,
});

function Home() {
    return (
        <HomeLayout {...baseOptions()}>
            <main className="text-landing-foreground pt-4 pb-6 dark:text-landing-foreground-dark md:pb-12">
                {/* Hero Section */}
                <div
                    className="relative flex min-h-150 h-[70vh] max-h-225 border rounded-2xl overflow-hidden mx-auto w-full max-w-350 bg-origin-border bg-[url('https://assets.vedatrace.dev/misc/ttten.svg')] bg-cover">
                    {/* TODO: Replace with VedaTrace hero image */}
                    <img
                        alt="hero-image"
                        className="absolute top-115 left-[20%] max-w-300 rounded-xl border-2 lg:top-90"
                        src="https://assets.vedatrace.dev/misc/vedatrace-dashboard.png"
                        style={{color: 'transparent'}}
                    />
                    <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
                        <p className="mt-12 text-xs text-brand font-medium rounded-full p-2 border border-brand/50 w-fit bg-fd-primary">
                            the OpenTelemetry tracing solution for modern applications.
                        </p>
                        <h1 className="text-4xl my-8 leading-tighter font-medium xl:text-5xl xl:mb-12 bg-fd-background w-fit p-3">
                            Simplify distributed tracing,<br className="md:hidden"/>
                            your <span className="text-brand">way</span>.
                        </h1>
                        <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit">
                            <Link
                                to="/docs/$"
                                params={{_splat: ''}}
                                className="inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors bg-fd-primary text-gray-100 text-brand-foreground max-sm:text-sm"
                            >
                                Getting Started
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

                {/* Features Overview */}
                <div className="grid grid-cols-1 gap-10 mt-12 px-6 mx-auto w-full max-w-350 md:px-12 lg:grid-cols-2">
                    <p className="text-2xl tracking-tight leading-snug font-light col-span-full md:text-3xl xl:text-4xl">
                        VedaTrace is an <span className="text-brand font-medium">OpenTelemetry</span> tracing solution
                        for{' '}
                        <span className="text-brand font-medium">Developers</span>, beautifully designed for modern
                        applications.
                        Bringing powerful distributed tracing capabilities with SDKs for Python, JavaScript/TypeScript,
                        and Dart.
                    </p>

                    {/* Quick Start Terminal */}
                    <div
                        className="p-8 bg-radial-[circle_at_top_center] from-25% to-brand-secondary/50 rounded-xl col-span-full">
                        <h2 className="text-xl text-center text-brand font-mono font-bold uppercase mb-2">Try it
                            out.</h2>
                        <div className="relative mt-4 w-full mx-auto max-w-200">
                            <div
                                className="overflow-hidden rounded-md border bg-fd-background shadow-xl absolute bottom-5 right-4 z-10 animate-in fade-in slide-in-from-top-10">
                                <div
                                    className="relative flex h-6 flex-row items-center border-b bg-fd-muted px-4 text-xs text-fd-muted-foreground">
                                    <p className="absolute inset-x-0 text-center">localhost:3000</p>
                                </div>
                                <div className="p-4 text-sm">Trace collected successfully!</div>
                            </div>
                            <pre className="overflow-hidden rounded-xl border text-sm shadow-lg bg-fd-card">
                <div className="flex flex-row items-center gap-2 border-b px-4 py-2">
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
                      className="lucide lucide-terminal size-4"
                      aria-hidden="true"
                  >
                    <path d="M12 19h8"></path>
                    <path d="m4 17 6-6-6-6"></path>
                  </svg>
                  <span className="font-bold">Terminal</span>
                  <div className="grow"></div>
                  <div className="size-2 rounded-full bg-red-400"></div>
                </div>
                <div className="min-h-52">
                  <code className="grid p-4">
                    <span>pip install vedatrace</span>
                    <span> </span>
                    <span className="font-bold">◇ Initialize tracer</span>
                    <span>│ from vedatrace import Tracer</span>
                    <span>│ tracer = Tracer(service_name=&quot;my-app&quot;)</span>
                    <span>│</span>
                    <span className="font-bold">◆ Start tracing</span>
                    <span>│ with tracer.span(&quot;my-operation&quot;):</span>
                    <span>│     # Your code here</span>
                  </code>
                </div>
              </pre>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div
                        className="rounded-2xl text-sm bg-origin-border shadow-lg bg-brand-secondary text-brand-secondary-foreground relative p-0">
                        <div
                            className="absolute inset-0 z-2 inset-shadow-[0_10px_60px] inset-shadow-brand-secondary rounded-2xl"></div>
                        <div
                            className="group flex overflow-hidden [--duration:40s] [--gap:1rem] gap-(--gap) flex-row p-8">
                            <div className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row">
                                <div
                                    className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]">
                                    <p className="text-sm whitespace-pre-wrap">
                                        VedaTrace has drastically simplified our distributed tracing implementation. The
                                        Python SDK is
                                        incredibly easy to use and integrates seamlessly with our existing systems.
                                    </p>
                                    <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                                        {/* TODO: Replace with user avatar */}
                                        <img
                                            alt="avatar"
                                            className="size-8 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/124599"
                                            style={{color: 'transparent'}}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">Sarah Chen</p>
                                            <p className="text-xs text-fd-muted-foreground">Senior Engineer at
                                                TechCorp</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]">
                                    <p className="text-sm whitespace-pre-wrap">
                                        Finally, a tracing solution that doesn't require complex setup. VedaTrace's
                                        intuitive API and
                                        comprehensive documentation made it a joy to implement.
                                    </p>
                                    <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                                        {/* TODO: Replace with user avatar */}
                                        <img
                                            alt="avatar"
                                            className="size-8 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/35677084"
                                            style={{color: 'transparent'}}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">Michael Rodriguez</p>
                                            <p className="text-xs text-fd-muted-foreground">CTO at StartupXYZ</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]">
                                    <p className="text-sm whitespace-pre-wrap">
                                        The JavaScript SDK is fantastic! It works great with our Node.js backend and
                                        frontend applications.
                                        Highly recommended for any modern web project.
                                    </p>
                                    <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                                        {/* TODO: Replace with user avatar */}
                                        <img
                                            alt="avatar"
                                            className="size-8 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/38025074"
                                            style={{color: 'transparent'}}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">Emily Watson</p>
                                            <p className="text-xs text-fd-muted-foreground">Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]">
                                    <p className="text-sm whitespace-pre-wrap">
                                        As a Dart/Flutter developer, finding a good tracing library was challenging.
                                        VedaTrace's Dart SDK is
                                        exactly what we needed - simple, powerful, and well-documented.
                                    </p>
                                    <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                                        {/* TODO: Replace with user avatar */}
                                        <img
                                            alt="avatar"
                                            className="size-8 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/10645823"
                                            style={{color: 'transparent'}}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">David Park</p>
                                            <p className="text-xs text-fd-muted-foreground">Flutter Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Duplicate for seamless loop */}
                            <div className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row">
                                <div
                                    className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]">
                                    <p className="text-sm whitespace-pre-wrap">
                                        VedaTrace has drastically simplified our distributed tracing implementation. The
                                        Python SDK is
                                        incredibly easy to use and integrates seamlessly with our existing systems.
                                    </p>
                                    <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                                        {/* TODO: Replace with user avatar */}
                                        <img
                                            alt="avatar"
                                            className="size-8 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/124599"
                                            style={{color: 'transparent'}}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">Sarah Chen</p>
                                            <p className="text-xs text-fd-muted-foreground">Senior Engineer at
                                                TechCorp</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]">
                                    <p className="text-sm whitespace-pre-wrap">
                                        Finally, a tracing solution that doesn't require complex setup. VedaTrace's
                                        intuitive API and
                                        comprehensive documentation made it a joy to implement.
                                    </p>
                                    <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                                        {/* TODO: Replace with user avatar */}
                                        <img
                                            alt="avatar"
                                            className="size-8 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/35677084"
                                            style={{color: 'transparent'}}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">Michael Rodriguez</p>
                                            <p className="text-xs text-fd-muted-foreground">CTO at StartupXYZ</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]">
                                    <p className="text-sm whitespace-pre-wrap">
                                        The JavaScript SDK is fantastic! It works great with our Node.js backend and
                                        frontend applications.
                                        Highly recommended for any modern web project.
                                    </p>
                                    <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                                        {/* TODO: Replace with user avatar */}
                                        <img
                                            alt="avatar"
                                            className="size-8 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/38025074"
                                            style={{color: 'transparent'}}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">Emily Watson</p>
                                            <p className="text-xs text-fd-muted-foreground">Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col rounded-xl border bg-fd-card text-landing-foreground p-4 shadow-lg w-[320px]">
                                    <p className="text-sm whitespace-pre-wrap">
                                        As a Dart/Flutter developer, finding a good tracing library was challenging.
                                        VedaTrace's Dart SDK is
                                        exactly what we needed - simple, powerful, and well-documented.
                                    </p>
                                    <div className="mt-auto flex flex-row items-center gap-2 pt-4">
                                        {/* TODO: Replace with user avatar */}
                                        <img
                                            alt="avatar"
                                            className="size-8 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/10645823"
                                            style={{color: 'transparent'}}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">David Park</p>
                                            <p className="text-xs text-fd-muted-foreground">Flutter Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Documentation Preview */}
                    <div
                        className="rounded-2xl text-sm bg-origin-border shadow-lg bg-brand-secondary text-brand-secondary-foreground flex items-center justify-center p-0">
                        <div className="relative grid">
                            <div
                                className="absolute flex flex-row left-1/2 -translate-1/2 bottom-0 z-2 p-0.5 rounded-full bg-fd-card border shadow-xl">
                                <div
                                    role="none"
                                    className="absolute bg-fd-primary rounded-full w-20 h-8 transition-transform z-[-1]"
                                    style={{transform: 'translateX(calc(var(--spacing) * 20 * 0))'}}
                                ></div>
                                <button
                                    className="w-20 h-8 text-sm font-medium transition-colors rounded-full text-fd-primary-foreground">
                                    Docs
                                </button>
                                <button
                                    className="w-20 h-8 text-sm font-medium transition-colors rounded-full text-fd-muted-foreground">
                                    API
                                </button>
                                <button
                                    className="w-20 h-8 text-sm font-medium transition-colors rounded-full text-fd-muted-foreground">
                                    Examples
                                </button>
                            </div>
                            {/* TODO: Replace with VedaTrace documentation preview image */}
                            <img
                                alt="preview"
                                className="col-start-1 row-start-1 select-none animate-in fade-in slide-in-from-bottom-12 duration-800"
                                src="https://www.fumadocs.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain.4b91b3ef.png&w=1920&q=75"
                                style={{color: 'transparent'}}
                            />
                            <img
                                alt="preview"
                                className="col-start-1 row-start-1 select-none invisible"
                                src="https://www.fumadocs.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnotebook.171d9801.png&w=1920&q=75"
                                style={{color: 'transparent'}}
                            />
                            <img
                                alt="preview"
                                className="col-start-1 row-start-1 select-none invisible"
                                src="https://www.fumadocs.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopenapi.dd2e6172.png&w=1920&q=75"
                                style={{color: 'transparent'}}
                            />
                        </div>
                    </div>

                    {/* Features Card */}
                    <div className="rounded-2xl text-sm p-6 bg-origin-border shadow-lg border bg-fd-card flex flex-col">
                        <h3 className="font-medium tracking-tight text-xl lg:text-2xl mb-6">
                            Minimal configuration, maximum observability.
                        </h3>
                        <p className="mb-4">
                            VedaTrace provides simple, intuitive SDKs for all major platforms, with built-in support for
                            OpenTelemetry
                            standards.
                        </p>
                        <p className="mb-4">
                            Get started in minutes with our comprehensive documentation and examples for Python,
                            JavaScript/TypeScript,
                            and Dart.
                        </p>
                        <Link
                            to="/docs/$"
                            params={{_splat: ''}}
                            className="inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors bg-brand text-brand-foreground hover:bg-brand-200 self-start"
                        >
                            Explore Documentation
                        </Link>
                    </div>

                    {/* Markdown/MDX Features */}
                    <div className="col-span-full my-20">
                        <h2 className="text-4xl text-brand mb-8 text-center font-medium tracking-tight">Choose your
                            language.</h2>
                        <p className="text-center mb-8 mx-auto w-full max-w-200">
                            VedaTrace supports multiple programming languages with identical API patterns. Choose your
                            language and
                            start tracing today.
                        </p>
                        <div className="flex justify-center items-center gap-4 text-fd-muted-foreground mb-6">
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
                                className="lucide lucide-arrow-right size-4 first:hidden"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                            <button className="text-lg font-medium transition-colors text-brand">Python</button>
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
                                className="lucide lucide-arrow-right size-4 first:hidden"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                            <button className="text-lg font-medium transition-colors">JavaScript</button>
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
                                className="lucide lucide-arrow-right size-4 first:hidden"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                            <button className="text-lg font-medium transition-colors">Dart</button>
                        </div>
                        <div aria-hidden="false" className="animate-fd-fade-in">
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                <div
                                    className="bg-fd-card rounded-xl shiki relative border shadow-sm not-prose overflow-hidden text-sm">
                                    <div
                                        className="empty:hidden absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 p-1 [&_svg]:size-4 hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground"
                                            aria-label="Copy Text"
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
                                                <path
                                                    d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div
                                        className="text-[0.8125rem] py-3.5 overflow-auto max-h-150 fd-scroll-container">
                    <pre className="min-w-full w-max *:flex *:flex-col shiki shiki-themes github-light github-dark">
                      <code>
                        <span className="line">
                          {/* @ts-ignore */}
                            <span style={{
                                '--shiki-light': '#005CC5',
                                '--shiki-light-font-weight': 'bold',
                                '--shiki-dark': '#79B8FF',
                                '--shiki-dark-font-weight': 'bold'
                            }}>
                            # Python SDK
                          </span>
                        </span>
                        <span className="line">
                          {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#D73A49', '--shiki-dark': '#F97583'}}>from</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}> vedatrace </span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#D73A49', '--shiki-dark': '#F97583'}}>import</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}> Tracer</span>
                            {/* @ts-ignore */}
                        </span>
                        <span className="line"></span>
                        <span className="line">
                          {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#D73A49', '--shiki-dark': '#F97583'}}>tracer</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#D73A49', '--shiki-dark': '#F97583'}}>=</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}> Tracer(</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF'}}>service_name</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#D73A49', '--shiki-dark': '#F97583'}}>=</span>
                            {/* @ts-ignore */}
                            <span style={{
                                '--shiki-light': '#032F62',
                                '--shiki-dark': '#9ECBFF'
                            }}>&quot;my-python-app&quot;</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}>)</span>
                        </span>
                        <span className="line"></span>
                        <span className="line">
                          {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}>
                            # Create a simple span
                          </span>
                        </span>
                        <span className="line">
                          {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#D73A49', '--shiki-dark': '#F97583'}}>with</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}> tracer.span(</span>
                            {/* @ts-ignore */}
                            <span style={{
                                '--shiki-light': '#032F62',
                                '--shiki-dark': '#9ECBFF'
                            }}>&quot;hello-world&quot;</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}>):</span>
                        </span>
                        <span className="line">
                          {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}>    print(</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#032F62', '--shiki-dark': '#9ECBFF'}}>&quot;Hello, VedaTrace!&quot;</span>
                            {/* @ts-ignore */}
                            <span style={{'--shiki-light': '#24292E', '--shiki-dark': '#E1E4E8'}}>)</span>
                        </span>
                      </code>
                    </pre>
                                    </div>
                                </div>
                                <div className="max-lg:row-start-1">
                                    <h3 className="font-medium tracking-tight text-xl lg:text-2xl my-4">Python SDK</h3>
                                    <p>
                                        The Python SDK provides a simple, intuitive API for distributed tracing with
                                        OpenTelemetry support.
                                    </p>
                                    <ul className="text-xs list-disc list-inside mt-8">
                                        <li>Automatic context propagation</li>
                                        <li>Multiple exporter support (OTLP, Jaeger, Zipkin)</li>
                                        <li>Asynchronous operations support</li>
                                        <li>Child logger creation</li>
                                        <li>Custom span attributes and events</li>
                                        <li>Automatic sampling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GitHub Stars and Social Proof */}
                    <div
                        className="rounded-2xl text-sm p-6 bg-origin-border shadow-lg border bg-fd-card flex flex-col items-center text-center col-span-full">
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
                            Join our growing community of developers using VedaTrace for their distributed tracing
                            needs. Star the
                            repository to stay updated with the latest releases.
                        </p>
                    </div>
                </div>
            </main>
        </HomeLayout>
    );
}
