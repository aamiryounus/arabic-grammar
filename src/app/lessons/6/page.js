"use client";

import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Footer from "../../../components/Footer";

const LEVEL_COLOR = "#7B3F00";
const LEVEL_BORDER = "#D4822A";
const LEVEL_TEXT = "#F5CFA0";
const LEVEL_LIGHT = "#FDF0E0";
const LEVEL_DARK = "#2C1500";

// ─────────────────────────────────────────────
//  LESSON DATA
// ─────────────────────────────────────────────
const lessonContent = {
  en: {
    title: "All Reasons for Nasb (Accusative Case)",
    arabicTitle: "أسباب النَّصْب",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 6",
    intro:
      "Nasb (نصب) is the accusative case in Arabic — marked by a fatha (َ) or its equivalent. A noun receives Nasb for a wide range of grammatical reasons: as objects of verbs, complements of particles, circumstantial nouns, and more. This lesson covers every situation in which a noun is placed in Nasb, with Quranic evidence for each.",
    goldenRule:
      "A noun is in Nasb when it serves as a verbal object, a complement to particles like Inna or Kāna, or in any of the adverbial/circumstantial roles. Its sign is the fatha (َ) — a small diagonal stroke above the final letter, or tanween fatha (ً) for indefinite nouns.",
    reasonsTitle: "The Reasons for Nasb",
    reasons: [
      {
        id: "6.1",
        term: "المَفْعُول بِه",
        name: "Al-Maf'ūl Bihi — The Direct Object",
        definition:
          "The Maf'ūl Bihi is the noun upon which the action of the verb is performed. It directly receives the verb's action and is always in Nasb. It answers the question: 'What/whom did the subject act upon?'",
        quranicArabic: "خَلَقَ اللهُ السَّمَاوَاتِ وَالْأَرْضَ",
        quranicRef: "Surah Ibrahim (14:19)",
        quranicTrans: "Allah created the heavens and the earth.",
        nasbSign: "السَّمَاوَاتِ وَالْأَرْضَ — fatha on ض",
        nasbRole: "Maf'ūl Bihi (Direct Object)",
        note:
          "اللهُ is the Fā'il (doer) in Raf'. السَّمَاوَاتِ وَالْأَرْضَ are the Maf'ūl Bihi — what was created. الْأَرْضَ carries a fatha, confirming Nasb.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.2",
        term: "المَفْعُول المُطْلَق",
        name: "Al-Maf'ūl Al-Mutlaq — The Absolute Object",
        definition:
          "The Maf'ūl Mutlaq is a verbal noun (masdar) derived from the same root as the verb. It is placed after its verb to emphasise the action or describe its manner. It is always in Nasb. It answers: 'How did the action happen?' or 'How intensely?'",
        quranicArabic: "وَكَلَّمَ اللهُ مُوسَىٰ تَكْلِيمًا",
        quranicRef: "Surah An-Nisa (4:164)",
        quranicTrans: "And Allah spoke to Musa directly — a true speaking.",
        nasbSign: "تَكْلِيمًا — tanween fatha",
        nasbRole: "Maf'ūl Mutlaq",
        note:
          "تَكْلِيمًا is a masdar from the same root as كَلَّمَ. It intensifies and confirms the act of speaking — Allah's direct speech to Musa is emphasised by this construction. Tanween fatha marks Nasb.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.3",
        term: "المَفْعُول لأَجْلِه",
        name: "Al-Maf'ūl Li-Ajlihi — Object of Reason",
        definition:
          "The Maf'ūl Li-Ajlihi (also called Maf'ūl Lahu) is a masdar in Nasb that explains the reason or motive behind an action. It answers: 'Why was this done?' It must share the same subject and time as the main verb.",
        quranicArabic: "يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِم مِّنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ",
        quranicRef: "Surah Al-Baqarah (2:19)",
        quranicTrans: "They put their fingers in their ears against the thunderbolts — out of fear of death.",
        nasbSign: "حَذَرَ — fatha on ر",
        nasbRole: "Maf'ūl Li-Ajlihi (Reason)",
        note:
          "حَذَرَ is the Maf'ūl Li-Ajlihi — it explains why they put their fingers in their ears. The reason (fear of death) shares the same subject and moment as the action. It is in Nasb, marked by fatha.",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.4",
        term: "المَفْعُول فِيه (الظَّرْف)",
        name: "Al-Maf'ūl Fīhi — Adverbial Object (Time & Place)",
        definition:
          "The Maf'ūl Fīhi, known as Zarf (adverb), is a noun in Nasb that indicates the time or place of an action. It is always preceded (explicitly or implicitly) by a preposition meaning 'in'. It answers: 'When?' or 'Where?'",
        quranicArabic: "وَاذْكُرِ اسْمَ رَبِّكَ بُكْرَةً وَأَصِيلًا",
        quranicRef: "Surah Al-Insan (76:25)",
        quranicTrans: "And remember the name of your Lord morning and evening.",
        nasbSign: "بُكْرَةً وَأَصِيلًا — tanween fatha",
        nasbRole: "Zarf Zaman (Time Adverb)",
        note:
          "بُكْرَةً (morning) and أَصِيلًا (evening) are Zarfs of time — they tell us WHEN to remember Allah. Both carry tanween fatha, marking Nasb as adverbial time expressions.",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.5",
        term: "المَفْعُول مَعَه",
        name: "Al-Maf'ūl Ma'ahu — Accompaniment Object",
        definition:
          "The Maf'ūl Ma'ahu is a noun in Nasb that comes after the conjunction وَ (and) when that وَ carries the meaning of 'along with' (مع). It indicates accompaniment — what or who accompanied the subject in the action.",
        quranicArabic: "فَأَجْمِعُوا أَمْرَكُمْ وَشُرَكَاءَكُمْ",
        quranicRef: "Surah Yunus (10:71)",
        quranicTrans: "So resolve your matter — along with your partners.",
        nasbSign: "شُرَكَاءَكُمْ — fatha on ء",
        nasbRole: "Maf'ūl Ma'ahu",
        note:
          "شُرَكَاءَكُمْ is in Nasb as Maf'ūl Ma'ahu — the وَ here means 'along with', not a simple conjunction. This is a subtle but important grammatical distinction in Arabic.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.6",
        term: "الحَال",
        name: "Al-Hāl — The Circumstantial Accusative",
        definition:
          "The Hāl is a noun or phrase in Nasb that describes the state or condition of the subject or object at the time of the action. It answers: 'In what condition?' It must be indefinite (نكرة) and its referent (Sāhib Al-Hāl) must be definite.",
        quranicArabic: "وَجَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا",
        quranicRef: "Surah Al-Fajr (89:22)",
        quranicTrans: "And your Lord will come — and the angels, rank upon rank.",
        nasbSign: "صَفًّا صَفًّا — tanween fatha",
        nasbRole: "Hāl (Circumstantial)",
        note:
          "صَفًّا صَفًّا describes the condition in which the angels will come — rank upon rank. It is a Hāl for الْمَلَكُ. Tanween fatha marks Nasb. Repetition here adds vividness to the scene.",
        color: LEVEL_DARK,
        border: "#d4822a",
        text: "#f5cfa0",
      },
      {
        id: "6.7",
        term: "التَّمْيِيز",
        name: "Al-Tamyīz — Specification (Distinguishing Noun)",
        definition:
          "The Tamyīz is an indefinite noun in Nasb that removes ambiguity from a preceding word or sentence. It specifies what was meant — answering: 'In what respect?' It often follows numbers, measurements, or vague statements.",
        quranicArabic: "إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا",
        quranicRef: "Surah Yusuf (12:4)",
        quranicTrans: "Indeed I saw eleven stars.",
        nasbSign: "كَوْكَبًا — tanween fatha",
        nasbRole: "Tamyīz (Specification)",
        note:
          "أَحَدَ عَشَرَ (eleven) is a number — ambiguous on its own. كَوْكَبًا (a star) is the Tamyīz that specifies what was counted. It answers 'eleven of what?' and is in Nasb with tanween fatha.",
        color: LEVEL_DARK,
        border: "#d4822a",
        text: "#f5cfa0",
      },
      {
        id: "6.8",
        term: "المُسْتَثْنَى",
        name: "Al-Mustathna — The Excepted Noun",
        definition:
          "The Mustathna is the noun that comes after the exception particle إِلَّا (except). When the sentence is positive and complete, the Mustathna is in Nasb regardless of what case the other nouns carry.",
        quranicArabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ ۝ إِلَّا إِبْلِيسَ",
        quranicRef: "Surah Al-Hijr (15:30-31)",
        quranicTrans: "So the angels all prostrated — except Iblees.",
        nasbSign: "إِبْلِيسَ — fatha on س",
        nasbRole: "Mustathna (Excepted)",
        note:
          "All the angels are in Raf' as subjects. إِبْلِيسَ comes after إِلَّا in a complete positive sentence — so it is in Nasb as the Mustathna. The fatha on س confirms this.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.9",
        term: "اسمُ إِنَّ وَأَخَوَاتِهَا",
        name: "Ism Inna — Subject of Inna and its Sisters",
        definition:
          "Inna (إِنَّ) and its sisters (إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ) enter a nominal sentence and shift the subject (Ism) to Nasb, while the predicate (Khabar) remains in Raf'. This is the reverse of the normal nominal sentence.",
        quranicArabic: "إِنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        quranicRef: "Surah Al-Baqarah (2:20)",
        quranicTrans: "Indeed, Allah is over all things competent.",
        nasbSign: "اللهَ — fatha on ه",
        nasbRole: "Ism Inna (Nasb)",
        note:
          "إِنَّ entered the nominal sentence and shifted اللهَ to Nasb (fatha on ه). قَدِيرٌ is the Khabar — it remains in Raf' (damma). This is one of the most frequent structures in the Quran.",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.10",
        term: "خَبَرُ كَانَ وَأَخَوَاتِهَا",
        name: "Khabar Kāna — Predicate of Kāna and its Sisters",
        definition:
          "Kāna (كَانَ) and its sisters enter a nominal sentence. Their subject (Ism) remains in Raf', but their predicate (Khabar) shifts to Nasb. This is the reverse of Inna's effect.",
        quranicArabic: "وَكَانَ اللهُ غَفُورًا رَّحِيمًا",
        quranicRef: "Surah An-Nisa (4:96)",
        quranicTrans: "And Allah is ever Forgiving, Merciful.",
        nasbSign: "غَفُورًا رَّحِيمًا — tanween fatha",
        nasbRole: "Khabar Kāna (Nasb)",
        note:
          "كَانَ entered the sentence. اللهُ is its Ism — stays in Raf' (damma). غَفُورًا رَّحِيمًا is the Khabar — shifted to Nasb (tanween fatha). Kāna and Inna have opposite effects on the predicate.",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.11",
        term: "خَبَرُ مَا الحِجَازِيَّة",
        name: "Khabar Mā Hijāziyya — Predicate of Mā (Hijazi)",
        definition:
          "When مَا functions like لَيْسَ (Hijazi usage), it shifts the predicate (Khabar) to Nasb while its subject (Ism) remains in Raf'. This is the direct counterpart to the Ism Mā covered in Lesson 5.",
        quranicArabic: "مَا هَٰذَا بَشَرًا",
        quranicRef: "Surah Yusuf (12:31)",
        quranicTrans: "This is not a human being.",
        nasbSign: "بَشَرًا — tanween fatha",
        nasbRole: "Khabar Mā Hijāziyya (Nasb)",
        note:
          "مَا acts like لَيْسَ. هَٰذَا is the Ism — remains in Raf'. بَشَرًا is the Khabar — shifted to Nasb with tanween fatha. The women in the story used this to say Yusuf (AS) could not be merely human.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.12",
        term: "اسمُ لَا النَّافِيَة لِلْجِنْس",
        name: "Ism Lā — Subject of Lā Nāfiya lil-Jins",
        definition:
          "لَا النافية للجنس (Lā that negates the entire category) shifts its subject (Ism) to Nasb without tanween. Its predicate (Khabar) remains in Raf'. The Ism must directly follow لَا with no separation.",
        quranicArabic: "لَا رَيْبَ فِيهِ",
        quranicRef: "Surah Al-Baqarah (2:2)",
        quranicTrans: "There is absolutely no doubt in it.",
        nasbSign: "رَيْبَ — fatha without tanween",
        nasbRole: "Ism Lā (Nasb — no tanween)",
        note:
          "رَيْبَ is the Ism of لَا — in Nasb but crucially WITHOUT tanween (no ً). This is a key feature of لَا نافية للجنس. فِيهِ is the Khabar in Raf'. The absence of tanween signals that لَا has negated the entire genus of doubt.",
        color: LEVEL_DARK,
        border: "#d4822a",
        text: "#f5cfa0",
      },
      {
        id: "6.13",
        term: "المُنَادَى",
        name: "Al-Munādā — The Vocative Noun",
        definition:
          "The Munādā is the noun addressed after a vocative particle (حرف نداء) such as يَا. A proper noun or a definite noun called upon is in Nasb. An indefinite noun or a mudaf (possessed noun) after يَا is also in Nasb.",
        quranicArabic: "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمْ",
        quranicRef: "Surah Al-Baqarah (2:21)",
        quranicTrans: "O mankind! Worship your Lord.",
        nasbSign: "أَيُّهَا — special Munādā structure",
        nasbRole: "Munādā (Vocative)",
        note:
          "النَّاسُ is a definite noun being called — it is Munādā in Nasb. The structure يَا أَيُّهَا + definite noun is the standard Quranic formula for addressing a group. Proper nouns after يَا also take Nasb (e.g. يَا إِبْرَاهِيمُ uses the Mabni form).",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.14",
        term: "التَّوَابِع في النَّصْب",
        name: "Al-Tawābi' — Followers of a Mansub Noun",
        definition:
          "The four types of followers (Tawābi') — Badal (substitute), Na't (adjective), Tawkid (emphasis), and 'Atf (conjunction) — always match the case of the noun they follow. When the leading noun is in Nasb, all its followers are also in Nasb.",
        quranicArabic: "إِنَّ اللهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
        quranicRef: "Surah An-Nisa (4:58)",
        quranicTrans: "Indeed, Allah commands you to return trusts to their rightful owners.",
        nasbSign: "اللهَ — Ism Inna in Nasb; any Na't/Badal following it also in Nasb",
        nasbRole: "Tawābi' in Nasb",
        note:
          "When a Mansub noun is described by a Na't, substituted by a Badal, emphasised by Tawkid, or joined by 'Atf — all followers match Nasb. This is the إتباع (following) principle applied to the accusative case.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    summaryTitle: "Summary Table — All Reasons for Nasb",
    summaryHeaders: ["#", "Grammar Term", "Definition", "Quranic Example", "Nasb Sign / Noun", "Translation"],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "A noun receives Nasb in fourteen main scenarios: as the direct object (Maf'ūl Bihi), absolute object (Maf'ūl Mutlaq), object of reason (Maf'ūl Li-Ajlihi), adverbial object (Zarf), accompaniment object (Maf'ūl Ma'ahu), circumstantial accusative (Hāl), specification noun (Tamyīz), excepted noun (Mustathna), subject of Inna, predicate of Kāna, predicate of Mā Hijāziyya, subject of Lā Nāfiya lil-Jins, the vocative noun (Munādā), and as any follower (Tābi') of a Mansub noun. The sign of Nasb is the fatha (َ) or tanween fatha (ً) for indefinite nouns.",
    backHome: "← Back to Home",
    prevLesson: "← Lesson 5",
    nextLesson: "Lesson 7 →",
  },

  ur: {
    title: "اسم کے نصب ہونے کی تمام وجوہات",
    arabicTitle: "أسباب النَّصْب",
    level: "لیول 2 — اعراب",
    lessonNumber: "سبق 6",
    intro:
      "نصب عربی کی وہ حالت ہے جو اسم پر زبر (فتحہ) کی صورت میں ظاہر ہوتی ہے۔ اسم کو مختلف گرامری کرداروں میں نصب ملتی ہے — مفعول کے طور پر، حروف کی تکمیل کے طور پر، یا حالیہ و ظرفی اسموں کے طور پر۔ یہ سبق نصب کی تمام وجوہات کا احاطہ کرتا ہے — ہر وجہ کی قرآنی مثال کے ساتھ۔",
    goldenRule:
      "اسم نصب میں ہوتا ہے جب وہ فعل کا مفعول، حروف ناسخہ کی تکمیل، یا کسی ظرفی و حالیہ کردار میں ہو۔ نصب کی علامت زبر (َ) ہے — آخری حرف کے اوپر ترچھی لکیر، یا تنوین زبر (ً) نکرہ اسموں میں۔",
    reasonsTitle: "نصب کی وجوہات",
    reasons: [
      {
        id: "6.1",
        term: "المَفْعُول بِه",
        name: "مفعول بہ — فعل کا سیدھا مفعول",
        definition:
          "مفعول بہ وہ اسم ہے جس پر فعل کا اثر پڑے — فعل کا کام جس پر ہو۔ یہ ہمیشہ نصب میں ہوتا ہے۔ سوال: فعل کا اثر کس پر پڑا؟",
        quranicArabic: "خَلَقَ اللهُ السَّمَاوَاتِ وَالْأَرْضَ",
        quranicRef: "سورۃ ابراہیم (۱۴:۱۹)",
        quranicTrans: "اللہ نے آسمانوں اور زمین کو بنایا۔",
        nasbSign: "الْأَرْضَ — ض پر زبر",
        nasbRole: "مفعول بہ",
        note:
          "اللهُ فاعل ہے — رفع میں۔ السَّمَاوَاتِ وَالْأَرْضَ مفعول بہ ہیں — جو بنائے گئے۔ الْأَرْضَ پر زبر نصب کی علامت ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.2",
        term: "المَفْعُول المُطْلَق",
        name: "مفعول مطلق — مصدری مفعول",
        definition:
          "مفعول مطلق وہ مصدر ہے جو اپنے فعل کی جڑ سے بنے اور فعل کے بعد آئے۔ یہ فعل کو تاکید یا اس کی نوعیت بیان کرنے کے لیے آتا ہے۔ ہمیشہ نصب میں ہوتا ہے۔ سوال: کام کیسے ہوا؟",
        quranicArabic: "وَكَلَّمَ اللهُ مُوسَىٰ تَكْلِيمًا",
        quranicRef: "سورۃ النساء (۴:۱۶۴)",
        quranicTrans: "اور اللہ نے موسیٰ سے براہ راست کلام کیا — ایک حقیقی کلام۔",
        nasbSign: "تَكْلِيمًا — تنوین زبر",
        nasbRole: "مفعول مطلق",
        note:
          "تَكْلِيمًا فعل كَلَّمَ کی جڑ سے مصدر ہے۔ یہ کلام کی تاکید اور تصدیق کرتا ہے۔ تنوین زبر نصب کی علامت ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.3",
        term: "المَفْعُول لأَجْلِه",
        name: "مفعول لأجلہ — وجہ و سبب کا مفعول",
        definition:
          "مفعول لأجلہ وہ مصدر ہے جو کسی فعل کی وجہ یا محرک بیان کرے۔ یہ ہمیشہ نصب میں ہوتا ہے اور سوال کا جواب دیتا ہے: یہ کام کیوں ہوا؟ شرط یہ ہے کہ اس کا فاعل وہی ہو جو جملے کے فعل کا ہو۔",
        quranicArabic: "يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِم مِّنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ",
        quranicRef: "سورۃ البقرہ (۲:۱۹)",
        quranicTrans: "وہ گرج کے ڈر سے اپنی انگلیاں اپنے کانوں میں ڈال لیتے ہیں — موت کے خوف سے۔",
        nasbSign: "حَذَرَ — ر پر زبر",
        nasbRole: "مفعول لأجلہ",
        note:
          "حَذَرَ مفعول لأجلہ ہے — یہ بتاتا ہے کہ انہوں نے کانوں میں انگلیاں کیوں ڈالیں (موت کے خوف سے)۔ ر پر زبر نصب کی علامت ہے۔",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.4",
        term: "المَفْعُول فِيه (الظَّرْف)",
        name: "مفعول فیہ (ظرف) — وقت اور جگہ کا مفعول",
        definition:
          "مفعول فیہ کو ظرف بھی کہتے ہیں۔ یہ وہ اسم ہے جو کسی فعل کا وقت یا جگہ بتائے۔ یہ ہمیشہ نصب میں ہوتا ہے۔ سوال: کب؟ کہاں؟",
        quranicArabic: "وَاذْكُرِ اسْمَ رَبِّكَ بُكْرَةً وَأَصِيلًا",
        quranicRef: "سورۃ الانسان (۷۶:۲۵)",
        quranicTrans: "اور اپنے رب کا نام صبح اور شام یاد کرو۔",
        nasbSign: "بُكْرَةً وَأَصِيلًا — تنوین زبر",
        nasbRole: "ظرف زمان",
        note:
          "بُكْرَةً (صبح) اور أَصِيلًا (شام) ظرف زمان ہیں — یہ بتاتے ہیں کہ ذکر کب کرنا ہے۔ دونوں پر تنوین زبر نصب کی علامت ہے۔",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.5",
        term: "المَفْعُول مَعَه",
        name: "مفعول معہ — ساتھ والا مفعول",
        definition:
          "مفعول معہ وہ اسم ہے جو واو (وَ) کے بعد آئے اور اس واو کا معنی 'کے ساتھ' (مع) ہو۔ یہ ہمیشہ نصب میں ہوتا ہے۔ یہ واو عطف نہیں بلکہ واو معیت ہے۔",
        quranicArabic: "فَأَجْمِعُوا أَمْرَكُمْ وَشُرَكَاءَكُمْ",
        quranicRef: "سورۃ یونس (۱۰:۷۱)",
        quranicTrans: "پس اپنا معاملہ طے کرو — اپنے شریکوں کے ساتھ۔",
        nasbSign: "شُرَكَاءَكُمْ — ء پر زبر",
        nasbRole: "مفعول معہ",
        note:
          "شُرَكَاءَكُمْ مفعول معہ ہے — یہاں واو کا معنی 'کے ساتھ' ہے نہ کہ 'اور'۔ یہ ایک اہم گرامری فرق ہے۔ ء پر زبر نصب کی علامت ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.6",
        term: "الحَال",
        name: "حال — کیفیت بیان کرنے والا اسم",
        definition:
          "حال وہ نکرہ اسم ہے جو فعل کے وقت فاعل یا مفعول کی حالت یا کیفیت بیان کرے۔ یہ ہمیشہ نصب میں ہوتا ہے۔ سوال: کس حال میں؟",
        quranicArabic: "وَجَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا",
        quranicRef: "سورۃ الفجر (۸۹:۲۲)",
        quranicTrans: "اور تمہارا رب آئے گا اور فرشتے — صف در صف۔",
        nasbSign: "صَفًّا صَفًّا — تنوین زبر",
        nasbRole: "حال",
        note:
          "صَفًّا صَفًّا حال ہے — یہ بتاتا ہے کہ فرشتے کس حال میں آئیں گے (صف بہ صف)۔ تکرار منظر کو مزید واضح کرتی ہے۔ تنوین زبر نصب کی علامت ہے۔",
        color: LEVEL_DARK,
        border: "#d4822a",
        text: "#f5cfa0",
      },
      {
        id: "6.7",
        term: "التَّمْيِيز",
        name: "تمییز — تعین کرنے والا اسم",
        definition:
          "تمییز وہ نکرہ اسم ہے جو کسی لفظ یا جملے میں ابہام دور کرے اور وضاحت کرے۔ یہ ہمیشہ نصب میں ہوتا ہے۔ اکثر گنتی، پیمائش یا مبہم بیان کے بعد آتا ہے۔ سوال: کس لحاظ سے؟",
        quranicArabic: "إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا",
        quranicRef: "سورۃ یوسف (۱۲:۴)",
        quranicTrans: "میں نے گیارہ ستارے دیکھے۔",
        nasbSign: "كَوْكَبًا — تنوین زبر",
        nasbRole: "تمییز",
        note:
          "أَحَدَ عَشَرَ (گیارہ) عدد ہے — اکیلا مبہم ہے۔ كَوْكَبًا تمییز ہے جو بتاتا ہے کہ گیارہ کیا تھے (ستارے)۔ تنوین زبر نصب کی علامت ہے۔",
        color: LEVEL_DARK,
        border: "#d4822a",
        text: "#f5cfa0",
      },
      {
        id: "6.8",
        term: "المُسْتَثْنَى",
        name: "مستثنیٰ — مستثنیٰ کیا گیا اسم",
        definition:
          "مستثنیٰ وہ اسم ہے جو إِلَّا (سوائے) کے بعد آئے۔ جب جملہ مثبت اور مکمل ہو تو مستثنیٰ ہمیشہ نصب میں ہوتا ہے — چاہے باقی اسم کسی بھی حالت میں ہوں۔",
        quranicArabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ ۝ إِلَّا إِبْلِيسَ",
        quranicRef: "سورۃ الحجر (۱۵:۳۰-۳۱)",
        quranicTrans: "تو سب فرشتوں نے سجدہ کیا — سوائے ابلیس کے۔",
        nasbSign: "إِبْلِيسَ — س پر زبر",
        nasbRole: "مستثنیٰ",
        note:
          "تمام فرشتے رفع میں ہیں (فاعل)۔ إِبْلِيسَ إِلَّا کے بعد آیا — مثبت مکمل جملے میں — اس لیے نصب میں ہے۔ س پر زبر اس کی تصدیق کرتا ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.9",
        term: "اسمُ إِنَّ وَأَخَوَاتِهَا",
        name: "اسمِ إن — إن اور اس کی بہنوں کا اسم",
        definition:
          "إن اور اس کی بہنیں (إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ) جملہ اسمیہ میں داخل ہو کر مبتدا کو نصب دیتی ہیں، جبکہ خبر رفع میں رہتی ہے۔",
        quranicArabic: "إِنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        quranicRef: "سورۃ البقرہ (۲:۲۰)",
        quranicTrans: "بے شک اللہ ہر چیز پر قادر ہے۔",
        nasbSign: "اللهَ — ہ پر زبر",
        nasbRole: "اسمِ إن (نصب)",
        note:
          "إِنَّ نے اللهَ کو نصب دی — ہ پر زبر آگئی۔ قَدِيرٌ خبر ہے اور رفع میں رہی۔ یہ قرآن کی سب سے عام ساختوں میں سے ایک ہے۔",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.10",
        term: "خَبَرُ كَانَ وَأَخَوَاتِهَا",
        name: "خبرِ کان — کان اور اس کی بہنوں کی خبر",
        definition:
          "کان اور اس کی بہنیں جملہ اسمیہ میں داخل ہوتی ہیں — ان کا اسم رفع میں رہتا ہے لیکن خبر نصب میں چلی جاتی ہے۔ یہ إن کا الٹ اثر ہے۔",
        quranicArabic: "وَكَانَ اللهُ غَفُورًا رَّحِيمًا",
        quranicRef: "سورۃ النساء (۴:۹۶)",
        quranicTrans: "اور اللہ ہمیشہ سے بخشنے والا، مہربان ہے۔",
        nasbSign: "غَفُورًا رَّحِيمًا — تنوین زبر",
        nasbRole: "خبرِ کان (نصب)",
        note:
          "كَانَ نے جملے میں داخل ہو کر اللهُ کو اپنا اسم بنایا — رفع میں رہا۔ غَفُورًا رَّحِيمًا خبر ہے — نصب میں چلی گئی (تنوین زبر)۔",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.11",
        term: "خَبَرُ مَا الحِجَازِيَّة",
        name: "خبرِ ما حجازیہ — ما حجازی کی خبر",
        definition:
          "جب مَا لَيْسَ کی طرح (حجازی طرز پر) استعمال ہو تو یہ اپنی خبر کو نصب دیتا ہے جبکہ اسم رفع میں رہتا ہے۔ یہ سبق ۵ میں پڑھے ہوئے اسمِ ما حجازیہ کا دوسرا پہلو ہے۔",
        quranicArabic: "مَا هَٰذَا بَشَرًا",
        quranicRef: "سورۃ یوسف (۱۲:۳۱)",
        quranicTrans: "یہ کوئی انسان نہیں ہے۔",
        nasbSign: "بَشَرًا — تنوین زبر",
        nasbRole: "خبرِ ما حجازیہ (نصب)",
        note:
          "مَا لَيْسَ کی طرح ہے۔ هَٰذَا اسم ہے — رفع میں۔ بَشَرًا خبر ہے — نصب میں (تنوین زبر)۔ یوسف علیہ السلام کی حسن و جمال کی عورتوں نے یہ کہہ کر تعریف کی۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "6.12",
        term: "اسمُ لَا النَّافِيَة لِلْجِنْس",
        name: "اسمِ لا نفی جنس",
        definition:
          "لا نافیہ للجنس اپنے اسم کو بغیر تنوین کے نصب دیتی ہے۔ اسم لازماً لا کے فوراً بعد آئے اور اس کے درمیان کوئی فاصلہ نہ ہو۔ خبر رفع میں رہتی ہے۔",
        quranicArabic: "لَا رَيْبَ فِيهِ",
        quranicRef: "سورۃ البقرہ (۲:۲)",
        quranicTrans: "اس میں کوئی شک نہیں۔",
        nasbSign: "رَيْبَ — زبر بغیر تنوین کے",
        nasbRole: "اسمِ لا نفی جنس (نصب — بے تنوین)",
        note:
          "رَيْبَ اسمِ لا ہے — نصب میں ہے لیکن تنوین نہیں ہے۔ یہ لا نافیہ للجنس کی خاص علامت ہے۔ فِيهِ خبر ہے — رفع میں۔ تنوین کا نہ ہونا اس بات کی دلیل ہے کہ پوری جنسِ شک کی نفی کی گئی۔",
        color: LEVEL_DARK,
        border: "#d4822a",
        text: "#f5cfa0",
      },
      {
        id: "6.13",
        term: "المُنَادَى",
        name: "منادیٰ — پکارا گیا اسم",
        definition:
          "منادیٰ وہ اسم ہے جسے حرف ندا (يَا وغیرہ) کے بعد مخاطب کیا جائے۔ معرفہ علم (proper noun) یا مضاف منادیٰ نصب میں ہوتا ہے۔",
        quranicArabic: "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمْ",
        quranicRef: "سورۃ البقرہ (۲:۲۱)",
        quranicTrans: "اے لوگو! اپنے رب کی عبادت کرو۔",
        nasbSign: "أَيُّهَا — منادیٰ کی خاص ساخت",
        nasbRole: "منادیٰ (نصب)",
        note:
          "النَّاسُ معرفہ منادیٰ ہے — نصب میں ہے۔ يَا أَيُّهَا + معرفہ اسم قرآن میں گروہ کو مخاطب کرنے کا معیاری فارمولہ ہے۔ اعلام (جیسے يَا إِبْرَاهِيمُ) مبنی ہوتے ہیں اور ضمہ پر موقوف ہوتے ہیں۔",
        color: LEVEL_DARK,
        border: "#c0842a",
        text: "#f5d5a0",
      },
      {
        id: "6.14",
        term: "التَّوَابِع في النَّصْب",
        name: "توابع — منصوب اسم کے تابع",
        definition:
          "چار توابع (بدل، نعت، توکید، عطف) ہمیشہ اپنے متبوع کی اعراب کی پیروی کرتے ہیں۔ جب متبوع نصب میں ہو تو تمام توابع بھی نصب میں ہوں گے — یہ اتباع کا اصول ہے۔",
        quranicArabic: "إِنَّ اللهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
        quranicRef: "سورۃ النساء (۴:۵۸)",
        quranicTrans: "بے شک اللہ تمہیں حکم دیتا ہے کہ امانتیں ان کے اہل کو لوٹاؤ۔",
        nasbSign: "اللهَ — اسمِ إن نصب میں؛ اس کا کوئی بھی تابع بھی نصب میں ہوگا",
        nasbRole: "توابع — نصب میں",
        note:
          "جب منصوب اسم کی نعت، بدل، توکید یا عطف آئے تو وہ سب نصب میں ہوں گے — اتباع کے اصول کی بنا پر۔ یہ اصول رفع، نصب اور جر تینوں میں لاگو ہوتا ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],
    summaryTitle: "خلاصہ جدول — نصب کی تمام وجوہات",
    summaryHeaders: ["نمبر", "گرامر اصطلاح", "تعریف", "قرآنی مثال", "نصب کی علامت / اسم", "ترجمہ"],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "اسم چودہ بنیادی مواقع میں نصب پاتا ہے: مفعول بہ، مفعول مطلق، مفعول لأجلہ، ظرف (مفعول فیہ)، مفعول معہ، حال، تمییز، مستثنیٰ، اسمِ إن، خبرِ کان، خبرِ ما حجازیہ، اسمِ لا نفی جنس، منادیٰ، اور چار توابع (بدل، نعت، توکید، عطف) جب وہ کسی منصوب اسم کی پیروی کریں۔ نصب کی علامت زبر (َ) یا تنوین زبر (ً) ہے۔",
    backHome: "← گھر واپس",
    prevLesson: "← پچھلا سبق 5",
    nextLesson: "اگلا سبق 7 →",
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
          <span className="arabic" style={{ fontSize: "20px", color: reason.text, fontWeight: "600" }}>
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
              {reason.nasbRole}
            </span>
          </span>
        </div>

        {/* Quranic example */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a0800, #200a00)",
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

        {/* Nasb sign highlight */}
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
              color: "#1a0800",
              borderRadius: "4px",
              padding: "2px 8px",
              fontSize: "11px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            {isUrdu ? "علامت نصب" : "Nasb Mark"}
          </span>
          <span className="arabic" style={{ fontSize: "14px", color: reason.border }}>
            {reason.nasbSign}
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
                <div className="arabic" style={{ fontSize: "15px", color: r.text, backgroundColor: r.color, borderRadius: "6px", padding: "6px 10px", display: "inline-block", border: `1px solid ${r.border}` }}>
                  {r.quranicArabic.length > 30 ? r.quranicArabic.slice(0, 30) + "…" : r.quranicArabic}
                </div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)", marginTop: "4px" }}>{r.quranicRef}</div>
              </td>
              {/* Nasb Sign */}
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)" }}>
                <span className="arabic" style={{ fontSize: "13px", color: r.border }}>{r.nasbSign}</span>
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
      <Navbar currentLesson={6} />

      <div className="animate-fadeInUp" style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", fontSize: "14px", color: "var(--color-text-muted)" }}>
          <Link href="/" style={{ color: LEVEL_BORDER, textDecoration: "none" }}>Home</Link>
          {" → "}<span>{c.level}</span>{" → "}<span>{c.lessonNumber}</span>
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
            style={{ fontSize: "28px", fontWeight: "700", marginBottom: "8px", direction: isUrdu ? "rtl" : "ltr" }}
          >
            {c.title}
          </h1>
          <div className="arabic" style={{ fontSize: "22px", color: LEVEL_BORDER, marginBottom: "18px" }}>
            {c.arabicTitle}
          </div>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "16px", color: "var(--color-text-muted)", lineHeight: "1.9", direction: isUrdu ? "rtl" : "ltr" }}
          >
            {c.intro}
          </p>
        </div>

        {/* ── Golden Rule ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a0800, #250c00)",
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
            style={{ fontSize: "17px", color: LEVEL_TEXT, fontWeight: "600", lineHeight: "1.9", direction: isUrdu ? "rtl" : "ltr" }}
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
            background: "linear-gradient(135deg, #1a0800, #250c00)",
            border: `1px solid ${LEVEL_BORDER}`,
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "40px",
          }}
        >
          <h3
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "18px", fontWeight: "600", color: LEVEL_TEXT, marginBottom: "12px", direction: isUrdu ? "rtl" : "ltr" }}
          >
            ✅ {c.keyTakeaway}
          </h3>
          <p
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "15px", color: LEVEL_LIGHT, lineHeight: "1.9", direction: isUrdu ? "rtl" : "ltr" }}
          >
            {c.takeawayText}
          </p>
        </div>

        {/* ── Navigation ── */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <Link
            href="/lessons/5"
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
            href="/lessons/7"
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

export default function Lesson6() {
  return (
    <LanguageProvider>
      <LessonContent />
    </LanguageProvider>
  );
}
