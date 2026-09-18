import type { ReactNode } from "react";

export function PageHeader({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <header className="page-header"><div><h1>{title}</h1><p>{description}</p></div>{action}</header>;
}

export function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return <div className="stat card"><span>{label}</span><strong>{value}</strong><small>{note}</small></div>;
}

export function Badge({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "blue" | "amber" | "gray" }) {
  return <span className={"badge " + tone}>{children}</span>;
}
