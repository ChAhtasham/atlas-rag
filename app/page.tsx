"use client";

import { FormEvent, useState } from "react";
import { Badge, PageHeader, Stat } from "@/components/ui";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  function ask(e: FormEvent) { e.preventDefault(); if (!question.trim()) return; setMessages(v => [...v, question]); setQuestion(""); }
  return <>
    <PageHeader title="Engineering knowledge" description="Ask questions across indexed manuals, policies, reports, and meeting notes." />
    <section className="stats">
      <Stat label="Documents" value="24" note="All indexed" /><Stat label="Knowledge chunks" value="1,842" note="Hybrid search ready" /><Stat label="Questions this month" value="318" note="42% below limit" /><Stat label="Evaluation score" value="92.4%" note="+3.1% this week" />
    </section>
    <section className="chat-layout">
      <div className="card chat-card">
        <div className="card-head"><h2>Ask Atlas</h2><button className="button secondary">New conversation</button></div>
        <div className="chat">
          <div className="question">What inspection interval is required for high-pressure piping?</div>
          <Answer />
          {messages.map((message, index) => <div key={index} className="message-pair"><div className="question">{message}</div><div className="answer"><Badge>Grounded answer</Badge><p>This demo response represents streamed, permission-scoped retrieval. A production connection would answer from the indexed workspace and attach only verified source passages.</p><div className="confidence"><span/><strong>88% confidence</strong></div></div></div>)}
        </div>
        <form className="composer" onSubmit={ask}><input value={question} onChange={e => setQuestion(e.target.value)} aria-label="Ask a question" placeholder="Ask across your engineering documents…" /><div><button type="button" className="chip">All documents</button><button className="button primary">Ask Atlas</button></div></form>
      </div>
      <div className="card side-card"><div className="card-head"><h2>Knowledge base</h2><a href="/knowledge-base/">Manage</a></div><Document name="Piping Inspection Manual" meta="PDF · 418 chunks · v3"/><Document name="Mechanical Integrity Policy" meta="DOCX · 186 chunks · v2"/><Document name="Inspection Schedule 2026" meta="XLSX · 94 chunks · v1"/><Document name="Process Safety Review" meta="PPTX · 127 chunks · v4"/></div>
    </section>
  </>;
}

function Answer() { return <div className="answer"><Badge>Grounded answer</Badge><p>High-pressure piping in critical service should receive a visual inspection every <strong>12 months</strong>, with ultrasonic thickness measurements every <strong>36 months</strong>. Lines above 80% of design pressure require an additional review after any process upset. <sup>[1]</sup> <sup>[2]</sup></p><div className="citations"><button>1 · Inspection Manual · p. 18</button><button>2 · Integrity Policy · §4.2</button></div><div className="confidence"><span/><strong>91% confidence</strong></div></div> }
function Document({ name, meta }: { name: string; meta: string }) { return <div className="document"><span className="file-icon">{meta.slice(0,3)}</span><div><strong>{name}</strong><small>{meta}</small></div><Badge>Ready</Badge></div> }
