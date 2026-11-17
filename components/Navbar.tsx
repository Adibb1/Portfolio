"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
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
      size="md"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted && !isDark ? <LuMoon /> : <LuSun />}
    </IconButton>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the phone/tablet menu with the Escape key, or when the screen
  // becomes wide enough to show the normal menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg/90"
      backdropFilter="blur(10px)"
      borderBottomWidth="1px"
      borderColor="border"
    >
      <Container maxW="5xl" px={{ base: 4, md: 8 }}>
        <Flex h="14" align="center" justify="space-between" gap={2}>
          <Link
            href="#top"
            fontWeight="bold"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            whiteSpace="nowrap"
            onClick={() => setOpen(false)}
          >
            <Text as="span" color="teal.500">
              &lt;
            </Text>
            {profile.shortName}
            <Text as="span" color="teal.500">
              /&gt;
            </Text>
          </Link>

          <HStack gap={1}>
            {/* Full menu: laptops and desktops */}
            <HStack gap={1} display={{ base: "none", lg: "flex" }}>
              {nav.map((n) => (
                <Button key={n.href} asChild variant="ghost" size="sm">
                  <a href={n.href}>{n.label}</a>
                </Button>
              ))}
            </HStack>

            {/* Contact button: hidden on small phones (it is inside the menu there) */}
            <Button
              asChild
              colorPalette="teal"
              size="sm"
              ml={{ base: 0, lg: 2 }}
              display={{ base: "none", sm: "inline-flex" }}
            >
              <a href="#contact">Contact</a>
            </Button>

            <ThemeToggle />

            {/* Menu button: phones and tablets */}
            <IconButton
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              variant="ghost"
              size="md"
              display={{ base: "inline-flex", lg: "none" }}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <LuX /> : <LuMenu />}
            </IconButton>
          </HStack>
        </Flex>

        {/* Dropdown menu: phones and tablets */}
        {open && (
          <Box display={{ base: "block", lg: "none" }} pb={3}>
            <Stack gap={1}>
              {nav.map((n) => (
                <Button
                  key={n.href}
                  asChild
                  variant="ghost"
                  size="lg"
                  justifyContent="flex-start"
                  onClick={() => setOpen(false)}
                >
                  <a href={n.href}>{n.label}</a>
                </Button>
              ))}
              <Button
                asChild
                colorPalette="teal"
                size="lg"
                display={{ base: "inline-flex", sm: "none" }}
                onClick={() => setOpen(false)}
              >
                <a href="#contact">Contact</a>
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
