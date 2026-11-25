// roast-agent-v2 — one-line roast of my own AI agent.
// The entry is the roast itself, written verbatim to /output/entry.txt.
// Pick: clipboard-echo — the agent's "work" is my own prompt, pasted back and relabelled a first draft.
// Duel (builder): 10W-0L-1D vs field top 6 + benchmarks; Teguh re-duels independently.
import { writeFileSync, chmodSync } from "node:fs";

const LINE = "My agent copied my prompt to the clipboard, pasted it back to me word for word, and called it a first draft.";

const target = process.argv[2] ?? "/output/entry.txt";
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
