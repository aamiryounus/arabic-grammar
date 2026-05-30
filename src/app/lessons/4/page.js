"use client";

import React from "react";
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
    title: "Introduction to I'rab",
    arabicTitle: "الإعراب",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 4",
    intro: "• I'rab refers to the status of a noun in any Arabic construction.\n• I'rab establishes the position and role of a noun within a sentence or phrase.\n• I'rab is the name given to the finishing of a noun — meaning which vowel mark (fatha, kasra, damma) or tanwin (double fatha, double kasra, double damma) appears on its final letter. Or whether the noun ends with one of the sounds: ūna, īna, ayna.",
    goldenRule:
      "I'rab is the change at the end of a word caused by the factors that govern it. It tells you whether a word is the subject, object, possessive, or something else entirely.",
    tableTitle: "Three States of I'rab for Nouns",
    recognitionTitle: "How to Identify I'rab",
    recognitionText: "I'rab is identified in two ways",
    recognition1Title: "1. By Vowel Mark",
    recognition1Text: "For singular nouns and broken plurals, I'rab is identified by the vowel on the final letter",
    recognition1Rules: [
      "If the final letter has damma (ـُ), the noun is Marfu' (Nominative)",
      "If the final letter has fatha (ـَ), the noun is Mansub (Accusative)",
      "If the final letter has kasra (ـِ), the noun is Majrur (Genitive)",
      "Note: This rule does not apply to the dual (Muthanna).",
    ],
    recognition2Title: "2. By Sound",
    recognition2Text: "For the dual (Muthanna) and sound plurals, I'rab is identified by the sound at the end when pronounced.",
    parts: [
      {
        term: "الرَّفْع",
        name: "Raf'",
        meaning: "Nominative",
        desc: "The default state — used for subjects. Marked by damma ",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "النَّصْب",
        name: "Nasb",
        meaning: "Accusative",
        desc: "Used for objects and complements. Marked by fatha ",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الجَرّ",
        name: "Jarr",
        meaning: "Genitive",
        desc: "Used after prepositions and in possession. Marked by kasra ",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الجَزْم",
        name: "Jazm",
        meaning: "Jussive",
        desc: "For verbs only — used in commands and conditions. Marked by sukun ",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "Quranic Example 1 — Surah Al-Baqarah (2:255)",
    example1Arabic: "اللهُ لَا إِلٰهَ إِلَّا هُوَ",
    example1Translation: "Allah — there is no deity except Him.",
    example1Note:
      "Notice اللهُ ends in damma ـــُ — it is in Raf' because it is the subject of the sentence. This is I'rab in action.",
    example1Words: [
      { word: "اللهُ", type: "Raf'", meaning: "Allah (subject)", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "لَا", type: "Harf", meaning: "No/Not", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "إِلٰهَ", type: "Nasb", meaning: "deity", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "إِلَّا", type: "Harf", meaning: "Except", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "هُوَ", type: "Raf'", meaning: "He", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    example2Title: "Quranic Example 2 — Surah Al-Ikhlas (112:1)",
    example2Arabic: "قُلْ هُوَ اللهُ أَحَدٌ",
    example2Translation: "Say: He is Allah, the One.",
    example2Note:
      "Every noun here ends in damma ـــُ or tanwin damma (ٌ) — all in Raf' because they are either subjects or predicates. The verb قُلْ ends in sukun — that is Jazm, the jussive form of the command.",
    example2Words: [
      { word: "قُلْ", type: "Jazm", meaning: "Say! (command)", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "هُوَ", type: "Raf'", meaning: "He", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "اللهُ", type: "Raf'", meaning: "Allah", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "أَحَدٌ", type: "Raf'", meaning: "The One", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "I'rab is the grammar engine of Arabic. Every noun and verb has a state — Raf', Nasb, Jarr, or Jazm — determined by its role in the sentence. Learning to spot and name these endings is the core skill of the next four lessons.",
    backHome: "← Back to Home",
    prevLesson: "← Lesson 3",
    nextLesson: "Lesson 5 →",
  },
  ur: {
    title: "اعراب کا تعارف",
    arabicTitle: "الإعراب",
    level: "لیول 2 — اعراب",
    lessonNumber: "سبق 4",
    intro: "• کسی بھی عربی construction میں اسم کے status کو اعراب کہتے ہیں۔\n• اعراب جملے یا ترکیب میں اسم کا مقام وضع کرتا ہے۔\n• اسم کی Finishing کا نام اعراب ہے۔ مطلب اس کے آخری حرف پر کونسی حرکت (زبر، زیر، پیش)، تنوین (دو زبر، دو زیر، دو پیش) آتی ہے۔ یا اسم اُوۡنَ، اِیۡنَ، اَیۡنِ میں سے کس آواز پر ختم ہوتا ہے۔",
    goldenRule:
      "اعراب وہ تبدیلی ہے جو کسی لفظ کے آخر میں اس کے عاملوں کی وجہ سے آتی ہے — یہ بتاتی ہے کہ لفظ فاعل ہے، مفعول ہے، مضاف الیہ ہے، یا کچھ اور۔",
    tableTitle: "اسم کیلیے اعراب کی تین حالتیں",
    recognitionTitle: "اعراب کی پہچان",
    recognitionText: "اعراب کی پہچان دو طریقے سے کی جاتی ہے",
    recognition1Title: "1- حرکت سے        ",
    recognition1Text: "واحد اور جمع مکسر کا اعراب اسم کے آخری حرف کی حرکت سے پہچانا جاتا ہے",
    recognition1Rules: [
      "اگر اسم کے آخری حرف پہ پیش ہو تو وہ مرفوع ہوتا ہے",
      "اگر اسم کے آخری حرف پہ زبر ہو تو وہ منصوب ہوتا ہے",
      "اگر اسم کے آخری حرف پہ زیر ہو تو وہ مجرور ہوتا ہے",
      "نوٹ: یہ اصول مثنٰی پر apply نہیں ہوتا۔",
    ],
    recognition2Title: "2- آواز سے",
    recognition2Text: "مثنٰی اور جمع سالم کا اعراب اسم کو pronounce کرتے ہوئے آخر میں جو آواز پیدا ہوتی ہے اس سے پہچانا جاتا ہے۔",
    parts: [
      {
        term: "الرَّفْع",
        name: "رفع",
        meaning: "Nominative",
        desc: "بنیادی حالت — فاعل کے لیے پیش کی علامت",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "النَّصْب",
        name: "نصب",
        meaning: "Accusative",
        desc: "مفعول اور تکملے کے لیے زبر کی علامت",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الجَرّ",
        name: "جر",
        meaning: "Genitive",
        desc: "حروف جر اور اضافت کے بعد زیر کی علامت",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "الجَزْم",
        name: "جزم",
        meaning: "Jussive",
        desc: "صرف افعال کے لیے — امر اور شرط میں سکون کی علامت",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "قرآنی مثال ۱ — سورۃ البقرۃ (۲:۲۵۵)",
    example1Arabic: "اللهُ لَا إِلٰهَ إِلَّا هُوَ",
    example1Translation: "اللہ — اس کے سوا کوئی معبود نہیں۔",
    example1Note:
      "غور کریں کہ اللهُ کے آخر میں پیش ـــُ ہے — یہ رفع میں ہے کیونکہ یہ جملے کا مبتدا ہے۔ یہی اعراب کا عملی مظاہرہ ہے۔",
    example1Words: [
      { word: "اللهُ", type: "رفع", meaning: "اللہ (مبتدا)", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "لَا", type: "حرف", meaning: "نہیں", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "إِلٰهَ", type: "نصب", meaning: "معبود", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "إِلَّا", type: "حرف", meaning: "سوائے", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "هُوَ", type: "رفع", meaning: "وہ", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    example2Title: "قرآنی مثال ۲ — سورۃ الاخلاص (۱۱۲:۱)",
    example2Arabic: "قُلْ هُوَ اللهُ أَحَدٌ",
    example2Translation: "کہیے: وہ اللہ ایک ہے۔",
    example2Note:
      "یہاں ہر اسم کے آخر میں پیش ـــُ یا تنوین پیش (ٌ) ہے — سب رفع میں ہیں کیونکہ یہ مبتدا یا خبر ہیں۔ فعل قُلْ کے آخر میں سکون ہے — یہ جزم ہے، یعنی امر کی حالت۔",
    example2Words: [
      { word: "قُلْ", type: "جزم", meaning: "کہیے (امر)", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "هُوَ", type: "رفع", meaning: "وہ", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "اللهُ", type: "رفع", meaning: "اللہ", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "أَحَدٌ", type: "رفع", meaning: "ایک", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "اعراب عربی گرامر کا انجن ہے۔ ہر اسم اور فعل کی ایک حالت ہوتی ہے — رفع، نصب، جر، یا جزم — جو جملے میں اس کے کردار سے طے ہوتی ہے۔ اگلے چار اسباق میں انہی حالتوں کو پہچاننا اور نام لینا ہی بنیادی مہارت ہے۔",
    backHome: "← گھر واپس",
    prevLesson: "← پچھلا سبق",
    nextLesson: "اگلا سبق →",
  },
};

function WordTag({ word, type, meaning, color, border, text }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", margin: "8px" }}>
      <div
        style={{
          backgroundColor: color,
          border: `1px solid ${border}`,
          borderRadius: "8px",
          padding: "10px 16px",
          textAlign: "center",
          minWidth: "80px",
        }}
      >
        <div className="quran-arabic" style={{ marginBottom: "12px" }}>{word}</div>
        <div style={{ fontSize: "11px", color: text, opacity: 0.8 }}>{type}</div>
      </div>
      <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "4px", textAlign: "center" }}>
        {meaning}
      </div>
    </div>
  );
}

function LessonContent() {
  const { language } = useLanguage();
  const isUrdu = language === "ur";
  const c = lessonContent[language];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
      <Navbar currentLesson={4} />
      <div className="animate-fadeInUp" style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", fontSize: "14px", color: "var(--color-text-muted)" }}>
          <Link href="/" style={{ color: LEVEL_BORDER, textDecoration: "none" }}>Home</Link>
          {" → "}
          <span>{c.level}</span>
          {" → "}
          <span>{c.lessonNumber}</span>
        </div>

        {/* Lesson Header */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "16px",
            padding: "36px",
            marginBottom: "32px",
            borderTop: `4px solid ${LEVEL_BORDER}`,
          }}
        >
          <div style={{ fontSize: "13px", color: LEVEL_BORDER, marginBottom: "8px", fontWeight: "600" }}>
            {c.level} • {c.lessonNumber}
          </div>
          <h1 className={isUrdu ? "urdu" : ""} style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}>
            {c.title}
          </h1>
          <div className="quran-arabic" style={{ marginBottom: "12px" }}>{c.arabicTitle}</div>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "16px", color: "var(--color-text-muted)", lineHeight: "1.8", whiteSpace: "pre-line" }}>
            {c.intro}
          </p>
        </div>

        {/* Golden Rule */}
        <div
          style={{
            background: "linear-gradient(135deg, #021829, #031e38)",
            border: `1px solid ${LEVEL_BORDER}`,
            borderRadius: "12px",
            padding: "24px 32px",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", marginBottom: "12px" }}>⭐</div>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "17px", color: LEVEL_TEXT, fontWeight: "600", lineHeight: "1.8" }}>
            {c.goldenRule}
          </p>
        </div>

        {/* States Table */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: LEVEL_BORDER }}>
            {c.tableTitle}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {c.parts.map((part, i) => (
              <React.Fragment key={i}>
                {i === 3 && (
                  <div
                    className={isUrdu ? "urdu" : ""}
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: LEVEL_BORDER,
                      marginTop: "8px",
                      marginBottom: "4px",
                      textAlign: isUrdu ? "right" : "left",
                    }}
                  >
                    {isUrdu ? "افعال کیلیے اعراب کی حالت" : "State of I'rab for Verbs"}
                  </div>
                )}
                <div
                  style={{
                    backgroundColor: part.color,
                    border: `1px solid ${part.border}`,
                    borderRadius: "10px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="quran-arabic" style={{ marginBottom: "0", color: part.text, fontSize: "22px" }}>{part.term}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "16px", fontWeight: "600", color: part.text }}>
                      {part.name} — {part.meaning}
                    </div>
                    <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: part.text, opacity: 0.8, marginTop: "4px" }}>
                      {part.desc}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Recognition Section */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px", color: LEVEL_BORDER }}>
            {c.recognitionTitle}
          </h2>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text-muted)", marginBottom: "20px" }}>
            {c.recognitionText}
          </p>

          {/* Method 1 */}
          <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "10px", padding: "20px", marginBottom: "16px" }}>
            <h3 className={isUrdu ? "urdu" : ""} style={{ fontSize: "16px", fontWeight: "700", color: LEVEL_TEXT, marginBottom: "10px" }}>
              {c.recognition1Title}
            </h3>
            <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)", marginBottom: "12px" }}>
              {c.recognition1Text}
            </p>
            {c.recognition1Rules.map((rule, i) => (
              <div key={i} className={isUrdu ? "urdu" : ""} style={{
                fontSize: "14px",
                color: i === 3 ? LEVEL_BORDER : "var(--color-text)",
                padding: "8px 12px",
                borderRight: isUrdu ? `3px solid ${LEVEL_BORDER}` : "none",
                borderLeft: !isUrdu ? `3px solid ${LEVEL_BORDER}` : "none",
                marginBottom: "8px",
                backgroundColor: "var(--color-bg)",
                borderRadius: "6px",
                fontStyle: i === 3 ? "italic" : "normal",
              }}>
                {rule}
              </div>
            ))}
          </div>

          {/* Method 2 */}
          <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "10px", padding: "20px", marginBottom: "20px" }}>
            <h3 className={isUrdu ? "urdu" : ""} style={{ fontSize: "16px", fontWeight: "700", color: LEVEL_TEXT, marginBottom: "10px" }}>
              {c.recognition2Title}
            </h3>
            <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
              {c.recognition2Text}
            </p>
          </div>

          {/* Sound Table */}
<div style={{ overflowX: "auto" }}>
  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", direction: isUrdu ? "rtl" : "ltr" }}>
    <thead>
      <tr style={{ backgroundColor: LEVEL_DARK }}>
        <th className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", color: LEVEL_TEXT, border: `1px solid ${LEVEL_BORDER}`, fontSize: "14px" }}>{isUrdu ? "عدد" : "Type"}</th>
        <th className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", color: LEVEL_TEXT, border: `1px solid ${LEVEL_BORDER}`, fontSize: "14px" }}>{isUrdu ? "جنس" : "Gender"}</th>
        <th className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", color: LEVEL_TEXT, border: `1px solid ${LEVEL_BORDER}`, fontSize: "14px" }}>{isUrdu ? "رفع کی آواز" : "Raf' Sound"}</th>
        <th className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", color: LEVEL_TEXT, border: `1px solid ${LEVEL_BORDER}`, fontSize: "14px" }}>{isUrdu ? "نصب کی آواز" : "Nasb Sound"}</th>
        <th className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", color: LEVEL_TEXT, border: `1px solid ${LEVEL_BORDER}`, fontSize: "14px" }}>{isUrdu ? "جرّ کی آواز" : "Jarr Sound"}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={isUrdu ? "urdu" : ""} rowSpan={2} style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontWeight: "600" }}>{isUrdu ? "مثنٰی" : "Dual"}</td>
        <td className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)" }}>{isUrdu ? "مذکر" : "Masc."}</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>آنِ</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>اَيۡنِ</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>اَيۡنِ</td>
      </tr>
      <tr style={{ backgroundColor: "var(--color-surface2)" }}>
        <td className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)" }}>{isUrdu ? "مؤنث" : "Fem."}</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>آنِ</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>اَيۡنِ</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>اَيۡنِ</td>
      </tr>
      <tr>
        <td className={isUrdu ? "urdu" : ""} rowSpan={2} style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontWeight: "600" }}>{isUrdu ? "جمع سالم" : "Plural"}</td>
        <td className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)" }}>{isUrdu ? "مذکر" : "Masc."}</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>اُوۡنَ</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>اِيۡنَ</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>اِيۡنَ</td>
      </tr>
      <tr style={{ backgroundColor: "var(--color-surface2)" }}>
        <td className={isUrdu ? "urdu" : ""} style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)" }}>{isUrdu ? "مؤنث" : "Fem."}</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>آتٌ</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>آتٍ</td>
        <td className="arabic" style={{ padding: "10px 16px", border: `1px solid ${LEVEL_BORDER}`, color: "var(--color-text)", fontSize: "18px" }}>آتٍ</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>

        {/* Example 1 */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "24px",
          }}
        >
          <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "18px", fontWeight: "600", marginBottom: "20px", color: LEVEL_BORDER }}>
            🕌 {c.example1Title}
          </h2>
          <div className="quran-verse" style={{ marginBottom: "20px" }}>
            <div className="quran-arabic" style={{ marginBottom: "12px" }}>{c.example1Arabic}</div>
            <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "#85b7eb", fontStyle: isUrdu ? "normal" : "italic" }}>
              {c.example1Translation}
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px", flexDirection: "row-reverse" }}>
            {c.example1Words.map((w, i) => <WordTag key={i} {...w} />)}
          </div>
          <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "8px", padding: "14px 18px", borderLeft: `3px solid ${LEVEL_BORDER}` }}>
            <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              💡 {c.example1Note}
            </p>
          </div>
        </div>

        {/* Example 2 */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "18px", fontWeight: "600", marginBottom: "20px", color: LEVEL_BORDER }}>
            🕌 {c.example2Title}
          </h2>
          <div className="quran-verse" style={{ marginBottom: "20px" }}>
            <div className="quran-arabic" style={{ marginBottom: "12px" }}>{c.example2Arabic}</div>
            <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "#85b7eb", fontStyle: isUrdu ? "normal" : "italic" }}>
              {c.example2Translation}
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px", flexDirection: "row-reverse" }}>
            {c.example2Words.map((w, i) => <WordTag key={i} {...w} />)}
          </div>
          <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "8px", padding: "14px 18px", borderLeft: `3px solid ${LEVEL_BORDER}` }}>
            <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              💡 {c.example2Note}
            </p>
          </div>
        </div>

        {/* Key Takeaway */}
        <div
          style={{
            background: "linear-gradient(135deg, #021829, #031e38)",
            border: `1px solid ${LEVEL_BORDER}`,
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "40px",
          }}
        >
          <h3 className={isUrdu ? "urdu" : ""} style={{ fontSize: "18px", fontWeight: "600", color: LEVEL_TEXT, marginBottom: "12px" }}>
            ✅ {c.keyTakeaway}
          </h3>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: LEVEL_LIGHT, lineHeight: "1.8" }}>
            {c.takeawayText}
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/lessons/3"
            style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 24px", color: "var(--color-text)", textDecoration: "none", fontSize: "15px" }}>
            {c.prevLesson}
          </Link>
          <Link href="/lessons/5"
            style={{ backgroundColor: LEVEL_COLOR, border: "none", borderRadius: "8px", padding: "12px 24px", color: LEVEL_LIGHT, fontSize: "15px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
            {c.nextLesson}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function Lesson4() {
  return (
    <LanguageProvider>
      <LessonContent />
    </LanguageProvider>
  );
}