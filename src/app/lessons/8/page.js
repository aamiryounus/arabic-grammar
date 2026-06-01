"use client";

import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Footer from "../../../components/Footer";

const LEVEL_COLOR = "#3C1F6B";
const LEVEL_BORDER = "#8B5CF6";
const LEVEL_TEXT = "#DDD6FE";
const LEVEL_LIGHT = "#F3F0FF";
const LEVEL_DARK = "#1A0D33";

// ─────────────────────────────────────────────
//  LESSON DATA
// ─────────────────────────────────────────────
const lessonContent = {
  en: {
    title: "All Reasons for Jazm (Jussive Case)",
    arabicTitle: "أسباب الجَزْم",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 8",
    intro:
      "Jazm (جزم) is unique among the four Arabic case endings — it applies exclusively to verbs, never to nouns. It is the jussive mood, marked by the deletion of the final vowel (sukoon ْ) or, for certain verb patterns, the deletion of the final letter نْ or the weak letter و/ا/ي. Jazm has two categories of triggers: particles that jazm a single verb (عوامل جازمة لفعل واحد), and particles that jazm two verbs — the condition and its response (عوامل جازمة لفعلين).",
    goldenRule:
      "Jazm falls only on the Mudari' (present/future) verb — never on a noun. Its sign is the sukoon (ْ) on the final letter, or the deletion of نْ for the five verb forms (الأفعال الخمسة), or the deletion of the weak letter (حرف العلة) in defective verbs.",
    cat1Title: "Category 1 — Particles That Jazm One Verb",
    cat1Subtitle: "عوامل جازمة لفعل واحد",
    cat2Title: "Category 2 — Particles That Jazm Two Verbs (Conditional)",
    cat2Subtitle: "عوامل جازمة لفعلين",
    reasons: [
      // ── CATEGORY 1 ──
      {
        id: "8.1",
        category: 1,
        term: "لَمْ",
        name: "Lam — Did not (Negation of Past)",
        definition:
          "لَمْ is a negative particle that jazms the Mudari' verb and gives it a past meaning — 'did not'. It negates a completed action. The verb after لَمْ is in Jazm (sukoon on final letter or deletion of نْ).",
        quranicArabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        quranicRef: "Surah Al-Ikhlas (112:3)",
        quranicTrans: "He did not beget, nor was He begotten.",
        jazmSign: "يَلِدْ — sukoon on د | يُولَدْ — sukoon on د",
        jazmRole: "Majzum verb after لَمْ",
        note:
          "لَمْ negated both يَلِدُ (begets) and يُولَدُ (is begotten), shifting them to the past negative. The sukoon on the final د of each verb is the sign of Jazm. This is the most concise theological statement in all of scripture.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.2",
        category: 1,
        term: "لَمَّا",
        name: "Lammā — Has not yet / Not at all (Continuing Negation)",
        definition:
          "لَمَّا is like لَمْ in that it jazms the Mudari' verb and gives it a past meaning, but it carries an additional nuance — the negation may still be ongoing ('not yet'). It implies that the negated action still has not occurred up to the present moment.",
        quranicArabic: "بَلْ لَّمَّا يَذُوقُوا عَذَابِ",
        quranicRef: "Surah Sad (38:8)",
        quranicTrans: "Rather, they have not yet tasted My punishment.",
        jazmSign: "يَذُوقُوا — deletion of نْ (Af'al Khamsa)",
        jazmRole: "Majzum verb after لَمَّا",
        note:
          "لَمَّا jazmed يَذُوقُوا — one of the five verb forms (الأفعال الخمسة). In these forms, Jazm is shown by deletion of the نْ at the end (the base form يَذُوقُونَ loses its نون). The meaning: they haven't experienced the punishment yet — but they will.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.3",
        category: 1,
        term: "لَا النَّاهِيَة",
        name: "Lā Al-Nāhiya — Do not! (Prohibitive Lā)",
        definition:
          "لَا النَّاهِيَة (the prohibitive Lā) is used to forbid an action. It jazms the Mudari' verb and turns it into a prohibition — 'do not do this'. It is used in the second person (you) and sometimes third person commands.",
        quranicArabic: "وَلَا تَقْرَبُوا الزِّنَىٰ",
        quranicRef: "Surah Al-Isra (17:32)",
        quranicTrans: "And do not approach unlawful intercourse.",
        jazmSign: "تَقْرَبُوا — deletion of نْ (Af'al Khamsa)",
        jazmRole: "Majzum verb after لَا النَّاهِيَة",
        note:
          "لَا النَّاهِيَة jazmed تَقْرَبُوا. The base form تَقْرَبُونَ loses its نون under Jazm. Notice لَا here forbids even approaching (قرب) — not just committing the act — showing the comprehensive nature of Quranic prohibitions.",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.4",
        category: 1,
        term: "لَامُ الأَمْر",
        name: "Lām Al-Amr — Let him / Let them (Imperative Lām)",
        definition:
          "لَامُ الأَمْر is a lam particle that jazms the Mudari' verb to form a third-person (or first-person) command — 'let him do', 'let them do', 'let us do'. It is written with a kasra (لِ) when preceded by certain connectors.",
        quranicArabic: "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ",
        quranicRef: "Surah At-Talaq (65:7)",
        quranicTrans: "Let the wealthy person spend from his wealth.",
        jazmSign: "يُنفِقْ — sukoon on ق",
        jazmRole: "Majzum verb after لَامُ الأَمْر (لِ)",
        note:
          "لِ (lam al-amr) jazmed يُنفِقُ, removing the damma and placing a sukoon on ق. This is a third-person command — 'let him spend'. This Lam is distinguished from لَا النَّاهِيَة by its meaning (command vs. prohibition) and from لَمْ by its not implying past tense.",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.5",
        category: 1,
        term: "فِعْلُ الأَمْر",
        name: "Fi'l Al-Amr — The Imperative Verb",
        definition:
          "The imperative verb (فعل الأمر) is itself in a state of Jazm by its very formation — it is built from the Mudari' by applying Jazm rules and dropping the prefix. It is inherently Majzum and used for direct second-person commands.",
        quranicArabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
        quranicRef: "Surah Al-Alaq (96:1)",
        quranicTrans: "Read! In the name of your Lord who created.",
        jazmSign: "اقْرَأْ — sukoon on أ (hamza)",
        jazmRole: "Fi'l Amr — inherently Majzum",
        note:
          "اقْرَأْ is the imperative of قَرَأَ. It is formed from the Mudari' يَقْرَأُ by jazming it (sukoon on أ) then dropping the يَ prefix and adding an epenthetic alif. The first revealed word of the Quran is itself a Majzum imperative — Read!",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },

      // ── CATEGORY 2 ──
      {
        id: "8.6",
        category: 2,
        term: "إِنْ",
        name: "In — If (The Core Conditional Particle)",
        definition:
          "إِنْ is the fundamental conditional particle in Arabic. It jazms two verbs: the condition verb (فعل الشرط) and the response verb (جواب الشرط / فعل الجزاء). Both verbs are in Jazm. إِنْ is used for open, real conditions.",
        quranicArabic: "إِن تَنصُرُوا اللهَ يَنصُرْكُمْ",
        quranicRef: "Surah Muhammad (47:7)",
        quranicTrans: "If you support Allah, He will support you.",
        jazmSign: "تَنصُرُوا — deletion of نْ (condition) | يَنصُرْكُمْ — sukoon on ر (response)",
        jazmRole: "Jazm on both condition + response verbs",
        note:
          "إِنْ jazmed two verbs: تَنصُرُوا (condition — 'if you support', deletion of نون) and يَنصُرْكُمْ (response — 'He will support you', sukoon on ر). This is the most important conditional structure in Arabic — the إِنْ conditional.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.7",
        category: 2,
        term: "مَنْ",
        name: "Man — Whoever",
        definition:
          "مَنْ as a conditional particle means 'whoever' and jazms two verbs — the condition and its response. It refers to people. The condition and response verbs are both in Jazm.",
        quranicArabic: "مَن يَعْمَلْ سُوءًا يُجْزَ بِهِ",
        quranicRef: "Surah An-Nisa (4:123)",
        quranicTrans: "Whoever does evil will be recompensed for it.",
        jazmSign: "يَعْمَلْ — sukoon on ل | يُجْزَ — deletion of weak letter (defective verb)",
        jazmRole: "Jazm on both verbs after مَنْ",
        note:
          "مَنْ jazmed يَعْمَلْ (sukoon on ل — condition) and يُجْزَ (response — a defective verb where the weak alif is deleted as the sign of Jazm). This verse is a powerful statement on divine justice — no evil goes unaccounted.",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.8",
        category: 2,
        term: "مَا",
        name: "Mā — Whatever (for things)",
        definition:
          "مَا as a conditional particle means 'whatever' and jazms two verbs. It refers to non-human things and concepts. Both the condition and response verbs take Jazm.",
        quranicArabic: "وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللهُ",
        quranicRef: "Surah Al-Baqarah (2:197)",
        quranicTrans: "And whatever good you do — Allah knows it.",
        jazmSign: "تَفْعَلُوا — deletion of نْ | يَعْلَمْهُ — sukoon on م",
        jazmRole: "Jazm on both verbs after مَا",
        note:
          "مَا jazmed تَفْعَلُوا (condition, deletion of نون) and يَعْلَمْهُ (response, sukoon on م). The message: every act of goodness, however small, is recorded by Allah. Both verbs in Jazm confirm the conditional structure.",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.9",
        category: 2,
        term: "مَهْمَا",
        name: "Mahmā — Whatever / No matter what",
        definition:
          "مَهْمَا is a conditional particle meaning 'whatever' or 'no matter what'. It is stronger than مَا in its sense of comprehensiveness. It jazms two verbs — the condition and the response.",
        quranicArabic: "وَقَالُوا مَهْمَا تَأْتِنَا بِهِ مِن آيَةٍ لِّتَسْحَرَنَا بِهَا فَمَا نَحْنُ لَكَ بِمُؤْمِنِينَ",
        quranicRef: "Surah Al-A'raf (7:132)",
        quranicTrans: "And they said: Whatever sign you bring us to bewitch us with — we will not believe in you.",
        jazmSign: "تَأْتِنَا — deletion of weak letter (defective verb, condition)",
        jazmRole: "Jazm on condition verb after مَهْمَا",
        note:
          "مَهْمَا jazmed تَأْتِنَا — a defective verb where the weak letter is deleted as the sign of Jazm. Pharaoh's people used this to defiantly challenge Musa (AS) — whatever miracle you show, we won't believe. The Jazm here underscores the open-ended nature of their rejection.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.10",
        category: 2,
        term: "إِذْمَا",
        name: "Izhmā — Whenever (conditional)",
        definition:
          "إِذْمَا is a conditional particle meaning 'whenever' or 'if ever'. It is formed from إِذْ + مَا. It jazms both verbs — the condition and the response. It is less common than other conditionals but recognised by grammarians.",
        quranicArabic: "إِن تَتَّقُوا اللهَ يَجْعَل لَّكُمْ فُرْقَانًا",
        quranicRef: "Surah Al-Anfal (8:29) — illustrating two-verb Jazm",
        quranicTrans: "If you fear Allah, He will grant you a criterion (to distinguish right from wrong).",
        jazmSign: "تَتَّقُوا — deletion of نْ | يَجْعَل — sukoon on ل",
        jazmRole: "Two-verb Jazm (إِذْمَا pattern illustrated via إِنْ)",
        note:
          "إِذْمَا follows the same two-verb Jazm pattern as إِنْ. Both the condition verb and the response verb are in Jazm. The example here shows the general two-verb conditional pattern — whenever a conditional particle is used, both verbs are Majzum.",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.11",
        category: 2,
        term: "أَيْنَمَا",
        name: "Aynaмā — Wherever",
        definition:
          "أَيْنَمَا is a conditional particle of place meaning 'wherever'. It jazms two verbs — condition and response. It encompasses all locations without exception.",
        quranicArabic: "أَيْنَمَا تَكُونُوا يُدْرِككُّمُ الْمَوْتُ",
        quranicRef: "Surah An-Nisa (4:78)",
        quranicTrans: "Wherever you may be, death will overtake you.",
        jazmSign: "تَكُونُوا — deletion of نْ | يُدْرِككُّمُ — sukoon (response)",
        jazmRole: "Jazm on both verbs after أَيْنَمَا",
        note:
          "أَيْنَمَا jazmed تَكُونُوا (condition — deletion of نون) and يُدْرِككُّمُ (response — Majzum). This verse is a profound reminder: death reaches every location. Both verbs confirm the conditional Jazm structure.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.12",
        category: 2,
        term: "مَتَى / أَيَّانَ",
        name: "Matā / Ayyāna — Whenever (time)",
        definition:
          "مَتَى and أَيَّانَ are conditional particles of time meaning 'whenever' or 'at whatever time'. Both jazm two verbs — the condition and the response. مَتَى is more common in classical usage.",
        quranicArabic: "وَإِن طَائِفَتَانِ مِنَ الْمُؤْمِنِينَ اقْتَتَلُوا فَأَصْلِحُوا بَيْنَهُمَا",
        quranicRef: "Surah Al-Hujurat (49:9) — illustrating time-based conditional Jazm",
        quranicTrans: "And if two groups of believers fight each other, then make peace between them.",
        jazmSign: "Two-verb Jazm pattern with time conditional",
        jazmRole: "Jazm on both verbs after مَتَى / أَيَّانَ",
        note:
          "مَتَى and أَيَّانَ both follow the same two-verb Jazm pattern. Whenever the condition is introduced, both the condition verb and the response verb are Majzum. These particles are less frequent in the Quran but firmly established in classical Arabic grammar.",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.13",
        category: 2,
        term: "كَيْفَمَا",
        name: "Kayfamā — However / In whatever manner",
        definition:
          "كَيْفَمَا is a conditional particle of manner meaning 'however' or 'in whatever way'. It jazms two verbs — the condition and the response. It covers all possible manners of an action.",
        quranicArabic: "فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللهِ",
        quranicRef: "Surah Al-Baqarah (2:115) — manner/place conditional",
        quranicTrans: "So wherever you turn, there is the Face of Allah.",
        jazmSign: "تُوَلُّوا — deletion of نْ (condition, Majzum)",
        jazmRole: "Jazm on condition verb after كَيْفَمَا / أَيْنَمَا",
        note:
          "كَيْفَمَا jazms both verbs just like the other conditional particles. The example verse with أَيْنَمَا/تُوَلُّوا illustrates how manner and place conditionals operate — the condition verb تُوَلُّوا is Majzum (deletion of نون), and the response follows.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.14",
        category: 2,
        term: "أَيٌّ",
        name: "Ayy — Whichever / Whatever (general)",
        definition:
          "أَيٌّ is a conditional particle meaning 'whichever' or 'whatever'. It is unique among conditionals because it is a noun (Ism) that itself receives case endings based on its grammatical role in the sentence. It jazms both the condition and response verbs.",
        quranicArabic: "أَيًّا مَّا تَدْعُوا فَلَهُ الْأَسْمَاءُ الْحُسْنَىٰ",
        quranicRef: "Surah Al-Isra (17:110)",
        quranicTrans: "Whichever (name) you call upon — to Him belong the most beautiful names.",
        jazmSign: "تَدْعُوا — deletion of weak letter و (defective verb, condition)",
        jazmRole: "Jazm on condition verb after أَيٌّ",
        note:
          "أَيًّا jazmed تَدْعُوا — a defective verb where the weak و is deleted as the sign of Jazm (the base form would be تَدْعُوُ). فَلَهُ الْأَسْمَاءُ الْحُسْنَىٰ is the response — a nominal sentence, so no Jazm sign visible, but the conditional structure is complete.",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.15",
        category: 2,
        term: "حَيْثُمَا",
        name: "Haythhumā — Wherever (place)",
        definition:
          "حَيْثُمَا is a conditional particle of place meaning 'wherever'. It jazms two verbs — the condition and the response. It is synonymous in meaning with أَيْنَمَا but used in a slightly different register.",
        quranicArabic: "وَحَيْثُ مَا كُنتُمْ فَوَلُّوا وُجُوهَكُمْ شَطْرَهُ",
        quranicRef: "Surah Al-Baqarah (2:150)",
        quranicTrans: "And wherever you are, turn your faces toward it (the Masjid Al-Haram).",
        jazmSign: "كُنتُمْ — condition verb (Majzum form) | فَوَلُّوا — Amr as response",
        jazmRole: "Jazm on condition verb after حَيْثُمَا",
        note:
          "حَيْثُمَا jazmed the condition verb. The response here is an imperative (فَوَلُّوا — turn your faces) which is inherently Majzum. This verse establishes the Qibla direction for all Muslims everywhere — a universal conditional applying to every location on earth.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],

    // ── JAZM SIGNS SECTION ──
    jazmSignsTitle: "Signs of Jazm — How to Recognise It",
    jazmSigns: [
      {
        sign: "السُّكُون ْ",
        name: "Sukoon",
        desc: "The most common sign. Applied to the final letter of the verb when it is a sound (sahih) verb.",
        example: "يَعْلَمْ / يَكْتُبْ / يَذْهَبْ",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        sign: "حَذْف النُّون",
        name: "Deletion of Nūn",
        desc: "For the five verb forms (الأفعال الخمسة): يَفْعَلُونَ، تَفْعَلُونَ، يَفْعَلَانِ، تَفْعَلَانِ، تَفْعَلِينَ — Jazm deletes the نون.",
        example: "يَفْعَلُونَ ← يَفْعَلُوا",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        sign: "حَذْف حَرْف العِلَّة",
        name: "Deletion of Weak Letter",
        desc: "For defective verbs (الفعل المعتل الآخر) ending in و/ا/ي — Jazm deletes the final weak letter.",
        example: "يَدْعُو ← يَدْعُ | يَخْشَى ← يَخْشَ | يَرْمِي ← يَرْمِ",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],

    summaryTitle: "Summary Table — All Reasons for Jazm",
    summaryHeaders: ["#", "Particle / Form", "Meaning", "Jazms", "Quranic Example", "Jazm Sign", "Translation"],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "Jazm applies only to Mudari' (present/future) verbs — never to nouns or past-tense verbs. It has two categories: five particles that jazm ONE verb (لَمْ, لَمَّا, لَا النَّاهِيَة, لَامُ الأَمْر, and the imperative verb form itself), and ten particles that jazm TWO verbs — the condition and its response (إِنْ, مَنْ, مَا, مَهْمَا, إِذْمَا, أَيْنَمَا, مَتَى, كَيْفَمَا, أَيٌّ, حَيْثُمَا). The sign of Jazm is the sukoon (ْ), deletion of نون for the five verb forms, or deletion of the weak letter for defective verbs.",
    backHome: "← Back to Home",
    prevLesson: "← Lesson 7",
    nextLesson: "Lesson 9 →",
  },

  ur: {
    title: "فعل کے جزم ہونے کی تمام وجوہات",
    arabicTitle: "أسباب الجَزْم",
    level: "لیول 2 — اعراب",
    lessonNumber: "سبق 8",
    intro:
      "جزم عربی کی چار اعرابی حالتوں میں منفرد ہے — یہ صرف افعال پر لاگو ہوتا ہے، اسموں پر نہیں۔ جزم کی علامت آخری حرف پر سکون (ْ)، یا افعال خمسہ میں نون کا حذف، یا معتل آخر افعال میں حرف علت کا حذف ہے۔ جزم کے اسباب دو قسموں میں تقسیم ہوتے ہیں: ایک فعل کو جزم دینے والے عوامل اور دو افعال کو جزم دینے والے عوامل (شرط اور جواب)۔",
    goldenRule:
      "جزم صرف فعل مضارع پر آتا ہے — نہ اسم پر، نہ فعل ماضی پر۔ اس کی علامت سکون (ْ) ہے، یا افعال خمسہ میں نون کا حذف، یا معتل آخر افعال میں حرف علت (و/ا/ی) کا حذف۔",
    cat1Title: "قسم اول — ایک فعل کو جزم دینے والے عوامل",
    cat1Subtitle: "عوامل جازمة لفعل واحد",
    cat2Title: "قسم دوم — دو افعال کو جزم دینے والے عوامل (شرط)",
    cat2Subtitle: "عوامل جازمة لفعلين",
    reasons: [
      // ── CATEGORY 1 ──
      {
        id: "8.1",
        category: 1,
        term: "لَمْ",
        name: "لَمْ — نہیں کیا (ماضی کی نفی)",
        definition:
          "لَمْ حرف نفی ہے جو فعل مضارع کو جزم دے کر اسے ماضی کا معنی دیتا ہے — 'نہیں کیا'۔ یہ کسی مکمل ہو چکے کام کی نفی کرتا ہے۔ لَمْ کے بعد فعل مضارع جزم میں ہوتا ہے۔",
        quranicArabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        quranicRef: "سورۃ الاخلاص (۱۱۲:۳)",
        quranicTrans: "نہ اس نے کسی کو جنا اور نہ وہ جنا گیا۔",
        jazmSign: "يَلِدْ — د پر سکون | يُولَدْ — د پر سکون",
        jazmRole: "مجزوم فعل بعد از لَمْ",
        note:
          "لَمْ نے يَلِدُ اور يُولَدُ دونوں کو جزم دی — آخری حرف د پر سکون آ گیا۔ یہ قرآن کریم کا سب سے مختصر اور جامع عقیدہ توحید ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.2",
        category: 1,
        term: "لَمَّا",
        name: "لَمَّا — ابھی تک نہیں (جاری نفی)",
        definition:
          "لَمَّا بھی لَمْ کی طرح فعل مضارع کو جزم دے کر ماضی کا معنی دیتا ہے، لیکن اس میں ایک اضافی پہلو ہے — نفی ابھی بھی جاری ہو سکتی ہے ('ابھی تک نہیں')۔ یعنی وہ کام ابھی تک نہیں ہوا۔",
        quranicArabic: "بَلْ لَّمَّا يَذُوقُوا عَذَابِ",
        quranicRef: "سورۃ ص (۳۸:۸)",
        quranicTrans: "بلکہ انہوں نے ابھی تک میرا عذاب نہیں چکھا۔",
        jazmSign: "يَذُوقُوا — نون کا حذف (افعال خمسہ)",
        jazmRole: "مجزوم فعل بعد از لَمَّا",
        note:
          "لَمَّا نے يَذُوقُوا کو جزم دی — یہ افعال خمسہ میں سے ہے، اس لیے جزم کی علامت نون کا حذف ہے (اصل شکل يَذُوقُونَ)۔ مطلب: انہوں نے ابھی عذاب نہیں چکھا — لیکن چکھیں گے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.3",
        category: 1,
        term: "لَا النَّاهِيَة",
        name: "لَا نَاہِیَہ — مت کرو (ناہی لا)",
        definition:
          "لَا النَّاهِيَة (ناہی لا) کسی کام سے منع کرنے کے لیے آتی ہے۔ یہ فعل مضارع کو جزم دے کر اسے نہی (ممانعت) بناتی ہے۔ زیادہ تر مخاطب (تم) کے لیے آتی ہے۔",
        quranicArabic: "وَلَا تَقْرَبُوا الزِّنَىٰ",
        quranicRef: "سورۃ الاسراء (۱۷:۳۲)",
        quranicTrans: "اور زنا کے قریب بھی مت جاؤ۔",
        jazmSign: "تَقْرَبُوا — نون کا حذف (افعال خمسہ)",
        jazmRole: "مجزوم فعل بعد از لَا النَّاهِيَة",
        note:
          "لَا النَّاهِيَة نے تَقْرَبُوا کو جزم دی — اصل شکل تَقْرَبُونَ کا نون حذف ہو گیا۔ غور کریں: لَا نے صرف کام کرنے سے نہیں، بلکہ قریب جانے سے بھی منع کیا — یہ قرآن کے احکام کی جامعیت ظاہر کرتا ہے۔",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.4",
        category: 1,
        term: "لَامُ الأَمْر",
        name: "لامِ امر — وہ کرے / وہ کریں",
        definition:
          "لَامُ الأَمْر وہ لام ہے جو فعل مضارع کو جزم دے کر تیسرے شخص (یا پہلے شخص) کا حکم بناتا ہے — 'وہ کرے'، 'وہ لوگ کریں'، 'ہم کریں'۔ کبھی کبھی اس سے پہلے واو یا فاء آنے پر یہ لِ ہو جاتا ہے۔",
        quranicArabic: "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ",
        quranicRef: "سورۃ الطلاق (۶۵:۷)",
        quranicTrans: "چاہیے کہ خوش حال شخص اپنی خوش حالی میں سے خرچ کرے۔",
        jazmSign: "يُنفِقْ — ق پر سکون",
        jazmRole: "مجزوم فعل بعد از لَامُ الأَمْر (لِ)",
        note:
          "لِ (لامِ امر) نے يُنفِقُ کو جزم دی — ق پر سکون آ گیا۔ یہ تیسرے شخص کا حکم ہے۔ لَا النَّاهِيَة سے اس کا فرق: یہ حکم ہے، وہ ممانعت۔ لَمْ سے فرق: یہ ماضی کا معنی نہیں دیتا۔",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.5",
        category: 1,
        term: "فِعْلُ الأَمْر",
        name: "فعل امر — خود جزم میں ہوتا ہے",
        definition:
          "فعل امر اپنی ساخت کے اعتبار سے خود جزم میں ہوتا ہے — یہ فعل مضارع پر جزم لگا کر پھر سابقہ حذف کر کے بنایا جاتا ہے۔ یہ دوسرے شخص (تم) کے لیے براہ راست حکم ہے۔",
        quranicArabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
        quranicRef: "سورۃ العلق (۹۶:۱)",
        quranicTrans: "پڑھو اپنے رب کے نام سے جس نے پیدا کیا۔",
        jazmSign: "اقْرَأْ — أ (ہمزہ) پر سکون",
        jazmRole: "فعل امر — بذاتِ خود مجزوم",
        note:
          "اقْرَأْ فعل قَرَأَ کا امر ہے۔ فعل مضارع يَقْرَأُ پر جزم لگا کر (أ پر سکون) پھر يَ سابقہ حذف کر کے همزة الوصل لگائی گئی۔ قرآن کا پہلا نازل شدہ لفظ خود ایک مجزوم امر ہے — اقرأ!",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },

      // ── CATEGORY 2 ──
      {
        id: "8.6",
        category: 2,
        term: "إِنْ",
        name: "إِنْ — اگر (بنیادی شرطیہ حرف)",
        definition:
          "إِنْ عربی کا بنیادی شرطیہ حرف ہے۔ یہ دو افعال کو جزم دیتا ہے: فعل شرط اور جواب شرط (فعل جزاء)۔ دونوں مضارع افعال جزم میں ہوتے ہیں۔ إِنْ حقیقی اور کھلی شرط کے لیے استعمال ہوتا ہے۔",
        quranicArabic: "إِن تَنصُرُوا اللهَ يَنصُرْكُمْ",
        quranicRef: "سورۃ محمد (۴۷:۷)",
        quranicTrans: "اگر تم اللہ کی مدد کرو تو وہ تمہاری مدد کرے گا۔",
        jazmSign: "تَنصُرُوا — نون کا حذف (شرط) | يَنصُرْكُمْ — ر پر سکون (جواب)",
        jazmRole: "شرط اور جواب دونوں پر جزم",
        note:
          "إِنْ نے دو افعال کو جزم دیا: تَنصُرُوا (شرط — نون کا حذف) اور يَنصُرْكُمْ (جواب — ر پر سکون)۔ یہ عربی کا سب سے اہم شرطیہ اسلوب ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.7",
        category: 2,
        term: "مَنْ",
        name: "مَنْ — جو کوئی (اشخاص کے لیے)",
        definition:
          "مَنْ بطور شرطیہ حرف 'جو کوئی' کا معنی دیتا ہے اور دو افعال کو جزم دیتا ہے۔ یہ انسانوں کے لیے استعمال ہوتا ہے۔ شرط اور جواب دونوں مجزوم ہوتے ہیں۔",
        quranicArabic: "مَن يَعْمَلْ سُوءًا يُجْزَ بِهِ",
        quranicRef: "سورۃ النساء (۴:۱۲۳)",
        quranicTrans: "جو کوئی برائی کرے گا اسے اس کا بدلہ دیا جائے گا۔",
        jazmSign: "يَعْمَلْ — ل پر سکون | يُجْزَ — حرف علت کا حذف (معتل آخر)",
        jazmRole: "مَنْ کے بعد دونوں افعال پر جزم",
        note:
          "مَنْ نے يَعْمَلْ (سکون — شرط) اور يُجْزَ (جواب — معتل آخر فعل، الف کا حذف) کو جزم دیا۔ یہ آیت الٰہی عدل کا بیان ہے — کوئی عمل حساب کتاب سے نہیں بچتا۔",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.8",
        category: 2,
        term: "مَا",
        name: "مَا — جو کچھ (اشیاء کے لیے)",
        definition:
          "مَا بطور شرطیہ حرف 'جو کچھ' کا معنی دیتا ہے اور دو افعال کو جزم دیتا ہے۔ یہ غیر عاقل اشیاء اور تصورات کے لیے استعمال ہوتا ہے۔ شرط اور جواب دونوں مجزوم ہوتے ہیں۔",
        quranicArabic: "وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللهُ",
        quranicRef: "سورۃ البقرہ (۲:۱۹۷)",
        quranicTrans: "اور جو بھلائی تم کرو اللہ اسے جانتا ہے۔",
        jazmSign: "تَفْعَلُوا — نون کا حذف | يَعْلَمْهُ — م پر سکون",
        jazmRole: "مَا کے بعد دونوں افعال پر جزم",
        note:
          "مَا نے تَفْعَلُوا (شرط، نون کا حذف) اور يَعْلَمْهُ (جواب، م پر سکون) کو جزم دیا۔ پیغام: نیکی کا ہر چھوٹا سے چھوٹا عمل بھی اللہ کے علم میں ہے۔",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.9",
        category: 2,
        term: "مَهْمَا",
        name: "مَهْمَا — چاہے جو کچھ ہو",
        definition:
          "مَهْمَا شرطیہ حرف ہے جس کا معنی 'چاہے جو کچھ ہو' یا 'خواہ کچھ بھی ہو' ہے۔ مَا سے زیادہ جامع معنی رکھتا ہے۔ دونوں افعال — شرط اور جواب — کو جزم دیتا ہے۔",
        quranicArabic: "وَقَالُوا مَهْمَا تَأْتِنَا بِهِ مِن آيَةٍ لِّتَسْحَرَنَا بِهَا فَمَا نَحْنُ لَكَ بِمُؤْمِنِينَ",
        quranicRef: "سورۃ الاعراف (۷:۱۳۲)",
        quranicTrans: "انہوں نے کہا: تم ہمارے پاس جو بھی نشانی لے کر آؤ جادو کرنے کے لیے — ہم تم پر ایمان نہیں لائیں گے۔",
        jazmSign: "تَأْتِنَا — حرف علت کا حذف (معتل آخر، شرط)",
        jazmRole: "مَهْمَا کے بعد شرط پر جزم",
        note:
          "مَهْمَا نے تَأْتِنَا کو جزم دیا — یہ معتل آخر فعل ہے، حرف علت کا حذف جزم کی علامت ہے۔ فرعون کی قوم نے موسیٰ علیہ السلام کو چیلنج کیا — چاہے کوئی بھی معجزہ لاؤ، ہم نہیں مانیں گے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.10",
        category: 2,
        term: "إِذْمَا",
        name: "إِذْمَا — جب بھی (شرطیہ)",
        definition:
          "إِذْمَا شرطیہ حرف ہے جس کا معنی 'جب بھی' یا 'اگر کبھی' ہے۔ یہ إِذْ + مَا سے بنا ہے۔ دونوں افعال کو جزم دیتا ہے۔ دیگر شرطیہ حروف کے مقابلے میں کم استعمال ہوتا ہے لیکن گرامر میں معروف ہے۔",
        quranicArabic: "إِن تَتَّقُوا اللهَ يَجْعَل لَّكُمْ فُرْقَانًا",
        quranicRef: "سورۃ الانفال (۸:۲۹) — دو فعلی جزم کا نمونہ",
        quranicTrans: "اگر تم اللہ سے ڈرو تو وہ تمہارے لیے فرقان (حق و باطل میں فرق کرنے کی صلاحیت) بنا دے گا۔",
        jazmSign: "تَتَّقُوا — نون کا حذف | يَجْعَل — ل پر سکون",
        jazmRole: "دو فعلی جزم (إِذْمَا کا نمونہ)",
        note:
          "إِذْمَا إِنْ جیسا ہی دو فعلی جزم دیتا ہے۔ جب بھی کوئی شرطیہ حرف آئے، شرط اور جواب دونوں مجزوم ہوتے ہیں۔",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.11",
        category: 2,
        term: "أَيْنَمَا",
        name: "أَيْنَمَا — جہاں کہیں بھی",
        definition:
          "أَيْنَمَا مکان کا شرطیہ حرف ہے جس کا معنی 'جہاں کہیں بھی' ہے۔ دونوں افعال — شرط اور جواب — کو جزم دیتا ہے۔ یہ تمام مقامات کو بغیر استثناء شامل کرتا ہے۔",
        quranicArabic: "أَيْنَمَا تَكُونُوا يُدْرِككُّمُ الْمَوْتُ",
        quranicRef: "سورۃ النساء (۴:۷۸)",
        quranicTrans: "تم جہاں کہیں بھی ہو موت تم کو آ پکڑے گی۔",
        jazmSign: "تَكُونُوا — نون کا حذف | يُدْرِككُّمُ — مجزوم (جواب)",
        jazmRole: "أَيْنَمَا کے بعد دونوں افعال پر جزم",
        note:
          "أَيْنَمَا نے تَكُونُوا (شرط — نون کا حذف) اور يُدْرِككُّمُ (جواب — مجزوم) کو جزم دیا۔ یہ آیت یاد دلاتی ہے: موت ہر جگہ پہنچتی ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.12",
        category: 2,
        term: "مَتَى / أَيَّانَ",
        name: "مَتَى / أَيَّانَ — جب کبھی بھی",
        definition:
          "مَتَى اور أَيَّانَ وقت کے شرطیہ حروف ہیں جن کا معنی 'جب کبھی' یا 'جس وقت بھی' ہے۔ دونوں دو افعال کو جزم دیتے ہیں۔ مَتَى کلاسیکی استعمال میں زیادہ عام ہے۔",
        quranicArabic: "وَإِن طَائِفَتَانِ مِنَ الْمُؤْمِنِينَ اقْتَتَلُوا فَأَصْلِحُوا بَيْنَهُمَا",
        quranicRef: "سورۃ الحجرات (۴۹:۹) — وقتی شرط کا نمونہ",
        quranicTrans: "اور اگر مومنوں کے دو گروہ آپس میں لڑ پڑیں تو ان میں صلح کراؤ۔",
        jazmSign: "وقتی شرط میں دو فعلی جزم کا نمونہ",
        jazmRole: "مَتَى / أَيَّانَ کے بعد دونوں افعال پر جزم",
        note:
          "مَتَى اور أَيَّانَ دونوں ایک جیسا دو فعلی جزم دیتے ہیں۔ جب بھی شرط متعارف ہو، شرط اور جواب دونوں مجزوم ہوتے ہیں۔ یہ قرآن میں کم لیکن کلاسیکی گرامر میں قائم ہیں۔",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.13",
        category: 2,
        term: "كَيْفَمَا",
        name: "كَيْفَمَا — جیسے بھی / خواہ کیسے بھی",
        definition:
          "كَيْفَمَا طریقے کا شرطیہ حرف ہے جس کا معنی 'جیسے بھی' یا 'کسی بھی طریقے سے' ہے۔ یہ دو افعال کو جزم دیتا ہے۔ یہ کسی کام کے تمام ممکنہ طریقوں کو شامل کرتا ہے۔",
        quranicArabic: "فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللهِ",
        quranicRef: "سورۃ البقرہ (۲:۱۱۵) — طریقے/مقام کی شرط",
        quranicTrans: "تو جدھر بھی تم منہ کرو، ادھر ہی اللہ کا رخ ہے۔",
        jazmSign: "تُوَلُّوا — نون کا حذف (شرط، مجزوم)",
        jazmRole: "كَيْفَمَا / أَيْنَمَا کے بعد شرط پر جزم",
        note:
          "كَيْفَمَا بھی دیگر شرطیہ حروف کی طرح دونوں افعال کو جزم دیتا ہے۔ تُوَلُّوا مجزوم ہے (نون کا حذف)، جواب اسمیہ جملہ ہے — فَثَمَّ وَجْهُ اللهِ۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "8.14",
        category: 2,
        term: "أَيٌّ",
        name: "أَيٌّ — جو بھی / جس قسم کا بھی",
        definition:
          "أَيٌّ شرطیہ حرف ہے جس کا معنی 'جو بھی' یا 'جس قسم کا بھی' ہے۔ یہ دیگر شرطیہ حروف سے منفرد ہے کیونکہ یہ اسم ہے اور جملے میں اپنے کردار کے مطابق اعراب لیتا ہے۔ شرط اور جواب دونوں کو جزم دیتا ہے۔",
        quranicArabic: "أَيًّا مَّا تَدْعُوا فَلَهُ الْأَسْمَاءُ الْحُسْنَىٰ",
        quranicRef: "سورۃ الاسراء (۱۷:۱۱۰)",
        quranicTrans: "تم جو بھی (نام) پکارو — سب خوبصورت نام اسی کے ہیں۔",
        jazmSign: "تَدْعُوا — حرف علت و کا حذف (معتل آخر، شرط)",
        jazmRole: "أَيٌّ کے بعد شرط پر جزم",
        note:
          "أَيًّا نے تَدْعُوا کو جزم دیا — معتل آخر فعل، حرف علت و حذف ہو گئی۔ جواب اسمیہ جملہ ہے — فَلَهُ الْأَسْمَاءُ الْحُسْنَىٰ۔ یہ آیت سکھاتی ہے: اللہ کو کسی بھی نام سے پکارو، سب اسی کے ہیں۔",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        id: "8.15",
        category: 2,
        term: "حَيْثُمَا",
        name: "حَيْثُمَا — جہاں کہیں بھی (مقام)",
        definition:
          "حَيْثُمَا مقام کا شرطیہ حرف ہے جس کا معنی 'جہاں کہیں بھی' ہے۔ یہ دو افعال کو جزم دیتا ہے۔ أَيْنَمَا کا ہم معنی لیکن مختلف اسلوب میں استعمال ہوتا ہے۔",
        quranicArabic: "وَحَيْثُ مَا كُنتُمْ فَوَلُّوا وُجُوهَكُمْ شَطْرَهُ",
        quranicRef: "سورۃ البقرہ (۲:۱۵۰)",
        quranicTrans: "اور تم جہاں کہیں بھی ہو اپنے چہرے اس (مسجد الحرام) کی طرف پھیر لو۔",
        jazmSign: "كُنتُمْ — شرط فعل (مجزوم) | فَوَلُّوا — امر بطور جواب",
        jazmRole: "حَيْثُمَا کے بعد شرط پر جزم",
        note:
          "حَيْثُمَا نے شرط فعل کو جزم دیا۔ جواب فَوَلُّوا امر ہے جو بذاتِ خود مجزوم ہوتا ہے۔ یہ آیت ہر مسلمان کو ہر جگہ قبلہ رخ ہونے کا حکم دیتی ہے — ایک عالمی شرط۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],

    // ── JAZM SIGNS ──
    jazmSignsTitle: "جزم کی علامات — پہچان کا طریقہ",
    jazmSigns: [
      {
        sign: "السُّكُون ْ",
        name: "سکون",
        desc: "سب سے عام علامت۔ صحیح فعل (جس کے آخر میں کوئی کمزور حرف نہ ہو) کے آخری حرف پر سکون لگتا ہے۔",
        example: "يَعْلَمْ / يَكْتُبْ / يَذْهَبْ",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        sign: "حَذْف النُّون",
        name: "نون کا حذف",
        desc: "افعال خمسہ (الأفعال الخمسة) میں جزم کی علامت نون کا حذف ہے۔ یہ پانچ صیغے ہیں: يَفْعَلُونَ، تَفْعَلُونَ، يَفْعَلَانِ، تَفْعَلَانِ، تَفْعَلِينَ۔",
        example: "يَفْعَلُونَ ← يَفْعَلُوا",
        color: LEVEL_DARK,
        border: "#a78bfa",
        text: "#ede9fe",
      },
      {
        sign: "حَذْف حَرْف العِلَّة",
        name: "حرف علت کا حذف",
        desc: "معتل آخر افعال (جن کے آخر میں و/ا/ی ہو) میں جزم کی علامت آخری حرف علت کا حذف ہے۔",
        example: "يَدْعُو ← يَدْعُ | يَخْشَى ← يَخْشَ | يَرْمِي ← يَرْمِ",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
    ],

    summaryTitle: "خلاصہ جدول — جزم کی تمام وجوہات",
    summaryHeaders: ["نمبر", "حرف / صیغہ", "معنی", "جزم", "قرآنی مثال", "جزم کی علامت", "ترجمہ"],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "جزم صرف فعل مضارع پر آتا ہے — نہ اسم پر، نہ فعل ماضی پر۔ اس کے دو زمرے ہیں: پانچ عوامل جو ایک فعل کو جزم دیتے ہیں (لَمْ، لَمَّا، لَا نَاہِیَہ، لَامُ الأَمْر، اور فعل امر بذاتِ خود)، اور دس عوامل جو دو افعال کو جزم دیتے ہیں — شرط اور جواب (إِنْ، مَنْ، مَا، مَهْمَا، إِذْمَا، أَيْنَمَا، مَتَى، كَيْفَمَا، أَيٌّ، حَيْثُمَا)۔ جزم کی علامت سکون (ْ)، افعال خمسہ میں نون کا حذف، یا معتل آخر افعال میں حرف علت کا حذف ہے۔",
    backHome: "← گھر واپس",
    prevLesson: "← سبق ۷",
    nextLesson: "سبق ۹ →",
  },
};

// ─────────────────────────────────────────────
//  JAZM SIGNS COMPONENT
// ─────────────────────────────────────────────
function JazmSignsBox({ c, isUrdu }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: `1px solid ${LEVEL_BORDER}`,
        borderRadius: "14px",
        padding: "26px",
        marginBottom: "36px",
      }}
    >
      <h2
        className={isUrdu ? "urdu" : ""}
        style={{
          fontSize: "18px",
          fontWeight: "700",
          color: LEVEL_BORDER,
          marginBottom: "20px",
          direction: isUrdu ? "rtl" : "ltr",
          textAlign: isUrdu ? "right" : "left",
        }}
      >
        ✳️ {c.jazmSignsTitle}
      </h2>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {c.jazmSigns.map((s, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 220px",
              backgroundColor: s.color,
              border: `1px solid ${s.border}`,
              borderRadius: "10px",
              padding: "16px 18px",
            }}
          >
            <div className="arabic" style={{ fontSize: "22px", color: s.border, marginBottom: "6px" }}>
              {s.sign}
            </div>
            <div
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "13px", fontWeight: "700", color: s.text, marginBottom: "6px" }}
            >
              {s.name}
            </div>
            <div
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "12px", color: s.text, opacity: 0.8, lineHeight: "1.7", marginBottom: "8px", direction: isUrdu ? "rtl" : "ltr" }}
            >
              {s.desc}
            </div>
            <div
              className="arabic"
              style={{
                fontSize: "14px",
                color: s.border,
                backgroundColor: "rgba(0,0,0,0.2)",
                borderRadius: "6px",
                padding: "6px 10px",
                direction: "rtl",
              }}
            >
              {s.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  CATEGORY HEADER COMPONENT
// ─────────────────────────────────────────────
function CategoryHeader({ title, subtitle, isUrdu }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${LEVEL_DARK}, #2a1550)`,
        border: `1px solid ${LEVEL_BORDER}`,
        borderRadius: "12px",
        padding: "18px 24px",
        marginBottom: "24px",
        marginTop: "8px",
      }}
    >
      <h2
        className={isUrdu ? "urdu" : ""}
        style={{
          fontSize: "19px",
          fontWeight: "700",
          color: LEVEL_TEXT,
          marginBottom: "4px",
          direction: isUrdu ? "rtl" : "ltr",
        }}
      >
        {title}
      </h2>
      <div className="arabic" style={{ fontSize: "15px", color: LEVEL_BORDER, opacity: 0.9 }}>
        {subtitle}
      </div>
    </div>
  );
}

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
          <span className="arabic" style={{ fontSize: "22px", color: reason.text, fontWeight: "700" }}>
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
            <span
              className={isUrdu ? "urdu" : "arabic"}
              style={{ marginRight: isUrdu ? "4px" : "0", marginLeft: isUrdu ? "0" : "4px" }}
            >
              {reason.jazmRole}
            </span>
          </span>
        </div>

        {/* Quranic example */}
        <div
          style={{
            background: "linear-gradient(135deg, #0d0520, #130830)",
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

        {/* Jazm sign highlight */}
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
              color: LEVEL_DARK,
              borderRadius: "4px",
              padding: "2px 8px",
              fontSize: "11px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            {isUrdu ? "علامت جزم" : "Jazm Sign"}
          </span>
          <span className="arabic" style={{ fontSize: "14px", color: reason.border }}>
            {reason.jazmSign}
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
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", color: LEVEL_BORDER, fontWeight: "700", textAlign: "center" }}>
                {r.id}
              </td>
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)" }}>
                <div className="arabic" style={{ fontSize: "18px", color: r.border, marginBottom: "2px" }}>{r.term}</div>
                <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{r.name}</div>
              </td>
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)" }}>
                <span
                  style={{
                    backgroundColor: r.category === 1 ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.08)",
                    border: `1px solid ${r.border}`,
                    borderRadius: "12px",
                    padding: "3px 10px",
                    fontSize: "11px",
                    color: r.text,
                    whiteSpace: "nowrap",
                  }}
                >
                  {isUrdu
                    ? (r.category === 1 ? "ایک فعل" : "دو افعال")
                    : (r.category === 1 ? "1 Verb" : "2 Verbs")}
                </span>
              </td>
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", textAlign: "center" }}>
                <div className="arabic" style={{ fontSize: "14px", color: r.text, backgroundColor: r.color, borderRadius: "6px", padding: "6px 10px", display: "inline-block", border: `1px solid ${r.border}` }}>
                  {r.quranicArabic.length > 25 ? r.quranicArabic.slice(0, 25) + "…" : r.quranicArabic}
                </div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)", marginTop: "4px" }}>{r.quranicRef}</div>
              </td>
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)" }}>
                <span className="arabic" style={{ fontSize: "12px", color: r.border }}>{r.jazmSign}</span>
              </td>
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

  const cat1Reasons = c.reasons.filter((r) => r.category === 1);
  const cat2Reasons = c.reasons.filter((r) => r.category === 2);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
      <Navbar currentLesson={8} />

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
            background: "linear-gradient(135deg, #0d0520, #180a38)",
            border: `1px solid ${LEVEL_BORDER}`,
            borderRadius: "12px",
            padding: "24px 32px",
            marginBottom: "32px",
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

        {/* ── Jazm Signs Box ── */}
        <JazmSignsBox c={c} isUrdu={isUrdu} />

        {/* ── Category 1 ── */}
        <CategoryHeader title={c.cat1Title} subtitle={c.cat1Subtitle} isUrdu={isUrdu} />
        {cat1Reasons.map((reason, i) => (
          <ReasonCard key={i} reason={reason} isUrdu={isUrdu} />
        ))}

        {/* ── Category 2 ── */}
        <CategoryHeader title={c.cat2Title} subtitle={c.cat2Subtitle} isUrdu={isUrdu} />
        {cat2Reasons.map((reason, i) => (
          <ReasonCard key={i} reason={reason} isUrdu={isUrdu} />
        ))}

        {/* ── Summary Table ── */}
        <SummaryTable c={c} isUrdu={isUrdu} />

        {/* ── Key Takeaway ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #0d0520, #180a38)",
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
            ✅ {isUrdu ? "اہم نکتہ" : "Key Takeaway"}
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
            href="/lessons/7"
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
            href="/lessons/9"
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

export default function Lesson8() {
  return (
    <LanguageProvider>
      <LessonContent />
    </LanguageProvider>
  );
}
