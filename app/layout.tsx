import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashlesha Sarma Portfolio",
  description:
    "Portfolio of Ashlesha Sarma — Full Stack Developer and AI/ML Enthusiast.",
  keywords: ["portfolio", "full stack", "AI/ML", "engineer", "developer"],
  openGraph: {
    title: "Ashlesha Sarma — Portfolio",
    description: "Full Stack Developer + AI/ML Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Prevent FOUC: apply theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-bg text-ink antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
