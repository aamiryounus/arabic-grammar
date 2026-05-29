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
    title: "Jazm — Jussive Case",
    arabicTitle: "الجَزْم",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 13",
    intro:
      "Jazm is the fourth and final case — and it applies exclusively to verbs. Unlike Raf', Nasb, and Jarr which apply to nouns, Jazm only affects the present tense verb (فعل مضارع). Its sign is the sukun (ْ) — the absence of a vowel at the end of the verb.",
    goldenRule:
      "Jazm applies only to verbs. It is triggered by Jazm-causing particles (جوازم) such as لَمْ (did not), لَا النَّاهِيَة (do not!), and conditional particles. Its sign is the sukun (ْ).",
    tableTitle: "When Does Jazm Occur?",
    parts: [
      {
        term: "لَمْ",
        name: "Lam",
        meaning: "Did not (negation)",
        desc: "Negates the past in the present tense form: لَمْ يَفْعَلْ = he did not do",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "لَا النَّاهِيَة",
        name: "La al-Nahiya",
        meaning: "Prohibitive لا",
        desc: "The 'do not' particle: لَا تَقُلْ = do not say",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "أَدَوَات الشَّرْط",
        name: "Adat al-Shart",
        meaning: "Conditional particles",
        desc: "إِنْ (if), مَنْ (whoever), مَا (whatever) — put both the condition and response verbs in Jazm",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "Quranic Example 1 — Surah Al-Ikhlas (112:4)",
    example1Arabic: "وَلَمْ يَكُنْ لَّهُ كُفُوًا أَحَدٌ",
    example1Translation: "And there is none comparable to Him.",
    example1Note:
      "يَكُنْ is in Jazm because of لَمْ before it. Without لَمْ it would be يَكُونُ (with damma). The sukun at the end of يَكُنْ is the Jazm marker — the vowel has been dropped.",
    example1Words: [
      { word: "وَلَمْ", type: "Harf — Jazm", meaning: "And did not", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "يَكُنْ", type: "Jazm — Verb", meaning: "Be/exist", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "لَّهُ", type: "Jarr — Prep.", meaning: "For Him", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "كُفُوًا", type: "Nasb", meaning: "Equal/comparable", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "أَحَدٌ", type: "Raf'", meaning: "Anyone", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    example2Title: "Quranic Example 2 — Surah Al-Baqarah (2:286)",
    example2Arabic: "لَا يُكَلِّفُ اللهُ نَفْسًا إِلَّا وُسْعَهَا",
    example2Translation: "Allah does not burden a soul beyond that it can bear.",
    example2Note:
      "Here لَا is not the prohibitive — it is لَا النَّافِيَة (negating لا), which does NOT cause Jazm. يُكَلِّفُ stays in Raf' with damma. This contrast is important — not every لَا causes Jazm.",
    example2Words: [
      { word: "لَا", type: "Harf — Negation", meaning: "Does not", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "يُكَلِّفُ", type: "Raf' — Verb", meaning: "Burden/charge", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "اللهُ", type: "Raf' — Fa'il", meaning: "Allah (doer)", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "نَفْسًا", type: "Nasb — Object", meaning: "A soul", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "Jazm is marked by sukun (ْ) and applies to verbs only. It is triggered by particles like لَمْ and لَا النَّاهِيَة. You have now completed all four cases of I'rab — Raf', Nasb, Jarr, and Jazm. Every word in the Quran carries one of these states. You now have the tools to identify them.",
    backHome: "← Back to Home",
    prevLesson: "← Previous Lesson",
    nextLesson: "Next Level →",
  },
  ur: {
    title: "جزم",
    arabicTitle: "الجَزْم",
    level: "سطح ۲ — اعراب",
    lessonNumber: "سبق 8",
    intro:
      "جزم چوتھی اور آخری حالت ہے — اور یہ صرف افعال پر آتی ہے۔ رفع، نصب اور جر جو اسموں پر آتے ہیں، جزم صرف فعل مضارع پر آتا ہے۔ جزم کی علامت سکون (ْ) ہے — فعل کے آخر میں حرکت کا غائب ہو جانا۔",
    goldenRule:
      "جزم صرف افعال پر آتا ہے۔ یہ جوازم جیسے لَمْ (نفی ماضی)، لَا النَّاهِيَة (نہ کرو) اور حروف شرط کی وجہ سے آتا ہے۔ اس کی علامت سکون (ْ) ہے۔",
    tableTitle: "جزم کب آتا ہے؟",
    parts: [
      {
        term: "لَمْ",
        name: "لم",
        meaning: "Did not (negation)",
        desc: "ماضی کی نفی مضارع کے صیغے میں: لَمْ يَفْعَلْ = اس نے نہیں کیا",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "لَا النَّاهِيَة",
        name: "لا ناہیہ",
        meaning: "Prohibitive لا",
        desc: "نہ کرنے کا حکف: لَا تَقُلْ = مت کہو",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        term: "أَدَوَات الشَّرْط",
        name: "ادوات شرط",
        meaning: "Conditional particles",
        desc: "إِنْ (اگر)، مَنْ (جو بھی)، مَا (جو بھی) — شرط اور جواب دونوں افعال کو جزم میں ڈالتے ہیں",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    example1Title: "قرآنی مثال ۱ — سورۃ الاخلاص (۱۱۲:۴)",
    example1Arabic: "وَلَمْ يَكُنْ لَّهُ كُفُوًا أَحَدٌ",
    example1Translation: "اور اس کا کوئی ہمسر نہیں۔",
    example1Note:
      "يَكُنْ جزم میں ہے کیونکہ اس سے پہلے لَمْ ہے۔ اس کے بغیر یہ يَكُونُ ہوتا (پیش کے ساتھ)۔ يَكُنْ کے آخر میں سکون جزم کی علامت ہے — حرکت گر گئی ہے۔",
    example1Words: [
      { word: "وَلَمْ", type: "حرف جزم", meaning: "اور نہیں ہوا", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "يَكُنْ", type: "جزم — فعل", meaning: "ہونا", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "لَّهُ", type: "جر — حرف جر", meaning: "اس کے لیے", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "كُفُوًا", type: "نصب", meaning: "برابر", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "أَحَدٌ", type: "رفع", meaning: "کوئی", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    example2Title: "قرآنی مثال ۲ — سورۃ البقرۃ (۲:۲۸۶)",
    example2Arabic: "لَا يُكَلِّفُ اللهُ نَفْسًا إِلَّا وُسْعَهَا",
    example2Translation: "اللہ کسی جان کو اس کی طاقت سے بڑھ کر بوجھ نہیں دیتا۔",
    example2Note:
      "یہاں لَا نافیہ ہے — جازمہ نہیں۔ اس لیے يُكَلِّفُ رفع میں رہا (پیش کے ساتھ)۔ یہ فرق اہم ہے — ہر لَا جزم نہیں دیتی۔",
    example2Words: [
      { word: "لَا", type: "حرف نفی", meaning: "نہیں", color: "#4a1b0c", border: "#d85a30", text: "#f0997b" },
      { word: "يُكَلِّفُ", type: "رفع — فعل", meaning: "بوجھ دیتا ہے", color: "#633806", border: "#ef9f27", text: "#fac775" },
      { word: "اللهُ", type: "رفع — فاعل", meaning: "اللہ", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
      { word: "نَفْسًا", type: "نصب — مفعول", meaning: "کسی جان کو", color: LEVEL_DARK, border: LEVEL_BORDER, text: LEVEL_TEXT },
    ],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "جزم کی علامت سکون (ْ) ہے اور یہ صرف افعال پر آتا ہے۔ یہ لَمْ اور لَا ناہیہ جیسے حروف کی وجہ سے آتا ہے۔ آپ نے اعراب کی چاروں حالتیں مکمل کر لی ہیں — رفع، نصب، جر، اور جزم۔ قرآن کا ہر لفظ انہی میں سے ایک حالت میں ہے۔ اب آپ کے پاس انہیں پہچاننے کے اوزار موجود ہیں۔",
    backHome: "← گھر واپس",
    prevLesson: "← پچھلا سبق",
    nextLesson: "اگلا درجہ →",
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
  <Navbar currentLesson={8} />   {/* ← number matches the lesson */}
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
          <Link href="/lessons/7" style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 24px", color: "var(--color-text)", textDecoration: "none", fontSize: "15px" }}>{c.prevLesson}</Link>
          <Link href="/syllabus" style={{ backgroundColor: LEVEL_COLOR, border: "none", borderRadius: "8px", padding: "12px 24px", color: LEVEL_LIGHT, fontSize: "15px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>{c.nextLesson}</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function Lesson8() {
  return <LanguageProvider><LessonContent /></LanguageProvider>;
}
