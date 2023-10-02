import type { Metadata } from "next";
import "../styles/inter.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mateus Queirós",
  description: "Portfolio do desenvolvedor Mateus Queirós",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
