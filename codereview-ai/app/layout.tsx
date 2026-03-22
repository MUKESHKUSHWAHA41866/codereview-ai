import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/contexts/SettingsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeReview AI - Your Friendly Code Review Assistant",
  description:
    "Get instant, helpful code reviews from an AI assistant designed for developers. Review code, learn best practices, and debug faster.",
  keywords: [
    "code review",
    "AI assistant",
    "programming help",
    "debug code",
    "best practices",
  ],
  authors: [{ name: "CodeReview AI" }],
  openGraph: {
    title: "CodeReview AI",
    description: "Your friendly AI code review assistant",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}
