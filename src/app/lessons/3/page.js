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
    propertiesTitle: "Recognition of Nouns",
    propertiesSubTitle: "Properties of Noun",
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
      {
  arabic: "تاء مربوطة",
  name: "Taa Marbuta (ة)",
  desc: "If a word ends with a round Taa (ة or ـة), it is definitely a noun.",
  example: "مَدْرَسَة — فَاطِمَة — سُورَة",
  exampleNote: "This ending always marks a noun — never a verb or particle.",
  color: "#3c3489",
  border: "#7f77dd",
  text: "#cecbf6",
},
    ],
    genderTitle: "Gender — المذكر والمؤنث",
    genderDesc: "Every Arabic noun is either masculine (مذکر) or feminine (مؤنث). Every noun is masculine, until it is proven to be feminine according to following diagram.",
    genderTable: [
      { type: "Masculine (مذكر)", sign: "No special ending", examples: "رَجُل (man), كِتَاب (book), قَلَم (pen)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { type: "Feminine (مؤنث)", sign: "Usually ends in ة (Ta Marbuta)", examples: "مَرْأَة (woman), مَدْرَسَة (school), سُورَة (surah)", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
    ],
    genderNote: "Some nouns are feminine by nature even without feminine sign — like شَمْسٌ (sun), سَمَاءٌ (sky), أَرْضٌ (earth), نَفْسٌ (soul), حَرْبٌ (war), دَارٌ (house), عَصَا (staff).",
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
    level: "لیول ۱ — بنیادیات",
    lessonNumber: "سبق 3",
    intro:
      "اسم قرآن میں کلام کا سب سے عام جزء ہے۔ قرآن کے آدھے سے زیادہ الفاظ اسم ہیں۔ اسم کی خصوصیات، جنس، عدد اور اعراب کو سمجھنا عربی پڑھنے کی بنیاد ہے۔",
    goldenRule:
      "اسم کی تین علامات ہیں: اس پر تنوین آتی ہے، اس پر ال لگ سکتا ہے، اور یہ حرف جر کے بعد آ سکتا ہے۔",
    propertiesTitle: "اسم کی پہچان",
    propertiesSubTitle: "اسم کی خصوصیات",
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
      {
  arabic: "تاء مربوطة",
  name: "تاء مربوطہ (ة)",
  desc: "لفظ کے آخر میں گول تا (ة یا ـة) آ جائے تو وہ لازمی اسم ہوتا ہے۔",
  example: "مَدْرَسَة — فَاطِمَة — سُورَة",
  exampleNote: "یہ علامت ہمیشہ اسم پر آتی ہے، فعل یا حرف پر نہیں۔",
  color: "#3c3489",
  border: "#7f77dd",
  text: "#cecbf6",
},
    ],
    genderTitle: "جنس — المذكر والمؤنث",
    genderDesc: " عربی کا ہر اسم یا مذکر ہے یا مؤنث۔ اور ہر اسم مذکر ہے جب تک اس کا مؤنث ہونا نیچے دی گئ ڈایاگرام کے مطابق ثابت نہ ہو جائے۔",
    genderTable: [
      { type: "مذکر", sign: "کوئی خاص علامت نہیں", examples: "رَجُل (مرد)، كِتَاب (کتاب)، قَلَم (قلم)", color: "#085041", border: "#1d9e75", text: "#9fe1cb" },
      { type: "مؤنث", sign: "عموماً ة (تاء مربوطہ) پر ختم ہوتا ہے", examples: "مَرْأَة (عورت)، مَدْرَسَة (مدرسہ)، سُورَة (سورت)", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
    ],
    genderNote: "کچھ اسم بغیر علامت کے بھی مؤنث ہوتے ہیں — جیسے شَمْسٌ (سورج)، سَمَاءٌ (آسمان)، أَرْضٌ (زمین)، نَفْسٌ (نفس)، حَرْبٌ (جنگ)، دَارٌ (گھر)، عَصَا (لاٹھی)۔",
    numberTitle: "عدد — المفرد والمثنى والجمع",
    numberDesc: "عربی میں تین عدد ہیں — مفرد، مثنیٰ اور جمع۔",
    numbers: [
      { arabic: "مُفْرَد", name: "واحد", desc: "ایک", example: "كِتَاب (ایک کتاب)", color: "#3c3489", border: "#7f77dd", text: "#cecbf6" },
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
    prevLesson: "← پچھلا سبق 2",
    nextLesson: "اگلا سبق 4 →",
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
  <Navbar currentLesson={3} />   {/* ← number matches the lesson */}

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
        {/* Properties of Noun Heading */}
        <h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px", marginTop: "40px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)" }}>
          {c.propertiesSubTitle}
        </h2>
<p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "20px", textAlign: isUrdu ? "right" : "left" }}>
          {isUrdu
            ? "عربی میں اسم کو جملے میں استعمال کرنے کے لیے اس کی چار خصوصیات کا جاننا ضروری ہے۔ جنس، عدد، وسعت (نکرہ/معرفہ)، اعراب۔"
            : "To use a noun correctly in an Arabic sentence, you must know its four properties: Gender, Number, Capicity, and Status (I'rab)."}
        </p>
        {/* Hierarchy Diagram */}
        <div style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "16px", padding: "32px 24px", marginBottom: "32px", textAlign: "center" }}>

          {/* Top Node */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ backgroundColor: "#1a3a2a", border: "2px solid var(--color-primary)", borderRadius: "12px", padding: "14px 36px" }}>
              
              <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "25px", color: "var(--color-primary)", marginTop: "4px" }}>{isUrdu ? "اسم" : "Noun"}</div>
            </div>
          </div>

          {/* Vertical stem */}
          <div style={{ width: "2px", height: "32px", backgroundColor: "var(--color-primary)", margin: "0 auto" }} />

          {/* Horizontal bar */}
          <div style={{ maxWidth: "700px", margin: "0 auto", height: "2px", backgroundColor: "var(--color-primary)" }} />

          {/* 4 Branch nodes */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", maxWidth: "700px", margin: "0 auto" }}>
            {[
              { arabic: "الجنس", en: "Gender", ur: "جنس", color: "#085041", border: "#1d9e75", text: "#9fe1cb", sub: isUrdu ? "مذکر / مؤنث" : "Masculine / Feminine" },
              { arabic: "العدد", en: "Number", ur: "عدد", color: "#3c3489", border: "#7f77dd", text: "#cecbf6", sub: isUrdu ? "مفرد / مثنیٰ / جمع" : "Singular / Dual / Plural" },
              { arabic: "التعريف", en: "Capicity", ur: "وسعت", color: "#633806", border: "#ef9f27", text: "#fac775", sub: isUrdu ? "معرفہ / نکرہ" : "Definite / Indefinite" },
              { arabic: "الإعراب", en: "Status", ur: "اعراب", color: "#4a1b0c", border: "#d85a30", text: "#f0997b", sub: isUrdu ? "رفع / نصب / جر" : "Raf' / Nasb / Jarr" },
            ].map((node, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "2px", height: "32px", backgroundColor: node.border }} />
                <div style={{ backgroundColor: node.color, border: `2px solid ${node.border}`, borderRadius: "10px", padding: "14px 10px", width: "100%", textAlign: "center" }}>
                  
                  <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "17px", color: node.text, fontWeight: "700", marginBottom: "6px" }}>{isUrdu ? node.ur : node.en}</div>
                  <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: node.text, opacity: 0.75 }}>{node.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gender */}
<h2 className={isUrdu ? "urdu" : ""} style={{ fontSize: "22px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)", marginTop: "32px" }}>
  {c.genderTitle}
</h2>
<p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text-muted)", marginBottom: "24px", lineHeight: "1.8" }}>{c.genderDesc}</p>

{/* Gender Hierarchy Diagram */}
<div style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "16px", padding: "32px 24px", marginBottom: "16px", textAlign: "center", overflowX: "auto" }}>
 <svg width="100%" viewBox="0 0 1000 720" style={{ display: "block", overflow: "visible", minWidth: "700px" }}>

  {/* ══ ROOT: جنس ══ */}
  <rect x="380" y="10" width="200" height="68" rx="12" fill="#1a2a1a" stroke="#1d9e75" strokeWidth="1.5"/>
  <text x="480" y="55" textAnchor="middle" style={{ fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit", fontSize: "20px", fill: "#9fe1cb", fontWeight: "700" }}>{isUrdu ? "جنس" : "Gender"}</text>
 

  {/* root → مذکر */}
  <line x1="430" y1="78" x2="200" y2="148" stroke="#1d9e75" strokeWidth="1.2" opacity="0.7"/>
  {/* root → مؤنث */}
  <line x1="530" y1="78" x2="730" y2="148" stroke="#d85a30" strokeWidth="1.2" opacity="0.7"/>

  {/* ══ مذکر ══ */}
  <rect x="100" y="148" width="200" height="68" rx="10" fill="#085041" stroke="#1d9e75" strokeWidth="1.5"/>
  <text x="200" y="195" textAnchor="middle" style={{ fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit", fontSize: "20px", fill: "#9fe1cb", fontWeight: "700" }}>{isUrdu ? "مذکر" : "Masculine"}</text>
 

  {/* مذکر → leaf */}
  <line x1="200" y1="216" x2="200" y2="256" stroke="#1d9e75" strokeWidth="1.2" opacity="0.7"/>
  <rect x="50" y="256" width="300" height="68" rx="8" fill="#052e22" stroke="#1d9e75" strokeWidth="1"/>
  <text x="200" y="282" textAnchor="middle" style={{ fontSize: "18px", fill: "#9fe1cb", fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit" }}>{isUrdu ? "کوئی خاص علامت نہیں" : "No special ending"}</text>
  <text x="200" y="313" textAnchor="middle" style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif", fontSize: "28px", fill: "#5dcaa5" }}>رَجُل، كِتَاب، قَلَم</text>

  {/* ══ مؤنث ══ */}
  <rect x="630" y="148" width="200" height="68" rx="10" fill="#4a1b0c" stroke="#d85a30" strokeWidth="1.5"/>
  <text x="730" y="195" textAnchor="middle" style={{ fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit", fontSize: "20px", fill: "#f0997b", fontWeight: "700" }}>{isUrdu ? "مؤنث" : "Feminine"}</text>
 

  {/* مؤنث → غیر حقیقی */}
  <line x1="685" y1="216" x2="530" y2="296" stroke="#d85a30" strokeWidth="1.2" opacity="0.7"/>
  {/* مؤنث → حقیقی */}
  <line x1="775" y1="216" x2="880" y2="296" stroke="#d85a30" strokeWidth="1.2" opacity="0.7"/>

  {/* ══ غیر حقیقی ══ */}
  <rect x="400" y="296" width="260" height="68" rx="10" fill="#3d1808" stroke="#d85a30" strokeWidth="1.5"/>
  <text x="530" y="341" textAnchor="middle" style={{ fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit", fontSize: "18px", fill: "#f0997b", fontWeight: "700" }}>{isUrdu ? "غیر حقیقی" : "Non-Real Feminine"}</text>
  

  {/* غیر حقیقی → علامتی */}
  <line x1="470" y1="364" x2="280" y2="424" stroke="#ef9f27" strokeWidth="1.2" opacity="0.7"/>
  {/* غیر حقیقی → سماعی */}
  <line x1="560" y1="364" x2="620" y2="424" stroke="#ef9f27" strokeWidth="1.2" opacity="0.7"/>

  {/* ══ علامتی ══ */}
  <rect x="140" y="424" width="220" height="68" rx="8" fill="#3d2c00" stroke="#ef9f27" strokeWidth="1.5"/>
  <text x="250" y="452" textAnchor="middle" style={{ fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit", fontSize: "18px", fill: "#fac775", fontWeight: "700" }}>{isUrdu ? "علامتی" : "By Sign"}</text>
  <text x="250" y="478" textAnchor="middle" style={{ fontSize: "18px", fill: "#ef9f27", fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit" }}>{isUrdu ? "علامت سے — ة یا ىٰ" : "By sign — ة or ىٰ"}</text>

  {/* علامتی → ة */}
  <line x1="210" y1="492" x2="185" y2="532" stroke="#ef9f27" strokeWidth="1" opacity="0.7"/>
  <rect x="128" y="532" width="120" height="60" rx="6" fill="#261d00" stroke="#ef9f27" strokeWidth="1"/>
  <text x="185" y="565" textAnchor="middle" style={{ fontSize: "18px", fill: "#f0997b", fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit" }}>{isUrdu ? "اسم کے آخر میں " : "Noun ends at"}</text>
  <text x="185" y="590" textAnchor="middle" style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif", fontSize: "34px", fill: "#fac775" }}>ة</text>

  {/* علامتی → ىٰ */}
  <line x1="290" y1="492" x2="320" y2="532" stroke="#ef9f27" strokeWidth="1" opacity="0.7"/>
  <rect x="260" y="532" width="120" height="60" rx="6" fill="#261d00" stroke="#ef9f27" strokeWidth="1"/>
  <text x="320" y="565" textAnchor="middle" style={{ fontSize: "18px", fill: "#f0997b", fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit" }}>{isUrdu ? "اسم کے آخر میں " : "Noun ends at"}</text>
  <text x="320" y="585" textAnchor="middle" style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif", fontSize: "34px", fill: "#fac775" }}>ىٰ</text>

  {/* ══ سماعی ══ */}
  <rect x="510" y="424" width="220" height="68" rx="8" fill="#3d2c00" stroke="#ef9f27" strokeWidth="1.5"/>
  <text x="620" y="452" textAnchor="middle" style={{ fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit", fontSize: "18px", fill: "#fac775", fontWeight: "700" }}>{isUrdu ? "سماعی" : "By Hearing"}</text>
  <text x="620" y="478" textAnchor="middle" style={{ fontSize: "18px", fill: "#ef9f27", fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit" }}>{isUrdu ? "روایت سے پہچانا جائے" : "By hearing/tradition"}</text>

  {/* سماعی → bullet box */}
  <line x1="620" y1="492" x2="620" y2="532" stroke="#ef9f27" strokeWidth="1" opacity="0.7"/>
  <line x1="620" y1="532" x2="620" y2="570" stroke="#ef9f27" strokeWidth="1" opacity="0.7"/>
  <rect x="450" y="570" width="360" height="136" rx="8" fill="#261d00" stroke="#ef9f27" strokeWidth="1"/>

  {isUrdu
    ? <text x="780" y="602" textAnchor="end" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: "14px", fill: "#fac775" }}>نام: ہوا، شراب، آگ، شہر، ملک</text>
    : <text x="745" y="602" textAnchor="end" style={{ fontSize: "18px", fill: "#fac775", fontFamily: "inherit" }}>Names: wind, wine, fire, city, country</text>
  }
  <line x1="406" y1="616" x2="874" y2="616" stroke="#ef9f27" strokeWidth="0.4" opacity="0.35"/>

  {isUrdu
    ? <text x="780" y="648" textAnchor="end" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: "14px", fill: "#fac775" }}>جفت جسمانی اعضاء — آنکھ، کان، ہاتھ وغیرہ</text>
    : <text x="735" y="648" textAnchor="end" style={{ fontSize: "18px", fill: "#fac775", fontFamily: "inherit" }}>Paired body parts — eye, ear, hand</text>
  }
  <line x1="406" y1="662" x2="874" y2="662" stroke="#ef9f27" strokeWidth="0.4" opacity="0.35"/>

  {isUrdu
    ? <text x="780" y="692" textAnchor="end" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: "14px", fill: "#fac775" }}>متفرق اسماء: شَمْسٌ، سَمَاءٌ، أَرْضٌ، نَفْسٌ، حَرْبٌ، دَارٌ، عَصَا</text>
    : <text x="800" y="692" textAnchor="end" style={{ fontSize: "18px", fill: "#fac775", fontFamily: "inherit" }}>Misc: شَمْسٌ، سَمَاءٌ، أَرْضٌ، نَفْسٌ، حَرْبٌ، دَارٌ، عَصَا</text>
  }

  {/* ══ حقیقی ══ */}
  <rect x="765" y="296" width="230" height="68" rx="10" fill="#3d1808" stroke="#d85a30" strokeWidth="1.5"/>
 <text x="880" y="337" textAnchor="middle" style={{ fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit", fontSize: "18px", fill: "#f0997b", fontWeight: "700" }}>{isUrdu ? "حقیقی    (بیالوجیکل مادہ)" : "Real Feminine(Biological)"}</text>
 

  {/* حقیقی → leaf */}
  <line x1="880" y1="364" x2="880" y2="424" stroke="#d85a30" strokeWidth="1.2" opacity="0.7"/>
  <rect x="760" y="424" width="220" height="68" rx="8" fill="#2a0f06" stroke="#d85a30" strokeWidth="1"/>
  <text x="870" y="455" textAnchor="middle" style={{ fontSize: "16px", fill: "#f0997b", fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "inherit" }}>{isUrdu ? "عورت، بچی، اونٹنی" : "Woman, girl, She-Camel"}</text>
  <text x="870" y="483" textAnchor="middle" style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif", fontSize: "24px", fill: "#d85a30" }}>مَرْأَة، بِنْت، نَاقَة</text>

</svg>
</div>

{/* Gender Note */}
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

        {/* Capicity */}
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
    ? "اعراب کا مطلب ہے اسم کے آخر میں حرکت کا بدلنا۔ جملے میں اسم کا کردار بتاتا ہے کہ اس پر کون سی حرکت آئے گی۔ یہ موضوع لیول ۲ میں تفصیل سے پڑھا جائے گا۔"
    : "I'rab means the change in the ending of a noun based on its role in the sentence. We will study this in full detail in Level 2 — here is a brief introduction."}
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
      ? "یاد رہے: رفع = پیش (ُ)، نصب = زبر (َ)، جر = زیر (ِ)۔ تنوین میں یہی حرکات دوہری ہو جاتی ہیں (ٌ ً ٍ)۔ مکمل اعراب لیول ۲ میں پڑھا جائے گا۔"
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
         <Link href="/lessons/4" style={{ backgroundColor: "var(--color-primary)", border: "none", borderRadius: "8px", padding: "12px 24px", color: "#0f1117", fontSize: "15px", fontWeight: "700", cursor: "pointer", textDecoration: "none", display: "inline-block" }}>
  {c.nextLesson}
</Link>
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