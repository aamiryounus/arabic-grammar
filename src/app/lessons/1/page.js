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
    level: " لیول 1— بنیادیات",
    lessonNumber: "سبق 1",
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
         className="quran-arabic"
style={{ marginBottom: "12px" }}
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
  <Navbar currentLesson={1} />   {/* ← number matches the lesson */}

      <div className="animate-fadeInUp" style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px" }}>

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
            className="quran-arabic"
style={{ marginBottom: "12px" }}
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
{/* English → Arabic Parts of Speech Hierarchy */}
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
            style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px", color: "var(--color-primary)" }}
          >
            {isUrdu ? "انگریزی اجزاء کلام اور عربی اجزاء کلام" : "How English Parts of Speech Map to Arabic"}
          </h2>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "14px", color: "var(--color-text-muted)", marginBottom: "20px", lineHeight: "1.7" }}
          >
            {isUrdu
              ? "انگریزی میں آٹھ اجزاء کلام ہیں — لیکن عربی میں یہ سب صرف تین میں سمٹ جاتے ہیں۔"
              : "English has eight parts of speech — but in Arabic, they all collapse into just three categories."}
          </p>

          <svg
            width="100%"
            viewBox="0 0 720 500"
            style={{ display: "block", overflow: "visible" }}
            aria-label={isUrdu ? "انگریزی سے عربی اجزاء کلام کا خاکہ" : "Hierarchy: English parts of speech mapping to Arabic"}
          >
            <defs>
              <marker id="posArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </marker>
            </defs>

            {/* Column headers */}
            <text x="92" y="18" textAnchor="middle"
              style={{ fontSize: "10px", letterSpacing: "0.07em", fill: "var(--color-text-muted)", fontFamily: "inherit" }}>
              {isUrdu ? "انگریزی" : "ENGLISH"}
            </text>
            <text x="360" y="18" textAnchor="middle"
              style={{ fontSize: "10px", letterSpacing: "0.07em", fill: "var(--color-text-muted)", fontFamily: "inherit" }}>
              {isUrdu ? "عربی" : "ARABIC"}
            </text>
            <text x="630" y="18" textAnchor="middle"
              style={{ fontSize: "10px", letterSpacing: "0.07em", fill: "var(--color-text-muted)", fontFamily: "inherit" }}>
              {isUrdu ? "انگریزی" : "ENGLISH"}
            </text>

            {/* ISM source boxes (left) */}
            {[
              { label: isUrdu ? "اسم (Noun)"             : "Noun",               sub: isUrdu ? "شخص، جگہ، چیز"    : "person, place, thing",  y: 36  },
              { label: isUrdu ? "ضمیر (Pronoun)"          : "Pronoun",            sub: isUrdu ? "وہ، یہ، تم"        : "he, she, they, it",      y: 96  },
              { label: isUrdu ? "صفت (Adjective)"         : "Adjective",          sub: isUrdu ? "بڑا، اچھا، رحیم"   : "big, good, merciful",    y: 156 },
              { label: isUrdu ? "ظرف (Adverb)"            : "Adverb (place/time)", sub: isUrdu ? "یہاں، کل، کب"     : "here, yesterday, when",  y: 216 },
            ].map((item, i) => (
              <g key={`ism-src-${i}`}>
                <rect x="14" y={item.y} width="156" height="48" rx="8"
                  fill="#085041" stroke="#1d9e75" strokeWidth="0.7"/>
                <text x="92" y={item.y + 18} textAnchor="middle" dominantBaseline="central"
                  style={{ fontSize: "13px", fontWeight: "600", fill: "#9fe1cb", fontFamily: "inherit" }}>
                  {item.label}
                </text>
                <text x="92" y={item.y + 36} textAnchor="middle" dominantBaseline="central"
                  style={{ fontSize: "11px", fill: "#5dcaa5", fontFamily: "inherit" }}>
                  {item.sub}
                </text>
                <line x1="170" y1={item.y + 24} x2="190" y2="183"
                  stroke="#1d9e75" strokeWidth="0.8" opacity="0.65"
                  markerEnd="url(#posArrow)"/>
              </g>
            ))}

            {/* ISM target box */}
            <rect x="192" y="108" width="140" height="150" rx="12"
              fill="#085041" stroke="#1d9e75" strokeWidth="1.5"/>
            <text x="262" y="168" textAnchor="middle"
              style={{ fontFamily: "'Scheherazade New','Traditional Arabic',serif", fontSize: "38px", fill: "#9fe1cb" }}>
              اِسْم
            </text>
            <text x="262" y="210" textAnchor="middle"
              style={{ fontSize: "14px", fontWeight: "700", fill: "#9fe1cb", fontFamily: "inherit" }}>
              {isUrdu ? "اسم" : "Ism"}
            </text>
            <text x="262" y="232" textAnchor="middle"
              style={{ fontSize: "12px", fill: "#5dcaa5", fontFamily: "inherit" }}>
              Noun
            </text>

            {/* HARF target box */}
            <rect x="368" y="108" width="140" height="150" rx="12"
              fill="#4a1b0c" stroke="#d85a30" strokeWidth="1.5"/>
            <text x="438" y="168" textAnchor="middle"
              style={{ fontFamily: "'Scheherazade New','Traditional Arabic',serif", fontSize: "38px", fill: "#f0997b" }}>
              حَرْف
            </text>
            <text x="438" y="210" textAnchor="middle"
              style={{ fontSize: "14px", fontWeight: "700", fill: "#f0997b", fontFamily: "inherit" }}>
              {isUrdu ? "حرف" : "Harf"}
            </text>
            <text x="438" y="232" textAnchor="middle"
              style={{ fontSize: "12px", fill: "#d85a30", fontFamily: "inherit" }}>
              Particle
            </text>

            {/* HARF connector lines */}
            {[36, 96, 156, 216].map((y, i) => (
              <line key={`harf-line-${i}`}
                x1="530" y1={y + 24} x2="510" y2="183"
                stroke="#d85a30" strokeWidth="0.8" opacity="0.65"
                markerEnd="url(#posArrow)"/>
            ))}

            {/* HARF source boxes (right) */}
            {[
              { label: isUrdu ? "حرف جر (Preposition)"  : "Preposition",   sub: isUrdu ? "میں، پر، سے"      : "in, on, from, with",      y: 36  },
              { label: isUrdu ? "حرف عطف (Conjunction)" : "Conjunction",   sub: isUrdu ? "اور، یا، لیکن"    : "and, or, but, so",         y: 96  },
              { label: isUrdu ? "ال (Article)"           : "Article",       sub: isUrdu ? "ال التعریف"        : "the (ال)",                y: 156 },
              { label: isUrdu ? "حرف ندا (Interjection)" : "Interjection",  sub: isUrdu ? "اے، یا، بے شک"    : "O! (يَا), indeed (إِنَّ)", y: 216 },
            ].map((item, i) => (
              <g key={`harf-src-${i}`}>
                <rect x="530" y={item.y} width="168" height="48" rx="8"
                  fill="#4a1b0c" stroke="#d85a30" strokeWidth="0.7"/>
                <text x="614" y={item.y + 18} textAnchor="middle" dominantBaseline="central"
                  style={{ fontSize: "13px", fontWeight: "600", fill: "#f0997b", fontFamily: "inherit" }}>
                  {item.label}
                </text>
                <text x="614" y={item.y + 36} textAnchor="middle" dominantBaseline="central"
                  style={{ fontSize: "11px", fill: "#d85a30", fontFamily: "inherit" }}>
                  {item.sub}
                </text>
              </g>
            ))}

            {/* FI'L source box */}
            <rect x="266" y="318" width="188" height="48" rx="8"
              fill="#633806" stroke="#ef9f27" strokeWidth="0.7"/>
            <text x="360" y="336" textAnchor="middle" dominantBaseline="central"
              style={{ fontSize: "13px", fontWeight: "600", fill: "#fac775", fontFamily: "inherit" }}>
              {isUrdu ? "فعل (Verb)" : "Verb"}
            </text>
            <text x="360" y="354" textAnchor="middle" dominantBaseline="central"
              style={{ fontSize: "11px", fill: "#ef9f27", fontFamily: "inherit" }}>
              {isUrdu ? "کرنا، ہونا، جانا" : "run, create, sent, be"}
            </text>
            <line x1="360" y1="366" x2="360" y2="396"
              stroke="#ef9f27" strokeWidth="0.8" opacity="0.65"
              markerEnd="url(#posArrow)"/>

            {/* FI'L target box */}
            <rect x="266" y="398" width="188" height="88" rx="12"
              fill="#633806" stroke="#ef9f27" strokeWidth="1.5"/>
            <text x="360" y="430" textAnchor="middle"
              style={{ fontFamily: "'Scheherazade New','Traditional Arabic',serif", fontSize: "34px", fill: "#fac775" }}>
              فِعْل
            </text>
            <text x="360" y="468" textAnchor="middle"
              style={{ fontSize: "14px", fontWeight: "700", fill: "#fac775", fontFamily: "inherit" }}>
              {isUrdu ? "فعل — Verb" : "Fi'l — Verb"}
            </text>

          </svg>
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
                  className="quran-arabic"
style={{ marginBottom: "12px" }}
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
  className="quran-verse"
  style={{ marginBottom: "20px" }}
>
            <div
              className="quran-arabic"
style={{ marginBottom: "12px" }}
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
  className="quran-verse"
  style={{ marginBottom: "20px" }}
>
            <div
             className="quran-arabic"
style={{ marginBottom: "12px" }}
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
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/lessons/2"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "12px 24px",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {isUrdu ? "کوئز چھوڑیں ←" : "Skip Quiz →"}
            </Link>
            <Link
              href="/lessons/1/quiz"
              style={{
                backgroundColor: "var(--color-primary)",
                border: "none",
                borderRadius: "8px",
                padding: "12px 24px",
                color: "#0f1117",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {isUrdu ? "کوئز دیں ←" : "Take Quiz →"}
            </Link>
          </div>
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
