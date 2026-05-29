"use client";

import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Footer from "../../../components/Footer";

const LEVEL_COLOR = "#185FA5";
const LEVEL_BORDER = "#378ADD";
const LEVEL_TEXT = "#B5D4F4";
const LEVEL_LIGHT = "#E6F1FB";
const LEVEL_DARK = "#042C53";

const lessonContent = {
  en: {
    title: "Raf' — Nominative Case",
    arabicTitle: "الرَّفْع",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 5",
    intro:
      "Raf' is the nominative case in Arabic — the 'default' state of a noun or verb. When a word is in Raf', it typically carries a damma (ُ) at its end. It is the case of subjects, predicate nouns, and the doer of an action.",
    goldenRule:
      "A word is in Raf' when it is the subject of a sentence (مبتدا), the predicate (خبر), or the doer of a verb (فاعل). Its sign is the damma (ُ) — a single curl above the final letter.",
    tableTitle: "When Does Raf' Occur?",
    parts: [
      {
        term: "المُبْتَدَأ",
        name: "Mubtada",
        meaning: "Subject",
        desc: "The topic of a nominal sentence — always in Raf'",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الخَبَر",
        name: "Khabar",
        meaning: "Predicate",
        desc: "What is said about the subject — always in Raf'",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الفَاعِل",
        name: "Fa'il",
        meaning: "Doer",
        desc: "The one performing the verb action — always in Raf'",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "Quranic Example 1 — Surah Al-Ikhlas (112:2)",
    example1Arabic: "اللهُ الصَّمَدُ",
    example1Translation: "Allah, the Eternal Refuge.",
    example1Note:
      "Both اللهُ and الصَّمَدُ end in damma — they are in Raf'. The first is the subject (Mubtada) and the second is the predicate (Khabar). This is the most basic structure of a nominal sentence.",
    example1Words: [
      { word: "اللهُ", type: "Raf' — Mubtada", meaning: "Allah (subject)", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "الصَّمَدُ", type: "Raf' — Khabar", meaning: "The Eternal", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    example2Title: "Quranic Example 2 — Surah Al-Alaq (96:2)",
    example2Arabic: "خَلَقَ الْإِنسَانَ",
    example2Translation: "He created the human being.",
    example2Note:
      "Here خَلَقَ is the verb. The doer (Fa'il) is implied — 'He' (هو) — which is always in Raf'. الْإِنسَانَ ends in fatha — it is Nasb, the object. This contrast makes the Raf'/Nasb distinction very clear.",
    example2Words: [
      { word: "خَلَقَ", type: "Fi'l", meaning: "He created", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "الْإِنسَانَ", type: "Nasb — Object", meaning: "The human", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "Raf' is marked by damma (ُ). It is the case of subjects and doers. Whenever you see a damma at the end of a noun or verb, ask: is this the subject, predicate, or doer? That question will almost always be answered yes.",
    backHome: "← Back to Home",
    prevLesson: "← Previous Lesson",
    nextLesson: "Next Lesson →",
  },
  ur: {
    title: "رفع",
    arabicTitle: "الرَّفْع",
    level: "سطح ۲ — اعراب",
    lessonNumber: "سبق 5" ,
    intro:
      "رفع عربی کی وہ بنیادی حالت ہے جو اسم یا فعل پر اس وقت آتی ہے جب وہ جملے کا فاعل، مبتدا یا خبر ہو۔ رفع کی علامت پیش (ُ) ہے — لفظ کے آخری حرف کے اوپر ایک چھوٹا سا بل۔",
    goldenRule:
      "کوئی لفظ رفع میں ہوتا ہے جب وہ جملے کا مبتدا، خبر، یا فاعل ہو۔ اس کی علامت پیش (ُ) ہے۔",
    tableTitle: "رفع کب آتا ہے؟",
    parts: [
      {
        term: "المُبْتَدَأ",
        name: "مبتدا",
        meaning: "Subject",
        desc: "جملہ اسمیہ کا موضوع — ہمیشہ رفع میں",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الخَبَر",
        name: "خبر",
        meaning: "Predicate",
        desc: "مبتدا کے بارے میں جو بتایا جائے — ہمیشہ رفع میں",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الفَاعِل",
        name: "فاعل",
        meaning: "Doer",
        desc: "فعل کرنے والا — ہمیشہ رفع میں",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "قرآنی مثال ۱ — سورۃ الاخلاص (۱۱۲:۲)",
    example1Arabic: "اللهُ الصَّمَدُ",
    example1Translation: "اللہ بے نیاز ہے۔",
    example1Note:
      "اللهُ اور الصَّمَدُ دونوں کے آخر میں پیش ہے — دونوں رفع میں ہیں۔ پہلا مبتدا ہے اور دوسرا خبر۔ یہ جملہ اسمیہ کی سادہ ترین مثال ہے۔",
    example1Words: [
      { word: "اللهُ", type: "رفع — مبتدا", meaning: "اللہ (موضوع)", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "الصَّمَدُ", type: "رفع — خبر", meaning: "بے نیاز", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    example2Title: "قرآنی مثال ۲ — سورۃ العلق (۹۶:۲)",
    example2Arabic: "خَلَقَ الْإِنسَانَ",
    example2Translation: "اس نے انسان کو بنایا۔",
    example2Note:
      "یہاں خَلَقَ فعل ہے۔ فاعل (ہو) ضمیر مستتر ہے — جو ہمیشہ رفع میں ہوتا ہے۔ الْإِنسَانَ کے آخر میں زبر ہے — یہ نصب میں ہے یعنی مفعول ہے۔",
    example2Words: [
      { word: "خَلَقَ", type: "فعل", meaning: "اس نے بنایا", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "الْإِنسَانَ", type: "نصب — مفعول", meaning: "انسان", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "رفع کی علامت پیش (ُ) ہے۔ یہ مبتدا، خبر اور فاعل پر آتا ہے۔ جب بھی کسی اسم یا فعل کے آخر میں پیش نظر آئے تو سوال کریں: کیا یہ مبتدا، خبر، یا فاعل ہے؟ جواب تقریباً ہمیشہ ہاں ہوگا۔",
    backHome: "← گھر واپس",
    prevLesson: "← پچھلا سبق",
    nextLesson: "اگلا سبق →",
  },
};

function WordTag({ word, type, meaning, color, border, text }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", margin: "8px" }}>
      <div style={{ backgroundColor: color, border: `1px solid ${border}`, borderRadius: "8px", padding: "10px 16px", textAlign: "center", minWidth: "80px" }}>
        <div className="quran-arabic" style={{ marginBottom: "12px" }}>{word}</div>
        <div style={{ fontSize: "11px", color: text, opacity: 0.8 }}>{type}</div>
      </div>
      <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "4px", textAlign: "center" }}>{meaning}</div>
    </div>
  );
}

function LessonContent() {
  const { language } = useLanguage();
  const isUrdu = language === "ur";
  const c = lessonContent[language];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
  <Navbar currentLesson={5} />   {/* ← number matches the lesson */}
      <div className="animate-fadeInUp" style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ marginBottom: "24px", fontSize: "14px", color: "var(--color-text-muted)" }}>
          <Link href="/" style={{ color: LEVEL_BORDER, textDecoration: "none" }}>Home</Link>
          {" → "}<span>{c.level}</span>{" → "}<span>{c.lessonNumber}</span>
        </div>

        <div style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "16px", padding: "36px", marginBottom: "32px", borderTop: `4px solid ${LEVEL_BORDER}` }}>
          <div style={{ fontSize: "13px", color: LEVEL_BORDER, marginBottom: "8px", fontWeight: "600" }}>{c.level} • {c.lessonNumber}</div>
          <h1 className={isUrdu ? "urdu" : ""} style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}>{c.title}</h1>
          <div className="quran-arabic" style={{ marginBottom: "12px" }}>{c.arabicTitle}</div>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "16px", color: "var(--color-text-muted)", lineHeight: "1.8" }}>{c.intro}</p>
        </div>

        <div style={{ background: "linear-gradient(135deg, #021829, #031e38)", border: `1px solid ${LEVEL_BORDER}`, borderRadius: "12px", padding: "24px 32px", marginBottom: "32px", textAlign: "center" }}>
          <div style={{ fontSize: "20px", marginBottom: "12px" }}>⭐</div>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "17px", color: LEVEL_TEXT, fontWeight: "600", lineHeight: "1.8" }}>{c.goldenRule}</p>
        </div>

        <div style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "28px", marginBottom: "32px" }}>
          <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: LEVEL_BORDER }}>{c.tableTitle}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {c.parts.map((part, i) => (
              <div key={i} style={{ backgroundColor: part.color, border: `1px solid ${part.border}`, borderRadius: "10px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <div className="quran-arabic" style={{ color: part.text, fontSize: "22px" }}>{part.term}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "16px", fontWeight: "600", color: part.text }}>{part.name} — {part.meaning}</div>
                  <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: part.text, opacity: 0.8, marginTop: "4px" }}>{part.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {[{ title: c.example1Title, arabic: c.example1Arabic, translation: c.example1Translation, words: c.example1Words, note: c.example1Note },
          { title: c.example2Title, arabic: c.example2Arabic, translation: c.example2Translation, words: c.example2Words, note: c.example2Note }
        ].map((ex, idx) => (
          <div key={idx} style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "28px", marginBottom: "24px" }}>
            <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "18px", fontWeight: "600", marginBottom: "20px", color: LEVEL_BORDER }}>🕌 {ex.title}</h2>
            <div className="quran-verse" style={{ marginBottom: "20px" }}>
              <div className="quran-arabic" style={{ marginBottom: "12px" }}>{ex.arabic}</div>
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "#85b7eb", fontStyle: isUrdu ? "normal" : "italic" }}>{ex.translation}</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px", flexDirection: "row-reverse" }}>
              {ex.words.map((w, i) => <WordTag key={i} {...w} />)}
            </div>
            <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "8px", padding: "14px 18px", borderLeft: `3px solid ${LEVEL_BORDER}` }}>
              <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.7" }}>💡 {ex.note}</p>
            </div>
          </div>
        ))}

        <div style={{ background: "linear-gradient(135deg, #021829, #031e38)", border: `1px solid ${LEVEL_BORDER}`, borderRadius: "12px", padding: "28px", marginBottom: "40px" }}>
          <h3 className={isUrdu ? "urdu" : ""} style={{ fontSize: "18px", fontWeight: "600", color: LEVEL_TEXT, marginBottom: "12px" }}>✅ {c.keyTakeaway}</h3>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: LEVEL_LIGHT, lineHeight: "1.8" }}>{c.takeawayText}</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/lessons/4" style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 24px", color: "var(--color-text)", textDecoration: "none", fontSize: "15px" }}>{c.prevLesson}</Link>
          <Link href="/lessons/6" style={{ backgroundColor: LEVEL_COLOR, border: "none", borderRadius: "8px", padding: "12px 24px", color: LEVEL_LIGHT, fontSize: "15px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>{c.nextLesson}</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function Lesson5() {
  return <LanguageProvider><LessonContent /></LanguageProvider>;
}
