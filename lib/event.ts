export const EVENT = {
  name: "Maged & Mona Engagement",
  venue: "Life eye Resort Oceal Hall",
  date: "12 November 2026",
  time: "8:00 PM",
  timeZone: "Africa/Cairo",
  startsAt: "2026-11-12T20:00:00+02:00",
  mapsUrl: "https://maps.app.goo.gl/ZuMCiQY4ebn9vkWUA?g_st=iw",
} as const;

const calendar = new URL("https://calendar.google.com/calendar/render");
calendar.search = new URLSearchParams({
  action: "TEMPLATE",
  text: EVENT.name,
  dates: "20261112T200000/20261112T210000",
  ctz: EVENT.timeZone,
  details: "Celebrate the engagement of Maged and Mona with us.",
  location: EVENT.venue,
}).toString();

export const CALENDAR_URL = calendar.toString();
