"use client";

import { useState } from "react";
import Image from "next/image";
import { sitePath } from "../site-path";

type Panel = "rules" | "qa" | "workshops" | "docs";

const panels: { id: Panel; label: string }[] = [
  { id: "rules", label: "Rules" },
  { id: "qa", label: "Q&A" },
  { id: "workshops", label: "Workshops" },
  { id: "docs", label: "Docs" },
];

const rules = [
  { number: "01", title: "Who can build", text: "Build solo or in a team of up to four. Projects already released to users are not eligible." },
  { number: "02", title: "Build window", text: "Build and submit between Aug 21–31, 2026. Deadline: 23:59 ICT on Aug 31." },
  { number: "03", title: "The brief", text: "Use DFlow to create a useful product experience that begins where the swap ends." },
  { number: "04", title: "What to submit", text: "Share a working demo, clear product write-up, and a public demo link or code repository." },
  { number: "05", title: "How we judge", text: "Creative ideas matter more than perfect code. We value usefulness, clarity, execution, and originality." },
  { number: "06", title: "Demo day + prize", text: "Selected teams present Sep 3 in Bangkok. The total prize pool is 1,000 USDC." },
];

const questions = [
  { question: "What should I build?", answer: "Something you need—not another swap screen. Make the swap essential to a larger mobile, browser, game, or agent experience." },
  { question: "Do I need an API key?", answer: "No. Use devquote.api.DFlow.net during the buildathon. It is free and rate-limited to 1 TPS." },
  { question: "Can I enter an existing product?", answer: "Not if it is already released to users. The buildathon is for new ideas and new product experiences." },
  { question: "Can my product earn fees?", answer: "Yes. Add platformFeeBps to a swap and keep 100% of that platform fee." },
  { question: "Can I make swaps gasless?", answer: "Yes. Your server can sponsor gas through a double-signing flow after the user signs." },
  { question: "What matters to judges?", answer: "Creative thinking, a clear user need, a useful DFlow integration, and evidence that you shipped." },
];

const recap = [
  { label: "What it is", value: "A free DEX aggregator API routing across ~15 Solana venues, with JIT re-routing at execution." },
  { label: "Builder upside", value: "Add platformFeeBps and keep 100% of the fee. Sponsor gas for a smoother user experience." },
  { label: "Dev endpoint", value: "devquote.api.DFlow.net · free · 1 TPS · no API key required." },
  { label: "Core flow", value: "Call order → receive transaction → user signs → submit through any Solana RPC." },
  { label: "Proof", value: "$67B+ processed · ~850k monthly traders · 100× YoY growth." },
  { label: "Buildathon lens", value: "Creative ideas over perfect code. Build something you need; released projects are ineligible." },
];

function BrandLockup() {
  return (
    <div className="top-lockup" aria-label="DFlow and Superteam Thailand">
      <span className="top-dflow"><Image src={sitePath("/dflow-mark.png")} width={64} height={64} alt="" aria-hidden="true" />DFLOW</span>
      <i>×</i>
      <span className="top-superteam"><Image src={sitePath("/superteam-thailand.png")} width={80} height={80} alt="" aria-hidden="true" />SUPERTEAM THAILAND</span>
    </div>
  );
}

export default function RulesClient() {
  const [panel, setPanel] = useState<Panel>("rules");
  const [showRecap, setShowRecap] = useState(false);

  return (
    <main className="launch-shell rules-shell">
      <div className="noise" aria-hidden="true" />
      <div className="scanline scanline--one" aria-hidden="true" />
      <div className="scanline scanline--two" aria-hidden="true" />

      <header className="top-rail">
        <div className="event-code"><span className="pulse-dot" />BKK / 2026</div>
        <BrandLockup />
        <div className="coordinates">BUILDER HUB / V1.1</div>
      </header>

      <section className="rules-stage" aria-labelledby="rules-title">
        <div className="orbit orbit--outer" aria-hidden="true" />

        <div className="rules-intro">
          <div>
            <p className="rules-kicker">Everything you need to ship</p>
            <h1 className="rules-title" id="rules-title">BUILD<br />HUB</h1>
          </div>
          <nav className="rules-tabs" aria-label="Buildathon resources">
            {panels.map((item, index) => (
              <button key={item.id} className={panel === item.id ? "is-active" : ""} onClick={() => { setPanel(item.id); setShowRecap(false); }} type="button">
                <span>0{index + 1}</span>{item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="rules-panel" aria-live="polite">
          {panel === "rules" && (
            <div className="rules-grid">
              {rules.map((rule) => (
                <article className="rule-card" key={rule.number}>
                  <span className="rule-number">/{rule.number}</span>
                  <h2>{rule.title}</h2>
                  <p>{rule.text}</p>
                </article>
              ))}
            </div>
          )}

          {panel === "qa" && (
            <div className="qa-grid">
              {questions.map((item, index) => (
                <article className="qa-card" key={item.question}>
                  <span className="rule-number">Q{index + 1}</span>
                  <h2>{item.question}</h2>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          )}

          {panel === "workshops" && (
            <div className="workshop-grid">
              <article className="workshop-card workshop-card--past">
                <div className="workshop-topline"><span>Workshop 01</span><b>Recap ready</b></div>
                <p className="workshop-date">Aug 14 · 13:30–14:30 ICT · Online</p>
                <h2>DFlow in 30 Minutes:<br />From Quote to Signed Swap</h2>
                <p>Understand JIT routing, complete the quote-to-swap flow, and learn how builders monetize.</p>
                <div className="workshop-actions">
                  <a href="https://luma.com/vxj5v1pu" target="_blank" rel="noreferrer">View on Luma ↗</a>
                  <button type="button" onClick={() => setShowRecap(true)}>Open recap →</button>
                </div>
              </article>

              <article className="workshop-card">
                <div className="workshop-topline"><span>Workshop 02</span><b>Aug 21</b></div>
                <p className="workshop-date">Aug 21 · 13:30–14:30 ICT · Online</p>
                <h2>Ship a Seeker Game<br />Economy with DFlow</h2>
                <p>Use a mobile game economy pattern to turn in-game currency into SOL—and shape your own product.</p>
                <div className="workshop-actions">
                  <a href="https://luma.com/zsvaojvq" target="_blank" rel="noreferrer">Register on Luma ↗</a>
                </div>
              </article>
            </div>
          )}

          {panel === "docs" && (
            <article className="docs-panel">
              <div className="docs-copy">
                <span className="docs-label">Official DFlow documentation / 01</span>
                <h2>KNOW THE ROUTE.<br />THEN BUILD.</h2>
                <p>Start with the DFlow overview: what the protocol does, how it routes trades, and the core concepts behind your integration.</p>
                <a href="https://pond.dflow.net/get-started/what-is-dflow" target="_blank" rel="noreferrer">Open “What is DFlow?” <span aria-hidden="true">↗</span></a>
              </div>
              <div className="docs-index" aria-hidden="true">
                <span>GET STARTED</span>
                <b>04</b>
                <i>pond.dflow.net</i>
              </div>
            </article>
          )}
        </div>
      </section>

      {showRecap && (
        <section className="recap-overlay" role="dialog" aria-modal="true" aria-labelledby="recap-title">
          <div className="recap-head">
            <div><span>Workshop 01 / Recap</span><h2 id="recap-title">FROM QUOTE TO SIGNED SWAP</h2></div>
            <button type="button" onClick={() => setShowRecap(false)} aria-label="Close recap">Close ×</button>
          </div>
          <div className="recap-grid">
            {recap.map((item, index) => (
              <article key={item.label}><span>0{index + 1}</span><h3>{item.label}</h3><p>{item.value}</p></article>
            ))}
          </div>
          <div className="recap-resource">
            <code>devquote.api.DFlow.net</code>
            <span>Use DFlow Agent Skills in the docs for faster app scaffolding.</span>
            <a href="https://luma.com/vxj5v1pu" target="_blank" rel="noreferrer">Workshop page ↗</a>
          </div>
        </section>
      )}

      <footer className="rules-footer">
        <div className="rules-footer-left">
          <nav className="social-links social-links--rules" aria-label="Social media links">
            <a href="https://x.com/superteamth" target="_blank" rel="noreferrer" aria-label="Superteam Thailand on X">X ↗</a>
            <a href="https://instagram.com/superteamthailand" target="_blank" rel="noreferrer" aria-label="Superteam Thailand on Instagram">IG ↗</a>
            <a href="https://t.me/superteamth" target="_blank" rel="noreferrer" aria-label="Superteam Thailand on Telegram">TG ↗</a>
          </nav>
          <span className="rules-footer-note">Aug 21–31 · Demo Day Sep 3 · Bangkok</span>
        </div>
        <a className="button button--secondary" href={sitePath("/")}><span>Back to Buildathon</span><span aria-hidden="true">←</span></a>
        <a className="button button--primary" href="https://forms.gle/WTkHAkujTB1HWfKb6" target="_blank" rel="noreferrer"><span>Apply Now</span><span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
