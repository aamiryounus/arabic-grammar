"use client";

import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Footer from "../../../components/Footer";

const lessonContent = {
  en: {
    title: "The Three Parts of Speech",
    arabicTitle: "الكلمة وأقسامها",
    level: "Level 1 — Foundations",
    lessonNumber: "Lesson 1",
    intro:
      "Every single word in the Arabic language — and specifically in the Quran — belongs to one of exactly three categories. This is the single most important rule in all of Arabic grammar. If you understand this, you have the master key to the entire language.",
    goldenRule:
      "Every Arabic word is either an Ism, or a Fi'l, or a Harf. There are no exceptions in the entire Quran.",
    tableTitle: "The Three Parts of Speech",
    parts: [
      {
        term: "اِسْم",
        name: "Ism",
        meaning: "Noun",
        desc: "Any person, place, thing, or idea",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
      },
      {
        term: "فِعْل",
        name: "Fi'l",
        meaning: "Verb",
        desc: "Any action or occurrence",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        term: "حَرْف",
        name: "Harf",
        meaning: "Particle",
        desc: "A connecting word with no meaning alone",
        color: "#4a1b0c",
        border: "#d85a30",
        text: "#f0997b",
      },
    ],
    example1Title: "Quranic Example 1 — Surah Al-Fatiha (1:1)",
    example1Arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    example1Translation:
      "In the name of Allah, the Most Gracious, the Most Merciful.",
    example1Note:
      "This entire opening verse contains only Nouns and one Particle — zero verbs. This shows a state of being rather than action.",
    example1Words: [
      { word: "بِ", type: "Harf", meaning: "In/With", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "اسْمِ", type: "Ism", meaning: "Name", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { word: "اللهِ", type: "Ism", meaning: "Allah", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { word: "الرَّحْمٰنِ", type: "Ism", meaning: "Most Gracious", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { word: "الرَّحِيْمِ", type: "Ism", meaning: "Most Merciful", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
    ],
    example2Title: "Quranic Example 2 — Surah Al-Alaq (96:2)",
    example2Arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَق",
    example2Translation: "He created man from a clinging substance.",
    example2Note:
      "This verse contains all three parts of speech — a perfect teaching example. One verb, two nouns, one particle.",
    example2Words: [
      { word: "خَلَقَ", type: "Fi'l", meaning: "He created", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "الْإِنسَانَ", type: "Ism", meaning: "The human", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { word: "مِنْ", type: "Harf", meaning: "From", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "عَلَق", type: "Ism", meaning: "Clinging substance", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
    ],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "Before you can analyze any Quranic verse, your first task is always to identify: is this word an Ism, a Fi'l, or a Harf? Everything else in Arabic grammar builds on this foundation.",
    backHome: "← Back to Home",
    nextLesson: "Next Lesson →",
  },
  ur: {
    title: "کلام کے تین اجزاء",
    arabicTitle: "الكلمة وأقسامها",
    level: "سطح ۱ — بنیادیات",
    lessonNumber: "سبق ۱",
    intro:
      "عربی زبان میں — اور خاص طور پر قرآن مجید میں — ہر لفظ صرف تین میں سے ایک قسم کا ہوتا ہے۔ یہ پوری عربی گرامر کا سب سے اہم اصول ہے۔ اگر آپ یہ سمجھ لیں تو پوری زبان کی چابی آپ کے ہاتھ میں ہے۔",
    goldenRule:
      "قرآن کا ہر لفظ یا تو اسم ہے، یا فعل ہے، یا حرف ہے — کوئی استثناء نہیں۔",
    tableTitle: "کلام کے تین اجزاء",
    parts: [
      {
        term: "اِسْم",
        name: "اسم",
        meaning: "Noun",
        desc: "کسی شخص، جگہ، چیز یا کام کا نام اسم کہلاتا ہے",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
      },
      {
        term: "فِعْل",
        name: "فعل",
        meaning: "Verb",
        desc: "ایسا با معنی لفظ جس میں کسی کام کا کرنا یا ہونا زمانے کے ریفرنس کے ساتھ پایا جاۓ  ",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        term: "حَرْف",
        name: "حرف",
        meaning: "Particle",
        desc: "جوڑنے والا لفظ جس کا مطلب اکیلے نہیں نکلتا",
        color: "#4a1b0c",
        border: "#d85a30",
        text: "#f0997b",
      },
    ],
    example1Title: "قرآنی مثال ۱ — سورۃ الفاتحہ (۱:۱)",
    example1Arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    example1Translation: "اللہ کے نام سے جو بڑا مہربان، نہایت رحم والا ہے۔",
    example1Note:
      "اس آیت میں صرف اسم اور ایک حرف ہے — کوئی فعل نہیں۔ یہ حالت کو ظاہر کرتا ہے نہ کہ عمل کو۔",
    example1Words: [
      { word: "بِ", type: "حرف", meaning: "میں/کے ساتھ", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "اسْمِ", type: "اسم", meaning: "نام", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { word: "اللهِ", type: "اسم", meaning: "اللہ", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { word: "الرَّحْمٰنِ", type: "اسم", meaning: "بڑا مہربان", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { word: "الرَّحِيْمِ", type: "اسم", meaning: "نہایت رحم والا", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
    ],
    example2Title: "قرآنی مثال ۲ — سورۃ العلق (۹۶:۲)",
    example2Arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَق",
    example2Translation: "اس نے انسان کو خون کی پھٹکی سے بنایا۔",
    example2Note:
      "اس آیت میں تینوں اجزاء موجود ہیں — ایک فعل، دو اسم، ایک حرف۔ یہ سکھانے کے لیے بہترین مثال ہے۔",
    example2Words: [
      { word: "خَلَقَ", type: "فعل", meaning: "اس نے بنایا", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "الْإِنسَانَ", type: "اسم", meaning: "انسان", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { word: "مِنْ", type: "حرف", meaning: "سے", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "عَلَق", type: "اسم", meaning: "خون کی پھٹکی", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
    ],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "کسی بھی قرآنی آیت کا تجزیہ کرنے سے پہلے آپ کا پہلا کام یہ ہے کہ پہچانیں: یہ لفظ اسم ہے، فعل ہے، یا حرف؟ عربی گرامر کی ہر چیز اسی بنیاد پر کھڑی ہے۔",
    backHome: "← گھر واپس",
    nextLesson: "اگلا سبق →",
  },
};

function WordTag({ word, type, meaning, color, border, text }) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "8px",
      }}
    >
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
        <div
          className="arabic"
          style={{ fontSize: "22px", color: text, marginBottom: "4px" }}
        >
          {word}
        </div>
        <div style={{ fontSize: "11px", color: text, opacity: 0.8 }}>
          {type}
        </div>
      </div>
      <div
        style={{
          fontSize: "11px",
          color: "var(--color-text-muted)",
          marginTop: "4px",
          textAlign: "center",
        }}
      >
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
      <Navbar />

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", fontSize: "14px", color: "var(--color-text-muted)" }}>
          <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none" }}>
            Home
          </Link>
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
            borderTop: "4px solid var(--color-primary)",
          }}
        >
          <div style={{ fontSize: "13px", color: "var(--color-primary)", marginBottom: "8px", fontWeight: "600" }}>
            {c.level} • {c.lessonNumber}
          </div>
          <h1
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}
          >
            {c.title}
          </h1>
          <div
            className="arabic"
            style={{ fontSize: "22px", color: "var(--color-primary)", marginBottom: "20px" }}
          >
            {c.arabicTitle}
          </div>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "16px", color: "var(--color-text-muted)", lineHeight: "1.8" }}
          >
            {c.intro}
          </p>
        </div>

        {/* Golden Rule Box */}
        <div
          style={{
            background: "linear-gradient(135deg, #2a1f00, #1a1200)",
            border: "1px solid var(--color-primary)",
            borderRadius: "12px",
            padding: "24px 32px",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", marginBottom: "12px" }}>⭐</div>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "17px",
              color: "var(--color-primary-light)",
              fontWeight: "600",
              lineHeight: "1.8",
            }}
          >
            {c.goldenRule}
          </p>
        </div>

        {/* Three Parts Table */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <h2
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: "var(--color-primary)" }}
          >
            {c.tableTitle}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {c.parts.map((part, i) => (
              <div
                key={i}
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
                <div
                  className="arabic"
                  style={{ fontSize: "32px", color: part.text, minWidth: "60px", textAlign: "center" }}
                >
                  {part.term}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "16px", fontWeight: "600", color: part.text }}>
                    {part.name} — {part.meaning}
                  </div>
                  <div
                    className={isUrdu ? "urdu" : ""}
                    style={{ fontSize: "14px", color: part.text, opacity: 0.8, marginTop: "4px" }}
                  >
                    {part.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quranic Example 1 */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "24px",
          }}
        >
          <h2
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "20px", color: "var(--color-primary)" }}
          >
            🕌 {c.example1Title}
          </h2>

          {/* Arabic Verse */}
          <div
            style={{
              background: "linear-gradient(135deg, #0a1628, #0d1f3c)",
              border: "1px solid #378add",
              borderRadius: "10px",
              padding: "24px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <div
              className="arabic"
              style={{ fontSize: "28px", color: "#b5d4f4", lineHeight: "2", marginBottom: "12px" }}
            >
              {c.example1Arabic}
            </div>
            <div
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "15px", color: "#85b7eb", fontStyle: isUrdu ? "normal" : "italic" }}
            >
              {c.example1Translation}
            </div>
          </div>

          {/* Word Analysis */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px", flexDirection: "row-reverse" }}>
            {c.example1Words.map((w, i) => (
              <WordTag key={i} {...w} />
            ))}
          </div>

          {/* Note */}
          <div
            style={{
              backgroundColor: "var(--color-surface2)",
              borderRadius: "8px",
              padding: "14px 18px",
              borderLeft: "3px solid var(--color-primary)",
            }}
          >
            <p
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.7" }}
            >
              💡 {c.example1Note}
            </p>
          </div>
        </div>

        {/* Quranic Example 2 */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <h2
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "20px", color: "var(--color-primary)" }}
          >
            🕌 {c.example2Title}
          </h2>

          {/* Arabic Verse */}
          <div
            style={{
              background: "linear-gradient(135deg, #0a1628, #0d1f3c)",
              border: "1px solid #378add",
              borderRadius: "10px",
              padding: "24px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <div
              className="arabic"
              style={{ fontSize: "28px", color: "#b5d4f4", lineHeight: "2", marginBottom: "12px" }}
            >
              {c.example2Arabic}
            </div>
            <div
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "15px", color: "#85b7eb", fontStyle: isUrdu ? "normal" : "italic" }}
            >
              {c.example2Translation}
            </div>
          </div>

          {/* Word Analysis */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px", flexDirection: "row-reverse" }}>
            {c.example2Words.map((w, i) => (
              <WordTag key={i} {...w} />
            ))}
          </div>

          {/* Note */}
          <div
            style={{
              backgroundColor: "var(--color-surface2)",
              borderRadius: "8px",
              padding: "14px 18px",
              borderLeft: "3px solid var(--color-primary)",
            }}
          >
            <p
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.7" }}
            >
              💡 {c.example2Note}
            </p>
          </div>
        </div>

        {/* Key Takeaway */}
        <div
          style={{
            background: "linear-gradient(135deg, #0d2818, #071a0f)",
            border: "1px solid #1d9e75",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "40px",
          }}
        >
          <h3
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "18px", fontWeight: "600", color: "#5dcaa5", marginBottom: "12px" }}
          >
            ✅ {c.keyTakeaway}
          </h3>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "15px", color: "#9fe1cb", lineHeight: "1.8" }}
          >
            {c.takeawayText}
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <Link
            href="/"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              padding: "12px 24px",
              color: "var(--color-text)",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            {c.backHome}
          </Link>
          <button
            style={{
              backgroundColor: "var(--color-primary)",
              border: "none",
              borderRadius: "8px",
              padding: "12px 24px",
              color: "#0f1117",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            {c.nextLesson}
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default function Lesson1() {
  return (
    <LanguageProvider>
      <LessonContent />
    </LanguageProvider>
  );
}