import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "从一间店到连锁，我们只做这一件事 | Luban Creations",
  description:
    "Luban Creations 是马来西亚专注连锁孵化与商业化的团队。每年只接受 6 个项目，帮你把单店变成可复制、可盈利的连锁品牌。",
  openGraph: {
    title: "从一间店到连锁，我们只做这一件事 | Luban Creations",
    description:
      "马来西亚连锁孵化团队。每年只接 6 个高潜力项目，帮创始人建立可规模化的连锁模型。",
    siteName: "Luban Creations",
    locale: "zh_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
