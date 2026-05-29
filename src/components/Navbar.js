"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

const lessons = [
  {
    level: "Level 1",
    levelUr: "لیول 1",
    title: "Foundations",
    titleUr: "بنیادیات",
    color: "#085041",
    border: "#1d9e75",
    text: "#9fe1cb",
    items: [
      { id: 1, title: "The Three Parts of Speech", titleUr: "کلام کے تین اجزاء", ready: true },
      { id: 2, title: "Introduction to Particles", titleUr: "حروف کا تعارف", ready: true },
      { id: 3, title: "Introduction to Nouns", titleUr: "اسم کا تعارف", ready: true },
    ],
  },
  {
    level: "Level 2",
    levelUr: "لیول 2",
    title: "Case Endings",
    titleUr: "اعراب",
    color: "#185FA5",
    border: "#378ADD",
    text: "#B5D4F4",
    items: [
      { id: 4, title: "Introduction to I'rab", titleUr: "اعراب کا تعارف", ready: true },
      { id: 5, title: "Raf' — Nominative Case", titleUr: "رفع", ready: true },
      { id: 6, title: "Nasb — Accusative Case", titleUr: "نصب", ready: true },
      { id: 7, title: "Jarr — Genitive Case", titleUr: "جر", ready: true },
      { id: 8, title: "Jazm — Jussive Case", titleUr: "جزم", ready: true },
    ],
  },
  {
    level: "Level 3",
    levelUr: "لیول 3",
    title: "Verbs & Sentences",
    titleUr: "فعل اور جملے",
    color: "#633806",
    border: "#ef9f27",
    text: "#fac775",
    items: [
      { id: 9,  title: "Introduction to Verbs", titleUr: "فعل کا تعارف", ready: false },
      { id: 10, title: "The Nominal Sentence", titleUr: "جملہ اسمیہ", ready: false },
      { id: 11, title: "The Verbal Sentence", titleUr: "جملہ فعلیہ", ready: false },
      { id: 12, title: "Doer & Object", titleUr: "فاعل اور مفعول", ready: false },
      { id: 13, title: "Possession Structure", titleUr: "اضافت", ready: false },
    ],
  },
  {
    level: "Level 4",
    levelUr: "لیول 4",
    title: "Verb Morphology",
    titleUr: "صرف",
    color: "#3c3489",
    border: "#7f77dd",
    text: "#cecbf6",
    items: [
      { id: 14, title: "The Root System", titleUr: "جذر کا نظام", ready: false },
      { id: 15, title: "The 10 Verb Patterns", titleUr: "دس ابواب", ready: false },
      { id: 16, title: "Derived Nouns", titleUr: "مشتقات", ready: false },
      { id: 17, title: "Weak & Irregular Verbs", titleUr: "معتل افعال", ready: false },
    ],
  },
  {
    level: "Level 5",
    levelUr: "لیول 5",
    title: "Advanced Quranic Analysis",
    titleUr: "قرآنی تجزیہ",
    color: "#4a1b0c",
    border: "#d85a30",
    text: "#f0997b",
    items: [
      { id: 18, title: "Full Grammatical Parsing", titleUr: "مکمل اعراب", ready: false },
      { id: 19, title: "Root Word Explorer", titleUr: "جذر کا کھوج", ready: false },
      { id: 20, title: "Rhetorical Devices", titleUr: "بلاغت قرآنی", ready: false },
      { id: 21, title: "Al-Fauz al-Kabir Method", titleUr: "فوز الکبیر کا منہج", ready: false },
      { id: 22, title: "Verse-by-Verse Practice", titleUr: "عملی مشق", ready: false },
    ],
  },
];

export default function Navbar({ currentLesson }) {
  const { language, toggleLanguage, t, theme, toggleTheme } = useLanguage();
  const isDark = theme === "dark";
  const isUrdu = language === "ur";
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* App Name */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "22px" }}>☪️</span>
          <span
            className={language === "ur" ? "urdu" : ""}
            style={{ fontSize: "18px", fontWeight: "600", color: "var(--color-primary)" }}
          >
            {t.appName}
          </span>
        </Link>

        {/* Right side buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

          {/* Lessons Navigator Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            style={{
              backgroundColor: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--color-text)",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
          >
            <span style={{ fontSize: "16px" }}>📚</span>
            <span className={isUrdu ? "urdu" : ""}>{isUrdu ? "اسباق" : "Lessons"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
              backgroundColor: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.2s",
              color: "var(--color-text)",
              fontSize: "14px",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
          >
            <span style={{ fontSize: "16px" }}>{isDark ? "☀️" : "🌙"}</span>
            <span>{isDark ? "Light" : "Dark"}</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            style={{
              backgroundColor: "var(--color-surface2)",
              border: "1px solid var(--color-primary)",
              borderRadius: "8px",
              padding: "8px 20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: "16px" }}>🌐</span>
            <span style={{ color: "var(--color-primary)", fontWeight: "600", fontSize: "14px" }}>
              {language === "en" ? "اردو" : "English"}
            </span>
          </button>

        </div>
      </nav>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 200,
            transition: "opacity 0.3s",
          }}
        />
      )}

      {/* Side Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: drawerOpen ? 0 : "-380px",
          width: "360px",
          height: "100vh",
          backgroundColor: "var(--color-surface)",
          borderRight: "1px solid var(--color-border)",
          zIndex: 300,
          transition: "left 0.3s ease",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            backgroundColor: "var(--color-surface)",
            zIndex: 1,
          }}
        >
          <div>
            <div style={{ fontSize: "18px", fontWeight: "700", color: "var(--color-text)" }}>
              {isUrdu ? <span className="urdu">تمام اسباق</span> : "All Lessons"}
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>
              {isUrdu ? <span className="urdu">۵ درجات • ۲۲ اسباق</span> : "5 Levels • 22 Lessons"}
            </div>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            style={{
              backgroundColor: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              fontSize: "18px",
              color: "var(--color-text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {/* Lesson List */}
        <div style={{ padding: "16px", flex: 1 }}>
          {lessons.map((level, li) => (
            <div key={li} style={{ marginBottom: "20px" }}>

              {/* Level Header */}
              <div
                style={{
                  backgroundColor: level.color,
                  border: `1px solid ${level.border}`,
                  borderRadius: "8px 8px 0 0",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "12px", color: level.text, opacity: 0.8 }}>
                  {isUrdu ? level.levelUr : level.level}
                </span>
                <span
                  className={isUrdu ? "urdu" : ""}
                  style={{ fontSize: "14px", fontWeight: "700", color: level.text }}
                >
                  {isUrdu ? level.titleUr : level.title}
                </span>
              </div>

              {/* Lesson Items */}
              <div
                style={{
                  border: `1px solid ${level.border}`,
                  borderTop: "none",
                  borderRadius: "0 0 8px 8px",
                  overflow: "hidden",
                }}
              >
                {level.items.map((item, ii) => {
                  const isCurrent = currentLesson === item.id;
                  return (
                    <div
                      key={ii}
                      style={{
                        borderBottom: ii < level.items.length - 1 ? "1px solid var(--color-border)" : "none",
                        backgroundColor: isCurrent ? `${level.color}66` : "var(--color-surface)",
                      }}
                    >
                      {item.ready ? (
                        <Link
                          href={`/lessons/${item.id}`}
                          onClick={() => setDrawerOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 16px",
                            textDecoration: "none",
                            transition: "background 0.15s",
                          }}
                        >
                          {/* Number badge */}
                          <div
                            style={{
                              backgroundColor: level.color,
                              border: `1px solid ${level.border}`,
                              borderRadius: "6px",
                              minWidth: "30px",
                              height: "30px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: level.text,
                              flexShrink: 0,
                            }}
                          >
                            {item.id}
                          </div>
                          {/* Title */}
                          <span
                            className={isUrdu ? "urdu" : ""}
                            style={{
                              fontSize: "13px",
                              color: isCurrent ? level.border : "var(--color-text)",
                              fontWeight: isCurrent ? "700" : "400",
                              flex: 1,
                            }}
                          >
                            {isUrdu ? item.titleUr : item.title}
                          </span>
                          {isCurrent && (
                            <span style={{ fontSize: "10px", color: level.border, fontWeight: "700" }}>●</span>
                          )}
                        </Link>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 16px",
                            opacity: 0.45,
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "var(--color-surface2)",
                              border: "1px solid var(--color-border)",
                              borderRadius: "6px",
                              minWidth: "30px",
                              height: "30px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--color-text-muted)",
                              flexShrink: 0,
                            }}
                          >
                            {item.id}
                          </div>
                          <span
                            className={isUrdu ? "urdu" : ""}
                            style={{ fontSize: "13px", color: "var(--color-text-muted)", flex: 1 }}
                          >
                            {isUrdu ? item.titleUr : item.title}
                          </span>
                          <span style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>🔒</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}

          {/* Syllabus Link */}
          <Link
            href="/syllabus"
            onClick={() => setDrawerOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px",
              backgroundColor: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              textDecoration: "none",
              color: "var(--color-primary)",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "8px",
            }}
          >
            <span className={isUrdu ? "urdu" : ""}>{isUrdu ? "مکمل نصاب دیکھیں ←" : "View Full Syllabus →"}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
