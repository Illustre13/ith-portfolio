import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ui/ThemeProvider";
import PageTransitionWrapper from "@/components/ui/PageTransitionWrapper";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://illustretech.rw"),
  title: {
    default: "Illustre Tech House — Engineering What's Next",
    template: "%s | Illustre Tech House",
  },
  description:
    "Illustre Tech House is an IT consulting firm, specialising in custom software development, AI & data solutions, and digital transformation for NGOs, government, and SMEs across East Africa.",
  keywords: [
    "IT consulting Rwanda",
    "software development Kigali",
    "AI solutions Africa",
    "digital transformation East Africa",
    "NGO technology Rwanda",
    "Illustre Tech House",
  ],
  authors: [{ name: "Illustre Tech House", url: "https://illustretech.rw" }],
  creator: "Illustre Tech House",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://illustretech.rw",
    siteName: "Illustre Tech House",
    title: "Illustre Tech House — Engineering What's Next",
    description:
      "IT consulting in Kigali. Custom software, AI solutions, and digital transformation for African institutions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Illustre Tech House" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illustre Tech House — Engineering What's Next",
    description:
      "IT consulting in Kigali. Custom software, AI solutions, and digital transformation for African institutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Illustre Tech House",
  description:
    "IT consulting firm in Kigali, Rwanda. Custom software development, AI solutions, and digital transformation for African institutions.",
  url: "https://illustretech.rw",
  email: "info@illustretech.rw",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  areaServed: ["Rwanda", "East Africa"],
  knowsAbout: [
    "Custom Software Development",
    "Artificial Intelligence",
    "Data Analytics",
    "Digital Transformation",
    "Cloud Infrastructure",
  ],
};

/* Inline script: reads localStorage before first paint to set data-theme,
   preventing any flash of the wrong theme. */
const themeInitScript = `
(function(){
  try{
    var t=localStorage.getItem('ith-theme');
    if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}
    document.documentElement.setAttribute('data-theme',t);
  }catch(e){}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Theme init — must run before any paint */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-page min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
