// The numbers, résumé links and version the career agent publishes (data/profile.json).
// Written only by the agent's approved portfolio updates; prose stays hand-written in data/work.ts.
// Anything missing or malformed throws while the site builds, so a bad file never reaches the live site.
import raw from "../data/profile.json";

export type Profile = {
  schema: 1;
  version: string;
  updated: string;
  person: { name: string; role: string };
  metrics: Record<string, string>;
  cv: Record<string, string>;
};

function check(x: unknown): Profile {
  const p = x as Partial<Profile>;
  const fail = (why: string): never => {
    throw new Error(`data/profile.json: ${why}`);
  };
  if (!p || p.schema !== 1) fail(`unsupported schema ${String(p?.schema)}`);
  if (typeof p.version !== "string" || !/^[0-9a-f]{12}$/.test(p.version)) fail("bad version");
  if (typeof p.updated !== "string" || Number.isNaN(Date.parse(p.updated))) fail("bad updated date");
  if (!p.metrics || typeof p.metrics !== "object") fail("no metrics");
  for (const [k, v] of Object.entries(p.metrics ?? {})) if (typeof v !== "string" || !v) fail(`metric ${k} is empty`);
  if (!p.cv || typeof p.cv !== "object") fail("no résumé links");
  for (const [k, v] of Object.entries(p.cv ?? {})) if (typeof v !== "string" || !v.startsWith("/resume/")) fail(`résumé ${k} has a bad link`);
  return p as Profile;
}

export const profile = check(raw);

/** A number the site shows, e.g. m("vworker.tests") → "~420". A missing one stops the build. */
export function m(key: string): string {
  const v = profile.metrics[key];
  if (!v) throw new Error(`data/profile.json has no metric "${key}"`);
  return v;
}

/** A résumé link, e.g. cv("general") → "/resume/Ryan_Abir_Resume.pdf". */
export function cv(variant: string): string {
  const v = profile.cv[variant];
  if (!v) throw new Error(`data/profile.json has no résumé "${variant}"`);
  return v;
}

/** "4 Nov 2026" */
export const updatedLabel = new Date(`${profile.updated}T00:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
