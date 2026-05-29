"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const isUrdu = language === "ur";

  return (
    <footer
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "40px 2rem 24px",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "32px",
          marginBottom: "32px",
        }}
      >
        {/* Brand Column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "20px" }}>☪️</span>
            <span
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "16px", fontWeight: "700", color: "var(--color-primary)" }}
            >
              {isUrdu ? "قرآنی عربی گرامر" : "Quranic Arabic Grammar"}
            </span>
          </div>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: "1.7" }}
          >
            {isUrdu
              ? "قرآن مجید کی زبان سیکھیں — بنیاد سے اعلیٰ درجے تک"
              : "Learn the language of the Quran — from foundations to advanced analysis."}
          </p>
        </div>

        {/* Levels Column */}
        <div>
          <h4
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-text)", marginBottom: "12px" }}
          >
            {isUrdu ? "سطحیں" : "Levels"}
          </h4>
          <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "6px" }}>{isUrdu ? "سطح ۱ — بنیادیات" : "Level 1 — Foundations"}</div>
          <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "6px" }}>{isUrdu ? "سطح ۲ — فعل اور جملے" : "Level 2 — Verbs & Sentences"}</div>
          <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "6px" }}>{isUrdu ? "سطح ۳ — اعراب" : "Level 3 — Case Endings"}</div>
          <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "6px" }}>{isUrdu ? "سطح ۴ — صرف" : "Level 4 — Verb Morphology"}</div>
          <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "6px" }}>{isUrdu ? "سطح ۵ — قرآنی تجزیہ" : "Level 5 — Quranic Analysis"}</div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-text)", marginBottom: "12px" }}
          >
            {isUrdu ? "فوری روابط" : "Quick Links"}
          </h4>
          <a href="/" className={isUrdu ? "urdu" : ""} style={{ display: "block", fontSize: "13px", color: "var(--color-primary)", marginBottom: "6px", textDecoration: "none" }}>
            {isUrdu ? "گھر" : "Home"}
          </a>
          <a href="/syllabus" className={isUrdu ? "urdu" : ""} style={{ display: "block", fontSize: "13px", color: "var(--color-primary)", marginBottom: "6px", textDecoration: "none" }}>
            {isUrdu ? "نصاب" : "Syllabus"}
          </a>
          <a href="/lessons/1" className={isUrdu ? "urdu" : ""} style={{ display: "block", fontSize: "13px", color: "var(--color-primary)", marginBottom: "6px", textDecoration: "none" }}>
            {isUrdu ? "سبق ۱" : "Lesson 1"}
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          className={isUrdu ? "urdu" : ""}
          style={{ fontSize: "12px", color: "var(--color-text-muted)" }}
        >
          {isUrdu ? "© ۲۰۲۵ قرآنی عربی اکیڈمی" : "© 2025 Quranic Arabic Academy — Built with Next.js"}
        </p>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
          {isUrdu ? "عامر یونس کی جانب سے ❤️" : "Made with ❤️ by Aamir Younus"}
        </p>
      </div>
    </footer>
  );
}