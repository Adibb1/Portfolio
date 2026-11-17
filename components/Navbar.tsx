"use client";

import { Box, Button, Container, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { profile } from "@/lib/data";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Posts", href: "#posts" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme !== "light";
  return (
    <IconButton
      aria-label="Toggle light and dark mode"
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted && !isDark ? <LuMoon /> : <LuSun />}
    </IconButton>
  );
}

export function Navbar() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg/80"
      backdropFilter="blur(10px)"
      borderBottomWidth="1px"
      borderColor="border"
    >
      <Container maxW="5xl">
        <Flex h="14" align="center" justify="space-between">
          <Link href="#top" fontWeight="bold" textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Text as="span" color="teal.500">
              &lt;
            </Text>
            {profile.shortName}
            <Text as="span" color="teal.500">
              /&gt;
            </Text>
          </Link>
          <HStack gap={1}>
            <HStack gap={1} display={{ base: "none", md: "flex" }}>
              {nav.map((n) => (
                <Button key={n.href} asChild variant="ghost" size="sm">
                  <a href={n.href}>{n.label}</a>
                </Button>
              ))}
            </HStack>
            <Button asChild colorPalette="teal" size="sm" ml={2}>
              <a href="#contact">Contact</a>
            </Button>
            <ThemeToggle />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
