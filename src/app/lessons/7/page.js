"use client";

import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Footer from "../../../components/Footer";

const LEVEL_COLOR = "#0B4A2E";
const LEVEL_BORDER = "#1D9E75";
const LEVEL_TEXT = "#9FE1CB";
const LEVEL_LIGHT = "#E0F7F0";
const LEVEL_DARK = "#041F13";

// ─────────────────────────────────────────────
//  LESSON DATA
// ─────────────────────────────────────────────
const lessonContent = {
  en: {
    title: "All Reasons for Jarr (Genitive Case)",
    arabicTitle: "أسباب الجَرّ",
    level: "Level 2 — Case Endings",
    lessonNumber: "Lesson 7",
    intro:
      "Jarr (جر) is the genitive case in Arabic — marked by a kasra (ِ) or its equivalent. Unlike Raf' and Nasb which have many triggers, Jarr has only three causes: a preceding preposition (حرف جر), the genitive construction (إضافة), and following a Majrur noun as one of the four followers (توابع). This lesson covers all three in depth, with every major preposition and Quranic evidence for each.",
    goldenRule:
      "A noun receives Jarr in only three situations: (1) it follows a preposition (حرف جر), (2) it is the second noun in a possessive/genitive construction (المضاف إليه), or (3) it follows a Majrur noun as a Tābi' (follower). Its sign is the kasra (ِ) — a small stroke below the final letter, or tanween kasra (ٍ) for indefinite nouns.",
    reasonsTitle: "The Reasons for Jarr",
    reasons: [
      {
        id: "7.1",
        term: "حُرُوف الجَرّ",
        name: "Hurūf Al-Jarr — Prepositions",
        definition:
          "A preposition (حرف جر) is a particle that places the following noun into the Jarr (genitive) case. Arabic has around 20 prepositions, each carrying its own distinct meaning. The noun that follows a preposition is called the Majrur (مجرور) and always takes a kasra or its equivalent.",
        quranicArabic: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ",
        quranicRef: "Surah Al-Fatiha (1:1)",
        quranicTrans: "In the name of Allah, the Most Gracious, the Most Merciful.",
        jarrSign: "اللهِ — kasra on ه",
        jarrRole: "Majrur after حرف جر (بِ)",
        note:
          "بِسْمِ contains the preposition بِ (in/with). اسمِ is Majrur — kasra on م. Then اللهِ is Majrur by إضافة (genitive construction). This opening verse beautifully demonstrates both major causes of Jarr together.",
        prepositionTable: true,
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "7.1a",
        term: "مِنْ",
        name: "Min — From / Of",
        definition:
          "مِنْ indicates origin, source, starting point, or partitive meaning ('some of'). It is one of the most frequent prepositions in the Quran.",
        quranicArabic: "خَلَقَ الْإِنسَانَ مِن عَلَقٍ",
        quranicRef: "Surah Al-Alaq (96:2)",
        quranicTrans: "He created the human being from a clinging clot.",
        jarrSign: "عَلَقٍ — tanween kasra",
        jarrRole: "Majrur after مِنْ",
        note:
          "مِنْ indicates the origin — what mankind was created from. عَلَقٍ is Majrur, marked by tanween kasra (indefinite noun after a preposition).",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1b",
        term: "إِلَى",
        name: "Ilā — To / Towards",
        definition:
          "إِلَى indicates direction, destination, or a limit. It shows movement or orientation toward something.",
        quranicArabic: "وَإِلَى اللهِ تُرْجَعُ الْأُمُورُ",
        quranicRef: "Surah Al-Baqarah (2:210)",
        quranicTrans: "And to Allah all matters are returned.",
        jarrSign: "اللهِ — kasra on ه",
        jarrRole: "Majrur after إِلَى",
        note:
          "إِلَى shows the destination — all matters return TO Allah. اللهِ is Majrur, carrying a kasra under the ه.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1c",
        term: "عَنْ",
        name: "'An — From / About / Away from",
        definition:
          "عَنْ indicates separation, distance, or subject matter ('about'). It differs from مِنْ in that it implies moving away from something or discussing something.",
        quranicArabic: "وَمَا يَنطِقُ عَنِ الْهَوَىٰ",
        quranicRef: "Surah An-Najm (53:3)",
        quranicTrans: "Nor does he speak from his own desire.",
        jarrSign: "الْهَوَىٰ — kasra (alif maqsura)",
        jarrRole: "Majrur after عَنْ",
        note:
          "عَنِ الْهَوَىٰ — 'from desire'. عَنْ here indicates that the Prophet's speech is completely detached from personal desire. الْهَوَىٰ is Majrur after عَنْ.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1d",
        term: "عَلَى",
        name: "'Alā — On / Upon / Over",
        definition:
          "عَلَى indicates being on top of, over, or having authority/dominance over something. It is one of the most common prepositions in the Quran.",
        quranicArabic: "إِنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        quranicRef: "Surah Al-Baqarah (2:20)",
        quranicTrans: "Indeed, Allah is over all things competent.",
        jarrSign: "كُلِّ — kasra on ل",
        jarrRole: "Majrur after عَلَى",
        note:
          "عَلَى كُلِّ شَيْءٍ — 'over every thing'. عَلَى gives Jarr to كُلِّ (kasra on ل). شَيْءٍ is then Majrur by إضافة after كُلِّ.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1e",
        term: "فِي",
        name: "Fī — In / Inside / Within",
        definition:
          "فِي indicates location inside something, or metaphorical containment. It is used for physical place, time, or abstract concepts.",
        quranicArabic: "لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
        quranicRef: "Surah Al-Baqarah (2:284)",
        quranicTrans: "To Allah belongs whatever is in the heavens and whatever is in the earth.",
        jarrSign: "السَّمَاوَاتِ / الْأَرْضِ — kasra",
        jarrRole: "Majrur after فِي",
        note:
          "فِي السَّمَاوَاتِ and فِي الْأَرْضِ both use فِي for location — inside the heavens, inside the earth. Both nouns are Majrur with kasra.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1f",
        term: "بِ",
        name: "Bi — With / By / Through",
        definition:
          "بِ (attached to the following word) indicates accompaniment, means/instrument, or oath. It is the preposition of تعدية (making a verb transitive) and also used in Bismillah.",
        quranicArabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
        quranicRef: "Surah Al-Baqarah (2:45)",
        quranicTrans: "And seek help through patience and prayer.",
        jarrSign: "الصَّبْرِ — kasra on ر",
        jarrRole: "Majrur after بِ",
        note:
          "بِالصَّبْرِ — 'through/with patience'. The بِ is attached directly to الصَّبْرِ. It indicates the means of seeking help. الصَّبْرِ is Majrur, carrying a kasra on ر.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1g",
        term: "لِ",
        name: "Li — For / To / Belonging to",
        definition:
          "لِ (attached to the following word) indicates ownership, purpose, or benefit. It is the preposition of possession and dedication.",
        quranicArabic: "لِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ",
        quranicRef: "Surah Al-Maidah (5:120)",
        quranicTrans: "To Allah belongs the dominion of the heavens and the earth.",
        jarrSign: "لِلَّهِ — kasra on ه",
        jarrRole: "Majrur after لِ",
        note:
          "لِلَّهِ means 'belonging to / for Allah'. The لِ is merged with اللهِ. The kasra under ه marks Jarr. This construction of ownership and belonging appears hundreds of times in the Quran.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1h",
        term: "كَ",
        name: "Ka — Like / As",
        definition:
          "كَ (attached to the following word) indicates resemblance or similarity. It is the preposition of comparison (تشبيه).",
        quranicArabic: "لَيْسَ كَمِثْلِهِ شَيْءٌ",
        quranicRef: "Surah Ash-Shura (42:11)",
        quranicTrans: "There is nothing like Him.",
        jarrSign: "مِثْلِهِ — kasra on ل",
        jarrRole: "Majrur after كَ",
        note:
          "كَمِثْلِهِ — 'like His likeness'. The كَ is attached directly and gives Jarr to مِثْلِهِ. This verse is the foundational statement of Allah's absolute uniqueness — nothing resembles Him in any way.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1i",
        term: "مُنْذُ / مُذْ",
        name: "Munzu / Muz — Since / From (time)",
        definition:
          "مُنْذُ and مُذْ indicate a starting point in time — 'since' or 'from'. They give Jarr to the noun of time that follows them.",
        quranicArabic: "وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ",
        quranicRef: "Surah Al-Hashr (59:9)",
        quranicTrans: "And those who had settled in the home (Madinah) and adopted faith before them.",
        jarrSign: "قَبْلِهِمْ — kasra on ل",
        jarrRole: "Majrur after مِن (time usage)",
        note:
          "مُنْذُ/مُذْ are used in classical Arabic for time. In the Quran, مِنْ قَبْلِ similarly expresses 'since/from before'. قَبْلِهِمْ is Majrur by مِنْ with kasra on ل.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1j",
        term: "رُبَّ",
        name: "Rubba — How many / Perhaps (rhetorical)",
        definition:
          "رُبَّ is a preposition of quantity or supposition, often used rhetorically. It gives Jarr to an indefinite noun. It is less common in the Quran but important in classical Arabic.",
        quranicArabic: "رُّبَمَا يَوَدُّ الَّذِينَ كَفَرُوا",
        quranicRef: "Surah Al-Hijr (15:2)",
        quranicTrans: "Perhaps those who disbelieve will wish...",
        jarrSign: "رُّبَمَا — رب with ما attached",
        jarrRole: "Jarr by رُبَّ",
        note:
          "رُبَّ here is merged with مَا (making رُبَمَا) giving it a softer meaning of 'perhaps'. It is a preposition that places the following indefinite noun in Jarr — an important classical Arabic construction.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1k",
        term: "حَتَّى",
        name: "Hattā — Until / Up to",
        definition:
          "حَتَّى as a preposition (not a conjunction) places the following noun in Jarr. It indicates an end point, limit, or culmination.",
        quranicArabic: "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
        quranicRef: "Surah Al-Qadr (97:5)",
        quranicTrans: "Peace it is — until the emergence of dawn.",
        jarrSign: "مَطْلَعِ — kasra on ع",
        jarrRole: "Majrur after حَتَّى",
        note:
          "حَتَّى مَطْلَعِ الْفَجْرِ — 'until the break of dawn'. حَتَّى here is a preposition giving Jarr to مَطْلَعِ (kasra on ع). الْفَجْرِ is then Majrur by إضافة. This verse describes the Night of Decree (Laylat Al-Qadr).",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1l",
        term: "وَ / تَ (قَسَم)",
        name: "Wāw / Tā' of Oath — By (oath)",
        definition:
          "The واو and تاء of oath (قَسَم) are prepositions that place the following noun in Jarr. They are used to swear by something — 'by Allah', 'by the dawn'. Both give Jarr to the noun sworn by.",
        quranicArabic: "وَالْفَجْرِ ۝ وَلَيَالٍ عَشْرٍ",
        quranicRef: "Surah Al-Fajr (89:1-2)",
        quranicTrans: "By the dawn — and by the ten nights.",
        jarrSign: "الْفَجْرِ — kasra on ر",
        jarrRole: "Majrur after وَ (oath)",
        note:
          "وَالْفَجْرِ — 'By the dawn'. The وَ here is the oath واو (not the conjunction واو). It gives Jarr to الْفَجْرِ — kasra on ر. Many surahs open with these oath constructions, and every noun sworn by is in Jarr.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.2",
        term: "الإِضَافَة",
        name: "Al-Idāfa — The Genitive Construction",
        definition:
          "Idāfa is a grammatical construction in which two nouns are placed together to express possession, relationship, or specification. The first noun is the Mudaf (مضاف) and the second is the Mudaf Ilayhi (مضاف إليه). The Mudaf Ilayhi is ALWAYS in Jarr — regardless of what case the first noun carries. The Mudaf loses its tanween and the ال definite article.",
        quranicArabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        quranicRef: "Surah Al-Fatiha (1:2)",
        quranicTrans: "All praise is due to Allah, Lord of all the worlds.",
        jarrSign: "الْعَالَمِينَ — kasra/ya as Jarr sign for sound masculine plural",
        jarrRole: "Mudaf Ilayhi (Jarr by Idafa)",
        note:
          "رَبِّ is the Mudaf — it carries whatever case it is in (here Jarr itself after لِ, kasra on ب). الْعَالَمِينَ is the Mudaf Ilayhi — always in Jarr, here with ya (ين) as the Jarr sign for a sound masculine plural. This structure, Mudaf + Mudaf Ilayhi, is the second major cause of Jarr.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "7.2a",
        term: "المُضَاف إِلَيْه — مثال ٢",
        name: "Mudaf Ilayhi — Further Examples",
        definition:
          "The Mudaf Ilayhi always takes Jarr regardless of its own function or how many levels of Idafa are stacked. Even when multiple possessive constructions are chained, every second noun takes Jarr.",
        quranicArabic: "إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
        quranicRef: "Surah Al-An'am (6:162)",
        quranicTrans: "Indeed, my prayer, my rites, my living, and my dying are for Allah, Lord of all the worlds.",
        jarrSign: "صَلَاتِي / نُسُكِي / مَحْيَايَ / مَمَاتِي — all Mudaf Ilayhi with يَ (my)",
        jarrRole: "Mudaf Ilayhi — chained Idafa",
        note:
          "Each of صَلَاتِي، نُسُكِي، مَحْيَايَ، مَمَاتِي is an Idafa where the pronoun يَ (my) is the Mudaf Ilayhi in Jarr. This verse beautifully shows how Idafa chains work — the یَ (me/my) appears as a Jarr pronoun suffix each time.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.3",
        term: "التَّابِع — النَّعْت",
        name: "Al-Na't — Adjective following a Majrur noun",
        definition:
          "An adjective (Na't) always agrees with the noun it describes in case, gender, number, and definiteness. When the noun it describes (Man'ut) is in Jarr, the Na't is also in Jarr. This is the إتباع (following) principle applied to Jarr.",
        quranicArabic: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ",
        quranicRef: "Surah Al-Fatiha (1:1)",
        quranicTrans: "In the name of Allah, the Most Gracious, the Most Merciful.",
        jarrSign: "الرَّحْمَٰنِ الرَّحِيمِ — kasra on ن and م",
        jarrRole: "Na't in Jarr (following اللهِ)",
        note:
          "اللهِ is the Mudaf Ilayhi — in Jarr (kasra). الرَّحْمَٰنِ and الرَّحِيمِ are Na't (adjectives) describing اللهِ — both follow it into Jarr. Kasra on the final letters of both confirms their Jarr. This is the most recited verse in the Quran.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "7.4",
        term: "التَّابِع — البَدَل",
        name: "Al-Badal — Substitute following a Majrur noun",
        definition:
          "A Badal (substitute/appositive) follows the noun it replaces or clarifies (Mubdal Minh) and always matches its case. When the Mubdal Minh is in Jarr, the Badal is also in Jarr.",
        quranicArabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
        quranicRef: "Surah Al-Fatiha (1:6-7)",
        quranicTrans: "Guide us to the straight path — the path of those whom You have blessed.",
        jarrSign: "صِرَاطَ الَّذِينَ — Badal following a Majrur noun",
        jarrRole: "Badal in Jarr",
        note:
          "When الصِّرَاطَ is Majrur (after إلى implied), صِرَاطَ الَّذِينَ as Badal must also be in Jarr. The Badal clarifies which path is meant — the path of the blessed. It matches the Mubdal Minh in case.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.5",
        term: "التَّابِع — التَّوْكِيد",
        name: "Al-Tawkid — Emphatic noun following a Majrur noun",
        definition:
          "Tawkid (emphasis) follows its antecedent (Mu'akkad) in case. When the Mu'akkad is in Jarr, the Tawkid is also in Jarr. Emphatic words like نَفْسُ، عَيْنُ، كُلُّ، جَمِيعُ match the case of the noun they emphasise.",
        quranicArabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
        quranicRef: "Surah Al-Hijr (15:30)",
        quranicTrans: "So the angels all prostrated — every single one of them.",
        jarrSign: "كُلِّهِمْ — kasra when following a Majrur noun",
        jarrRole: "Tawkid in Jarr",
        note:
          "When كُلّ follows a noun in Jarr (e.g. after a preposition), it also takes Jarr: كُلِّهِمْ (kasra on ل). The Tawkid always mirrors the case of the noun it emphasises. Here shown in Raf' context; in Jarr contexts كُلِّ follows with kasra.",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "7.6",
        term: "التَّابِع — العَطْف",
        name: "Al-'Atf — Conjoined noun following a Majrur noun",
        definition:
          "When two nouns are joined by a conjunction (حرف عطف) such as وَ (and), فَ (then), or ثُمَّ (then), the second noun (Ma'tuf) matches the case of the first (Ma'tuf 'Alayh). If the first is in Jarr, the second must also be in Jarr.",
        quranicArabic: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ",
        quranicRef: "Quran — General",
        quranicTrans: "In the name of Allah, the Most Gracious, the Most Merciful.",
        jarrSign: "وَالسَّمَاءِ وَالْأَرْضِ — both in Jarr after وَ (Atf)",
        jarrRole: "'Atf in Jarr",
        note:
          "When the first conjoined noun is Majrur, the second must also be Majrur — by 'Atf. For example: مِنَ السَّمَاءِ وَالْأَرْضِ — السَّمَاءِ is Majrur after مِنْ; وَالْأَرْضِ is Ma'tuf following it into Jarr. The وَ here is 'Atf, not a separate preposition.",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
    ],
    summaryTitle: "Summary Table — All Reasons for Jarr",
    summaryHeaders: ["#", "Grammar Term", "Definition", "Quranic Example", "Jarr Sign / Noun", "Translation"],
    keyTakeaway: "Key Takeaway",
    takeawayText:
      "Unlike Raf' (12 reasons) and Nasb (14 reasons), Jarr has only three fundamental causes: (1) a preposition (حرف جر) — with around 20 prepositions each carrying distinct meaning, (2) the genitive/possessive construction (إضافة) — where the Mudaf Ilayhi is always in Jarr, and (3) the four followers (توابع) — Na't, Badal, Tawkid, and 'Atf — when they follow a Majrur noun. The sign of Jarr is the kasra (ِ) or tanween kasra (ٍ) for indefinite nouns, and ya (ي) for sound masculine plurals and dual nouns.",
    backHome: "← Back to Home",
    prevLesson: "← Lesson 6",
    nextLesson: "Lesson 8 →",
  },

  ur: {
    title: "اسم کے جر ہونے کی تمام وجوہات",
    arabicTitle: "أسباب الجَرّ",
    level: "لیول 2 — اعراب",
    lessonNumber: "سبق 7",
    intro:
      "جر عربی کی وہ حالت ہے جو اسم پر زیر (کسرہ) کی صورت میں ظاہر ہوتی ہے۔ رفع اور نصب کے برعکس جن کی بہت سی وجوہات ہیں، جر کی صرف تین وجوہات ہیں: حرف جر، اضافت (مضاف الیہ)، اور تابع۔ یہ سبق تینوں وجوہات کی تفصیل بیان کرتا ہے — ہر اہم حرف جر اور قرآنی مثالوں کے ساتھ۔",
    goldenRule:
      "اسم صرف تین حالات میں جر میں آتا ہے: (۱) حرف جر کے بعد، (۲) اضافت میں مضاف الیہ بن کر، یا (۳) کسی مجرور اسم کا تابع بن کر۔ جر کی علامت زیر (ِ) ہے — آخری حرف کے نیچے چھوٹی لکیر، یا تنوین زیر (ٍ) نکرہ اسموں میں۔",
    reasonsTitle: "جر کی وجوہات",
    reasons: [
      {
        id: "7.1",
        term: "حُرُوف الجَرّ",
        name: "حروف جر — حرف جر",
        definition:
          "حرف جر وہ حرف ہے جو اپنے بعد آنے والے اسم کو جر میں ڈالے۔ عربی میں تقریباً ۲۰ حروف جر ہیں اور ہر ایک کا اپنا مخصوص معنی ہے۔ حرف جر کے بعد آنے والے اسم کو مجرور کہتے ہیں اور اس پر ہمیشہ زیر آتی ہے۔",
        quranicArabic: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ",
        quranicRef: "سورۃ الفاتحہ (۱:۱)",
        quranicTrans: "اللہ کے نام سے جو بہت مہربان، نہایت رحم والا ہے۔",
        jarrSign: "اللهِ — ہ پر زیر",
        jarrRole: "مجرور بعد از حرف جر (بِ)",
        note:
          "بِسْمِ میں حرف جر بِ ہے۔ اسمِ مجرور ہے — م پر زیر۔ پھر اللهِ اضافت سے مجرور ہے۔ یہ آیت بہترین طور پر جر کی دونوں بڑی وجوہات ایک ساتھ دکھاتی ہے۔",
        prepositionTable: true,
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "7.1a",
        term: "مِنْ",
        name: "مِنْ — سے / میں سے",
        definition:
          "مِنْ اصل، ماخذ، ابتدائی نقطہ یا جزئی معنی ظاہر کرتا ہے ('میں سے کچھ')۔ یہ قرآن میں سب سے زیادہ آنے والے حروف جر میں سے ایک ہے۔",
        quranicArabic: "خَلَقَ الْإِنسَانَ مِن عَلَقٍ",
        quranicRef: "سورۃ العلق (۹۶:۲)",
        quranicTrans: "اس نے انسان کو جمے ہوئے خون سے بنایا۔",
        jarrSign: "عَلَقٍ — تنوین زیر",
        jarrRole: "مجرور بعد از مِنْ",
        note:
          "مِنْ ماخذ بتاتا ہے — انسان کس چیز سے بنایا گیا۔ عَلَقٍ مجرور ہے اور تنوین زیر (نکرہ اسم پر حرف جر کے بعد) اس کی علامت ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1b",
        term: "إِلَى",
        name: "إِلَى — کی طرف / تک",
        definition:
          "إِلَى سمت، منزل یا حد ظاہر کرتا ہے۔ یہ کسی چیز کی طرف حرکت یا توجہ دکھاتا ہے۔",
        quranicArabic: "وَإِلَى اللهِ تُرْجَعُ الْأُمُورُ",
        quranicRef: "سورۃ البقرہ (۲:۲۱۰)",
        quranicTrans: "اور اللہ ہی کی طرف سب معاملات لوٹائے جاتے ہیں۔",
        jarrSign: "اللهِ — ہ پر زیر",
        jarrRole: "مجرور بعد از إِلَى",
        note:
          "إِلَى اللهِ — 'اللہ کی طرف'۔ إِلَى منزل بتاتا ہے — سب معاملات اللہ کی طرف لوٹتے ہیں۔ اللهِ مجرور ہے، ہ پر زیر۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1c",
        term: "عَنْ",
        name: "عَنْ — سے دور / کے بارے میں",
        definition:
          "عَنْ علیحدگی، دوری یا موضوع ('کے بارے میں') ظاہر کرتا ہے۔ یہ مِنْ سے اس لحاظ سے مختلف ہے کہ اس میں کسی چیز سے دور جانے یا کسی چیز پر گفتگو کرنے کا معنی ہے۔",
        quranicArabic: "وَمَا يَنطِقُ عَنِ الْهَوَىٰ",
        quranicRef: "سورۃ النجم (۵۳:۳)",
        quranicTrans: "اور نہ وہ اپنی خواہش سے بولتے ہیں۔",
        jarrSign: "الْهَوَىٰ — زیر (الف مقصورہ)",
        jarrRole: "مجرور بعد از عَنْ",
        note:
          "عَنِ الْهَوَىٰ — 'خواہش سے'۔ عَنْ یہاں ظاہر کرتا ہے کہ نبی کریم ﷺ کا کلام ذاتی خواہش سے بالکل الگ ہے۔ الْهَوَىٰ مجرور ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1d",
        term: "عَلَى",
        name: "عَلَى — پر / اوپر",
        definition:
          "عَلَى کسی چیز کے اوپر ہونے، اختیار رکھنے یا غلبے کا معنی دیتا ہے۔ یہ قرآن میں سب سے زیادہ آنے والے حروف جر میں سے ہے۔",
        quranicArabic: "إِنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        quranicRef: "سورۃ البقرہ (۲:۲۰)",
        quranicTrans: "بے شک اللہ ہر چیز پر قادر ہے۔",
        jarrSign: "كُلِّ — ل پر زیر",
        jarrRole: "مجرور بعد از عَلَى",
        note:
          "عَلَى كُلِّ شَيْءٍ — 'ہر چیز پر'۔ عَلَى نے كُلِّ کو جر دی (ل پر زیر)۔ شَيْءٍ پھر اضافت کی وجہ سے كُلِّ کے بعد مجرور ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1e",
        term: "فِي",
        name: "فِي — میں / اندر",
        definition:
          "فِي کسی چیز کے اندر ہونے کا معنی دیتا ہے — جگہ، وقت یا کسی تصور میں۔ یہ ظرف مکان اور ظرف زمان دونوں کے لیے استعمال ہوتا ہے۔",
        quranicArabic: "لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
        quranicRef: "سورۃ البقرہ (۲:۲۸۴)",
        quranicTrans: "اللہ کے لیے ہے جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے۔",
        jarrSign: "السَّمَاوَاتِ / الْأَرْضِ — زیر",
        jarrRole: "مجرور بعد از فِي",
        note:
          "فِي السَّمَاوَاتِ اور فِي الْأَرْضِ — 'آسمانوں میں' اور 'زمین میں'۔ دونوں جگہوں کے معنی کے لیے فِي آیا ہے۔ دونوں اسم مجرور ہیں زیر کے ساتھ۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1f",
        term: "بِ",
        name: "بِ — کے ساتھ / کے ذریعے",
        definition:
          "بِ (اگلے لفظ سے ملا ہوا) ساتھ ہونے، ذریعے یا قسم کا معنی دیتا ہے۔ یہ بسم اللہ میں بھی استعمال ہوتا ہے اور فعل کو متعدی بنانے کے لیے بھی۔",
        quranicArabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
        quranicRef: "سورۃ البقرہ (۲:۴۵)",
        quranicTrans: "اور صبر اور نماز سے مدد مانگو۔",
        jarrSign: "الصَّبْرِ — ر پر زیر",
        jarrRole: "مجرور بعد از بِ",
        note:
          "بِالصَّبْرِ — 'صبر کے ذریعے/سے'۔ بِ سیدھا الصَّبْرِ سے ملا ہوا ہے۔ یہ مدد مانگنے کا ذریعہ ظاہر کرتا ہے۔ الصَّبْرِ مجرور ہے، ر پر زیر۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1g",
        term: "لِ",
        name: "لِ — کے لیے / کا/کی",
        definition:
          "لِ (اگلے لفظ سے ملا ہوا) ملکیت، مقصد یا فائدے کا معنی دیتا ہے۔ یہ مالکیت اور وقف کا حرف ہے۔",
        quranicArabic: "لِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ",
        quranicRef: "سورۃ المائدہ (۵:۱۲۰)",
        quranicTrans: "آسمانوں اور زمین کی بادشاہی اللہ کے لیے ہے۔",
        jarrSign: "لِلَّهِ — ہ پر زیر",
        jarrRole: "مجرور بعد از لِ",
        note:
          "لِلَّهِ کا معنی ہے 'اللہ کے لیے / اللہ کا'۔ لِ، اللهِ کے ساتھ مل گیا ہے۔ ہ پر زیر جر کی علامت ہے۔ یہ ملکیت کی ساخت قرآن میں سینکڑوں بار آتی ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1h",
        term: "كَ",
        name: "كَ — کی طرح / جیسے",
        definition:
          "كَ (اگلے لفظ سے ملا ہوا) مشابہت یا تشبیہ کا معنی دیتا ہے۔ یہ تشبیہ کا حرف جر ہے۔",
        quranicArabic: "لَيْسَ كَمِثْلِهِ شَيْءٌ",
        quranicRef: "سورۃ الشوریٰ (۴۲:۱۱)",
        quranicTrans: "اس جیسی کوئی چیز نہیں ہے۔",
        jarrSign: "مِثْلِهِ — ل پر زیر",
        jarrRole: "مجرور بعد از كَ",
        note:
          "كَمِثْلِهِ — 'اس کی مثل جیسا'۔ كَ سیدھا مِثْلِهِ سے ملا ہوا ہے اور اسے جر دیتا ہے۔ یہ آیت اللہ کی مطلق یکتائی کا بنیادی بیان ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1i",
        term: "مُنْذُ / مُذْ",
        name: "مُنْذُ / مُذْ — سے (وقت)",
        definition:
          "مُنْذُ اور مُذْ وقت کا ابتدائی نقطہ ظاہر کرتے ہیں — 'سے' یا 'جب سے'۔ یہ اپنے بعد آنے والے وقت کے اسم کو جر دیتے ہیں۔",
        quranicArabic: "وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ",
        quranicRef: "سورۃ الحشر (۵۹:۹)",
        quranicTrans: "اور وہ لوگ جنہوں نے (مدینہ میں) گھر اور ایمان ان سے پہلے سنبھالا۔",
        jarrSign: "قَبْلِهِمْ — ل پر زیر",
        jarrRole: "مجرور بعد از مِنْ (وقت)",
        note:
          "مُنْذُ/مُذْ کلاسیکی عربی میں وقت کے لیے آتے ہیں۔ قرآن میں مِنْ قَبْلِ بھی اسی معنی میں آتا ہے۔ قَبْلِهِمْ مجرور ہے، ل پر زیر۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1j",
        term: "رُبَّ",
        name: "رُبَّ — کتنے ہی / شاید (تعجب و تقلیل)",
        definition:
          "رُبَّ مقدار یا تعجب کا حرف ہے — اکثر بیانیہ انداز میں استعمال ہوتا ہے۔ یہ نکرہ اسم کو جر دیتا ہے۔ یہ قرآن میں کم لیکن کلاسیکی عربی میں اہم ہے۔",
        quranicArabic: "رُّبَمَا يَوَدُّ الَّذِينَ كَفَرُوا",
        quranicRef: "سورۃ الحجر (۱۵:۲)",
        quranicTrans: "شاید کافر لوگ تمنا کریں گے...",
        jarrSign: "رُّبَمَا — رب با مع ما",
        jarrRole: "جر بذریعہ رُبَّ",
        note:
          "یہاں رُبَّ، مَا کے ساتھ مل کر رُبَمَا بن گیا ہے جس کا معنی 'شاید' ہے۔ یہ ایک اہم کلاسیکی عربی ساخت ہے جو نکرہ اسم کو جر دیتی ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1k",
        term: "حَتَّى",
        name: "حَتَّى — تک / یہاں تک کہ",
        definition:
          "حَتَّى بطور حرف جر (نہ کہ حرف عطف) اپنے بعد آنے والے اسم کو جر دیتا ہے۔ یہ انتہا، حد یا اختتام ظاہر کرتا ہے۔",
        quranicArabic: "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
        quranicRef: "سورۃ القدر (۹۷:۵)",
        quranicTrans: "وہ رات سراپا سلامتی ہے — فجر کے طلوع ہونے تک۔",
        jarrSign: "مَطْلَعِ — ع پر زیر",
        jarrRole: "مجرور بعد از حَتَّى",
        note:
          "حَتَّى مَطْلَعِ الْفَجْرِ — 'فجر کے طلوع تک'۔ حَتَّى حرف جر ہے جو مَطْلَعِ کو جر دیتا ہے (ع پر زیر)۔ الْفَجْرِ پھر اضافت سے مجرور ہے۔ یہ آیت لیلۃ القدر کی عظمت بیان کرتی ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.1l",
        term: "وَ / تَ (قَسَم)",
        name: "واو / تاء قسم — کی قسم (حلف)",
        definition:
          "واو اور تاء قسم وہ حروف جر ہیں جو قسم کھانے کے لیے استعمال ہوتے ہیں۔ یہ اپنے بعد آنے والے اسم کو جر دیتے ہیں — 'اللہ کی قسم'، 'فجر کی قسم'۔",
        quranicArabic: "وَالْفَجْرِ ۝ وَلَيَالٍ عَشْرٍ",
        quranicRef: "سورۃ الفجر (۸۹:۱-۲)",
        quranicTrans: "فجر کی قسم — اور دس راتوں کی۔",
        jarrSign: "الْفَجْرِ — ر پر زیر",
        jarrRole: "مجرور بعد از وَ (قسم)",
        note:
          "وَالْفَجْرِ — 'فجر کی قسم'۔ یہاں وَ واو قسم ہے (نہ کہ واو عطف)۔ یہ الْفَجْرِ کو جر دیتا ہے — ر پر زیر۔ بہت سی قرآنی سورتیں انہی قسم کی ساختوں سے شروع ہوتی ہیں اور ہر قسم کھایا گیا اسم مجرور ہوتا ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.2",
        term: "الإِضَافَة",
        name: "اضافت — مضاف اور مضاف الیہ",
        definition:
          "اضافت وہ گرامری ساخت ہے جس میں دو اسم ایک ساتھ رکھے جاتے ہیں تاکہ ملکیت، تعلق یا تخصیص ظاہر ہو۔ پہلا اسم مضاف اور دوسرا مضاف الیہ کہلاتا ہے۔ مضاف الیہ ہمیشہ جر میں ہوتا ہے — چاہے مضاف کسی بھی حالت میں ہو۔ مضاف سے تنوین اور ال ہٹ جاتی ہے۔",
        quranicArabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        quranicRef: "سورۃ الفاتحہ (۱:۲)",
        quranicTrans: "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا رب ہے۔",
        jarrSign: "الْعَالَمِينَ — جمع مذکر سالم میں ین جر کی علامت",
        jarrRole: "مضاف الیہ (جر بذریعہ اضافت)",
        note:
          "رَبِّ مضاف ہے — یہ خود بھی جر میں ہے (لِ کے بعد، ب پر زیر)۔ الْعَالَمِينَ مضاف الیہ ہے — ہمیشہ جر میں، یہاں ین جمع مذکر سالم کی جر کی علامت ہے۔ مضاف + مضاف الیہ جر کی دوسری بڑی وجہ ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "7.2a",
        term: "المُضَاف إِلَيْه — مثال ۲",
        name: "مضاف الیہ — مزید مثالیں",
        definition:
          "مضاف الیہ ہمیشہ جر لیتا ہے — چاہے اضافت کتنی ہی تہہ در تہہ ہو۔ جب اضافت کی زنجیریں ایک کے بعد ایک آئیں، ہر دوسرا اسم جر میں ہوگا۔",
        quranicArabic: "إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
        quranicRef: "سورۃ الانعام (۶:۱۶۲)",
        quranicTrans: "بے شک میری نماز، میری قربانی، میری زندگی اور میری موت — سب اللہ کے لیے ہے جو تمام جہانوں کا رب ہے۔",
        jarrSign: "صَلَاتِي / نُسُكِي / مَحْيَايَ / مَمَاتِي — یاء ضمیر مضاف الیہ (جر)",
        jarrRole: "مضاف الیہ — زنجیری اضافت",
        note:
          "صَلَاتِي، نُسُكِي، مَحْيَايَ، مَمَاتِي — ہر ایک میں یاء (ی) مضاف الیہ ہے جو جر میں ہے۔ یہ آیت خوبصورتی سے دکھاتی ہے کہ اضافت کی زنجیر کیسے کام کرتی ہے — ہر بار ی ضمیر جر میں آتی ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.3",
        term: "التَّابِع — النَّعْت",
        name: "نعت — مجرور اسم کی صفت",
        definition:
          "نعت (صفت) ہمیشہ اپنے منعوت کی اعراب، جنس، عدد اور معرفت میں پیروی کرتا ہے۔ جب منعوت جر میں ہو تو نعت بھی جر میں ہوگا — یہ اتباع کا اصول ہے جو جر پر لاگو ہوتا ہے۔",
        quranicArabic: "بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ",
        quranicRef: "سورۃ الفاتحہ (۱:۱)",
        quranicTrans: "اللہ کے نام سے جو بہت مہربان، نہایت رحم والا ہے۔",
        jarrSign: "الرَّحْمَٰنِ الرَّحِيمِ — ن اور م پر زیر",
        jarrRole: "نعت — جر میں (اللهِ کی پیروی)",
        note:
          "اللهِ مضاف الیہ ہے — جر میں (زیر)۔ الرَّحْمَٰنِ اور الرَّحِيمِ اس کی نعتیں (صفتیں) ہیں — دونوں اللهِ کے ساتھ جر میں جاتی ہیں۔ دونوں کے آخری حرف پر زیر جر کی تصدیق کرتا ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "7.4",
        term: "التَّابِع — البَدَل",
        name: "بدل — مجرور اسم کا قائم مقام",
        definition:
          "بدل وہ اسم ہے جو اپنے مبدل منہ کے بعد آ کر اسے واضح یا تبدیل کرے اور اس کی اعراب کی پیروی کرے۔ جب مبدل منہ جر میں ہو تو بدل بھی جر میں ہوگا۔",
        quranicArabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
        quranicRef: "سورۃ الفاتحہ (۱:۶-۷)",
        quranicTrans: "ہمیں سیدھی راہ دکھا — ان لوگوں کی راہ جن پر تو نے انعام کیا۔",
        jarrSign: "صِرَاطَ الَّذِينَ — مجرور اسم کے بعد بدل",
        jarrRole: "بدل — جر میں",
        note:
          "جب الصِّرَاطَ مجرور ہو (إلى کے بعد) تو صِرَاطَ الَّذِينَ بطور بدل اسے واضح کرتا ہے اور جر میں آتا ہے۔ بدل بتاتا ہے کہ کون سی راہ مراد ہے — انعام یافتہ لوگوں کی راہ۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
      {
        id: "7.5",
        term: "التَّابِع — التَّوْكِيد",
        name: "توکید — مجرور اسم کی تاکید",
        definition:
          "توکید اپنے مؤکَّد کی اعراب کی پیروی کرتا ہے۔ جب مؤکَّد جر میں ہو تو توکید بھی جر میں ہوگا۔ نَفْسُ، عَيْنُ، كُلُّ، جَمِيعُ جیسے الفاظ وہی اعراب لیتے ہیں جو ان کا مؤکَّد رکھتا ہے۔",
        quranicArabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
        quranicRef: "سورۃ الحجر (۱۵:۳۰)",
        quranicTrans: "تو فرشتوں نے سجدہ کیا — سب کے سب اکٹھے۔",
        jarrSign: "كُلِّهِمْ — جب مجرور اسم کے بعد آئے تو ل پر زیر",
        jarrRole: "توکید — جر میں",
        note:
          "جب كُلّ کسی مجرور اسم کے بعد بطور توکید آئے تو وہ بھی جر میں ہوگا: كُلِّهِمْ (ل پر زیر)۔ توکید ہمیشہ اپنے مؤکَّد کی اعراب کا آئینہ ہوتا ہے۔",
        color: LEVEL_DARK,
        border: LEVEL_BORDER,
        text: LEVEL_TEXT,
      },
      {
        id: "7.6",
        term: "التَّابِع — العَطْف",
        name: "عطف — مجرور اسم کے ساتھ ملا اسم",
        definition:
          "جب دو اسم حرف عطف (وَ، فَ، ثُمَّ وغیرہ) سے جڑے ہوں اور پہلا جر میں ہو تو دوسرا (معطوف) بھی جر میں ہوگا — یہ اتباع کا اصول ہے۔",
        quranicArabic: "مِنَ السَّمَاءِ وَالْأَرْضِ",
        quranicRef: "سورۃ البقرہ — عام استعمال",
        quranicTrans: "آسمان اور زمین سے۔",
        jarrSign: "السَّمَاءِ وَالْأَرْضِ — دونوں جر میں واو عطف کے بعد",
        jarrRole: "عطف — جر میں",
        note:
          "السَّمَاءِ مِنْ کے بعد مجرور ہے۔ وَالْأَرْضِ معطوف ہے اور اسی جر کی پیروی کرتا ہے۔ یہاں وَ عطف ہے نہ کہ الگ حرف جر — لیکن اتباع کے اصول کی بنا پر دوسرا اسم بھی جر میں آتا ہے۔",
        color: LEVEL_DARK,
        border: "#2ab88a",
        text: "#b0e8d4",
      },
    ],
    summaryTitle: "خلاصہ جدول — جر کی تمام وجوہات",
    summaryHeaders: ["نمبر", "گرامر اصطلاح", "تعریف", "قرآنی مثال", "جر کی علامت / اسم", "ترجمہ"],
    keyTakeaway: "اہم نکتہ",
    takeawayText:
      "رفع (۱۲ وجوہات) اور نصب (۱۴ وجوہات) کے برعکس، جر کی صرف تین بنیادی وجوہات ہیں: (۱) حرف جر — تقریباً ۲۰ حروف جن میں سے ہر ایک کا مخصوص معنی ہے، (۲) اضافت — جس میں مضاف الیہ ہمیشہ جر میں ہوتا ہے، اور (۳) چار توابع (نعت، بدل، توکید، عطف) جب وہ کسی مجرور اسم کی پیروی کریں۔ جر کی علامت زیر (ِ) یا تنوین زیر (ٍ) ہے — اور جمع مذکر سالم و مثنیٰ میں ی۔",
    backHome: "← گھر واپس",
    prevLesson: "← پچھلا سبق 6",
    nextLesson: "اگلا سبق 8 →",
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
              {reason.jarrRole}
            </span>
          </span>
        </div>

        {/* Quranic example */}
        <div
          style={{
            background: "linear-gradient(135deg, #020f08, #031410)",
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

        {/* Jarr sign highlight */}
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
              color: "#020f08",
              borderRadius: "4px",
              padding: "2px 8px",
              fontSize: "11px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            {isUrdu ? "علامت جر" : "Jarr Mark"}
          </span>
          <span className="arabic" style={{ fontSize: "14px", color: reason.border }}>
            {reason.jarrSign}
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
                <div className="arabic" style={{ fontSize: "16px", color: r.border, marginBottom: "2px" }}>{r.term}</div>
                <div className={isUrdu ? "urdu" : ""} style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{r.name}</div>
              </td>
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", maxWidth: "200px" }}>
                <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "12px", color: "var(--color-text-muted)", margin: 0, lineHeight: "1.6", direction: isUrdu ? "rtl" : "ltr" }}>
                  {r.definition.length > 100 ? r.definition.slice(0, 100) + "…" : r.definition}
                </p>
              </td>
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", textAlign: "center" }}>
                <div className="arabic" style={{ fontSize: "15px", color: r.text, backgroundColor: r.color, borderRadius: "6px", padding: "6px 10px", display: "inline-block", border: `1px solid ${r.border}` }}>
                  {r.quranicArabic.length > 30 ? r.quranicArabic.slice(0, 30) + "…" : r.quranicArabic}
                </div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)", marginTop: "4px" }}>{r.quranicRef}</div>
              </td>
              <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)" }}>
                <span className="arabic" style={{ fontSize: "13px", color: r.border }}>{r.jarrSign}</span>
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

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
      <Navbar currentLesson={7} />

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
            background: "linear-gradient(135deg, #020f08, #031a0e)",
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
            background: "linear-gradient(135deg, #020f08, #031a0e)",
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
            href="/lessons/6"
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
            href="/lessons/8"
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

export default function Lesson7() {
  return (
    <LanguageProvider>
      <LessonContent />
    </LanguageProvider>
  );
}
