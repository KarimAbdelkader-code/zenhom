"use client";

import { useEffect, useState } from "react";

const englishLinks = [
  ["Words", "#invitation"],
  ["Date", "#details"],
  ["Place", "#venue"],
  ["Notes", "#guestbook"],
] as const;

const arabicLinks = [
  ["كلماتنا", "#invitation"],
  ["الموعد", "#details"],
  ["المكان", "#venue"],
  ["رسائل", "#guestbook"],
] as const;

export default function Navigation({ language = "en" }: { language?: "en" | "ar" }) {
  const [active, setActive] = useState("#top");
  const links = language === "ar" ? arabicLinks : englishLinks;

  useEffect(() => {
    const effectLinks = language === "ar" ? arabicLinks : englishLinks;
    const sections = [document.querySelector("#top"), ...effectLinks.map(([, href]) => document.querySelector(href))].filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [language]);

  return (
    <header className="site-header">
      <a className="site-brand" href="#top" aria-label={language === "ar" ? "الصفحة الرئيسية لدعوة ماجد ومنى" : "Maged and Mona invitation home"}><span>M</span><i>&amp;</i><span>M</span></a>
      <span className="site-header-note">Maged + Mona · 12.11.26</span>
      <nav aria-label={language === "ar" ? "أقسام الدعوة" : "Invitation sections"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} aria-current={active === href ? "location" : undefined}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
