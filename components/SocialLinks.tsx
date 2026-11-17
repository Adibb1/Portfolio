"use client";

import { HStack, IconButton } from "@chakra-ui/react";
import type { ReactNode } from "react";
import {
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuTwitter,
} from "react-icons/lu";
import { links } from "@/lib/data";
import { handleEmailClick } from "@/lib/mail";

type Item = { label: string; href: string; icon: ReactNode; isEmail?: boolean };

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const items: Item[] = [
    { label: "LinkedIn", href: links.linkedin, icon: <LuLinkedin /> },
    { label: "GitHub", href: links.github, icon: <LuGithub /> },
    {
      label: "Email",
      href: links.email ? `mailto:${links.email}` : "",
      icon: <LuMail />,
      isEmail: true,
    },
    { label: "Instagram", href: links.instagram, icon: <LuInstagram /> },
    { label: "X (Twitter)", href: links.x, icon: <LuTwitter /> },
  ].filter((i) => i.href);

  return (
    <HStack gap={2} wrap="wrap">
      {items.map((i) => (
        <IconButton
          key={i.label}
          asChild
          aria-label={i.label}
          variant="outline"
          size={size}
          rounded="full"
        >
          <a
            href={i.href}
            target={i.isEmail ? undefined : "_blank"}
            rel="noopener noreferrer"
            onClick={
              i.isEmail ? (e) => handleEmailClick(e, links.email) : undefined
            }
          >
            {i.icon}
          </a>
        </IconButton>
      ))}
    </HStack>
  );
}
