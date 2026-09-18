import type { SVGProps } from "react";

type IconName = "ask" | "docs" | "chat" | "eval" | "settings" | "search" | "more" | "upload" | "check";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    ask: <><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4M8 11h6M11 8v6"/></>,
    docs: <><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></>,
    chat: <><path d="M4 5h16v12H9l-5 4z"/><path d="M8 9h8M8 13h5"/></>,
    eval: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.7-.5-1.2.9-1.9-2.1-2.1-1.9.9-1.2-.5L11.5 3h-3L7.8 5l-1.2.5-1.9-.9-2.1 2.1.9 1.9L3 9.8l-2 .7v3l2 .7.5 1.2-.9 1.9 2.1 2.1 1.9-.9 1.2.5.7 2h3l.7-2 1.2-.5 1.9.9 2.1-2.1-.9-1.9.5-1.2z"/></>,
    search: <><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></>,
    more: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
    upload: <><path d="M12 16V4M8 8l4-4 4 4"/><path d="M4 14v6h16v-6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
