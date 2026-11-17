import type { MouseEvent } from "react";

export function gmailComposeUrl(email: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

// phones and tablets (touch screens): the normal mailto: link opens the mail app.
// open a Gmail "new message" window in a new tab for laptops.
export function handleEmailClick(
  e: MouseEvent<HTMLAnchorElement>,
  email: string,
) {
  if (typeof window === "undefined") return;
  const isTouchScreen = window.matchMedia("(pointer: coarse)").matches;
  if (isTouchScreen) return; // let the mailto: link work
  e.preventDefault();
  window.open(gmailComposeUrl(email), "_blank", "noopener,noreferrer");
}
