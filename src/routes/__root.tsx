import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import * as React from 'react';
import appCss from '@/styles/app.css?url';
import { RootProvider } from 'fumadocs-ui/provider/tanstack';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'VedaTrace Docs',
      },
      {
        name: 'description',
        content: 'Minimalist log observability built on Cloudflare Workers. Stop wrestling with complex dashboards. Get the signal you need to fix bugs, not more noise to manage.',
      },
      // Open Graph metadata
      {
        property: 'og:title',
        content: 'VedaTrace - Minimalist Log Observability',
      },
      {
        property: 'og:description',
        content: 'Minimalist log observability built on Cloudflare Workers. Stop wrestling with complex dashboards. Get the signal you need to fix bugs, not more noise to manage.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://vedatrace.dev',
      },
      {
        property: 'og:image',
        content: 'https://assets.vedatrace.dev/misc/docs-og-light.png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:image:alt',
        content: 'VedaTrace - Minimalist Log Observability',
      },
      {
        property: 'og:site_name',
        content: 'VedaTrace',
      },
      // Twitter metadata
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'VedaTrace - Minimalist Log Observability',
      },
      {
        name: 'twitter:description',
        content: 'Minimalist log observability built on Cloudflare Workers. Stop wrestling with complex dashboards. Get the signal you need to fix bugs, not more noise to manage.',
      },
      {
        name: 'twitter:image',
        content: 'https://assets.vedatrace.dev/misc/docs-og-light.png',
      },
      {
        name: 'twitter:image:alt',
        content: 'VedaTrace - Minimalist Log Observability',
      },
      {
        name: 'twitter:site',
        content: '@vedatrace',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }, {rel: "icon", href: "/logo.png"}],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Scripts />
      </body>
    </html>
  );
}
