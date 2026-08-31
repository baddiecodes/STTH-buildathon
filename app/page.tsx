import Image from "next/image";
import Countdown from "./Countdown";
import { sitePath } from "./site-path";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 18 18">
    <path d="M4 14 14 4M6 4h8v8" />
  </svg>
);

function DflowMark() {
  return (
    <div className="brand brand--dflow" aria-label="DFlow">
      <Image className="dflow-mark" src={sitePath("/dflow-mark.png")} width={64} height={64} alt="" aria-hidden="true" />
      <span>DFLOW</span>
    </div>
  );
}

function SuperteamMark() {
  return (
    <div className="brand brand--superteam" aria-label="Superteam Thailand">
      <Image className="superteam-mark" src={sitePath("/superteam-thailand.png")} width={80} height={80} alt="" aria-hidden="true" />
      <span>SUPERTEAM <b>THAILAND</b></span>
    </div>
  );
}

const MetaBlock = ({ label, value }: { label: string; value: string }) => (
  <div className="meta-block"><span>{label}</span><strong>{value}</strong></div>
);

export default function Home() {
  return (
    <main className="launch-shell">
      <div className="noise" aria-hidden="true" />
      <div className="scanline scanline--one" aria-hidden="true" />
      <div className="scanline scanline--two" aria-hidden="true" />

      <header className="top-rail">
        <div className="event-code"><span className="pulse-dot" />BKK / 2026</div>
        <div className="top-lockup" aria-label="DFlow and Superteam Thailand">
          <span className="top-dflow"><Image src={sitePath("/dflow-mark.png")} width={64} height={64} alt="" aria-hidden="true" />DFLOW</span><i>×</i><span className="top-superteam"><Image src={sitePath("/superteam-thailand.png")} width={80} height={80} alt="" aria-hidden="true" />SUPERTEAM THAILAND</span>
        </div>
        <div className="coordinates">13.7563° N&nbsp;&nbsp;100.5018° E</div>
      </header>

      <section className="stage" aria-labelledby="buildathon-title">
        <div className="orbit orbit--outer" aria-hidden="true">
          <span className="orbit-tick orbit-tick--one" />
          <span className="orbit-tick orbit-tick--two" />
          <span className="orbit-tick orbit-tick--three" />
        </div>
        <div className="orbit orbit--inner" aria-hidden="true" />

        <div className="brand-node brand-node--superteam"><SuperteamMark /><span className="node-line" aria-hidden="true" /></div>
        <div className="brand-node brand-node--dflow"><DflowMark /><span className="node-line" aria-hidden="true" /></div>

        <div className="signal signal--one" aria-hidden="true"><span>SHIP</span></div>
        <div className="signal signal--two" aria-hidden="true"><span>BUILD</span></div>

        <div className="hero-copy">
          <p className="eyebrow">DFlow × Superteam Thailand</p>
          <div className="title-wrap">
            <span className="title-ghost" aria-hidden="true">BUILDATHON</span>
            <h1 id="buildathon-title">BUILDATHON</h1>
          </div>
          <p className="subhead">Build what happens after swap.</p>
          <p className="date-line"><span>Aug 21 to Sep 2, 2026</span><i /><span>Demo Day · Sep 3 · Bangkok</span></p>
          <div className="actions">
            <a className="button button--primary" href="https://forms.gle/WTkHAkujTB1HWfKb6" target="_blank" rel="noreferrer" aria-label="Apply to the Buildathon"><span>Apply Now</span><Arrow /></a>
            <a className="button button--secondary" href={sitePath("/rules/")} aria-label="View Buildathon rules"><span>View Rules</span><span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="bottom-rail">
        <nav className="social-links" aria-label="Social media links">
          <a href="https://x.com/mewtuta" target="_blank" rel="noreferrer" aria-label="Mewtuta on X">X ↗</a>
          <a href="https://instagram.com/mewtuta" target="_blank" rel="noreferrer" aria-label="Mewtuta on Instagram">IG ↗</a>
          <a href="https://t.me/superteamth" target="_blank" rel="noreferrer" aria-label="Superteam Thailand on Telegram">TG ↗</a>
        </nav>
        <Countdown />
        <MetaBlock label="Prize Pool" value="1,000 USDC" />
        <MetaBlock label="Team Size" value="1 to 4 Builders" />
        <div className="footer-note"><span>Applications open</span><span className="pulse-dot" /></div>
      </footer>
    </main>
  );
}
