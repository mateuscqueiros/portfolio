import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "../styles/fonts/Inter.css";
import "../styles/fonts/Mada.css";
import "../styles/fonts/Nats.css";
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
      <body>
        {children}
        <Analytics debug={false} />
      </body>
    </html>
  );
}
