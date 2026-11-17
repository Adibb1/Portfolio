"use client";

import { Badge, Button, Card, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import { Section } from "@/components/Shared";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few of the biggest things I have built, newest first."
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {projects.map((p) => (
          <Card.Root
            key={p.title}
            variant="outline"
            transition="all 0.2s"
            _hover={{ borderColor: "teal.500", transform: "translateY(-3px)" }}
          >
            <Card.Body gap={3}>
              <Text fontSize="sm" color="teal.500" fontWeight="medium">
                {p.period}
              </Text>
              <Card.Title fontSize="xl">{p.title}</Card.Title>
              <Card.Description fontSize="md">{p.description}</Card.Description>
              <Flex gap={2} wrap="wrap" mt={1}>
                {p.tags.map((t) => (
                  <Badge key={t} variant="surface" colorPalette="teal">
                    {t}
                  </Badge>
                ))}
              </Flex>
            </Card.Body>
            {p.href && (
              <Card.Footer>
                <Button asChild variant="subtle" colorPalette="teal" size="sm">
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.label} <LuExternalLink />
                  </a>
                </Button>
              </Card.Footer>
            )}
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  );
}
