"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./icons";

const nav = [
  { href: "/", label: "Ask Atlas", icon: "ask" as const },
  { href: "/knowledge-base/", label: "Knowledge base", icon: "docs" as const },
  { href: "/conversations/", label: "Conversations", icon: "chat" as const },
  { href: "/evaluation/", label: "Evaluation", icon: "eval" as const },
  { href: "/settings/", label: "Settings", icon: "settings" as const },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="shell">
      <aside className="sidebar">
        <Link className="brand" href="/"><span className="mark">A</span><span>Atlas RAG</span></Link>
        <div className="workspace"><span>Workspace</span><strong>Northstar Engineering</strong></div>
        <nav className="nav" aria-label="Main navigation">
          {nav.map(item => <Link key={item.href} href={item.href} className={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "active" : ""}><Icon name={item.icon}/><span>{item.label}</span></Link>)}
        </nav>
        <div className="profile"><div className="avatar">AH</div><div><strong>Ahtasham</strong><span>Workspace owner</span></div></div>
      </aside>
      <main className="main">
        <header className="topbar"><div><span className="mobile-brand">Atlas RAG</span></div><div className="system"><i/> All systems operational</div></header>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
