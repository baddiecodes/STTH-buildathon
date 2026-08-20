import type { Metadata } from "next";
import RulesClient from "./RulesClient";

export const metadata: Metadata = {
  title: "Buildathon Rules + Resources — DFlow × Superteam Thailand",
  description: "Buildathon rules, builder Q&A, workshops, and DFlow Session 1 recap.",
  openGraph: {
    title: "Buildathon Rules + Resources — DFlow × Superteam Thailand",
    description: "Everything you need to learn, build, submit, and demo.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Buildathon Rules + Resources — DFlow × Superteam Thailand",
    description: "Everything you need to learn, build, submit, and demo.",
    images: [],
  },
};

export default function RulesPage() {
  return <RulesClient />;
}
