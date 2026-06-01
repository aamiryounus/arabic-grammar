"use client";

import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

const lessonContent = {
  en: {
    title: "Introduction to Particles",
    arabicTitle: "الحروف",
    level: "Level 1 — Foundations",
    lessonNumber: "Lesson 2",
    intro:
      "Particles (الحروف) are words that have no independent meaning on their own. They only make sense when connected to a Noun or Verb. Despite being small words, they are extremely frequent in the Quran and carry deep grammatical meaning.",
    goldenRule:
      "A Harf (particle) has no meaning by itself. It only gains meaning when it connects to an Ism or Fi'l.",
    typesTitle: "The 10 Types of Particles",
    types: [
      {
        id: "2.1",
        arabic: "حروف الهجاء",
        name: "Arabic Alphabets",
        desc: "The 28 letters of the Arabic alphabet — the building blocks of every word in the Quran.",
        example: [
  {l:"أ",n:"Alif"},{l:"ب",n:"Ba"},{l:"ت",n:"Ta"},{l:"ث",n:"Sa"},
  {l:"ج",n:"Jeem"},{l:"ح",n:"Ha"},{l:"خ",n:"Kha"},{l:"د",n:"Dal"},
  {l:"ذ",n:"Zal"},{l:"ر",n:"Ra"},{l:"ز",n:"Za"},{l:"س",n:"Seen"},
  {l:"ش",n:"Sheen"},{l:"ص",n:"Saad"},{l:"ض",n:"Zaad"},{l:"ط",n:"Taa"},
  {l:"ظ",n:"Zaa"},{l:"ع",n:"Ayn"},{l:"غ",n:"Ghayn"},{l:"ف",n:"Fa"},
  {l:"ق",n:"Qaaf"},{l:"ك",n:"Kaf"},{l:"ل",n:"Lam"},{l:"م",n:"Meem"},
  {l:"ن",n:"Noon"},{l:"و",n:"Waw"},{l:"ه",n:"Ha"},{l:"ي",n:"Ya"},
],
        exampleNote: "These 28 letters form every word in the Arabic language.",
        quranicEx: "الٓمٓ",
        quranicRef: "Surah Al-Baqarah (2:1)",
        quranicTrans: "Alif, Lam, Meem — Known as Huroof Muqatta'at (disconnected letters)",
        color: "#3c3489",
        border: "#7f77dd",
        text: "#cecbf6",
      },
      {
        id: "2.2",
        arabic: "حروف العطف",
        name: "Conjunctive Particles",
        desc: "Words that join two nouns, verbs, or sentences together.",
        example: "وَ (and) — فَ (then/so) — ثُمَّ (then/after) — أَوْ (or) — بَلْ (rather)",
        exampleNote: "These particles connect words and sentences.",
        quranicEx: "وَالسَّمَاءِ وَالْأَرْضِ",
        quranicRef: "Surah Ibrahim (14:32)",
        quranicTrans: "...the heavens AND the earth",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
      },
      {
        id: "2.3",
        arabic: "حروف الجر",
        name: "Preposition Particles",
        desc: "Words that show the relationship between a noun and other words. They always put the following noun in the Jarr (genitive) case.",
        example: "مِنْ (from) — إِلَى (to) — عَنْ (about/from) — عَلَى (on/upon) — فِي (in) — بِ (with/by) — لِ (for) — كَ (like)",
        exampleNote: "After every حرف جر, the next noun gets a kasra (زیر).",
        quranicEx: "لِلَّهِ مَا فِي السَّمَاوَاتِ",
        quranicRef: "Surah Al-Baqarah (2:284)",
        quranicTrans: "TO Allah belongs what is IN the heavens",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        id: "2.4",
        arabic: "حروف النفي",
        name: "Negative Particles",
        desc: "Words that negate or deny something.",
        example: "لَا (no/not) — لَمْ (did not) — لَنْ (will never) — مَا (not) — لَيْسَ (is not)",
        exampleNote: "Each negative particle affects the verb differently.",
        quranicEx: "لَا إِلَهَ إِلَّا اللهُ",
        quranicRef: "The Testimony of Faith",
        quranicTrans: "There is NO god EXCEPT Allah",
        color: "#4a1b0c",
        border: "#d85a30",
        text: "#f0997b",
      },
      {
        id: "2.5",
        arabic: "حروف الشرط",
        name: "Conditional Particles",
        desc: "Words that create 'if-then' conditional sentences.",
        example: "إِنْ (if) — إِذَا (when/if) — مَنْ (whoever) — مَا (whatever) — مَتَى (whenever)",
        exampleNote: "Conditional particles require two verbs — the condition and its result.",
        quranicEx: "إِنْ كُنْتُمْ تُحِبُّونَ اللهَ فَاتَّبِعُونِي",
        quranicRef: "Surah Aal-Imran (3:31)",
        quranicTrans: "IF you love Allah, THEN follow me",
        color: "#0c447c",
        border: "#378add",
        text: "#b5d4f4",
      },
      {
        id: "2.6",
        arabic: "حروف الاستفهام",
        name: "Question Particles",
        desc: "Words used to ask questions.",
        example: "هَلْ (yes/no question) — أَ (interrogative alif) — مَا (what) — مَنْ (who) — أَيْنَ (where) — كَيْفَ (how) — لِمَاذَا (why)",
        exampleNote: "هَلْ is used for yes/no questions. أَ can introduce any question.",
        quranicEx: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ",
        quranicRef: "Surah Al-Ghashiyah (88:1)",
        quranicTrans: "HAS there come to you the report of the Overwhelming Event?",
        color: "#3c3489",
        border: "#7f77dd",
        text: "#cecbf6",
      },
      {
        id: "2.7",
        arabic: "حروف التوكيد",
        name: "Emphatic Particles",
        desc: "Words that add emphasis and certainty to a statement.",
        example: "إِنَّ (indeed/verily) — أَنَّ (that/indeed) — لَ (emphatic lam) — قَدْ (certainly/already)",
        exampleNote: "إِنَّ is one of the most frequent words in the Quran.",
        quranicEx: "إِنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        quranicRef: "Surah Al-Baqarah (2:20)",
        quranicTrans: "INDEED Allah is over all things competent",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
      },
      {
        id: "2.8",
        arabic: "حروف الاستثناء",
        name: "Exception Particles",
        desc: "Words that make exceptions — 'all except this one'.",
        example: "إِلَّا (except) — غَيْرَ (other than) — سِوَى (besides)",
        exampleNote: "إِلَّا is the most common exception particle in the Quran.",
        quranicEx: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
        quranicRef: "Surah Adh-Dhariyat (51:56)",
        quranicTrans: "I did not create jinn and mankind EXCEPT to worship Me",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        id: "2.9",
        arabic: "حروف التنفيس",
        name: "Future Particles",
        desc: "Small particles attached to present-tense verbs to indicate future meaning.",
        example: "سَ (soon will) — سَوْفَ (will/shall in the future)",
        exampleNote: "سَ indicates near future. سَوْفَ indicates distant future.",
        quranicEx: "سَيَقُولُ السُّفَهَاءُ",
        quranicRef: "Surah Al-Baqarah (2:142)",
        quranicTrans: "The foolish WILL SAY...",
        color: "#4a1b0c",
        border: "#d85a30",
        text: "#f0997b",
      },
      {
        id: "2.10",
        arabic: "حروف النداء",
        name: "Vocative Particles",
        desc: "Words used to call or address someone.",
        example: "يَا (O!) — أَيُّهَا (O you!) — أَيَّتُهَا (O you! — feminine)",
        exampleNote: "يَا is the most common vocative particle — used to address Allah, prophets, and people.",
        quranicEx: "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ",
        quranicRef: "Surah Al-Baqarah (2:21)",
        quranicTrans: "O MANKIND! Worship your Lord",
        color: "#0c447c",
        border: "#378add",
        text: "#b5d4f4",
      },
    ],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "Particles are the glue of Arabic grammar. Although they have no meaning alone, they completely change the meaning of sentences. Mastering particles is essential for understanding every Quranic verse.",
    backHome: "← Back to Home",
    prevLesson: "← Lesson 1",
    nextLesson: "Lesson 3 →",
  },
  ur: {
    title: "حروف کا تعارف",
    arabicTitle: "الحروف",
    level: "لیول 1 — بنیادیات",
    lessonNumber: "سبق 2",
    intro:
      "حروف وہ الفاظ ہیں جن کا اپنا کوئی مستقل مطلب نہیں ہوتا۔ یہ صرف اسم یا فعل کے ساتھ مل کر معنی دیتے ہیں۔ حروف قرآن میں بہت زیادہ آتے ہیں اور گرامر میں گہری اہمیت رکھتے ہیں۔",
    goldenRule:
      "حرف اکیلا بے معنی ہوتا ہے۔ یہ صرف اسم یا فعل سے مل کر معنی دیتا ہے۔",
    typesTitle: "حروف کی دس اقسام",
    types: [
      {
        id: "2.1",
        arabic: "حروف الهجاء",
        name: "عربی حروف تہجی",
        desc: "عربی کے ۲۸ حروف — قرآن کے ہر لفظ کی بنیاد۔",
        example: [
  {l:"أ",n:"Alif"},{l:"ب",n:"Ba"},{l:"ت",n:"Ta"},{l:"ث",n:"Sa"},
  {l:"ج",n:"Jeem"},{l:"ح",n:"Ha"},{l:"خ",n:"Kha"},{l:"د",n:"Dal"},
  {l:"ذ",n:"Zal"},{l:"ر",n:"Ra"},{l:"ز",n:"Za"},{l:"س",n:"Seen"},
  {l:"ش",n:"Sheen"},{l:"ص",n:"Saad"},{l:"ض",n:"Zaad"},{l:"ط",n:"Taa"},
  {l:"ظ",n:"Zaa"},{l:"ع",n:"Ayn"},{l:"غ",n:"Ghayn"},{l:"ف",n:"Fa"},
  {l:"ق",n:"Qaaf"},{l:"ك",n:"Kaf"},{l:"ل",n:"Lam"},{l:"م",n:"Meem"},
  {l:"ن",n:"Noon"},{l:"و",n:"Waw"},{l:"ه",n:"Ha"},{l:"ي",n:"Ya"},
],
        exampleNote: "یہ ۲۸ حروف عربی زبان کے ہر لفظ کو بناتے ہیں۔",
        quranicEx: "الٓمٓ",
        quranicRef: "سورۃ البقرہ (۲:۱)",
        quranicTrans: "الف، لام، میم — حروف مقطعات",
        color: "#3c3489",
        border: "#7f77dd",
        text: "#cecbf6",
      },
      {
        id: "2.2",
        arabic: "حروف العطف",
        name: "حروف عطف",
        desc: "دو اسموں، فعلوں یا جملوں کو جوڑنے والے الفاظ۔",
        example: "وَ (اور) — فَ (پھر/پس) — ثُمَّ (پھر بعد میں) — أَوْ (یا) — بَلْ (بلکہ)",
        exampleNote: "یہ حروف الفاظ اور جملوں کو آپس میں جوڑتے ہیں۔",
        quranicEx: "وَالسَّمَاءِ وَالْأَرْضِ",
        quranicRef: "سورۃ ابراہیم (۱۴:۳۲)",
        quranicTrans: "آسمان اور زمین",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
      },
      {
        id: "2.3",
        arabic: "حروف الجر",
        name: "حروف جر",
        desc: "وہ الفاظ جو اسم کا دوسرے الفاظ سے تعلق ظاہر کرتے ہیں۔ ان کے بعد آنے والے اسم پر ہمیشہ زیر آتی ہے۔",
        example: "مِنْ (سے) — إِلَى (تک/کی طرف) — عَنْ (کے بارے میں) — عَلَى (پر) — فِي (میں) — بِ (کے ساتھ) — لِ (کے لیے) — كَ (کی طرح)",
        exampleNote: "حرف جر کے بعد آنے والے اسم پر زیر آتی ہے۔",
        quranicEx: "لِلَّهِ مَا فِي السَّمَاوَاتِ",
        quranicRef: "سورۃ البقرہ (۲:۲۸۴)",
        quranicTrans: "اللہ کے لیے ہے جو آسمانوں میں ہے",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        id: "2.4",
        arabic: "حروف النفي",
        name: "حروف نفی",
        desc: "کسی بات کی نفی یا انکار کرنے والے الفاظ۔",
        example: "لَا (نہیں) — لَمْ (نہیں کیا) — لَنْ (ہرگز نہیں کرے گا) — مَا (نہیں) — لَيْسَ (نہیں ہے)",
        exampleNote: "ہر حرف نفی فعل کو مختلف انداز سے متاثر کرتا ہے۔",
        quranicEx: "لَا إِلَهَ إِلَّا اللهُ",
        quranicRef: "کلمہ توحید",
        quranicTrans: "اللہ کے سوا کوئی معبود نہیں",
        color: "#4a1b0c",
        border: "#d85a30",
        text: "#f0997b",
      },
      {
        id: "2.5",
        arabic: "حروف الشرط",
        name: "حروف شرط",
        desc: "شرطیہ جملے بنانے والے الفاظ — اگر تو پھر۔",
        example: "إِنْ (اگر) — إِذَا (جب/اگر) — مَنْ (جو کوئی) — مَا (جو کچھ) — مَتَى (جب کبھی)",
        exampleNote: "حروف شرط کے ساتھ دو فعل چاہییں — شرط اور اس کا نتیجہ۔",
        quranicEx: "إِنْ كُنْتُمْ تُحِبُّونَ اللهَ فَاتَّبِعُونِي",
        quranicRef: "سورۃ آل عمران (۳:۳۱)",
        quranicTrans: "اگر تم اللہ سے محبت رکھتے ہو تو میری پیروی کرو",
        color: "#0c447c",
        border: "#378add",
        text: "#b5d4f4",
      },
      {
        id: "2.6",
        arabic: "حروف الاستفهام",
        name: "حروف استفہام",
        desc: "سوال پوچھنے کے لیے استعمال ہونے والے الفاظ۔",
        example: "هَلْ (کیا — ہاں/نہیں) — أَ (کیا) — مَا (کیا) — مَنْ (کون) — أَيْنَ (کہاں) — كَيْفَ (کیسے) — لِمَاذَا (کیوں)",
        exampleNote: "هَلْ ہاں/نہیں کے سوالوں کے لیے ہے۔ أَ کسی بھی سوال میں آ سکتا ہے۔",
        quranicEx: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ",
        quranicRef: "سورۃ الغاشیہ (۸۸:۱)",
        quranicTrans: "کیا آپ کے پاس ڈھانپ لینے والے واقعے کی خبر آئی؟",
        color: "#3c3489",
        border: "#7f77dd",
        text: "#cecbf6",
      },
      {
        id: "2.7",
        arabic: "حروف التوكيد",
        name: "حروف توکید",
        desc: "بات میں زور اور یقین بڑھانے والے الفاظ۔",
        example: "إِنَّ (بے شک/یقیناً) — أَنَّ (کہ/بے شک) — لَ (تاکیدی لام) — قَدْ (یقیناً/پہلے سے)",
        exampleNote: "إِنَّ قرآن میں سب سے زیادہ آنے والے الفاظ میں سے ہے۔",
        quranicEx: "إِنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        quranicRef: "سورۃ البقرہ (۲:۲۰)",
        quranicTrans: "بے شک اللہ ہر چیز پر قادر ہے",
        color: "#085041",
        border: "#1d9e75",
        text: "#9fe1cb",
      },
      {
        id: "2.8",
        arabic: "حروف الاستثناء",
        name: "حروف استثناء",
        desc: "استثناء بیان کرنے والے الفاظ — سب سوائے اس کے۔",
        example: "إِلَّا (سوائے/مگر) — غَيْرَ (کے علاوہ) — سِوَى (کے سوا)",
        exampleNote: "إِلَّا قرآن میں سب سے عام استثناء کا حرف ہے۔",
        quranicEx: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
        quranicRef: "سورۃ الذاریات (۵۱:۵۶)",
        quranicTrans: "میں نے جن اور انسان کو صرف اپنی عبادت کے لیے پیدا کیا",
        color: "#633806",
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        id: "2.9",
        arabic: "حروف التنفيس",
        name: "حروف تنفیس",
        desc: "مضارع فعل سے پہلے لگ کر مستقبل کا معنی دینے والے چھوٹے حروف۔",
        example: "سَ (عنقریب) — سَوْفَ (آئندہ/مستقبل میں)",
        exampleNote: "سَ قریبی مستقبل کے لیے ہے۔ سَوْفَ دور کے مستقبل کے لیے۔",
        quranicEx: "سَيَقُولُ السُّفَهَاءُ",
        quranicRef: "سورۃ البقرہ (۲:۱۴۲)",
        quranicTrans: "بے وقوف لوگ عنقریب کہیں گے...",
        color: "#4a1b0c",
        border: "#d85a30",
        text: "#f0997b",
      },
      {
        id: "2.10",
        arabic: "حروف النداء",
        name: "حروف ندا",
        desc: "کسی کو پکارنے یا مخاطب کرنے کے لیے استعمال ہونے والے الفاظ۔",
        example: "يَا (اے!) — أَيُّهَا (اے تم!) — أَيَّتُهَا (اے تم! — مؤنث)",
        exampleNote: "يَا سب سے عام حرف ندا ہے — اللہ، انبیاء اور لوگوں کو مخاطب کرنے کے لیے۔",
        quranicEx: "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ",
        quranicRef: "سورۃ البقرہ (۲:۲۱)",
        quranicTrans: "اے لوگو! اپنے رب کی عبادت کرو",
        color: "#0c447c",
        border: "#378add",
        text: "#b5d4f4",
      },
    ],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "حروف عربی گرامر کی بنیادی کڑی ہیں۔ اگرچہ یہ اکیلے بے معنی ہیں، لیکن یہ جملوں کے معنی کو مکمل طور پر بدل دیتے ہیں۔ حروف پر عبور قرآن کی ہر آیت سمجھنے کے لیے ضروری ہے۔",
    backHome: "← گھر واپس",
    prevLesson: "← پچھلا سبق 1",
    nextLesson: "اگلا سبق 3 →",
  },
};
function AlphabetTable({ letters, borderColor }) {
  const rows = [];
  for (let i = 0; i < letters.length; i += 7) {
    rows.push(letters.slice(i, i + 7));
  }
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "6px",
        direction: "rtl",
      }}
    >
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((item, ci) => (
              <td
                key={ci}
                style={{
                  border: `1px solid ${borderColor}`,
                  textAlign: "center",
                  padding: "10px 4px",
                  width: "14.28%",
                }}
              >
                <div className="arabic" style={{ fontSize: "22px", color: borderColor }}>
                  {item.l}
                </div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)", marginTop: "4px" }}>
                  {item.n}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DiacriticsTable({ borderColor, isUrdu }) {
  const sections = [
    {
      name: { en: "Vowels (Harakaat)", ur: "حرکات" },
      marks: [
        { symbol: "بَ", name: { en: "Zabar (a)", ur: "زبر" } },
        { symbol: "بِ", name: { en: "Zer (i)", ur: "زیر" } },
        { symbol: "بُ", name: { en: "Pesh (u)", ur: "پیش" } },
      ],
    },
    {
      name: { en: "Sukoon", ur: "سکون" },
      marks: [
        { symbol: "بْ", name: { en: "Sukoon (no vowel)", ur: "سکون" } },
      ],
    },
    {
      name: { en: "Tanween", ur: "تنوین" },
      marks: [
        { symbol: "بً", name: { en: "Tanween Zabar (an)", ur: "تنوین زبر" } },
        { symbol: "بٍ", name: { en: "Tanween Zer (in)", ur: "تنوین زیر" } },
        { symbol: "بٌ", name: { en: "Tanween Pesh (un)", ur: "تنوین پیش" } },
      ],
    },
  ];

  const lang = isUrdu ? "ur" : "en";

  return (
    <div style={{ marginTop: "24px" }}>
      <div
        className={isUrdu ? "urdu" : ""}
        style={{
          fontSize: "16px",
          fontWeight: "700",
          color: borderColor,
          marginBottom: "14px",
          textAlign: "right",
        }}
      >
       علامات — {isUrdu ? "" : "Diacritical Marks"}
      </div>

      {sections.map((section, si) => (
        <div key={si} style={{ marginBottom: "16px" }}>
          {/* Section Title */}
          <div
            className={isUrdu ? "urdu" : "arabic"}
            style={{
              fontSize: "13px",
              color: "var(--color-text-muted)",
              marginBottom: "8px",
              textAlign: "right",
            }}
          >
            {section.name[lang]}
          </div>

          {/* Marks Row */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {section.marks.map((mark, mi) => (
              <div
                key={mi}
                style={{
                  border: `1px solid ${borderColor}`,
                  borderRadius: "8px",
                  padding: "12px 16px",
                  textAlign: "center",
                  minWidth: "80px",
                }}
              >
                <div
                  className="arabic"
                  style={{
                    fontSize: "28px",
                    color: borderColor,
                    lineHeight: "2",
                  }}
                >
                  {mark.symbol}
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: borderColor,
                    margin: "4px auto 6px",
                    opacity: 0.4,
                  }}
                />
                <div
                  className={isUrdu ? "urdu" : ""}
                  style={{
                    fontSize: "10px",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {mark.name[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
function AlifHamzaSection({ borderColor, isUrdu }) {
  return (
    <div style={{ marginTop: "28px" }}>
      {/* Title */}
      <div
        className="urdu"
        style={{
          fontSize: "16px",
          fontWeight: "700",
          color: borderColor,
          marginBottom: "14px",
          textAlign: "right",
        }}
      >
        الف اور ہمزہ میں فرق
      </div>

      {/* Rule Box */}
      <div
        style={{
          backgroundColor: "var(--color-surface2)",
          borderRadius: "8px",
          padding: "14px 18px",
          marginBottom: "16px",
          borderRight: `3px solid ${borderColor}`,
          textAlign: "right",
        }}
      >
        <p className="urdu" style={{ fontSize: "14px", color: "var(--color-text)", lineHeight: "2", margin: 0 }}>
          جب الف پر تینوں حرکات (زبر، زیر، پیش) یا سکون (<span className="arabic">ْ</span>) آجائے تو وہ <strong>ہمزہ</strong> کہلاتا ہے۔
        </p>
      </div>

      {/* Alif vs Hamza comparison */}
      <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginBottom: "20px", flexWrap: "wrap" }}>
        <div style={{ border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "12px 24px", textAlign: "center", minWidth: "100px" }}>
          <div className="arabic" style={{ fontSize: "32px", color: borderColor }}>ا</div>
          <div style={{ width: "40px", height: "1px", backgroundColor: borderColor, margin: "4px auto 6px", opacity: 0.4 }} />
          <div className="urdu" style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>الف</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", color: "var(--color-text-muted)", fontSize: "20px" }}>≠</div>
        <div style={{ border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "12px 24px", textAlign: "center", minWidth: "100px" }}>
          <div className="arabic" style={{ fontSize: "32px", color: borderColor }}>اَ اِ اُ اْ</div>
          <div style={{ width: "40px", height: "1px", backgroundColor: borderColor, margin: "4px auto 6px", opacity: 0.4 }} />
          <div className="urdu" style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>ہمزہ</div>
        </div>
      </div>

      {/* Example 1: اِقْرَاْ */}
      <div style={{ marginBottom: "16px" }}>
        <div className="urdu" style={{ fontSize: "13px", color: "var(--color-text-muted)", textAlign: "right", marginBottom: "8px" }}>
          مثال ۱
        </div>
        <div style={{ border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "16px", textAlign: "center" }}>
          <div className="arabic" style={{ fontSize: "36px", color: borderColor, letterSpacing: "8px", marginBottom: "8px" }}>
            اِقْرَأْ
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", marginTop: "8px" }}>
            <div style={{ textAlign: "center" }}>
              <div className="arabic" style={{ fontSize: "24px", color: borderColor }}>أْ</div>
              <div style={{ width: "30px", height: "1px", backgroundColor: borderColor, margin: "4px auto 4px", opacity: 0.4 }} />
              <div className="urdu" style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>ہمزہ ہے</div>
            </div>
          </div>
        </div>
      </div>

      {/* Example 2: اِنْسَان */}
      <div style={{ marginBottom: "8px" }}>
        <div className="urdu" style={{ fontSize: "13px", color: "var(--color-text-muted)", textAlign: "right", marginBottom: "8px" }}>
          مثال ۲
        </div>
        <div style={{ border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "16px", textAlign: "center" }}>
          <div className="arabic" style={{ fontSize: "36px", color: borderColor, letterSpacing: "8px", marginBottom: "8px" }}>
            إِنْسَان
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", marginTop: "8px" }}>
            <div style={{ textAlign: "center" }}>
              <div className="arabic" style={{ fontSize: "24px", color: borderColor }}>ا</div>
              <div style={{ width: "30px", height: "1px", backgroundColor: borderColor, margin: "4px auto 4px", opacity: 0.4 }} />
              <div className="urdu" style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>الف ہے (سین کے بعد)</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="arabic" style={{ fontSize: "24px", color: borderColor }}>إِ</div>
              <div style={{ width: "30px", height: "1px", backgroundColor: borderColor, margin: "4px auto 4px", opacity: 0.4 }} />
              <div className="urdu" style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>ہمزہ ہے (شروع میں)</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
function ParticleCard({ type, isUrdu }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: `1px solid var(--color-border)`,
        borderRadius: "12px",
        marginBottom: "24px",
        overflow: "hidden",
      }}
    >
      {/* Card Header */}
      <div
        style={{
          backgroundColor: type.color,
          border: `1px solid ${type.border}`,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "12px",
              color: type.text,
            }}
          >
            {type.id}
          </span>
          <span
            className="arabic"
            style={{ fontSize: "20px", color: type.text, fontWeight: "500" }}
          >
            {type.arabic}
          </span>
        </div>
        <span
          className={isUrdu ? "urdu" : ""}
          style={{ fontSize: "15px", color: type.text, fontWeight: "600" }}
        >
          {type.name}
        </span>
      </div>

      {/* Card Body */}
      <div style={{ padding: "20px" }}>
        {/* Description */}
        <p
          className={isUrdu ? "urdu" : ""}
          style={{
            fontSize: "15px",
            color: "var(--color-text)",
            lineHeight: "1.8",
            marginBottom: "16px",
          }}
        >
          {type.desc}
        </p>

        {/* Examples */}
        <div
          style={{
            backgroundColor: "var(--color-surface2)",
            borderRadius: "8px",
            padding: "14px 18px",
            marginBottom: "16px",
            borderLeft: `3px solid ${type.border}`,
          }}
        >
          {Array.isArray(type.example) ? (
  <>
  <AlphabetTable letters={type.example} borderColor={type.border} />
  <div
  className={isUrdu ? "urdu" : ""}
  style={{ fontSize: "12px", color: "var(--color-text-muted)" }}
>
  💡 {type.exampleNote}
</div>
  {/* Quranic Example — moved here for card 2.1 */}
  <div
    style={{
      background: "linear-gradient(135deg, #0a1628, #0d1f3c)",
      border: "1px solid #378add",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      marginTop: "16px",
      marginBottom: "4px",
    }}
  >
    <div style={{ fontSize: "11px", color: "#85b7eb", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
      🕌 Quranic Example
    </div>
    <div className="arabic" style={{ fontSize: "24px", color: "#b5d4f4", lineHeight: "2", marginBottom: "10px" }}>
      {type.quranicEx}
    </div>
    <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "13px", color: "#85b7eb", fontStyle: isUrdu ? "normal" : "italic", marginBottom: "6px" }}>
      {type.quranicTrans}
    </div>
    <div style={{ fontSize: "11px", color: "#5a8ab8" }}>
      {type.quranicRef}
    </div>
  </div>
  <DiacriticsTable borderColor={type.border} isUrdu={isUrdu} />
  <AlifHamzaSection borderColor={type.border} isUrdu={isUrdu} />
</>
) : (
  <div
    className="arabic"
    style={{
      fontSize: "16px",
      color: type.border,
      lineHeight: "2",
      marginBottom: "6px",
      direction: "rtl",
    }}
  >
    {type.example}
  </div>
)}
         
        </div>

        {/* Quranic Example */}
        <div
          style={{
            background: "linear-gradient(135deg, #0a1628, #0d1f3c)",
            border: "1px solid #378add",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#85b7eb",
              marginBottom: "10px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            🕌 Quranic Example
          </div>
          <div
            className="arabic"
            style={{
              fontSize: "24px",
              color: "#b5d4f4",
              lineHeight: "2",
              marginBottom: "10px",
            }}
          >
            {type.quranicEx}
          </div>
          <div
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "13px",
              color: "#85b7eb",
              fontStyle: isUrdu ? "normal" : "italic",
              marginBottom: "6px",
            }}
          >
            {type.quranicTrans}
          </div>
          <div style={{ fontSize: "11px", color: "#5a8ab8" }}>
            {type.quranicRef}
          </div>
        </div>
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
  <Navbar currentLesson={2} />   {/* ← number matches the lesson */}

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

        {/* Golden Rule */}
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

        {/* Types Title */}
        <h2
          className={isUrdu ? "urdu" : ""}
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "var(--color-primary)",
            marginBottom: "24px",
            paddingBottom: "12px",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {c.typesTitle}
        </h2>

        {/* Particle Cards */}
        {c.types.map((type, i) => (
          <ParticleCard key={i} type={type} isUrdu={isUrdu} />
        ))}

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
            href="/lessons/1"
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
            {c.prevLesson}
          </Link>
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
          <Link
  href="/lessons/3"
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
  }}
>
  {c.nextLesson}
</Link>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default function Lesson2() {
  return (
    <LanguageProvider>
      <LessonContent />
    </LanguageProvider>
  );
}