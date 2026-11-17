"use client";

import { Button, Card, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { LuExternalLink, LuLinkedin } from "react-icons/lu";
import { Section } from "@/components/Shared";
import { linkedinPosts } from "@/data/linkedin-posts";
import { links } from "@/lib/data";

function formatDate(d: string) {
  const date = new Date(d + "T00:00:00");
  return isNaN(date.getTime())
    ? d
    : date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function Posts() {
  const posts = [...linkedinPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section id="posts" title="Latest on LinkedIn" subtitle="Updates, learnings and milestones I share on LinkedIn.">
      {posts.length === 0 ? (
        <Card.Root variant="outline">
          <Card.Body gap={3} alignItems="flex-start">
            <Text color="fg.muted">Follow me on LinkedIn to see my latest posts.</Text>
          </Card.Body>
        </Card.Root>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
          {posts.map((p) => (
            <Card.Root key={p.url} variant="outline" h="full">
              <Card.Body gap={2}>
                <Flex align="center" gap={2} color="fg.muted" fontSize="sm">
                  <LuLinkedin /> {formatDate(p.date)}
                </Flex>
                <Card.Title>{p.title}</Card.Title>
                <Card.Description>{p.summary}</Card.Description>
              </Card.Body>
              <Card.Footer>
                <Button asChild variant="ghost" colorPalette="teal" size="sm">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    Read on LinkedIn <LuExternalLink />
                  </a>
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </SimpleGrid>
      )}
      <Button asChild mt={8} colorPalette="teal" variant="outline">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <LuLinkedin /> Follow me on LinkedIn
        </a>
      </Button>
    </Section>
  );
}
