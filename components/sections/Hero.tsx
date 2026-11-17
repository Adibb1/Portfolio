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
      py={{ base: 10, md: 20, lg: 28 }}
    >
      <Box
        position="absolute"
        top="-120px"
        right="-120px"
        w={{ base: "260px", md: "420px" }}
        h={{ base: "260px", md: "420px" }}
        borderRadius="full"
        bg="teal.500"
        opacity={0.15}
        filter="blur(90px)"
        pointerEvents="none"
      />
      <Container maxW="5xl" px={{ base: 5, md: 8 }} position="relative">
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 8, md: 10 }}
        >
          <Stack gap={{ base: 4, md: 5 }} maxW="2xl" minW={0}>
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
              size={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              letterSpacing="-0.03em"
              lineHeight="1.1"
              wordBreak="break-word"
            >
              Hi, I&apos;m {profile.shortName}.
            </Heading>
            <Heading
              as="h2"
              size={{ base: "lg", sm: "xl", md: "2xl" }}
              color="teal.500"
              fontWeight="semibold"
            >
              {profile.title}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
              {profile.tagline}
            </Text>
            <HStack color="fg.muted" gap={1} align="flex-start">
              <Box pt="3px">
                <LuMapPin />
              </Box>
              <Text fontSize="sm">{profile.location}</Text>
            </HStack>
            <Stack direction={{ base: "column", sm: "row" }} gap={3} pt={2}>
              <Button
                asChild
                colorPalette="teal"
                size="lg"
                w={{ base: "full", sm: "auto" }}
              >
                <a href="#projects">
                  View my work <LuArrowDown />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                w={{ base: "full", sm: "auto" }}
              >
                <a href="#contact">Get in touch</a>
              </Button>
            </Stack>
            <Box pt={2}>
              <SocialLinks />
            </Box>
          </Stack>

          <Avatar.Root
            boxSize={{ base: "32", sm: "40", md: "56", lg: "72" }}
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
