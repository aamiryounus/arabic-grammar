"use client";

import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

const lessonContent = {
  en: {
    title: "Introduction to Nouns",
    arabicTitle: "الاسم",
    level: "Level 1 — Foundations",
    lessonNumber: "Lesson 3",
    intro:
      "The Ism (اسم) is the most common part of speech in the Quran. More than half of all Quranic words are Isms. Understanding nouns — their properties, gender, number, and case — is the foundation of reading and understanding Arabic.",
    goldenRule:
      "An Ism (Noun) has three key signs: it accepts Tanwin (ٌ), it accepts ال, and it can follow a preposition (حرف جر).",
    propertiesTitle: "Properties of Nouns",
    properties: [
      {
        arabic: "التنوين",
        name: "Tanwin",
        desc: "A double vowel sound (ً ٍ ٌ) added to the end of indefinite nouns. It sounds like 'un', 'in', or 'an'.",
        example: "كِتَابٌ — كِتَابًا — كِتَابٍ",
        exampleNote: "All three are forms of 'a book' with different case endings.",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
      },
      {
        arabic: "أل التعريف",
        name: "The Definite Article (ال)",
        desc: "Adding ال to the beginning of a noun makes it definite (specific). Like 'the' in English.",
        example: "كِتَاب (a book) → الكِتَاب (the book)",
        exampleNote: "When ال is added, Tanwin is removed.",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        arabic: "قبول حرف الجر",
        name: "Follows Prepositions",
        desc: "A noun can come after a preposition (حرف جر) like في، من، إلى، على. Verbs cannot follow prepositions.",
        example: "فِي الْكِتَابِ — مِنَ السَّمَاءِ — إِلَى اللهِ",
        exampleNote: "This is one of the easiest ways to identify a noun.",
        color: "#0c447c",
        border: "#378add",
        text: "#b5d4f4",
      },
    ],
    genderTitle: "Gender — المذكر والمؤنث",
    genderDesc: "Every Arabic noun is either masculine (مذكر) or feminine (مؤنث). There is no neutral gender.",
    genderTable: [
      { type: "Masculine (مذكر)", sign: "No special ending", examples: "رَجُل (man), كِتَاب (book), قَلَم (pen)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { type: "Feminine (مؤنث)", sign: "Usually ends in ة (Ta Marbuta)", examples: "مَرْأَة (woman), مَدْرَسَة (school), سُورَة (surah)", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
    ],
    genderNote: "Some nouns are feminine by nature even without ة — like شَمْس (sun), أَرْض (earth), نَار (fire).",
    numberTitle: "Number — العدد",
    numberDesc: "Arabic has THREE numbers — singular, dual, and plural.",
    numbers: [
      { arabic: "مُفْرَد", name: "Singular", desc: "One", example: "كِتَاب (one book)", color: "#3c3489", border: "#7f77dd", text: "#cecbf6" },
      { arabic: "مُثَنَّى", name: "Dual", desc: "Exactly two", example: "كِتَابَان (two books)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { arabic: "جَمْع", name: "Plural", desc: "Three or more", example: "كُتُب (books)", color: "#633806", border: "#ef9f27", text: "#fac775" },
    ],
    dualNote: "Dual is formed by adding ان (nominative) or ين (accusative/genitive) to the singular.",
    definitenessTitle: "Definite & Indefinite — المعرفة والنكرة",
    definitenessDesc: "Every noun is either definite (specific) or indefinite (general).",
    definiteness: [
      { arabic: "نَكِرَة", name: "Indefinite", desc: "General, unspecified", example: "كِتَابٌ (a book)", sign: "Has Tanwin (ٌ)", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { arabic: "مَعْرِفَة", name: "Definite", desc: "Specific, known", example: "الْكِتَابُ (the book)", sign: "Has ال", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
    ],
    quranicTitle: "Quranic Examples",
    examples: [
      {
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        ref: "Surah Al-Fatiha (1:2)",
        trans: "All praise is due to Allah, Lord of all the worlds.",
        analysis: [
          { word: "الْحَمْدُ", type: "Ism — Definite (has ال)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "لِلَّهِ", type: "Ism — after حرف جر (لِ)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "رَبِّ", type: "Ism — in Idafa (possession)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "الْعَالَمِينَ", type: "Ism — Definite Plural", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
        ],
        note: "This verse contains FOUR nouns and zero verbs — a pure nominal sentence.",
      },
      {
        arabic: "وَخَلَقْنَا كُلَّ شَيْءٍ مِّن مَّاءٍ",
        ref: "Surah Al-Anbiya (21:30)",
        trans: "And We created every living thing from water.",
        analysis: [
          { word: "كُلَّ", type: "Ism — Indefinite Accusative", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "شَيْءٍ", type: "Ism — Indefinite (has Tanwin)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "مِّن", type: "Harf — Preposition", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
          { word: "مَّاءٍ", type: "Ism — Indefinite after حرف جر", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
        ],
        note: "مَاء has Tanwin (ٍ) showing it is indefinite. It follows مِن (a preposition) confirming it is a noun.",
      },
    ],
    keyTakeaway: "Key Takeaway",
    takeawayText: "Every Ism in Arabic has four properties you must identify: (1) Is it masculine or feminine? (2) Is it singular, dual, or plural? (3) Is it definite or indefinite? (4) What is its case ending (I'rab)? Answering these four questions for every noun is the key to understanding Quranic Arabic.",
    backHome: "← Back to Home",
    prevLesson: "← Lesson 2",
    nextLesson: "Lesson 4 →",
  },
  ur: {
    title: "اسم کا تعارف",
    arabicTitle: "الاسم",
    level: "سطح ۱ — بنیادیات",
    lessonNumber: "سبق ۳",
    intro:
      "اسم قرآن میں کلام کا سب سے عام جزء ہے۔ قرآن کے آدھے سے زیادہ الفاظ اسم ہیں۔ اسم کی خصوصیات، جنس، عدد اور اعراب کو سمجھنا عربی پڑھنے کی بنیاد ہے۔",
    goldenRule:
      "اسم کی تین علامات ہیں: اس پر تنوین آتی ہے، اس پر ال لگ سکتا ہے، اور یہ حرف جر کے بعد آ سکتا ہے۔",
    propertiesTitle: "اسم کی خصوصیات",
    properties: [
      {
        arabic: "التنوين",
        name: "تنوین",
        desc: "اسم نکرہ کے آخر میں دوہری حرکت (ً ٍ ٌ) جو 'ن' کی آواز دیتی ہے۔",
        example: "كِتَابٌ — كِتَابًا — كِتَابٍ",
        exampleNote: "یہ تینوں 'ایک کتاب' کے مختلف اعرابی اشکال ہیں۔",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
      },
      {
        arabic: "أل التعريف",
        name: "ال تعریف",
        desc: "اسم کے شروع میں ال لگانے سے وہ معرفہ (مخصوص) ہو جاتا ہے۔ انگریزی میں 'the' کی طرح۔",
        example: "كِتَاب (ایک کتاب) → الكِتَاب (وہ کتاب)",
        exampleNote: "جب ال لگتا ہے تو تنوین ہٹ جاتی ہے۔",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        arabic: "قبول حرف الجر",
        name: "حرف جر کے بعد آنا",
        desc: "اسم حرف جر (في، من، إلى، على) کے بعد آ سکتا ہے۔ فعل حرف جر کے بعد نہیں آتا۔",
        example: "فِي الْكِتَابِ — مِنَ السَّمَاءِ — إِلَى اللهِ",
        exampleNote: "یہ اسم پہچاننے کا سب سے آسان طریقہ ہے۔",
        color: "#0c447c",
        border: "#378add",
        text: "#b5d4f4",
      },
    ],
    genderTitle: "جنس — المذكر والمؤنث",
    genderDesc: "عربی کا ہر اسم یا مذکر ہے یا مؤنث۔ کوئی غیر جانبدار جنس نہیں ہوتی۔",
    genderTable: [
      { type: "مذکر", sign: "کوئی خاص علامت نہیں", examples: "رَجُل (مرد)، كِتَاب (کتاب)، قَلَم (قلم)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { type: "مؤنث", sign: "عموماً ة (تاء مربوطہ) پر ختم ہوتا ہے", examples: "مَرْأَة (عورت)، مَدْرَسَة (مدرسہ)، سُورَة (سورت)", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
    ],
    genderNote: "کچھ اسم بغیر ة کے بھی مؤنث ہوتے ہیں — جیسے شَمْس (سورج)، أَرْض (زمین)، نَار (آگ)۔",
    numberTitle: "عدد — المفرد والمثنى والجمع",
    numberDesc: "عربی میں تین عدد ہیں — مفرد، مثنیٰ اور جمع۔",
    numbers: [
      { arabic: "مُفْرَد", name: "مفرد", desc: "ایک", example: "كِتَاب (ایک کتاب)", color: "#3c3489", border: "#7f77dd", text: "#cecbf6" },
      { arabic: "مُثَنَّى", name: "مثنیٰ", desc: "بالکل دو", example: "كِتَابَان (دو کتابیں)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { arabic: "جَمْع", name: "جمع", desc: "تین یا زیادہ", example: "كُتُب (کتابیں)", color: "#633806", border: "#ef9f27", text: "#fac775" },
    ],
    dualNote: "مثنیٰ بنانے کے لیے مفرد کے آخر میں ان (رفع) یا ین (نصب/جر) لگایا جاتا ہے۔",
    definitenessTitle: "معرفہ اور نکرہ",
    definitenessDesc: "ہر اسم یا معرفہ (مخصوص) ہے یا نکرہ (غیر مخصوص)۔",
    definiteness: [
      { arabic: "نَكِرَة", name: "نکرہ", desc: "غیر مخصوص، عام", example: "كِتَابٌ (ایک کتاب)", sign: "تنوین ہوتی ہے (ٌ)", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { arabic: "مَعْرِفَة", name: "معرفہ", desc: "مخصوص، معلوم", example: "الْكِتَابُ (وہ کتاب)", sign: "ال لگتا ہے", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
    ],
    quranicTitle: "قرآنی مثالیں",
    examples: [
      {
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        ref: "سورۃ الفاتحہ (۱:۲)",
        trans: "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا رب ہے۔",
        analysis: [
          { word: "الْحَمْدُ", type: "اسم — معرفہ (ال کے ساتھ)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "لِلَّهِ", type: "اسم — حرف جر (لِ) کے بعد", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "رَبِّ", type: "اسم — مضاف", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "الْعَالَمِينَ", type: "اسم — معرفہ جمع", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
        ],
        note: "اس آیت میں چار اسم ہیں اور کوئی فعل نہیں — خالص جملہ اسمیہ۔",
      },
      {
        arabic: "وَخَلَقْنَا كُلَّ شَيْءٍ مِّن مَّاءٍ",
        ref: "سورۃ الانبیاء (۲۱:۳۰)",
        trans: "اور ہم نے ہر زندہ چیز کو پانی سے بنایا۔",
        analysis: [
          { word: "كُلَّ", type: "اسم — نکرہ منصوب", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "شَيْءٍ", type: "اسم — نکرہ (تنوین کے ساتھ)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
          { word: "مِّن", type: "حرف — حرف جر", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
          { word: "مَّاءٍ", type: "اسم — نکرہ بعد حرف جر", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
        ],
        note: "مَاء پر تنوین (ٍ) ہے جو نکرہ ہونے کی علامت ہے۔ یہ مِن (حرف جر) کے بعد آیا ہے جو اسم ہونے کی دلیل ہے۔",
      },
    ],
    keyTakeaway: "اہم نکتہ",
    takeawayText: "ہر اسم کے بارے میں چار سوالوں کے جواب دینے ہیں: (۱) مذکر ہے یا مؤنث؟ (۲) مفرد، مثنیٰ یا جمع؟ (۳) معرفہ ہے یا نکرہ؟ (۴) اعراب کیا ہے؟ قرآنی عربی سمجھنے کے لیے ہر اسم پر یہ چار سوال کرنا ضروری ہے۔",
    backHome: "← گھر واپس",
    prevLesson: "← سبق ۲",
    nextLesson: "سبق ۴ →",
  },
};

function WordTag({ word, type, color, border, text }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", margin: "8px" }}>
      <div style={{ backgroundColor: color, border: `1px solid ${border}`, borderRadius: "8px", padding: "10px 16px", textAlign: "center", minWidth: "80px" }}>
        <div className="arabic" style={{ fontSize: "20px", color: text, marginBottom: "4px" }}>{word}</div>
      </div>
      <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "4px", textAlign: "center", maxWidth: "120px" }}>{type}</div>
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

      <div className="animate-fadeInUp" style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", fontSize: "14px", color: "var(--color-text-muted)" }}>
          <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Home</Link>
          {" → "}
          <span>{c.level}</span>
          {" → "}
          <span>{c.lessonNumber}</span>
        </div>

        {/* Lesson Header */}
        <div style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "16px", padding: "36px", marginBottom: "32px", borderTop: "4px solid var(--color-primary)" }}>
          <div style={{ fontSize: "13px", color: "var(--color-primary)", marginBottom: "8px", fontWeight: "600" }}>
            {c.level} • {c.lessonNumber}
          </div>
          <h1 className={isUrdu ? "urdu" : ""} style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}>
            {c.title}
          </h1>
          <div className="arabic" style={{ fontSize: "22px", color: "var(--color-primary)", marginBottom: "20px" }}>
            {c.arabicTitle}
          </div>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "16px", color: "var(--color-text-muted)", lineHeight: "1.8" }}>
            {c.intro}
          </p>
        </div>

        {/* Golden Rule */}
        <div className="golden-rule" style={{ marginBottom: "32px" }}>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "17px", color: "var(--color-primary-light)", fontWeight: "600", lineHeight: "1.8" }}>
            {c.goldenRule}
          </p>
        </div>

        {/* Properties */}
        <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)" }}>
          {c.propertiesTitle}
        </h2>

        {c.properties.map((prop, i) => (
          <div key={i} className="card-hover" style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", marginBottom: "16px", overflow: "hidden" }}>
            <div style={{ backgroundColor: prop.color, border: `1px solid ${prop.border}`, padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <span className="arabic" style={{ fontSize: "18px", color: prop.text, fontWeight: "500" }}>{prop.arabic}</span>
              <span className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: prop.text, fontWeight: "600" }}>{prop.name}</span>
            </div>
            <div style={{ padding: "20px" }}>
              <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text)", lineHeight: "1.8", marginBottom: "14px" }}>{prop.desc}</p>
              <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "8px", padding: "14px 18px", borderLeft: `3px solid ${prop.border}` }}>
                <div className="arabic" style={{ fontSize: "18px", color: prop.border, marginBottom: "6px", direction: "rtl" }}>{prop.example}</div>
                <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>💡 {prop.exampleNote}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Gender */}
        <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)", marginTop: "32px" }}>
          {c.genderTitle}
        </h2>
        <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text-muted)", marginBottom: "16px", lineHeight: "1.8" }}>{c.genderDesc}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "16px" }}>
          {c.genderTable.map((g, i) => (
            <div key={i} style={{ backgroundColor: g.color, border: `1px solid ${g.border}`, borderRadius: "12px", padding: "20px" }}>
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "18px", fontWeight: "700", color: g.text, marginBottom: "8px" }}>{g.type}</div>
              <div style={{ fontSize: "13px", color: g.text, opacity: 0.8, marginBottom: "8px" }}>{g.sign}</div>
              <div className="arabic" style={{ fontSize: "15px", color: g.text, lineHeight: "1.8" }}>{g.examples}</div>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "8px", padding: "14px 18px", borderLeft: "3px solid var(--color-primary)", marginBottom: "32px" }}>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>💡 {c.genderNote}</p>
        </div>

        {/* Number */}
        <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)" }}>
          {c.numberTitle}
        </h2>
        <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text-muted)", marginBottom: "16px" }}>{c.numberDesc}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginBottom: "16px" }}>
          {c.numbers.map((n, i) => (
            <div key={i} style={{ backgroundColor: n.color, border: `1px solid ${n.border}`, borderRadius: "12px", padding: "20px", textAlign: "center" }}>
              <div className="arabic" style={{ fontSize: "24px", color: n.text, fontWeight: "500", marginBottom: "6px" }}>{n.arabic}</div>
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", fontWeight: "700", color: n.text, marginBottom: "4px" }}>{n.name}</div>
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: n.text, opacity: 0.8, marginBottom: "8px" }}>{n.desc}</div>
              <div className="arabic" style={{ fontSize: "14px", color: n.text, opacity: 0.9 }}>{n.example}</div>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "8px", padding: "14px 18px", borderLeft: "3px solid var(--color-primary)", marginBottom: "32px" }}>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>💡 {c.dualNote}</p>
        </div>

        {/* Definiteness */}
        <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)" }}>
          {c.definitenessTitle}
        </h2>
        <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text-muted)", marginBottom: "16px" }}>{c.definitenessDesc}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "32px" }}>
          {c.definiteness.map((d, i) => (
            <div key={i} style={{ backgroundColor: d.color, border: `1px solid ${d.border}`, borderRadius: "12px", padding: "20px" }}>
              <div className="arabic" style={{ fontSize: "22px", color: d.text, fontWeight: "500", marginBottom: "6px" }}>{d.arabic}</div>
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "16px", fontWeight: "700", color: d.text, marginBottom: "4px" }}>{d.name}</div>
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: d.text, opacity: 0.8, marginBottom: "8px" }}>{d.desc}</div>
              <div className="arabic" style={{ fontSize: "16px", color: d.text, marginBottom: "4px" }}>{d.example}</div>
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "12px", color: d.text, opacity: 0.7 }}>{d.sign}</div>
            </div>
          ))}
        </div>

        {/* Quranic Examples */}
        <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)" }}>
          🕌 {c.quranicTitle}
        </h2>

        {c.examples.map((ex, i) => (
          <div key={i} style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
            <div className="quran-verse" style={{ marginBottom: "20px" }}>
              <div className="quran-arabic">{ex.arabic}</div>
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "#85b7eb", fontStyle: isUrdu ? "normal" : "italic", marginBottom: "6px" }}>{ex.trans}</div>
              <div style={{ fontSize: "12px", color: "#5a8ab8" }}>{ex.ref}</div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", flexDirection: "row-reverse", marginBottom: "16px" }}>
              {ex.analysis.map((a, j) => (
                <WordTag key={j} {...a} />
              ))}
            </div>

            <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "8px", padding: "14px 18px", borderLeft: "3px solid var(--color-primary)" }}>
              <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.7" }}>💡 {ex.note}</p>
            </div>
          </div>
        ))}
        {/* I'rab Section */}
<h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)", marginTop: "8px" }}>
  {isUrdu ? "اعراب کا تعارف — الإعراب" : "Introduction to I'rab (Case Endings)"}
</h2>

<p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text-muted)", marginBottom: "20px", lineHeight: "1.8" }}>
  {isUrdu
    ? "اعراب کا مطلب ہے اسم کے آخر میں حرکت کا بدلنا۔ جملے میں اسم کا کردار بتاتا ہے کہ اس پر کون سی حرکت آئے گی۔ یہ موضوع سطح ۳ میں تفصیل سے پڑھا جائے گا۔"
    : "I'rab means the change in the ending of a noun based on its role in the sentence. We will study this in full detail in Level 3 — here is a brief introduction."}
</p>

{/* I'rab Table */}
<div style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", overflow: "hidden", marginBottom: "16px" }}>

  {/* Table Header */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", backgroundColor: "var(--color-surface2)", padding: "12px 20px", borderBottom: "1px solid var(--color-border)" }}>
    {[
      isUrdu ? "اعراب" : "Case",
      isUrdu ? "عربی نام" : "Arabic Name",
      isUrdu ? "علامت" : "Sign",
      isUrdu ? "کب آتا ہے" : "When Used",
    ].map((h, i) => (
      <div key={i} className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", fontWeight: "700", color: "var(--color-primary)", textAlign: "center" }}>
        {h}
      </div>
    ))}
  </div>

  {/* Row 1 — Raf' */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "16px 20px", borderBottom: "1px solid var(--color-border)", alignItems: "center" }}>
    <div style={{ textAlign: "center" }}>
      <span style={{ backgroundColor: "#085041", border: "1px solid #1d9e75", borderRadius: "6px", padding: "4px 10px", fontSize: "13px", color: "#9fe1cb", fontWeight: "600" }}>
        {isUrdu ? "رفع" : "Nominative"}
      </span>
    </div>
    <div className="arabic" style={{ fontSize: "18px", color: "#9fe1cb", textAlign: "center" }}>رَفْع</div>
    <div className="arabic" style={{ fontSize: "22px", color: "#9fe1cb", textAlign: "center", fontWeight: "700" }}>ُ — ٌ</div>
    <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "var(--color-text-muted)", textAlign: "center", lineHeight: "1.6" }}>
      {isUrdu ? "جملے کا فاعل یا مبتدا" : "Subject of sentence"}
    </div>
  </div>

  {/* Row 2 — Nasb */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "16px 20px", borderBottom: "1px solid var(--color-border)", alignItems: "center" }}>
    <div style={{ textAlign: "center" }}>
      <span style={{ backgroundColor: "#633806", border: "1px solid #ef9f27", borderRadius: "6px", padding: "4px 10px", fontSize: "13px", color: "#fac775", fontWeight: "600" }}>
        {isUrdu ? "نصب" : "Accusative"}
      </span>
    </div>
    <div className="arabic" style={{ fontSize: "18px", color: "#fac775", textAlign: "center" }}>نَصْب</div>
    <div className="arabic" style={{ fontSize: "22px", color: "#fac775", textAlign: "center", fontWeight: "700" }}>َ — ً</div>
    <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "var(--color-text-muted)", textAlign: "center", lineHeight: "1.6" }}>
      {isUrdu ? "فعل کا مفعول" : "Object of verb"}
    </div>
  </div>

  {/* Row 3 — Jarr */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "16px 20px", alignItems: "center" }}>
    <div style={{ textAlign: "center" }}>
      <span style={{ backgroundColor: "#4a1b0c", border: "1px solid #d85a30", borderRadius: "6px", padding: "4px 10px", fontSize: "13px", color: "#f0997b", fontWeight: "600" }}>
        {isUrdu ? "جر" : "Genitive"}
      </span>
    </div>
    <div className="arabic" style={{ fontSize: "18px", color: "#f0997b", textAlign: "center" }}>جَرّ</div>
    <div className="arabic" style={{ fontSize: "22px", color: "#f0997b", textAlign: "center", fontWeight: "700" }}>ِ — ٍ</div>
    <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "var(--color-text-muted)", textAlign: "center", lineHeight: "1.6" }}>
      {isUrdu ? "حرف جر کے بعد" : "After preposition"}
    </div>
  </div>
</div>

{/* I'rab Note */}
<div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "8px", padding: "14px 18px", borderLeft: "3px solid var(--color-primary)", marginBottom: "32px" }}>
  <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
    💡 {isUrdu
      ? "یاد رہے: رفع = پیش (ُ)، نصب = زبر (َ)، جر = زیر (ِ)۔ تنوین میں یہی حرکات دوہری ہو جاتی ہیں (ٌ ً ٍ)۔ مکمل اعراب سطح ۳ میں پڑھا جائے گا۔"
      : "Remember: Raf' = Damma (ُ), Nasb = Fatha (َ), Jarr = Kasra (ِ). With Tanwin these become double (ٌ ً ٍ). Full I'rab will be covered in Level 3."}
  </p>
</div>

        {/* Key Takeaway */}
        <div style={{ background: "linear-gradient(135deg, #0d2818, #071a0f)", border: "1px solid #1d9e75", borderRadius: "12px", padding: "28px", marginBottom: "40px" }}>
          <h3 className={isUrdu ? "urdu" : ""} style={{ fontSize: "18px", fontWeight: "600", color: "#5dcaa5", marginBottom: "12px" }}>
            ✅ {c.keyTakeaway}
          </h3>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "#9fe1cb", lineHeight: "1.8" }}>
            {c.takeawayText}
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/lessons/2" style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 24px", color: "var(--color-text)", textDecoration: "none", fontSize: "15px" }}>
            {c.prevLesson}
          </Link>
          <Link href="/" style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 24px", color: "var(--color-text)", textDecoration: "none", fontSize: "15px" }}>
            {c.backHome}
          </Link>
          <button style={{ backgroundColor: "var(--color-primary)", border: "none", borderRadius: "8px", padding: "12px 24px", color: "#0f1117", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>
            {c.nextLesson}
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default function Lesson3() {
  return (
    <LanguageProvider>
      <LessonContent />
    </LanguageProvider>
  );
}