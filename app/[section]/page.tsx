import { notFound } from "next/navigation";
import { Badge, PageHeader, Stat } from "@/components/ui";
import { Icon } from "@/components/icons";

const sections = ["knowledge-base", "conversations", "evaluation", "settings"] as const;
export function generateStaticParams() { return sections.map(section => ({ section })); }

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section as typeof sections[number])) notFound();
  if (section === "knowledge-base") return <KnowledgeBase />;
  if (section === "conversations") return <Conversations />;
  if (section === "evaluation") return <Evaluation />;
  return <Settings />;
}

function KnowledgeBase() {
  const docs = [
    ["Piping Inspection Manual", "PDF", "418", "Sep 18, 2026", "v3"],
    ["Mechanical Integrity Policy", "DOCX", "186", "Sep 16, 2026", "v2"],
    ["Inspection Schedule 2026", "XLSX", "94", "Sep 14, 2026", "v1"],
    ["Process Safety Review", "PPTX", "127", "Sep 11, 2026", "v4"],
    ["Compressor Maintenance Notes", "TXT", "63", "Sep 8, 2026", "v1"],
  ];
  return <>
    <PageHeader title="Knowledge base" description="Manage source documents, indexing status, versions, and searchable chunks." action={<button className="button primary"><Icon name="upload"/> Add documents</button>} />
    <section className="stats three"><Stat label="Indexed documents" value="24" note="6 file formats" /><Stat label="Knowledge chunks" value="1,842" note="Last indexed 12 min ago" /><Stat label="Storage used" value="1.8 GB" note="of 10 GB" /></section>
    <div className="card table-card"><div className="toolbar"><div className="search"><Icon name="search"/><input placeholder="Search documents…" /></div><button className="button secondary">All formats</button><button className="button secondary">Status: ready</button></div><div className="table-wrap"><table><thead><tr><th>Document</th><th>Format</th><th>Chunks</th><th>Updated</th><th>Version</th><th>Status</th><th/></tr></thead><tbody>{docs.map(d => <tr key={d[0]}><td><strong>{d[0]}</strong></td><td>{d[1]}</td><td>{d[2]}</td><td>{d[3]}</td><td>{d[4]}</td><td><Badge>Ready</Badge></td><td><button className="icon-button"><Icon name="more"/></button></td></tr>)}</tbody></table></div></div>
  </>;
}

function Conversations() {
  const rows = [
    ["Pressure vessel inspection requirements", "8 messages", "2 hours ago", "Inspection Manual, Integrity Policy"],
    ["Summarize the Q3 process safety review", "14 messages", "Yesterday", "Process Safety Review"],
    ["Compare compressor maintenance intervals", "6 messages", "Sep 16", "Maintenance Notes, OEM Manual"],
    ["Which procedures changed in policy v2?", "11 messages", "Sep 14", "Integrity Policy v1–v2"],
  ];
  return <><PageHeader title="Conversations" description="Return to previous research and continue with its source context." action={<a className="button primary" href="/">New conversation</a>} /><div className="card list-card"><div className="toolbar"><div className="search"><Icon name="search"/><input placeholder="Search conversations…" /></div></div>{rows.map((r,i) => <article className="conversation" key={r[0]}><div className="conversation-icon"><Icon name="chat"/></div><div><h3>{r[0]}</h3><p>{r[3]}</p></div><div className="conversation-meta"><strong>{r[1]}</strong><span>{r[2]}</span></div></article>)}</div></>;
}

function Evaluation() {
  return <><PageHeader title="RAG evaluation" description="Track whether retrieval and generated answers remain grounded and useful." action={<button className="button primary">Run evaluation</button>} /><section className="stats three"><Stat label="Overall score" value="92.4%" note="+3.1% this week" /><Stat label="Test questions" value="48" note="6 datasets" /><Stat label="Last run" value="18 min" note="Completed today" /></section><div className="evaluation-grid"><div className="card"><div className="card-head"><h2>Quality by category</h2><Badge tone="blue">Latest run</Badge></div>{[["Retrieval relevance",94],["Citation accuracy",97],["Answer faithfulness",91],["Answer completeness",87]].map(x => <div className="score" key={x[0]}><div><span>{x[0]}</span><strong>{x[1]}%</strong></div><div className="progress"><i style={{width:x[1]+"%"}}/></div></div>)}</div><div className="card"><div className="card-head"><h2>Recent runs</h2></div>{[["Baseline suite","92.4%","Passed"],["Policy questions","89.8%","Passed"],["Adversarial prompts","84.2%","Review"]].map((x,i)=><div className="run" key={x[0]}><span className="run-check"><Icon name="check"/></span><div><strong>{x[0]}</strong><small>{i===0?"Today, 10:42":"Sep "+(17-i)+", 2026"}</small></div><strong>{x[1]}</strong><Badge tone={x[2]==="Passed"?"green":"amber"}>{x[2]}</Badge></div>)}</div></div></>;
}

function Settings() {
  return <><PageHeader title="Settings" description="Configure workspace defaults for retrieval, models, and team access." /><div className="settings-grid"><aside className="settings-nav"><button className="active">General</button><button>Retrieval</button><button>AI models</button><button>Members</button><button>Usage</button></aside><section className="card form-card"><div><h2>Workspace details</h2><p>Used across the Atlas interface and audit log.</p></div><label>Workspace name<input defaultValue="Northstar Engineering"/></label><label>Workspace slug<input defaultValue="northstar-engineering"/></label><label>Default answer style<select defaultValue="technical"><option value="technical">Concise and technical</option><option>Detailed explanation</option></select></label><div className="setting-row"><div><strong>Require citations</strong><p>Answers must include at least one retrieved source.</p></div><button className="toggle active" aria-label="Require citations"><span/></button></div><div className="setting-row"><div><strong>Show confidence scores</strong><p>Display retrieval confidence beside each answer.</p></div><button className="toggle active" aria-label="Show confidence scores"><span/></button></div><div className="form-actions"><button className="button primary">Save changes</button></div></section></div></>;
}
