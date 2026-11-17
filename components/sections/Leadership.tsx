"use client";

import { Badge, Card, Flex, SimpleGrid } from "@chakra-ui/react";
import { Section } from "@/components/Shared";
import { leadership } from "@/lib/data";

export function Leadership() {
  return (
    <Section
      id="leadership"
      title="Leadership"
      subtitle="Roles where I took responsibility for people."
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        {leadership.map((l) => (
          <Card.Root key={l.role} variant="subtle" h="full">
            <Card.Body gap={3}>
              <Card.Title fontSize="lg">{l.role}</Card.Title>
              <Flex gap={2} wrap="wrap">
                {l.orgs.map((o) => (
                  <Badge key={o} colorPalette="teal" variant="surface">
                    {o}
                  </Badge>
                ))}
              </Flex>
              <Card.Description>{l.note}</Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  );
}
