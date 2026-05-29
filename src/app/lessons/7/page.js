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
    title: "Jarr — Genitive Case",
    arabicTitle: "الجَرّ",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 7",
    intro:
      "Jarr is the genitive case in Arabic. A word enters Jarr when it follows a preposition (حرف جر) or when it is the second noun in a possessive construction (إضافة). Its sign is the kasra (ِ) — a small mark below the final letter.",
    goldenRule:
      "A word is in Jarr when it follows a preposition (بِ، فِي، مِنْ، إِلَى etc.) or when it is the Mudaf Ilayh in an Idafa. Its sign is the kasra (ِ).",
    tableTitle: "When Does Jarr Occur?",
    parts: [
      {
        term: "حُرُوف الجَرّ",
        name: "Huruf al-Jarr",
        meaning: "Prepositions",
        desc: "بِ (in/with), فِي (in), مِنْ (from), إِلَى (to), عَلَى (on), عَنْ (from/about), لِ (for)",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "المُضَاف إِلَيْه",
        name: "Mudaf Ilayh",
        meaning: "Second of Idafa",
        desc: "The second noun in a possessive structure — always in Jarr",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "Quranic Example 1 — Surah Al-Fatiha (1:1)",
    example1Arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    example1Translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
    example1Note:
      "بِسْمِ — the بِ is a preposition causing Jarr on اسْمِ. Then اللهِ is the Mudaf Ilayh (second of Idafa: 'name of Allah'). الرَّحْمٰنِ and الرَّحِيْمِ follow in Jarr as adjectives agreeing with اللهِ.",
    example1Words: [
      { word: "بِ", type: "Harf — Preposition", meaning: "In/With", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "اسْمِ", type: "Jarr — after بِ", meaning: "Name", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "اللهِ", type: "Jarr — Mudaf Ilayh", meaning: "Of Allah", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "الرَّحْمٰنِ", type: "Jarr — Adjective", meaning: "Most Gracious", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "الرَّحِيْمِ", type: "Jarr — Adjective", meaning: "Most Merciful", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    example2Title: "Quranic Example 2 — Surah Al-Alaq (96:2)",
    example2Arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَق",
    example2Translation: "He created man from a clinging substance.",
    example2Note:
      "مِنْ is a preposition of Jarr. The word after it — عَلَق — is therefore in Jarr. Notice عَلَق here has no kasra shown, but the tanwin (نٌ) would normally mark it. This shows Jarr can also interact with indefinite tanwin.",
    example2Words: [
      { word: "خَلَقَ", type: "Fi'l", meaning: "He created", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "الْإِنسَانَ", type: "Nasb — Object", meaning: "The human", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "مِنْ", type: "Harf — Preposition", meaning: "From", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "عَلَق", type: "Jarr — after مِنْ", meaning: "Clinging substance", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "Jarr is marked by kasra (ِ). It is triggered by prepositions and Idafa structures. The Quran is filled with both — mastering Jarr unlocks a huge portion of Quranic vocabulary and sentence structures.",
    backHome: "← Back to Home",
    prevLesson: "← Previous Lesson",
    nextLesson: "Next Lesson →",
  },
  ur: {
    title: "جر",
    arabicTitle: "الجَرّ",
    level: "سطح ۲ — اعراب",
    lessonNumber: "سبق 7",
    intro:
      "جر عربی کی وہ حالت ہے جو کسی اسم پر اس وقت آتی ہے جب وہ حرف جر کے بعد یا اضافت میں مضاف الیہ ہو۔ جر کی علامت زیر (ِ) ہے — آخری حرف کے نیچے ایک چھوٹا نشان۔",
    goldenRule:
      "کوئی لفظ جر میں ہوتا ہے جب وہ حرف جر (بِ، فِي، مِنْ، إِلَى وغیرہ) کے بعد آئے یا اضافت میں مضاف الیہ ہو۔ اس کی علامت زیر (ِ) ہے۔",
    tableTitle: "جر کب آتا ہے؟",
    parts: [
      {
        term: "حُرُوف الجَرّ",
        name: "حروف جر",
        meaning: "Prepositions",
        desc: "بِ (میں/ساتھ)، فِي (میں)، مِنْ (سے)، إِلَى (تک)، عَلَى (پر)، عَنْ (سے/کے بارے میں)، لِ (کے لیے)",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "المُضَاف إِلَيْه",
        name: "مضاف الیہ",
        meaning: "Second of Idafa",
        desc: "اضافت میں دوسرا اسم — ہمیشہ جر میں",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "قرآنی مثال ۱ — سورۃ الفاتحہ (۱:۱)",
    example1Arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    example1Translation: "اللہ کے نام سے جو بڑا مہربان، نہایت رحم والا ہے۔",
    example1Note:
      "بِسْمِ میں بِ حرف جر ہے جو اسْمِ کو جر دیتا ہے۔ پھر اللهِ مضاف الیہ ہے (اسم اللہ کی اضافت)۔ الرَّحْمٰنِ اور الرَّحِيْمِ اللهِ کی صفت ہیں اس لیے جر میں ہیں۔",
    example1Words: [
      { word: "بِ", type: "حرف جر", meaning: "کے ساتھ", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "اسْمِ", type: "جر — بِ کے بعد", meaning: "نام", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "اللهِ", type: "جر — مضاف الیہ", meaning: "اللہ کا", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "الرَّحْمٰنِ", type: "جر — صفت", meaning: "بڑا مہربان", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "الرَّحِيْمِ", type: "جر — صفت", meaning: "نہایت رحم والا", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    example2Title: "قرآنی مثال ۲ — سورۃ العلق (۹۶:۲)",
    example2Arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَق",
    example2Translation: "اس نے انسان کو خون کی پھٹکی سے بنایا۔",
    example2Note:
      "مِنْ حرف جر ہے۔ اس کے بعد عَلَق جر میں ہے۔ یہ سب سے عام جر کا نمونہ ہے: حرف جر کے بعد اسم۔",
    example2Words: [
      { word: "خَلَقَ", type: "فعل", meaning: "اس نے بنایا", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "الْإِنسَانَ", type: "نصب — مفعول", meaning: "انسان", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "مِنْ", type: "حرف جر", meaning: "سے", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "عَلَق", type: "جر — مِنْ کے بعد", meaning: "خون کی پھٹکی", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "جر کی علامت زیر (ِ) ہے۔ یہ حروف جر اور اضافت کی وجہ سے آتی ہے۔ قرآن مجید میں دونوں بہت زیادہ ہیں — جر میں مہارت قرآنی الفاظ اور جملوں کا بڑا حصہ سمجھنے میں مدد دیتی ہے۔",
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
  <Navbar currentLesson={7} />   {/* ← number matches the lesson */}
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
          <Link href="/lessons/6" style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 24px", color: "var(--color-text)", textDecoration: "none", fontSize: "15px" }}>{c.prevLesson}</Link>
          <Link href="/lessons/8" style={{ backgroundColor: LEVEL_COLOR, border: "none", borderRadius: "8px", padding: "12px 24px", color: LEVEL_LIGHT, fontSize: "15px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>{c.nextLesson}</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function Lesson7() {
  return <LanguageProvider><LessonContent /></LanguageProvider>;
}
