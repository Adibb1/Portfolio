"use client";

import { HStack, IconButton } from "@chakra-ui/react";
import { LuGithub, LuInstagram, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";
import { links } from "@/lib/data";

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const items = [
    { label: "LinkedIn", href: links.linkedin, icon: <LuLinkedin /> },
    { label: "GitHub", href: links.github, icon: <LuGithub /> },
    { label: "Email", href: links.email ? `mailto:${links.email}` : "", icon: <LuMail /> },
    { label: "Instagram", href: links.instagram, icon: <LuInstagram /> },
    { label: "X (Twitter)", href: links.x, icon: <LuTwitter /> },
  ].filter((i) => i.href);

  return (
    <HStack gap={2}>
      {items.map((i) => (
        <IconButton key={i.label} asChild aria-label={i.label} variant="outline" size={size} rounded="full">
          <a
            href={i.href}
            target={i.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            {i.icon}
          </a>
        </IconButton>
      ))}
    </HStack>
  );
}
