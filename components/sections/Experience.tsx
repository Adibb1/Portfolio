"use client";

import { Box, Flex, Heading, List, Stack, Text } from "@chakra-ui/react";
import { Section } from "@/components/Shared";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Hands-on work, programmes and competitions.">
      <Box borderLeftWidth="2px" borderColor="teal.500" pl={{ base: 5, md: 8 }} ml={2}>
        <Stack gap={10}>
          {experience.map((e) => (
            <Box key={e.role} position="relative">
              <Box
                position="absolute"
                left={{ base: "-29px", md: "-41px" }}
                top="6px"
                boxSize="3"
                rounded="full"
                bg="teal.500"
              />
              <Flex justify="space-between" wrap="wrap" gap={1}>
                <Heading size="lg">{e.role}</Heading>
                {e.period && (
                  <Text color="fg.muted" fontSize="sm">
                    {e.period}
                  </Text>
                )}
              </Flex>
              <Text color="teal.500" fontWeight="medium" mb={2}>
                {e.org}
              </Text>
              <List.Root gap={1} color="fg.muted" ps={5}>
                {e.points.map((p) => (
                  <List.Item key={p}>{p}</List.Item>
                ))}
              </List.Root>
            </Box>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}
