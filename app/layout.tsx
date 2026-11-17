import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `${profile.shortName} | Portfolio`,
  description: profile.tagline,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
