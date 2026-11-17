"use client";

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-sans), ui-sans-serif, system-ui, sans-serif" },
        body: { value: "var(--font-sans), ui-sans-serif, system-ui, sans-serif" },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
