import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Zech Wang | Portfolio",
  description: "Mechatronics Engineering student at University of Waterloo. Building at the intersection of hardware and software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Theme script that defaults to light mode
  const themeScript = `
    (function() {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
      }
      // Light mode is default - no class needed
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/dotlol2.png" type="image/png" />
        {/* Google Fonts - DM Sans for body, Libre Baskerville for fallback serif */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
