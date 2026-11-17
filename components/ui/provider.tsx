"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

const config = defineConfig({
  globalCss: {
    html: {
      // Smooth scrolling when you click a menu link (turned off for people
      // who set "reduce motion" on their phone or computer).
      scrollBehavior: "smooth",
      "@media (prefers-reduced-motion: reduce)": {
        scrollBehavior: "auto",
      },
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
        },
        body: {
          value: "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
