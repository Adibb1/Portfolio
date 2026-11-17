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
    <Box as="section" id={id} py={{ base: 14, md: 20 }} scrollMarginTop="72px">
      <Container maxW="5xl">
        <Heading as="h2" size="3xl" mb={2} letterSpacing="-0.02em">
          {title}
        </Heading>
        <Box w="12" h="1" bg="teal.500" borderRadius="full" mb={4} />
        {subtitle && (
          <Text color="fg.muted" mb={8} maxW="2xl">
            {subtitle}
          </Text>
        )}
        {!subtitle && <Box mb={8} />}
        {children}
      </Container>
    </Box>
  );
}
