"use client";

import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LuCheck, LuCopy, LuLinkedin, LuMail } from "react-icons/lu";
import { Section } from "@/components/Shared";
import { SocialLinks } from "@/components/SocialLinks";
import { links } from "@/lib/data";
import { handleEmailClick } from "@/lib/mail";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(links.email);
    } catch {
      // Older browsers: fall back to the old copy method.
      try {
        const box = document.createElement("textarea");
        box.value = links.email;
        document.body.appendChild(box);
        box.select();
        document.execCommand("copy");
        document.body.removeChild(box);
      } catch {
        return;
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <HStack gap={3} wrap="wrap" pt={1}>
      <Text fontFamily="mono" fontSize="sm" wordBreak="break-all">
        {links.email}
      </Text>
      <Button size="xs" variant="subtle" onClick={copy} aria-live="polite">
        {copied ? <LuCheck /> : <LuCopy />}
        {copied ? "Copied" : "Copy"}
      </Button>
    </HStack>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let's connect"
      subtitle="Want to work together, ask a question, or just say hi? Reach out anywhere below."
    >
      <Box
        borderWidth="1px"
        borderColor="border"
        bg="bg.subtle"
        rounded="2xl"
        p={{ base: 5, md: 10 }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          justify="space-between"
          align={{ base: "stretch", lg: "center" }}
        >
          <Stack gap={2}>
            <Text fontSize="xl" fontWeight="semibold">
              The fastest way to reach me
            </Text>
            <Text color="fg.muted">
              Email or a LinkedIn message. I will reply as soon as I can.
            </Text>
            {links.email && <CopyEmail />}
            <Box pt={3}>
              <SocialLinks size="lg" />
            </Box>
          </Stack>
          <Stack direction={{ base: "column", sm: "row" }} gap={3}>
            <Button
              asChild
              colorPalette="teal"
              size="lg"
              w={{ base: "full", sm: "auto" }}
            >
              <a
                href={`mailto:${links.email}`}
                onClick={(e) => handleEmailClick(e, links.email)}
              >
                <LuMail /> Email me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              w={{ base: "full", sm: "auto" }}
            >
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuLinkedin /> Connect on LinkedIn
              </a>
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Section>
  );
}
