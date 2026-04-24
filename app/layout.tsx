import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import { projects } from "./data/projects";
import { NavigationProvider } from "./components/NavigationContext";
import ImagePreloader from "./components/ImagePreloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zech Wang",
  description: "Mechatronics Engineering student at University of Waterloo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `document.documentElement.classList.add('dark');`;

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/dotlol2.png" type="image/png" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <NavigationProvider>
            <ImagePreloader />
            <Navbar />
            {children}
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
