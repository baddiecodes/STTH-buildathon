"use client";

import { useEffect, useState } from "react";

const DEADLINE = new Date("2026-08-31T23:59:00+07:00").getTime();

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  closed: boolean;
};

function getRemaining(): Remaining {
  const difference = Math.max(0, DEADLINE - Date.now());

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    closed: difference === 0,
  };
}

const pad = (value: number) => value.toString().padStart(2, "0");

export default function Countdown() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const update = () => setRemaining(getRemaining());
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="meta-block countdown-block" aria-label="Submission deadline: August 31, 2026 at 11:59 PM ICT">
      <span>Submission closes in</span>
      {remaining?.closed ? (
        <strong className="countdown-closed">Submissions closed</strong>
      ) : (
        <time className="countdown-time" dateTime="2026-08-31T23:59:00+07:00" aria-live="off">
          <b>{remaining ? pad(remaining.days) : "00"}</b><small>D</small><i>:</i>
          <b>{remaining ? pad(remaining.hours) : "00"}</b><small>H</small><i>:</i>
          <b>{remaining ? pad(remaining.minutes) : "00"}</b><small>M</small><i>:</i>
          <b>{remaining ? pad(remaining.seconds) : "00"}</b><small>S</small>
        </time>
      )}
    </div>
  );
}
