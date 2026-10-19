"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function OpeningGate({ language = "en" }: { language?: "en" | "ar" }) {
  const [open, setOpen] = useState(false);
  const isArabic = language === "ar";

  useEffect(() => {
    document.body.classList.add("opening-locked");
    return () => document.body.classList.remove("opening-locked");
  }, []);

  const enter = () => {
    setOpen(true);
    document.body.classList.remove("opening-locked");
  };

  return (
    <div className={`opening-gate ${open ? "is-open" : ""}`} aria-hidden={open}>
      <svg className="opening-botanical opening-botanical-left" viewBox="0 0 240 520" fill="none" aria-hidden="true">
        <path d="M177 514C168 382 148 267 98 167C75 122 50 73 18 18" />
        <path d="M119 223C75 220 41 198 17 161C62 156 99 177 119 223Z" />
        <path d="M150 309C105 306 71 282 48 244C93 242 129 263 150 309Z" />
        <path d="M90 170C117 135 151 120 192 128C174 168 139 184 90 170Z" />
        <circle cx="20" cy="18" r="13" />
        <circle cx="20" cy="18" r="27" />
      </svg>
      <svg className="opening-botanical opening-botanical-right" viewBox="0 0 240 520" fill="none" aria-hidden="true">
        <path d="M63 514C72 382 92 267 142 167C165 122 190 73 222 18" />
        <path d="M121 223C165 220 199 198 223 161C178 156 141 177 121 223Z" />
        <path d="M90 309C135 306 169 282 192 244C147 242 111 263 90 309Z" />
        <path d="M150 170C123 135 89 120 48 128C66 168 101 184 150 170Z" />
        <circle cx="220" cy="18" r="13" />
        <circle cx="220" cy="18" r="27" />
      </svg>
      <div className="opening-gate-inner">
        <p className="opening-kicker">{isArabic ? "حكاية حب في حديقة فرنسية" : "A French garden romance"}</p>
        <div className="opening-initials" aria-label={isArabic ? "ماجد ومنى" : "Maged and Mona"}>M <i>&amp;</i> M</div>
        <span className="opening-drawn-line" aria-hidden="true" />
        <h1>Maged <em>&amp;</em> Mona</h1>
        <p className="opening-date">{isArabic ? "١٢ · ١١ · ٢٠٢٦" : "12 · 11 · 2026"}</p>
        <button type="button" className="opening-button" onClick={enter} aria-controls="top">
          {isArabic ? "ادخلوا حديقتنا" : "Enter our garden"} {isArabic ? <ArrowLeft size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
