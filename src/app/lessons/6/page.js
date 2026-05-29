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
    title: "Nasb — Accusative Case",
    arabicTitle: "النَّصْب",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 6",
    intro:
      "Nasb is the accusative case in Arabic — the case of objects and complements. When a word is in Nasb, it carries a fatha (َ) at its end. It is the case of the direct object, the object of certain particles, and verb complements.",
    goldenRule:
      "A word is in Nasb when it is the object of a verb (مفعول به), comes after certain particles (نواصب), or acts as a circumstantial complement. Its sign is the fatha (َ).",
    tableTitle: "When Does Nasb Occur?",
    parts: [
      {
        term: "المَفْعُول بِه",
        name: "Maf'ul bih",
        meaning: "Direct Object",
        desc: "The thing receiving the action of the verb — always in Nasb",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "النَّوَاصِب",
        name: "Nawasib",
        meaning: "Nasb-causing particles",
        desc: "Particles like أَنْ, لَنْ, كَيْ that put the following verb into Nasb",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الحَال",
        name: "Hal",
        meaning: "Circumstantial Complement",
        desc: "Describes the state of the subject or object — always in Nasb",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "Quranic Example 1 — Surah Al-Fatiha (1:5)",
    example1Arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    example1Translation: "You alone we worship, and You alone we ask for help.",
    example1Note:
      "إِيَّاكَ is a detached object pronoun in Nasb — it is the direct object of the verbs نَعْبُدُ and نَسْتَعِينُ. Placing it before the verb creates emphasis: 'You alone, not anyone else.'",
    example1Words: [
      { word: "إِيَّاكَ", type: "Nasb — Object", meaning: "You alone", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "نَعْبُدُ", type: "Fi'l", meaning: "We worship", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "وَإِيَّاكَ", type: "Nasb — Object", meaning: "And You alone", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "نَسْتَعِينُ", type: "Fi'l", meaning: "We seek help", color: "#633806", border: "#ef9f27", text: "#fac775" },
    ],
    example2Title: "Quranic Example 2 — Surah Al-Baqarah (2:21)",
    example2Arabic: "اعْبُدُوا رَبَّكُمُ",
    example2Translation: "Worship your Lord.",
    example2Note:
      "رَبَّكُمُ ends in fatha — it is in Nasb as the direct object of the command verb اعْبُدُوا. This is the most common Nasb pattern: verb followed by its object.",
    example2Words: [
      { word: "اعْبُدُوا", type: "Fi'l — Command", meaning: "Worship (you all)", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "رَبَّكُمُ", type: "Nasb — Object", meaning: "Your Lord", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "Nasb is marked by fatha (َ). It is the case of objects — the receiver of the action. When you see a fatha on a noun after a verb, it is almost certainly the direct object. This is the case that gives Arabic sentences their action and direction.",
    backHome: "← Back to Home",
    prevLesson: "← Previous Lesson",
    nextLesson: "Next Lesson →",
  },
  ur: {
    title: "نصب",
    arabicTitle: "النَّصْب",
    level: "سطح ۲ — اعراب",
    lessonNumber: "سبق 6",
    intro:
      "نصب عربی کی وہ حالت ہے جو مفعول اور تکملات پر آتی ہے۔ نصب کی علامت زبر (َ) ہے — لفظ کے آخری حرف کے اوپر ایک چھوٹی سی لکیر۔ یہ فعل کے مفعول، بعض حروف کے بعد آنے والے افعال، اور حال پر آتی ہے۔",
    goldenRule:
      "کوئی لفظ نصب میں ہوتا ہے جب وہ فعل کا مفعول به، نواصب کے بعد مضارع، یا حال ہو۔ اس کی علامت زبر (َ) ہے۔",
    tableTitle: "نصب کب آتا ہے؟",
    parts: [
      {
        term: "المَفْعُول بِه",
        name: "مفعول به",
        meaning: "Direct Object",
        desc: "وہ چیز جس پر فعل کا اثر پڑے — ہمیشہ نصب میں",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "النَّوَاصِب",
        name: "نواصب",
        meaning: "Nasb-causing particles",
        desc: "أَنْ، لَنْ، كَيْ جیسے حروف جو فعل مضارع کو نصب میں ڈالتے ہیں",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الحَال",
        name: "حال",
        meaning: "Circumstantial",
        desc: "فاعل یا مفعول کی کیفیت بیان کرے — ہمیشہ نصب میں",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "قرآنی مثال ۱ — سورۃ الفاتحہ (۱:۵)",
    example1Arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    example1Translation: "ہم صرف تیری عبادت کرتے ہیں اور صرف تجھ سے مدد مانگتے ہیں۔",
    example1Note:
      "إِيَّاكَ ضمیر منفصل نصب میں ہے — یہ نَعْبُدُ اور نَسْتَعِينُ دونوں کا مفعول ہے۔ فعل سے پہلے لانے سے تاکید پیدا ہوتی ہے: صرف تیری، کسی اور کی نہیں۔",
    example1Words: [
      { word: "إِيَّاكَ", type: "نصب — مفعول", meaning: "صرف تجھے", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "نَعْبُدُ", type: "فعل", meaning: "ہم عبادت کرتے ہیں", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "وَإِيَّاكَ", type: "نصب — مفعول", meaning: "اور صرف تجھ سے", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "نَسْتَعِينُ", type: "فعل", meaning: "ہم مدد مانگتے ہیں", color: "#633806", border: "#ef9f27", text: "#fac775" },
    ],
    example2Title: "قرآنی مثال ۲ — سورۃ البقرۃ (۲:۲۱)",
    example2Arabic: "اعْبُدُوا رَبَّكُمُ",
    example2Translation: "اپنے رب کی عبادت کرو۔",
    example2Note:
      "رَبَّكُمُ کے آخر میں زبر ہے — یہ امر فعل اعْبُدُوا کا مفعول ہونے کی وجہ سے نصب میں ہے۔ یہ سب سے عام نصب کا نمونہ ہے: فعل اور اس کے بعد مفعول۔",
    example2Words: [
      { word: "اعْبُدُوا", type: "فعل امر", meaning: "عبادت کرو", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "رَبَّكُمُ", type: "نصب — مفعول", meaning: "اپنے رب کی", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "نصب کی علامت زبر (َ) ہے۔ یہ مفعول کی حالت ہے — جس پر فعل کا اثر پڑے۔ جب کسی فعل کے بعد اسم پر زبر نظر آئے تو وہ تقریباً ہمیشہ مفعول به ہوگا۔ یہی وہ حالت ہے جو عربی جملوں کو عمل اور سمت دیتی ہے۔",
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
  <Navbar currentLesson={6} />   {/* ← number matches the lesson */}
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
          <Link href="/lessons/5" style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 24px", color: "var(--color-text)", textDecoration: "none", fontSize: "15px" }}>{c.prevLesson}</Link>
          <Link href="/lessons/6" style={{ backgroundColor: LEVEL_COLOR, border: "none", borderRadius: "8px", padding: "12px 24px", color: LEVEL_LIGHT, fontSize: "15px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>{c.nextLesson}</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function Lesson6() {
  return <LanguageProvider><LessonContent /></LanguageProvider>;
}
