"use client";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuArrowDown, LuMapPin } from "react-icons/lu";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <Box
      id="top"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 28 }}
    >
      <Box
        position="absolute"
        top="-120px"
        right="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="teal.500"
        opacity={0.15}
        filter="blur(90px)"
        pointerEvents="none"
      />
      <Container maxW="5xl" position="relative">
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={10}
        >
          <Stack gap={5} maxW="2xl">
            <Badge
              colorPalette="teal"
              variant="subtle"
              w="fit-content"
              px={3}
              py={1}
              rounded="full"
            >
              {profile.status}
            </Badge>
            <Heading
              as="h1"
              size={{ base: "4xl", md: "6xl" }}
              letterSpacing="-0.03em"
              lineHeight="1.05"
            >
              Hi, I&apos;m {profile.shortName}.
            </Heading>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="teal.500"
              fontWeight="semibold"
            >
              {profile.title}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
              {profile.tagline}
            </Text>
            <HStack color="fg.muted" gap={1}>
              <LuMapPin />
              <Text fontSize="sm">{profile.location}</Text>
            </HStack>
            <HStack gap={3} wrap="wrap" pt={2}>
              <Button asChild colorPalette="teal" size="lg">
                <a href="#projects">
                  View my work <LuArrowDown />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get in touch</a>
              </Button>
            </HStack>
            <Box pt={2}>
              <SocialLinks />
            </Box>
          </Stack>

          <Avatar.Root
            boxSize={{ base: "40", md: "72" }}
            shape="rounded"
            borderWidth="4px"
            borderColor="teal.500"
            rounded="3xl"
            flexShrink={0}
          >
            <Avatar.Fallback name={profile.shortName} />
            <Avatar.Image
              src={profile.photo}
              alt={profile.shortName}
              objectFit="cover"
            />
          </Avatar.Root>
        </Flex>
      </Container>
    </Box>
  );
}
