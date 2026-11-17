"use client";

import { Box, Container, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <Box as="section" id={id} py={{ base: 12, md: 20 }} scrollMarginTop="56px">
      <Container maxW="5xl" px={{ base: 5, md: 8 }}>
        <Heading
          as="h2"
          size={{ base: "2xl", md: "3xl" }}
          mb={2}
          letterSpacing="-0.02em"
        >
          {title}
        </Heading>
        <Box w="12" h="1" bg="teal.500" borderRadius="full" mb={4} />
        {subtitle && (
          <Text color="fg.muted" mb={{ base: 6, md: 8 }} maxW="2xl">
            {subtitle}
          </Text>
        )}
        {!subtitle && <Box mb={{ base: 6, md: 8 }} />}
        {children}
      </Container>
    </Box>
  );
}
