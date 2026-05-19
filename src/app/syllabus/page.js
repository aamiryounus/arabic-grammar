"use client";

import Link from "next/link";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const syllabusData = {
  en: {
    title: "Full Curriculum",
    subtitle: "Your complete roadmap from beginner to advanced Quranic Arabic",
    levels: [
      {
        level: "Level 1",
        title: "Foundations",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
        badge: "Beginner",
        sections: [
          {
            id: 1,
            title: "The Three Parts of Speech",
            arabic: "الكلمة وأقسامها",
            desc: "The master key to all Arabic grammar",
            ready: true,
          },
          {
            id: 2,
            title: "Introduction to Particles",
            arabic: "الحروف",
            desc: "Overview of all particle types in Arabic",
            ready: false,
            subsections: [
              { title: "Arabic Alphabets", arabic: "حروف الهجاء" },
              { title: "Conjunctive Particles", arabic: "حروف العطف" },
              { title: "Preposition Particles", arabic: "حروف الجر" },
              { title: "Negative Particles", arabic: "حروف النفي" },
              { title: "Conditional Particles", arabic: "حروف الشرط" },
              { title: "Question Particles", arabic: "حروف الاستفهام" },
              { title: "Emphatic Particles", arabic: "حروف التوكيد" },
              { title: "Exception Particles", arabic: "حروف الاستثناء" },
              { title: "Future Particles", arabic: "حروف التنفيس" },
              { title: "Vocative Particles", arabic: "حروف النداء" },
            ],
          },
          {
            id: 3,
            title: "Introduction to Nouns",
            arabic: "الاسم",
            desc: "Properties and types of Arabic nouns",
            ready: false,
            subsections: [
              { title: "Properties of Nouns", arabic: "خصائص الاسم" },
              { title: "Gender", arabic: "المذكر والمؤنث" },
              { title: "Number", arabic: "المفرد والمثنى والجمع" },
              { title: "Definite & Indefinite", arabic: "المعرفة والنكرة" },
              { title: "Case Endings / I'rab", arabic: "الإعراب" },
            ],
          },
        ],
      },
      {
        level: "Level 2",
        title: "Verbs & Sentences",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
        badge: "Elementary",
        sections: [
          { id: 4, title: "Introduction to Verbs", arabic: "الفعل", desc: "Past, present and command forms", ready: false },
          { id: 5, title: "The Nominal Sentence", arabic: "الجملة الاسمية", desc: "Subject and predicate structure", ready: false },
          { id: 6, title: "The Verbal Sentence", arabic: "الجملة الفعلية", desc: "Verb-first sentence structure", ready: false },
          { id: 7, title: "Doer & Object", arabic: "الفاعل والمفعول به", desc: "Who does what to whom", ready: false },
          { id: 8, title: "Possession Structure", arabic: "الإضافة", desc: "Mudaf and Mudaf Ilayh", ready: false },
        ],
      },
      {
        level: "Level 3",
        title: "Case Endings",
        color: "#0c447c",
        border: "#378add",
        text: "#b5d4f4",
        badge: "Intermediate",
        sections: [
          { id: 9, title: "Introduction to I'rab", arabic: "الإعراب", desc: "The declension system", ready: false },
          { id: 10, title: "Raf' — Nominative Case", arabic: "الرفع", desc: "When words take damma", ready: false },
          { id: 11, title: "Nasb — Accusative Case", arabic: "النصب", desc: "When words take fatha", ready: false },
          { id: 12, title: "Jarr — Genitive Case", arabic: "الجر", desc: "When words take kasra", ready: false },
          { id: 13, title: "Jazm — Jussive Case", arabic: "الجزم", desc: "For verbs only", ready: false },
        ],
      },
      {
        level: "Level 4",
        title: "Verb Morphology",
        color: "#3c3489",
        border: "#7f77dd",
        text: "#cecbf6",
        badge: "Upper Intermediate",
        sections: [
          { id: 14, title: "The Root System", arabic: "الجذر", desc: "How 3-letter roots generate words", ready: false },
          { id: 15, title: "The 10 Verb Patterns", arabic: "الأبواب العشرة", desc: "Visual breakdown of morphological scales", ready: false },
          { id: 16, title: "Derived Nouns", arabic: "المشتقات", desc: "Ism Fail, Ism Maful and more", ready: false },
          { id: 17, title: "Weak & Irregular Verbs", arabic: "الأفعال المعتلة", desc: "Exceptions and special patterns", ready: false },
        ],
      },
      {
        level: "Level 5",
        title: "Advanced Quranic Analysis",
        color: "#4a1b0c",
        border: "#d85a30",
        text: "#f0997b",
        badge: "Advanced",
        sections: [
          { id: 18, title: "Full Grammatical Parsing", arabic: "الإعراب التفصيلي", desc: "Complete i'rab of Quranic verses", ready: false },
          { id: 19, title: "Root Word Explorer", arabic: "استكشاف الجذور", desc: "Deep dives into roots like ع ل م", ready: false },
          { id: 20, title: "Rhetorical Devices", arabic: "البلاغة القرآنية", desc: "Balagha in the Quran", ready: false },
          { id: 21, title: "Al-Fauz al-Kabir Method", arabic: "منهج الفوز الكبير", desc: "Classical analysis methodology", ready: false },
          { id: 22, title: "Verse-by-Verse Practice", arabic: "تطبيق عملي", desc: "Full parsing practice sessions", ready: false },
        ],
      },
    ],
  },
  ur: {
    title: "مکمل نصاب",
    subtitle: "ابتداء سے قرآنی عربی کے اعلیٰ درجے تک آپ کا مکمل نقشہ راہ",
    levels: [
      {
        level: "سطح ۱",
        title: "بنیادیات",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
        badge: "ابتدائی",
        sections: [
          { id: 1, title: "کلام کے تین اجزاء", arabic: "الكلمة وأقسامها", desc: "پوری عربی گرامر کی بنیادی کنجی", ready: true },
          {
            id: 2,
            title: "حروف کا تعارف",
            arabic: "الحروف",
            desc: "عربی کے تمام حروف کی اقسام",
            ready: false,
            subsections: [
              { title: "حروف الهجاء", arabic: "حروف الهجاء" },
              { title: "حروف عطف", arabic: "حروف العطف" },
              { title: "حروف جر", arabic: "حروف الجر" },
              { title: "حروف نفی", arabic: "حروف النفي" },
              { title: "حروف شرط", arabic: "حروف الشرط" },
              { title: "حروف استفہام", arabic: "حروف الاستفهام" },
              { title: "حروف توکید", arabic: "حروف التوكيد" },
              { title: "حروف استثناء", arabic: "حروف الاستثناء" },
              { title: "حروف تنفیس", arabic: "حروف التنفيس" },
              { title: "حروف ندا", arabic: "حروف النداء" },
            ],
          },
          {
            id: 3,
            title: "اسم کا تعارف",
            arabic: "الاسم",
            desc: "عربی اسم کی خصوصیات اور اقسام",
            ready: false,
            subsections: [
              { title: "اسم کی خصوصیات", arabic: "خصائص الاسم" },
              { title: "جنس", arabic: "المذكر والمؤنث" },
              { title: "عدد", arabic: "المفرد والمثنى والجمع" },
              { title: "معرفہ و نکرہ", arabic: "المعرفة والنكرة" },
              { title: "اعراب", arabic: "الإعراب" },
            ],
          },
        ],
      },
      {
        level: "سطح ۲",
        title: "فعل اور جملے",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
        badge: "ابتدائی متوسط",
        sections: [
          { id: 4, title: "فعل کا تعارف", arabic: "الفعل", desc: "ماضی، مضارع اور امر", ready: false },
          { id: 5, title: "جملہ اسمیہ", arabic: "الجملة الاسمية", desc: "مبتدا اور خبر", ready: false },
          { id: 6, title: "جملہ فعلیہ", arabic: "الجملة الفعلية", desc: "فعل سے شروع ہونے والا جملہ", ready: false },
          { id: 7, title: "فاعل اور مفعول", arabic: "الفاعل والمفعول به", desc: "کون کیا کرتا ہے", ready: false },
          { id: 8, title: "اضافت", arabic: "الإضافة", desc: "مضاف اور مضاف الیہ", ready: false },
        ],
      },
      {
        level: "سطح ۳",
        title: "اعراب",
        color: "#0c447c",
        border: "#378add",
        text: "#b5d4f4",
        badge: "متوسط",
        sections: [
          { id: 9, title: "اعراب کا تعارف", arabic: "الإعراب", desc: "عربی کا حرکات کا نظام", ready: false },
          { id: 10, title: "رفع", arabic: "الرفع", desc: "جب الفاظ پر پیش آتی ہے", ready: false },
          { id: 11, title: "نصب", arabic: "النصب", desc: "جب الفاظ پر زبر آتی ہے", ready: false },
          { id: 12, title: "جر", arabic: "الجر", desc: "جب الفاظ پر زیر آتی ہے", ready: false },
          { id: 13, title: "جزم", arabic: "الجزم", desc: "صرف افعال کے لیے", ready: false },
        ],
      },
      {
        level: "سطح ۴",
        title: "صرف",
        color: "#3c3489",
        border: "#7f77dd",
        text: "#cecbf6",
        badge: "اعلیٰ متوسط",
        sections: [
          { id: 14, title: "جذر کا نظام", arabic: "الجذر", desc: "تین حرفی جذور سے الفاظ کیسے بنتے ہیں", ready: false },
          { id: 15, title: "دس ابواب", arabic: "الأبواب العشرة", desc: "صرفی اوزان کی بصری وضاحت", ready: false },
          { id: 16, title: "مشتقات", arabic: "المشتقات", desc: "اسم فاعل، اسم مفعول وغیرہ", ready: false },
          { id: 17, title: "معتل افعال", arabic: "الأفعال المعتلة", desc: "استثناءات اور خاص اوزان", ready: false },
        ],
      },
      {
        level: "سطح ۵",
        title: "قرآنی تجزیہ",
        color: "#4a1b0c",
        border: "#d85a30",
        text: "#f0997b",
        badge: "اعلیٰ",
        sections: [
          { id: 18, title: "مکمل اعراب", arabic: "الإعراب التفصيلي", desc: "قرآنی آیات کا مکمل اعراب", ready: false },
          { id: 19, title: "جذر کا کھوج", arabic: "استكشاف الجذور", desc: "جذور جیسے ع ل م کی گہرائی", ready: false },
          { id: 20, title: "بلاغت قرآنی", arabic: "البلاغة القرآنية", desc: "قرآن میں بلاغت کے اسلوب", ready: false },
          { id: 21, title: "فوز الکبیر کا منہج", arabic: "منهج الفوز الكبير", desc: "کلاسیکی تجزیہ کا طریقہ", ready: false },
          { id: 22, title: "عملی مشق", arabic: "تطبيق عملي", desc: "آیت بہ آیت اعراب کی مشق", ready: false },
        ],
      },
    ],
  },
};

function SyllabusContent() {
  const { language } = useLanguage();
  const isUrdu = language === "ur";
  const data = syllabusData[language];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
      <Navbar />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <h1
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "36px", fontWeight: "700", marginBottom: "12px", color: "var(--color-text)" }}
          >
            {data.title}
          </h1>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "16px", color: "var(--color-text-muted)", lineHeight: "1.7" }}
          >
            {data.subtitle}
          </p>
        </div>

        {/* Levels */}
        {data.levels.map((level, li) => (
          <div key={li} style={{ marginBottom: "40px" }}>

            {/* Level Header */}
            <div
              style={{
                backgroundColor: level.color,
                border: `1px solid ${level.border}`,
                borderRadius: "12px 12px 0 0",
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  className={isUrdu ? "urdu" : ""}
                  style={{ fontSize: "13px", color: level.text, opacity: 0.8, marginRight: "8px" }}
                >
                  {level.level}
                </span>
                <span
                  className={isUrdu ? "urdu" : ""}
                  style={{ fontSize: "20px", fontWeight: "700", color: level.text }}
                >
                  — {level.title}
                </span>
              </div>
              <span
                style={{
                  backgroundColor: "rgba(0,0,0,0.2)",
                  borderRadius: "20px",
                  padding: "4px 14px",
                  fontSize: "12px",
                  color: level.text,
                }}
              >
                {level.badge}
              </span>
            </div>

            {/* Sections */}
            <div
              style={{
                border: `1px solid ${level.border}`,
                borderTop: "none",
                borderRadius: "0 0 12px 12px",
                overflow: "hidden",
              }}
            >
              {level.sections.map((section, si) => (
                <div key={si}>
                  {/* Main Section Row */}
                  <div
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderBottom: si < level.sections.length - 1 || section.subsections
                        ? `1px solid var(--color-border)`
                        : "none",
                      padding: "16px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    {/* Number */}
                    <div
                      style={{
                        backgroundColor: level.color,
                        border: `1px solid ${level.border}`,
                        borderRadius: "6px",
                        padding: "6px 10px",
                        fontSize: "13px",
                        color: level.text,
                        fontWeight: "700",
                        minWidth: "36px",
                        textAlign: "center",
                      }}
                    >
                      {section.id}
                    </div>

                    {/* Title & Arabic */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                        <span
                          className={isUrdu ? "urdu" : ""}
                          style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text)" }}
                        >
                          {section.title}
                        </span>
                        <span
                          className="arabic"
                          style={{ fontSize: "15px", color: level.border }}
                        >
                          {section.arabic}
                        </span>
                      </div>
                      <div
                        className={isUrdu ? "urdu" : ""}
                        style={{ fontSize: "13px", color: "var(--color-text-muted)", marginTop: "3px" }}
                      >
                        {section.desc}
                      </div>
                    </div>

                    {/* Status Badge */}
                    {section.ready ? (
                      <Link
                        href={`/lessons/${section.id}`}
                        style={{
                          backgroundColor: level.color,
                          border: `1px solid ${level.border}`,
                          borderRadius: "6px",
                          padding: "6px 14px",
                          fontSize: "12px",
                          color: level.text,
                          fontWeight: "600",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {isUrdu ? "شروع کریں ←" : "Start →"}
                      </Link>
                    ) : (
                      <span
                        style={{
                          backgroundColor: "var(--color-surface2)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "6px",
                          padding: "6px 14px",
                          fontSize: "12px",
                          color: "var(--color-text-muted)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {isUrdu ? "جلد آئے گا" : "Coming Soon"}
                      </span>
                    )}
                  </div>

                  {/* Subsections */}
                  {section.subsections && (
                    <div style={{ backgroundColor: "var(--color-bg)" }}>
                      {section.subsections.map((sub, subi) => (
                        <div
                          key={subi}
                          style={{
                            padding: "10px 24px 10px 72px",
                            borderBottom: subi < section.subsections.length - 1
                              ? "1px solid var(--color-border)"
                              : "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              backgroundColor: level.border,
                              flexShrink: 0,
                            }}
                          />
                          <span
                            className={isUrdu ? "urdu" : ""}
                            style={{ fontSize: "14px", color: "var(--color-text-muted)" }}
                          >
                            {sub.title}
                          </span>
                          <span
                            className="arabic"
                            style={{ fontSize: "13px", color: level.border, marginRight: "auto" }}
                          >
                            {sub.arabic}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Back to Home */}
        <div style={{ textAlign: "center", marginTop: "20px", paddingBottom: "40px" }}>
          <Link
            href="/"
            style={{
              color: "var(--color-primary)",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            ← {isUrdu ? "گھر واپس" : "Back to Home"}
          </Link>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default function SyllabusPage() {
  return (
    <LanguageProvider>
      <SyllabusContent />
    </LanguageProvider>
  );
}