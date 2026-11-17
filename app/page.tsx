"use client";

import { Box, Container, Text } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Posts } from "@/components/sections/Posts";
import { Projects } from "@/components/sections/Projects";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <Box minH="100vh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Leadership />
        <Education />
        <Posts />
        <Contact />
      </main>
      <Box as="footer" borderTopWidth="1px" borderColor="border" py={8}>
        <Container maxW="5xl">
          <Text color="fg.muted" fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} {profile.shortName}. Built with Next.js
            and Chakra UI.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
