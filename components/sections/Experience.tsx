"use client";

import { Box, Flex, Heading, List, Stack, Text } from "@chakra-ui/react";
import { Section } from "@/components/Shared";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Hands-on work, programmes and competitions."
    >
      <Box
        borderLeftWidth="2px"
        borderColor="teal.500"
        pl={{ base: 5, md: 8 }}
        ml={1}
      >
        <Stack gap={{ base: 8, md: 10 }}>
          {experience.map((e) => (
            <Box key={e.role + e.period} position="relative">
              <Box
                position="absolute"
                left={{ base: "-27px", md: "-39px" }}
                top="7px"
                boxSize="3"
                rounded="full"
                bg="teal.500"
              />
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
                align={{ base: "flex-start", sm: "baseline" }}
                gap={{ base: 0, sm: 4 }}
              >
                <Heading size={{ base: "md", md: "lg" }}>{e.role}</Heading>
                {e.period && (
                  <Text color="fg.muted" fontSize="sm" flexShrink={0}>
                    {e.period}
                  </Text>
                )}
              </Flex>
              <Text color="teal.500" fontWeight="medium" mb={2} mt={1}>
                {e.org}
              </Text>
              <List.Root gap={1.5} color="fg.muted" ps={5}>
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
