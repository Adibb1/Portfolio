"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuGithub } from "react-icons/lu";
import { Section } from "@/components/Shared";
import { about, links } from "@/lib/data";

export function About() {
  return (
    <Section id="about" title="About me">
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 14 }}>
        <Stack gap={5}>
          {about.paragraphs.map((p) => (
            <Text
              key={p.slice(0, 30)}
              color="fg.muted"
              fontSize="lg"
              lineHeight="1.8"
            >
              {p}
            </Text>
          ))}
          <Text color="fg.muted" fontSize="lg" lineHeight="1.8">
            {about.closing}
          </Text>
          <Box pt={2}>
            <Button asChild variant="outline" colorPalette="teal">
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <LuGithub /> github.com/Adibb1
              </a>
            </Button>
          </Box>
        </Stack>

        <Stack gap={5}>
          <Text fontWeight="semibold" fontSize="xl">
            Technical skills
          </Text>
          {about.technical.map((group) => (
            <Box
              key={group.label}
              borderWidth="1px"
              borderColor="border"
              bg="bg.subtle"
              rounded="xl"
              p={5}
            >
              <Text fontSize="sm" fontWeight="semibold" color="teal.500" mb={3}>
                {group.label}
              </Text>
              <Flex gap={2} wrap="wrap">
                {group.items.map((item) => (
                  <Badge key={item} variant="surface" size="lg">
                    {item}
                  </Badge>
                ))}
              </Flex>
            </Box>
          ))}
        </Stack>
      </SimpleGrid>
    </Section>
  );
}
