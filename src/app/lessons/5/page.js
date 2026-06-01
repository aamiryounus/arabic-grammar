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

// ─────────────────────────────────────────────
//  LESSON DATA
// ─────────────────────────────────────────────
const lessonContent = {
  en: {
    title: "All Reasons for Raf' (Nominative Case)",
    arabicTitle: "أسباب الرَّفْع",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 5",
    intro:
      "In Arabic grammar, a noun (اسم) receives the Raf' (nominative) case ending — marked by a damma (ُ) or its equivalent — for specific grammatical reasons. This lesson covers every situation in which a noun is placed in Raf', supported by Quranic examples.",
    goldenRule:
      "A noun is in Raf' whenever it plays the role of subject, predicate, doer, substitute doer, or appears after certain particles. Its sign is the damma (ُ) — a small curl placed above the final letter.",
    reasonsTitle: "The Reasons for Raf'",
    reasons: [
      {
        id: "5.1",
        term: "الفَاعِل",
        name: "Al-Fā'il — The Doer (Subject of a Verb)",
        definition:
          "The Fā'il is the noun that performs the action of the verb. It always follows the verb and is always in Raf'. It answers: 'Who did the action?'",
        quranicArabic: "يَعْلَمُ اللهُ",
        quranicRef: "Surah Al-Baqarah (2:235)",
        quranicTrans: "Allah knows.",
        rafSign: "اللهُ — damma on ه",
        rafRole: "Fā'il (Doer)",
        note:
          "اللهُ is the Fā'il of the verb يَعْلَمُ. Because it is the doer of the verb, it receives the damma and is in Raf'.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "5.2",
        term: "نَائِبُ الفَاعِل",
        name: "Nā'ib Al-Fā'il — The Substitute Doer",
        definition:
          "When a verb is in the passive voice, the object of the active sentence is promoted to become the grammatical subject of the passive verb. This is called Nā'ib Al-Fā'il (substitute doer) and it is always in Raf'.",
        quranicArabic: "خُلِقَ الْإِنسَانُ ضَعِيفًا",
        quranicRef: "Surah An-Nisa (4:28)",
        quranicTrans: "Man was created weak.",
        rafSign: "الْإِنسَانُ — damma on ن",
        rafRole: "Nā'ib Al-Fā'il",
        note:
          "خُلِقَ is a passive verb (was created). الْإِنسَانُ is the substitute doer — it takes the Raf' case because the real doer (Allah) is not mentioned.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "5.3",
        term: "المُبْتَدَأ",
        name: "Al-Mubtada' — The Subject of a Nominal Sentence",
        definition:
          "The Mubtada' is the topic noun at the beginning of a nominal sentence (جملہ اسمیہ). It is always in Raf' and is what the sentence is about.",
        quranicArabic: "اللهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
        quranicRef: "Surah An-Nur (24:35)",
        quranicTrans: "Allah is the Light of the heavens and the earth.",
        rafSign: "اللهُ — damma on ه",
        rafRole: "Mubtada'",
        note:
          "اللهُ is the opening noun of the sentence — the Mubtada'. It is in Raf' as it is the topic being described.",
        color: LEVEL_DARK,
        border: "#5dcaa5",
        text: "#9fe1cb",
      },
      {
        id: "5.4",
        term: "الخَبَر",
        name: "Al-Khabar — The Predicate",
        definition:
          "The Khabar is what is said about the Mubtada'. Together they form a complete nominal sentence. The Khabar is always in Raf'.",
        quranicArabic: "اللهُ الصَّمَدُ",
        quranicRef: "Surah Al-Ikhlas (112:2)",
        quranicTrans: "Allah is the Eternal Refuge.",
        rafSign: "الصَّمَدُ — damma on د",
        rafRole: "Khabar",
        note:
          "الصَّمَدُ is the predicate (Khabar) describing اللهُ. Both are in Raf' — the Mubtada' and the Khabar always match in case.",
        color: LEVEL_DARK,
        border: "#5dcaa5",
        text: "#9fe1cb",
      },
      {
        id: "5.5",
        term: "اسمُ كَانَ وَأَخَوَاتِهَا",
        name: "Ism Kāna — Subject of Kāna and its Sisters",
        definition:
          "Kāna (كَانَ) and its sisters (كَانَ، أَصْبَحَ، أَمْسَى، ظَلَّ، بَاتَ، صَارَ، لَيْسَ، etc.) are deficient verbs that enter upon a nominal sentence. Their subject (Ism) remains in Raf', while their predicate (Khabar) shifts to Nasb.",
        quranicArabic: "وَكَانَ اللهُ عَلِيمًا حَكِيمًا",
        quranicRef: "Surah An-Nisa (4:17)",
        quranicTrans: "And Allah is ever All-Knowing, All-Wise.",
        rafSign: "اللهُ — damma on ه",
        rafRole: "Ism Kāna",
        note:
          "كَانَ entered the nominal sentence. اللهُ is its Ism and remains in Raf'. عَلِيمًا is the Khabar and has shifted to Nasb (tanween fatha).",
        color: LEVEL_DARK,
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        id: "5.6",
        term: "خَبَرُ إِنَّ وَأَخَوَاتِهَا",
        name: "Khabar Inna — Predicate of Inna and its Sisters",
        definition:
          "Inna (إِنَّ) and its sisters (إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ) enter upon a nominal sentence and reverse the case endings: their subject (Ism) shifts to Nasb, while their predicate (Khabar) remains in Raf'.",
        quranicArabic: "إِنَّ اللهَ غَفُورٌ رَّحِيمٌ",
        quranicRef: "Surah Al-Baqarah (2:173)",
        quranicTrans: "Indeed, Allah is Forgiving and Merciful.",
        rafSign: "غَفُورٌ رَّحِيمٌ — tanween damma",
        rafRole: "Khabar Inna",
        note:
          "إِنَّ entered the sentence. اللهَ (Ism of Inna) now has fatha — Nasb. But غَفُورٌ رَّحِيمٌ (Khabar) retains tanween damma — Raf'.",
        color: LEVEL_DARK,
        border: "#d85a30",
        text: "#f0997b",
      },
      {
        id: "5.7",
        term: "التَّابِع — البَدَل",
        name: "Al-Badal — The Substitute",
        definition:
          "A Badal is a noun that follows another noun (its Mubdal Minh) and clarifies or substitutes it. The Badal always matches the case of the noun it follows. If the preceding noun is in Raf', the Badal is also in Raf'.",
        quranicArabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
        quranicRef: "Surah Al-Fatiha (1:6-7)",
        quranicTrans: "Guide us to the straight path — the path of those whom You have blessed.",
        rafSign: "Example where Badal follows a Marfu' noun",
        rafRole: "Badal in Raf'",
        note:
          "When a Badal follows a noun in Raf', it too is in Raf'. This rule of إتباع (following) ensures grammatical harmony throughout the sentence.",
        color: LEVEL_DARK,
        border: "#7f77dd",
        text: "#cecbf6",
      },
      {
        id: "5.8",
        term: "التَّابِع — النَّعْت",
        name: "Al-Na't — The Adjective",
        definition:
          "An adjective (Na't/Sifa) always follows its noun (Man'ut) in case, gender, number, and definiteness. When the noun it describes is in Raf', the Na't is also in Raf'.",
        quranicArabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        quranicRef: "Surah Al-Fatiha (1:2)",
        quranicTrans: "All praise is due to Allah, Lord of all the worlds.",
        rafSign: "الْحَمْدُ — damma on د",
        rafRole: "Mubtada' in Raf' (Na't example below)",
        note:
          "الْحَمْدُ is the Mubtada' in Raf'. Any adjective describing a Marfu' noun must also carry the damma, agreeing with it in case.",
        color: LEVEL_DARK,
        border: "#7f77dd",
        text: "#cecbf6",
      },
      {
        id: "5.9",
        term: "التَّابِع — التَّوْكِيد",
        name: "Al-Tawkid — The Emphatic Noun",
        definition:
          "Tawkid (emphasis) is when a noun or its synonyms (نَفْسُ، عَيْنُ، كُلُّ، جَمِيعُ) are repeated to emphasise the preceding noun. The Tawkid always matches the case of the noun it emphasises.",
        quranicArabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
        quranicRef: "Surah Al-Hijr (15:30)",
        quranicTrans: "So the angels prostrated — all of them together.",
        rafSign: "كُلُّهُمْ — damma on ل",
        rafRole: "Tawkid in Raf'",
        note:
          "الْمَلَائِكَةُ is the Fā'il in Raf'. كُلُّهُمْ and أَجْمَعُونَ are Tawkid (emphatic nouns) that follow it — both in Raf' to agree with their antecedent.",
        color: LEVEL_DARK,
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        id: "5.10",
        term: "التَّابِع — العَطْف",
        name: "Al-'Atf — The Conjoined Noun",
        definition:
          "When two nouns are joined by a conjunction (حرف عطف) such as وَ (and), فَ (then), or ثُمَّ (then), the second noun (Ma'tuf) matches the case of the first (Ma'tuf 'Alayh). If the first is in Raf', the second is also in Raf'.",
        quranicArabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللهِ",
        quranicRef: "Surah Al-Baqarah (2:158)",
        quranicTrans: "Indeed, As-Safa and Al-Marwa are among the symbols of Allah.",
        rafSign: "الصَّفَا — Mubtada' (Raf'), الْمَرْوَةَ — Ma'tuf following in case",
        rafRole: "'Atf in Raf'",
        note:
          "الصَّفَا is the Ism of Inna (here Nasb, showing how 'Atf follows). When the first conjoined noun is Marfu', the second must also be Marfu'. This rule of following (إتباع) ensures case consistency.",
        color: LEVEL_DARK,
        border: "#d85a30",
        text: "#f0997b",
      },
      {
        id: "5.11",
        term: "اسمُ مَا الحِجَازِيَّة",
        name: "Ism Mā Hijāziyya — Subject of Mā (Hijazi usage)",
        definition:
          "When مَا is used in the Hijazi style (functioning like لَيْسَ — 'is not'), it enters a nominal sentence. Its subject (Ism) remains in Raf', while its predicate (Khabar) shifts to Nasb. This usage appears in the Quran and classical Arabic.",
        quranicArabic: "مَا هَٰذَا بَشَرًا",
        quranicRef: "Surah Yusuf (12:31)",
        quranicTrans: "This is not a human being.",
        rafSign: "هَٰذَا — Ism of Mā, in Raf'",
        rafRole: "Ism Mā Hijāziyya",
        note:
          "مَا here functions like لَيْسَ (is not). هَٰذَا is its Ism and stays in Raf'. بَشَرًا is the Khabar shifted to Nasb (fatha). This is the Hijazi usage — as opposed to the Tamimi usage where مَا has no grammatical effect on the following words.",
        color: LEVEL_DARK,
        border: "#5dcaa5",
        text: "#9fe1cb",
      },
      {
        id: "5.12",
        term: "خَبَرُ لَا النَّافِيَة لِلْجِنْس",
        name: "Khabar Lā — Predicate of Lā Nāfiya lil-Jins",
        definition:
          "لَا النافية للجنس (Lā that negates the entire category/genus) puts its Ism in Nasb without tanween, but its predicate (Khabar) remains in Raf'. It mirrors the structure of Inna — but for complete negation.",
        quranicArabic: "لَا رَيْبَ ۛ فِيهِ",
        quranicRef: "Surah Al-Baqarah (2:2)",
        quranicTrans: "There is absolutely no doubt in it.",
        rafSign: "فِيهِ — Khabar of Lā, in Raf'",
        rafRole: "Khabar Lā Nāfiya lil-Jins",
        note:
          "لَا negated the entire category of doubt. رَيْبَ is the Ism of لَا — in Nasb (no tanween, fatha). فِيهِ is a Jār-Majrur phrase serving as the Khabar — it is in Raf'. This structure is extremely frequent in the Quran.",
        color: LEVEL_DARK,
        border: "#5dcaa5",
        text: "#9fe1cb",
      },
    ],
    summaryTitle: "Summary Table — All Reasons for Raf'",
    summaryHeaders: ["#", "Grammar Term", "Definition", "Quranic Example", "Raf' Sign / Noun", "Translation"],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "A noun receives Raf' in twelve main scenarios: as Fā'il, Nā'ib Al-Fā'il, Mubtada', Khabar, Ism Kāna, Khabar Inna, Ism Mā Hijāziyya, Khabar Lā Nāfiya lil-Jins, and as any of the four Tawabi' (Badal, Na't, Tawkid, 'Atf) following a Marfu' noun. The mark of Raf' is the damma (ُ) or its equivalent — tanween damma (ٌ) for indefinite nouns, and waw (و) for masculine sound plurals.",
    backHome: "← Back to Home",
    prevLesson: "← Lesson 4",
    nextLesson: "Lesson 6 →",
  },

  ur: {
    title: "اسم کے رفع ہونے کی تمام وجوہات",
    arabicTitle: "أسباب الرَّفْع",
    level: "لیول 2 — اعراب",
    lessonNumber: "سبق 5",
    intro:
      "عربی گرامر میں اسم پر رفع (پیش) اس وقت آتا ہے جب وہ کسی خاص گرامری کردار میں ہو۔ یہ سبق ان تمام وجوہات کا احاطہ کرتا ہے جن کی بنا پر اسم مرفوع ہوتا ہے — ہر وجہ کی قرآنی مثال کے ساتھ۔",
    goldenRule:
      "اسم رفع میں ہوتا ہے جب وہ فاعل، نائب فاعل، مبتدا، خبر، اسم کان، خبر إن، یا کسی مرفوع اسم کا تابع ہو۔ رفع کی علامت پیش (ُ) ہے۔",
    reasonsTitle: "رفع کی وجوہات",
    reasons: [
      {
        id: "5.1",
        term: "الفَاعِل",
        name: "فاعل — فعل کا کرنے والا",
        definition:
          "فاعل وہ اسم ہے جو فعل کا کام کرے۔ یہ ہمیشہ فعل کے بعد آتا ہے اور ہمیشہ رفع میں ہوتا ہے۔ سوال: کام کس نے کیا؟",
        quranicArabic: "يَعْلَمُ اللهُ",
        quranicRef: "سورۃ البقرہ (۲:۲۳۵)",
        quranicTrans: "اللہ جانتا ہے۔",
        rafSign: "اللهُ — ہ پر پیش",
        rafRole: "فاعل",
        note:
          "اللهُ فعل يَعْلَمُ کا فاعل ہے۔ چونکہ یہ فعل کرنے والا ہے، اس پر پیش ہے اور یہ رفع میں ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "5.2",
        term: "نَائِبُ الفَاعِل",
        name: "نائب فاعل — قائم مقام فاعل",
        definition:
          "جب فعل مجہول (passive) ہو تو اصل فاعل کی جگہ مفعول کو رفع دی جاتی ہے — اسے نائب فاعل کہتے ہیں۔ یہ ہمیشہ رفع میں ہوتا ہے۔",
        quranicArabic: "خُلِقَ الْإِنسَانُ ضَعِيفًا",
        quranicRef: "سورۃ النساء (۴:۲۸)",
        quranicTrans: "انسان کو کمزور بنایا گیا۔",
        rafSign: "الْإِنسَانُ — ن پر پیش",
        rafRole: "نائب فاعل",
        note:
          "خُلِقَ فعل مجہول ہے (بنایا گیا)۔ الْإِنسَانُ نائب فاعل ہے — اصل فاعل (اللہ) مذکور نہیں، اس لیے انسان کو رفع ملی۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "5.3",
        term: "المُبْتَدَأ",
        name: "مبتدا — جملہ اسمیہ کا موضوع",
        definition:
          "مبتدا جملہ اسمیہ کا پہلا اسم ہے جس کے بارے میں کچھ بتایا جاتا ہے۔ یہ ہمیشہ رفع میں ہوتا ہے۔",
        quranicArabic: "اللهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
        quranicRef: "سورۃ النور (۲۴:۳۵)",
        quranicTrans: "اللہ آسمانوں اور زمین کا نور ہے۔",
        rafSign: "اللهُ — ہ پر پیش",
        rafRole: "مبتدا",
        note:
          "اللهُ جملے کا مبتدا ہے — جس کے بارے میں بتایا جا رہا ہے۔ یہ رفع میں ہے اس لیے اس پر پیش ہے۔",
        color: LEVEL_DARK,
        border: "#5dcaa5",
        text: "#9fe1cb",
      },
      {
        id: "5.4",
        term: "الخَبَر",
        name: "خبر — مبتدا کی خبر",
        definition:
          "خبر وہ حصہ ہے جو مبتدا کے بارے میں بتایا جائے۔ مبتدا اور خبر مل کر جملہ اسمیہ بناتے ہیں۔ خبر ہمیشہ رفع میں ہوتا ہے۔",
        quranicArabic: "اللهُ الصَّمَدُ",
        quranicRef: "سورۃ الاخلاص (۱۱۲:۲)",
        quranicTrans: "اللہ بے نیاز ہے۔",
        rafSign: "الصَّمَدُ — د پر پیش",
        rafRole: "خبر",
        note:
          "الصَّمَدُ خبر ہے — اللهُ کے بارے میں بتا رہا ہے۔ مبتدا اور خبر دونوں پر پیش ہے۔",
        color: LEVEL_DARK,
        border: "#5dcaa5",
        text: "#9fe1cb",
      },
      {
        id: "5.5",
        term: "اسمُ كَانَ وَأَخَوَاتِهَا",
        name: "اسم کان — کان اور اس کی بہنوں کا اسم",
        definition:
          "کان اور اس کی بہنیں (كَانَ، أَصْبَحَ، أَمْسَى، صَارَ، لَيْسَ وغیرہ) جملہ اسمیہ میں داخل ہوتی ہیں۔ ان کا اسم رفع میں رہتا ہے لیکن خبر نصب میں چلی جاتی ہے۔",
        quranicArabic: "وَكَانَ اللهُ عَلِيمًا حَكِيمًا",
        quranicRef: "سورۃ النساء (۴:۱۷)",
        quranicTrans: "اور اللہ ہمیشہ سے جاننے والا، حکمت والا ہے۔",
        rafSign: "اللهُ — ہ پر پیش",
        rafRole: "اسم کان",
        note:
          "كَانَ نے جملہ اسمیہ میں داخل ہو کر اللهُ کو اپنا اسم بنایا — جو رفع میں رہا۔ عَلِيمًا خبر ہے جو نصب میں چلی گئی (تنوین زبر)۔",
        color: LEVEL_DARK,
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        id: "5.6",
        term: "خَبَرُ إِنَّ وَأَخَوَاتِهَا",
        name: "خبر إن — إن اور اس کی بہنوں کی خبر",
        definition:
          "إن اور اس کی بہنیں (إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ) جملہ اسمیہ میں داخل ہو کر اسم کو نصب دیتی ہیں، لیکن خبر رفع میں رہتی ہے۔",
        quranicArabic: "إِنَّ اللهَ غَفُورٌ رَّحِيمٌ",
        quranicRef: "سورۃ البقرہ (۲:۱۷۳)",
        quranicTrans: "بے شک اللہ بخشنے والا، مہربان ہے۔",
        rafSign: "غَفُورٌ رَّحِيمٌ — تنوین پیش",
        rafRole: "خبر إن",
        note:
          "إِنَّ نے اللهَ کو نصب دی (زبر آگئی)۔ لیکن خبر غَفُورٌ رَّحِيمٌ رفع میں رہی — تنوین پیش کے ساتھ۔",
        color: LEVEL_DARK,
        border: "#d85a30",
        text: "#f0997b",
      },
      {
        id: "5.7",
        term: "التَّابِع — البَدَل",
        name: "بدل — قائم مقام اسم",
        definition:
          "بدل وہ اسم ہے جو کسی اور اسم (مبدل منہ) کے بعد آ کر اسے واضح یا تبدیل کرے۔ بدل اپنے مبدل منہ کی اعراب کی پیروی کرتا ہے — اگر مبدل منہ رفع میں ہو تو بدل بھی رفع میں ہوگا۔",
        quranicArabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
        quranicRef: "سورۃ الحجر (۱۵:۳۰)",
        quranicTrans: "تو فرشتوں نے سجدہ کیا — سب کے سب اکٹھے۔",
        rafSign: "مثال جہاں بدل مرفوع اسم کی پیروی کرے",
        rafRole: "بدل — رفع میں",
        note:
          "جب بدل کسی مرفوع اسم کی جگہ یا اس کے بعد آئے تو وہ بھی رفع میں ہوگا — اتباع کے اصول کی بنا پر۔",
        color: LEVEL_DARK,
        border: "#7f77dd",
        text: "#cecbf6",
      },
      {
        id: "5.8",
        term: "التَّابِع — النَّعْت",
        name: "نعت — صفت",
        definition:
          "نعت (صفت) ہمیشہ اپنے منعوت (موصوف اسم) کی اعراب، جنس، عدد اور معرفت میں پیروی کرتا ہے۔ جب منعوت رفع میں ہو تو نعت بھی رفع میں ہوگا۔",
        quranicArabic: "وَإِلَهُكُمْ إِلَهٌ وَاحِدٌ",
        quranicRef: "سورۃ البقرہ (۲:۱۶۳)",
        quranicTrans: "اور تمہارا معبود ایک ہی معبود ہے۔",
        rafSign: "إِلَهٌ وَاحِدٌ — دونوں پر تنوین پیش",
        rafRole: "نعت — رفع میں",
        note:
          "إِلَهٌ خبر ہے — رفع میں۔ وَاحِدٌ اس کی نعت (صفت) ہے — لہذا وہ بھی رفع میں ہے، تنوین پیش کے ساتھ۔",
        color: LEVEL_DARK,
        border: "#7f77dd",
        text: "#cecbf6",
      },
      {
        id: "5.9",
        term: "التَّابِع — التَّوْكِيد",
        name: "توکید — زور دینے والا اسم",
        definition:
          "توکید وہ اسم یا لفظ ہے جو کسی اسم کے بعد آ کر اسے مزید یقینی بنائے (جیسے نَفْسُ، عَيْنُ، كُلُّ، جَمِيعُ)۔ توکید اپنے مؤکَّد کی اعراب کی پیروی کرتا ہے۔",
        quranicArabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
        quranicRef: "سورۃ الحجر (۱۵:۳۰)",
        quranicTrans: "تو فرشتوں نے سجدہ کیا — سب کے سب اکٹھے۔",
        rafSign: "كُلُّهُمْ — ل پر پیش",
        rafRole: "توکید — رفع میں",
        note:
          "الْمَلَائِكَةُ فاعل ہے — رفع میں۔ كُلُّهُمْ اور أَجْمَعُونَ توکید ہیں جو اس کی پیروی کرتے ہیں — دونوں رفع میں۔",
        color: LEVEL_DARK,
        border: "#ef9f27",
        text: "#fac775",
      },
      {
        id: "5.10",
        term: "التَّابِع — العَطْف",
        name: "عطف — ملانے والا اسم",
        definition:
          "جب دو اسم حرف عطف (وَ، فَ، ثُمَّ وغیرہ) سے جڑے ہوں تو دوسرا اسم (معطوف) پہلے اسم (معطوف علیہ) کی اعراب کی پیروی کرتا ہے۔ اگر پہلا رفع میں ہو تو دوسرا بھی رفع میں ہوگا۔",
        quranicArabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللهَ وَكُونُوا مَعَ الصَّادِقِينَ",
        quranicRef: "سورۃ التوبہ (۹:۱۱۹)",
        quranicTrans: "اے ایمان والو! اللہ سے ڈرو اور سچوں کے ساتھ ہو جاؤ۔",
        rafSign: "عطف کا اصول — پہلے کی اعراب کی پیروی",
        rafRole: "عطف — رفع میں",
        note:
          "جب پہلا اسم رفع میں ہو اور حرف عطف (وَ، فَ، ثُمَّ) آئے تو اس کے بعد آنے والا اسم بھی لازماً رفع میں ہوگا — اتباع کے اصول کی بنا پر۔",
        color: LEVEL_DARK,
        border: "#d85a30",
        text: "#f0997b",
      },
      {
        id: "5.11",
        term: "اسمُ مَا الحِجَازِيَّة",
        name: "اسمِ ما حجازیہ — ما کا اسم (حجازی استعمال)",
        definition:
          "جب مَا کو حجازی طرز پر لَيْسَ کی طرح استعمال کیا جائے (یعنی 'نہیں ہے' کے معنی میں) تو یہ جملہ اسمیہ میں داخل ہوتا ہے۔ اس کا اسم رفع میں رہتا ہے جبکہ خبر نصب میں چلی جاتی ہے۔ یہ استعمال قرآن اور کلاسیکی عربی میں ملتا ہے۔",
        quranicArabic: "مَا هَٰذَا بَشَرًا",
        quranicRef: "سورۃ یوسف (۱۲:۳۱)",
        quranicTrans: "یہ کوئی انسان نہیں ہے۔",
        rafSign: "هَٰذَا — اسمِ ما، رفع میں",
        rafRole: "اسمِ ما حجازیہ",
        note:
          "یہاں مَا لَيْسَ کی طرح کام کر رہا ہے (نہیں ہے)۔ هَٰذَا اس کا اسم ہے اور رفع میں رہتا ہے۔ بَشَرًا خبر ہے جو نصب میں چلی گئی (زبر)۔ یہ حجازی استعمال ہے — تمیمی استعمال میں مَا کا کوئی گرامری اثر نہیں ہوتا۔",
        color: LEVEL_DARK,
        border: "#5dcaa5",
        text: "#9fe1cb",
      },
      {
        id: "5.12",
        term: "خَبَرُ لَا النَّافِيَة لِلْجِنْس",
        name: "خبرِ لا نفی جنس — لا نافیہ للجنس کی خبر",
        definition:
          "لا نافیہ للجنس (وہ لا جو پوری جنس کی نفی کرے) اپنے اسم کو بغیر تنوین کے نصب دیتی ہے، لیکن اس کی خبر رفع میں رہتی ہے۔ یہ إن کے عکس جیسی ساخت ہے — مگر مکمل نفی کے لیے۔",
        quranicArabic: "لَا رَيْبَ ۛ فِيهِ",
        quranicRef: "سورۃ البقرہ (۲:۲)",
        quranicTrans: "اس میں کوئی شک نہیں۔",
        rafSign: "فِيهِ — خبرِ لا، رفع میں",
        rafRole: "خبرِ لا نفی جنس",
        note:
          "لا نے شک کی پوری جنس کی نفی کی۔ رَيْبَ اسمِ لا ہے — نصب میں (بغیر تنوین، زبر کے ساتھ)۔ فِيهِ جار مجرور ہے جو خبر کا کام کر رہا ہے — یہ رفع میں ہے۔ یہ ساخت قرآن میں بہت زیادہ آتی ہے۔",
        color: LEVEL_DARK,
        border: "#5dcaa5",
        text: "#9fe1cb",
      },
    ],
    summaryTitle: "خلاصہ جدول — رفع کی تمام وجوہات",
    summaryHeaders: ["نمبر", "گرامر اصطلاح", "تعریف", "قرآنی مثال", "رفع کی علامت / اسم", "ترجمہ"],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "اسم بارہ بنیادی مواقع میں رفع پاتا ہے: فاعل، نائب فاعل، مبتدا، خبر، اسم کان، خبر إن، اسمِ ما حجازیہ، خبرِ لا نفی جنس، اور چار توابع (بدل، نعت، توکید، عطف) کے طور پر جب وہ کسی مرفوع اسم کی پیروی کریں۔ رفع کی علامت پیش (ُ) یا تنوین پیش (ٌ) ہے — اور جمع مذکر سالم میں واو (و)۔",
    backHome: "← گھر واپس",
    prevLesson: "← پچھلا سبق 4",
    nextLesson: "اگلا سبق 6 →",
  },
};

// ─────────────────────────────────────────────
//  REASON CARD COMPONENT
// ─────────────────────────────────────────────
function ReasonCard({ reason, isUrdu }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "14px",
        marginBottom: "28px",
        overflow: "hidden",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          backgroundColor: reason.color,
          borderBottom: `1px solid ${reason.border}`,
          padding: "16px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span
            style={{
              backgroundColor: "rgba(0,0,0,0.25)",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "12px",
              color: reason.text,
              fontFamily: "monospace",
            }}
          >
            {reason.id}
          </span>
          <span
            className="arabic"
            style={{ fontSize: "20px", color: reason.text, fontWeight: "600" }}
          >
            {reason.term}
          </span>
        </div>
        <span
          className={isUrdu ? "urdu" : ""}
          style={{ fontSize: "15px", color: reason.text, fontWeight: "700", direction: isUrdu ? "rtl" : "ltr" }}
        >
          {reason.name}
        </span>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: "22px" }}>
        {/* Definition */}
        <p
          className={isUrdu ? "urdu" : ""}
          style={{
            fontSize: "15px",
            color: "var(--color-text)",
            lineHeight: "1.9",
            marginBottom: "18px",
            direction: isUrdu ? "rtl" : "ltr",
            textAlign: isUrdu ? "right" : "left",
          }}
        >
          {reason.definition}
        </p>

        {/* Role badge */}
        <div style={{ display: "flex", justifyContent: isUrdu ? "flex-end" : "flex-start", marginBottom: "18px" }}>
          <span
            style={{
              backgroundColor: reason.color,
              border: `1px solid ${reason.border}`,
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "12px",
              color: reason.text,
              fontWeight: "600",
            }}
          >
            {isUrdu ? "گرامری کردار: " : "Grammatical Role: "}
            <span className={isUrdu ? "urdu" : "arabic"} style={{ marginRight: isUrdu ? "4px" : "0", marginLeft: isUrdu ? "0" : "4px" }}>
              {reason.rafRole}
            </span>
          </span>
        </div>

        {/* Quranic example */}
        <div
          style={{
            background: "linear-gradient(135deg, #030e1f, #050f21)",
            border: `1px solid ${reason.border}`,
            borderRadius: "12px",
            padding: "22px",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: reason.text,
              opacity: 0.7,
              marginBottom: "12px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            🕌 {isUrdu ? "قرآنی مثال" : "Quranic Example"}
          </div>
          <div
            className="arabic"
            style={{
              fontSize: "26px",
              color: reason.text,
              lineHeight: "2.2",
              marginBottom: "12px",
            }}
          >
            {reason.quranicArabic}
          </div>
          <div
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "14px",
              color: reason.text,
              opacity: 0.8,
              fontStyle: isUrdu ? "normal" : "italic",
              marginBottom: "8px",
              direction: isUrdu ? "rtl" : "ltr",
            }}
          >
            {reason.quranicTrans}
          </div>
          <div style={{ fontSize: "11px", color: reason.border, opacity: 0.9 }}>
            {reason.quranicRef}
          </div>
        </div>

        {/* Raf' sign highlight */}
        <div
          style={{
            backgroundColor: "var(--color-surface2)",
            borderRadius: "8px",
            padding: "10px 16px",
            marginBottom: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexDirection: isUrdu ? "row-reverse" : "row",
          }}
        >
          <span
            style={{
              backgroundColor: reason.border,
              color: "#000",
              borderRadius: "4px",
              padding: "2px 8px",
              fontSize: "11px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            {isUrdu ? "علامت رفع" : "Raf' Mark"}
          </span>
          <span
            className="arabic"
            style={{ fontSize: "14px", color: reason.border }}
          >
            {reason.rafSign}
          </span>
        </div>

        {/* Note */}
        <div
          style={{
            backgroundColor: "var(--color-surface2)",
            borderLeft: isUrdu ? "none" : `3px solid ${reason.border}`,
            borderRight: isUrdu ? `3px solid ${reason.border}` : "none",
            borderRadius: "8px",
            padding: "14px 18px",
          }}
        >
          <p
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "14px",
              color: "var(--color-text-muted)",
              lineHeight: "1.8",
              margin: 0,
              direction: isUrdu ? "rtl" : "ltr",
              textAlign: isUrdu ? "right" : "left",
            }}
          >
            💡 {reason.note}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  SUMMARY TABLE COMPONENT
// ─────────────────────────────────────────────
function SummaryTable({ c, isUrdu }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "14px",
        padding: "28px",
        marginBottom: "32px",
        overflowX: "auto",
      }}
    >
      <h2
        className={isUrdu ? "urdu" : ""}
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: LEVEL_BORDER,
          marginBottom: "20px",
          direction: isUrdu ? "rtl" : "ltr",
        }}
      >
        📋 {c.summaryTitle}
      </h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13px",
          direction: isUrdu ? "rtl" : "ltr",
        }}
      >
        <thead>
          <tr>
            {c.summaryHeaders.map((h, i) => (
              <th
                key={i}
                className={isUrdu ? "urdu" : ""}
                style={{
                  backgroundColor: LEVEL_DARK,
                  color: LEVEL_TEXT,
                  padding: "12px 14px",
                  textAlign: isUrdu ? "right" : "left",
                  fontWeight: "700",
                  fontSize: "12px",
                  border: `1px solid ${LEVEL_BORDER}`,
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.reasons.map((r, i) => (
            <tr
              key={i}
              style={{
                backgroundColor: i % 2 === 0 ? "var(--color-surface2)" : "var(--color-surface)",
              }}
            >
              {/* # */}
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", color: LEVEL_BORDER, fontWeight: "700", textAlign: "center" }}>
                {r.id}
              </td>
              {/* Grammar Term */}
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)" }}>
                <div className="arabic" style={{ fontSize: "16px", color: r.border, marginBottom: "2px" }}>{r.term}</div>
                <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{r.name}</div>
              </td>
              {/* Definition */}
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", maxWidth: "200px" }}>
                <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "12px", color: "var(--color-text-muted)", margin: 0, lineHeight: "1.6", direction: isUrdu ? "rtl" : "ltr" }}>
                  {r.definition.length > 100 ? r.definition.slice(0, 100) + "…" : r.definition}
                </p>
              </td>
              {/* Quranic Example */}
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", textAlign: "center" }}>
                <div className="arabic" style={{ fontSize: "16px", color: r.text, backgroundColor: r.color, borderRadius: "6px", padding: "6px 10px", display: "inline-block", border: `1px solid ${r.border}` }}>
                  {r.quranicArabic}
                </div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)", marginTop: "4px" }}>{r.quranicRef}</div>
              </td>
              {/* Raf' Sign */}
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)" }}>
                <span className="arabic" style={{ fontSize: "13px", color: r.border }}>{r.rafSign}</span>
              </td>
              {/* Translation */}
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)" }}>
                <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "12px", color: "var(--color-text-muted)", margin: 0, fontStyle: isUrdu ? "normal" : "italic", direction: isUrdu ? "rtl" : "ltr" }}>
                  {r.quranicTrans}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────
//  MAIN LESSON COMPONENT
// ─────────────────────────────────────────────
function LessonContent() {
  const { language } = useLanguage();
  const isUrdu = language === "ur";
  const c = lessonContent[language];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
      <Navbar currentLesson={5} />

      <div
        className="animate-fadeInUp"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}
      >
        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", fontSize: "14px", color: "var(--color-text-muted)" }}>
          <Link href="/" style={{ color: LEVEL_BORDER, textDecoration: "none" }}>
            Home
          </Link>
          {" → "}
          <span>{c.level}</span>
          {" → "}
          <span>{c.lessonNumber}</span>
        </div>

        {/* ── Lesson Header ── */}
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
          <h1
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "8px",
              direction: isUrdu ? "rtl" : "ltr",
            }}
          >
            {c.title}
          </h1>
          <div
            className="arabic"
            style={{ fontSize: "22px", color: LEVEL_BORDER, marginBottom: "18px" }}
          >
            {c.arabicTitle}
          </div>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "16px",
              color: "var(--color-text-muted)",
              lineHeight: "1.9",
              direction: isUrdu ? "rtl" : "ltr",
            }}
          >
            {c.intro}
          </p>
        </div>

        {/* ── Golden Rule ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #021829, #031e38)",
            border: `1px solid ${LEVEL_BORDER}`,
            borderRadius: "12px",
            padding: "24px 32px",
            marginBottom: "36px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "22px", marginBottom: "12px" }}>⭐</div>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "17px",
              color: LEVEL_TEXT,
              fontWeight: "600",
              lineHeight: "1.9",
              direction: isUrdu ? "rtl" : "ltr",
            }}
          >
            {c.goldenRule}
          </p>
        </div>

        {/* ── Section Title ── */}
        <h2
          className={isUrdu ? "urdu" : ""}
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: LEVEL_BORDER,
            marginBottom: "24px",
            paddingBottom: "12px",
            borderBottom: "1px solid var(--color-border)",
            direction: isUrdu ? "rtl" : "ltr",
          }}
        >
          {c.reasonsTitle}
        </h2>

        {/* ── Reason Cards ── */}
        {c.reasons.map((reason, i) => (
          <ReasonCard key={i} reason={reason} isUrdu={isUrdu} />
        ))}

        {/* ── Summary Table ── */}
        <SummaryTable c={c} isUrdu={isUrdu} />

        {/* ── Key Takeaway ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #021829, #031e38)",
            border: `1px solid ${LEVEL_BORDER}`,
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "40px",
          }}
        >
          <h3
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: LEVEL_TEXT,
              marginBottom: "12px",
              direction: isUrdu ? "rtl" : "ltr",
            }}
          >
            ✅ {c.keyTakeaway}
          </h3>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{
              fontSize: "15px",
              color: LEVEL_LIGHT,
              lineHeight: "1.9",
              direction: isUrdu ? "rtl" : "ltr",
            }}
          >
            {c.takeawayText}
          </p>
        </div>

        {/* ── Navigation ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <Link
            href="/lessons/4"
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
            {isUrdu ? "← گھر واپس" : "← Back to Home"}
          </Link>
          <Link
            href="/lessons/6"
            style={{
              backgroundColor: LEVEL_COLOR,
              border: "none",
              borderRadius: "8px",
              padding: "12px 24px",
              color: LEVEL_LIGHT,
              fontSize: "15px",
              fontWeight: "700",
              textDecoration: "none",
              display: "inline-block",
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

export default function Lesson5() {
  return (
    <LanguageProvider>
      <LessonContent />
    </LanguageProvider>
  );
}
