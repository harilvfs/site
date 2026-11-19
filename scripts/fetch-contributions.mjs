#!/usr/bin/env node

import { writeFile } from "node:fs/promises";

const USERNAME = "harilvfs";
const DAYS = 365;
const API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?years=all`;
const OUT = new URL("../data/contributions.json", import.meta.url);

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAY_MS = 24 * 60 * 60 * 1000;

const response = await fetch(API);
if (!response.ok) {
  throw new Error(`Failed to fetch contributions: ${response.status} ${response.statusText}`);
}
const payload = await response.json();
if (!Array.isArray(payload.contributions)) {
  throw new Error("Unexpected API response: missing contributions array");
}

const byDate = new Map(payload.contributions.map((item) => [item.date, item]));

const today = new Date().toISOString().slice(0, 10);
const todayMs = Date.parse(`${today}T00:00:00Z`);
const startMs = todayMs - (DAYS - 1) * DAY_MS;

const days = [];
for (let ms = startMs; ms <= todayMs; ms += DAY_MS) {
  const date = new Date(ms).toISOString().slice(0, 10);
  const entry = byDate.get(date);
  days.push({
    date,
    count: entry?.count ?? 0,
    level: entry?.level ?? 0,
  });
}

const weeks = [];
let week = [];
const firstWeekday = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
for (let i = 0; i < firstWeekday; i++) week.push(null);
for (const day of days) {
  week.push(day);
  if (week.length === 7) {
    weeks.push(week);
    week = [];
  }
}
if (week.length > 0) {
  while (week.length < 7) week.push(null);
  weeks.push(week);
}

const months = [];
let lastMonth = -1;
weeks.forEach((w, index) => {
  const first = w.find(Boolean);
  if (!first) return;
  const month = Number(first.date.slice(5, 7));
  if (month !== lastMonth) {
    months.push({ index, label: MONTHS[month - 1] });
    lastMonth = month;
  }
});

const total = days.reduce((sum, day) => sum + day.count, 0);

const output = {
  username: USERNAME,
  total,
  range: { from: days[0].date, to: days.at(-1).date },
  weeks,
  months,
};

await writeFile(OUT, `${JSON.stringify(output, null, 2)}\n`);
console.log(
  `Wrote ${weeks.length} weeks / ${total} contributions (${output.range.from} → ${output.range.to}) to data/contributions.json`
);
