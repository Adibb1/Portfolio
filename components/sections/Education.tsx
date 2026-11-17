"use client";

import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Section } from "@/components/Shared";
import { education, highlights } from "@/lib/data";

function Row({ title, right }: { title: string; right: string }) {
  return (
    <Flex
      justify="space-between"
      gap={4}
      py={3}
      borderBottomWidth="1px"
      borderColor="border"
    >
      <Text fontSize="sm">{title}</Text>
      <Text fontSize="sm" color="fg.muted" flexShrink={0}>
        {right}
      </Text>
    </Flex>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education & Highlights">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 14 }}>
        <Stack gap={7}>
          <Heading size="lg">Education</Heading>
          {education.map((e) => (
            <Box
              key={e.title}
              borderLeftWidth="3px"
              borderColor="teal.500"
              pl={4}
            >
              <Text color="fg.muted" fontSize="sm" mb={1}>
                {e.period}
              </Text>
              <Heading size="md" mb={1}>
                {e.title}
              </Heading>
              <Text fontSize="sm" fontWeight="medium">
                {e.school}
              </Text>
              <Text color="teal.500" fontSize="sm" mt={1}>
                {e.detail}
              </Text>
            </Box>
          ))}
        </Stack>

        <Stack gap={4}>
          <Heading size="lg">Highlights</Heading>
          <Box>
            {highlights.map((a) => (
              <Row key={a.title} title={a.title} right={a.year} />
            ))}
          </Box>
        </Stack>
      </SimpleGrid>
    </Section>
  );
}
