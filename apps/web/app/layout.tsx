import "./globals.css";

export const metadata = {
  title: "Prompt Shelf: save, organise and share your AI prompts",
  description:
    "Prompt Shelf is the prompt library where you save, collect and reuse your best AI prompts — public, private, in collections, with favourites and filters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-type="software" data-radius="soft" data-ground="sand" data-buttons="pill" data-motion>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/share.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0f1f10" />
        <meta name="site-kind" content="software" />
        <meta name="page-type" content="software" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400..700&family=JetBrains+Mono:wght@400..500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)`,
          }}
        />
      </head>
      <body className="mo-js">
        {children}
        <script src="/assets/backgrounds/backgrounds.js" />
        <script type="module" src="/assets/system.js" />
        <script type="module" src="/assets/motion/motion.js" />
        <script type="module" src="/assets/layout/layout.js" />
        <script type="module" src="/assets/diagrams/mount.js" />
        <script type="module" src="/assets/moments/moments.js" />
        <script type="module" src="/assets/moments/lib.js" />
        <script type="module" src="/assets/moments/marquee-row/moment.js" />
      </body>
    </html>
  );
}
