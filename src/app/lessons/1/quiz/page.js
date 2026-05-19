"use client";

import { useState } from "react";
import { LanguageProvider, useLanguage } from "../../../../context/LanguageContext";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

const quizData = {
  en: {
    title: "Lesson 1 Quiz",
    subtitle: "The Three Parts of Speech",
    intro: "Test your understanding of the three parts of Arabic speech.",
    score: "Your Score",
    outOf: "out of",
    excellent: "Excellent! You have mastered this lesson! 🎉",
    good: "Good work! Review the lesson and try again. 👍",
    tryAgain: "Keep practicing! Review Lesson 1 and try again. 💪",
    nextLesson: "Proceed to Lesson 2 →",
    retake: "Retake Quiz",
    reviewLesson: "← Review Lesson 1",
    questions: [
      {
        q: "What are the three parts of speech in Arabic?",
        options: ["Ism, Fi'l, Harf", "Noun, Adjective, Verb", "Subject, Object, Verb", "Mubtada, Khabar, Fail"],
        correct: 0,
        explanation: "The three parts of speech in Arabic are Ism (Noun), Fi'l (Verb), and Harf (Particle). Every single word in the Quran belongs to one of these three categories.",
      },
      {
        q: "What does 'Ism' (اِسْم) mean?",
        options: ["Verb — an action word", "Particle — a connecting word", "Noun — a person, place, thing or idea", "Sentence — a complete thought"],
        correct: 2,
        explanation: "Ism (اسم) means Noun — it refers to any person, place, thing, or idea. For example: اللہ، محمد، کتاب are all Isms.",
      },
      {
        q: "Which word in بِسْمِ اللهِ is a Harf (Particle)?",
        options: ["اللهِ", "اسْمِ", "بِ", "الرَّحْمٰنِ"],
        correct: 2,
        explanation: "بِ (meaning 'in/with') is the Harf. It is a preposition — a connecting particle that has no meaning by itself. The other words (اسم، الله، الرحمن) are all Isms.",
      },
      {
        q: "In خَلَقَ الْإِنسَانَ مِنْ عَلَق, which word is a Fi'l (Verb)?",
        options: ["الْإِنسَانَ", "عَلَق", "مِنْ", "خَلَقَ"],
        correct: 3,
        explanation: "خَلَقَ means 'He created' — this is the Fi'l (verb) because it describes an action. الإنسان and عَلَق are Isms (nouns), and مِنْ is a Harf (particle).",
      },
      {
        q: "How many parts of speech does EVERY Arabic word belong to?",
        options: ["It can belong to two", "Exactly one — either Ism, Fi'l, or Harf", "It depends on the sentence", "Four — including adjectives"],
        correct: 1,
        explanation: "Every Arabic word belongs to exactly ONE of three categories: Ism, Fi'l, or Harf. There are no exceptions in the entire Quran. This is the golden rule of Arabic grammar.",
      },
      {
        q: "Which of these is an example of a Harf (Particle)?",
        options: ["كِتَاب (book)", "ذَهَبَ (he went)", "مِنْ (from)", "مُحَمَّد (Muhammad)"],
        correct: 2,
        explanation: "مِنْ (from) is a Harf — it is a preposition/particle that connects words but has no independent meaning. كتاب and محمد are Isms, and ذهب is a Fi'l.",
      },
      {
        q: "What is special about Surah Al-Fatiha verse 1 (بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ)?",
        options: [
          "It contains only verbs",
          "It contains only nouns and one particle — no verbs",
          "It contains all three parts of speech equally",
          "It contains only particles",
        ],
        correct: 1,
        explanation: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ contains only Isms (اسم، الله، الرحمن، الرحيم) and one Harf (بِ). There are zero verbs — showing a state of being rather than action.",
      },
    ],
  },
  ur: {
    title: "سبق ۱ — امتحان",
    subtitle: "کلام کے تین اجزاء",
    intro: "اپنی سمجھ کا امتحان دیں — کلام کے تین اجزاء۔",
    score: "آپ کا نمبر",
    outOf: "میں سے",
    excellent: "شاباش! آپ نے یہ سبق مکمل کر لیا! 🎉",
    good: "اچھا کیا! سبق دوبارہ پڑھیں اور پھر کوشش کریں۔ 👍",
    tryAgain: "مزید مشق کریں! سبق ۱ دوبارہ پڑھیں۔ 💪",
    nextLesson: "سبق ۲ کی طرف جائیں ←",
    retake: "دوبارہ امتحان دیں",
    reviewLesson: "← سبق ۱ دوبارہ پڑھیں",
    questions: [
      {
        q: "عربی میں کلام کے تین اجزاء کون سے ہیں؟",
        options: ["اسم، فعل، حرف", "اسم، صفت، فعل", "فاعل، مفعول، فعل", "مبتدا، خبر، فاعل"],
        correct: 0,
        explanation: "عربی میں کلام کے تین اجزاء ہیں: اسم، فعل اور حرف۔ قرآن کا ہر لفظ ان تین میں سے ایک قسم کا ہوتا ہے۔",
      },
      {
        q: "اسم کا مطلب کیا ہے؟",
        options: ["فعل — کام کرنے والا لفظ", "حرف — جوڑنے والا لفظ", "اسم — کسی شخص، جگہ، چیز یا خیال کا نام", "جملہ — مکمل بات"],
        correct: 2,
        explanation: "اسم کسی شخص، جگہ، چیز یا خیال کے نام کو کہتے ہیں۔ مثلاً: اللہ، محمد، کتاب — یہ سب اسم ہیں۔",
      },
      {
        q: "بِسْمِ اللهِ میں حرف کون سا ہے؟",
        options: ["اللهِ", "اسْمِ", "بِ", "الرَّحْمٰنِ"],
        correct: 2,
        explanation: "بِ (معنی: میں/کے ساتھ) حرف ہے۔ یہ ایک حرف جر ہے جو اکیلا بے معنی ہے۔ باقی الفاظ (اسم، الله، الرحمن) سب اسم ہیں۔",
      },
      {
        q: "خَلَقَ الْإِنسَانَ مِنْ عَلَق میں فعل کون سا ہے؟",
        options: ["الْإِنسَانَ", "عَلَق", "مِنْ", "خَلَقَ"],
        correct: 3,
        explanation: "خَلَقَ کا مطلب ہے 'اس نے بنایا' — یہ فعل ہے کیونکہ یہ کام بتاتا ہے۔ الإنسان اور عَلَق اسم ہیں، اور مِنْ حرف ہے۔",
      },
      {
        q: "عربی کا ہر لفظ کتنی اقسام میں سے ایک ہوتا ہے؟",
        options: ["دو اقسام میں سے ایک", "بالکل ایک — یا اسم، یا فعل، یا حرف", "یہ جملے پر منحصر ہے", "چار — صفت بھی شامل ہے"],
        correct: 1,
        explanation: "عربی کا ہر لفظ بالکل ایک قسم کا ہوتا ہے: یا اسم، یا فعل، یا حرف۔ پورے قرآن میں کوئی استثناء نہیں۔ یہ عربی گرامر کا سنہری اصول ہے۔",
      },
      {
        q: "ان میں سے حرف کون سا ہے؟",
        options: ["كِتَاب (کتاب)", "ذَهَبَ (وہ گیا)", "مِنْ (سے)", "مُحَمَّد (محمد)"],
        correct: 2,
        explanation: "مِنْ (سے) حرف ہے — یہ ایک حرف جر ہے جو الفاظ کو جوڑتا ہے مگر اکیلا بے معنی ہے۔ كتاب اور محمد اسم ہیں، اور ذهب فعل ہے۔",
      },
      {
        q: "سورۃ الفاتحہ کی پہلی آیت (بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ) میں کیا خاص ہے؟",
        options: [
          "اس میں صرف فعل ہیں",
          "اس میں صرف اسم اور ایک حرف ہے — کوئی فعل نہیں",
          "اس میں تینوں اجزاء برابر ہیں",
          "اس میں صرف حروف ہیں",
        ],
        correct: 1,
        explanation: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ میں صرف اسم (اسم، الله، الرحمن، الرحيم) اور ایک حرف (بِ) ہے۔ کوئی فعل نہیں — یہ حالت بیان کرتا ہے نہ کہ عمل۔",
      },
    ],
  },
};

function QuizContent() {
  const { language } = useLanguage();
  const isUrdu = language === "ur";
  const q = quizData[language];

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const question = q.questions[currentQ];
  const totalQ = q.questions.length;

  function handleSelect(idx) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === question.correct;
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { selected: idx, correct: question.correct, wasCorrect: correct }]);
  }

  function handleNext() {
    if (currentQ + 1 >= totalQ) {
      setFinished(true);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  function handleRetake() {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  }

  const percentage = Math.round((score / totalQ) * 100);
  const resultMsg = percentage >= 85 ? q.excellent : percentage >= 57 ? q.good : q.tryAgain;
  const resultColor = percentage >= 85 ? "#1d9e75" : percentage >= 57 ? "#ef9f27" : "#d85a30";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
      <Navbar />

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", fontSize: "14px", color: "var(--color-text-muted)" }}>
          <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Home</Link>
          {" → "}
          <Link href="/lessons/1" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Lesson 1</Link>
          {" → "}
          <span>{isUrdu ? "امتحان" : "Quiz"}</span>
        </div>

        {/* Header */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "16px",
            padding: "28px",
            marginBottom: "28px",
            borderTop: "4px solid var(--color-primary)",
          }}
        >
          <div style={{ fontSize: "13px", color: "var(--color-primary)", marginBottom: "6px", fontWeight: "600" }}>
            {isUrdu ? "سبق ۱ • امتحان" : "Lesson 1 • Quiz"}
          </div>
          <h1
            className={isUrdu ? "urdu" : ""}
            style={{ fontSize: "26px", fontWeight: "700", marginBottom: "6px" }}
          >
            {q.title}
          </h1>
          <p className={isUrdu ? "urdu" : ""} style={{ fontSize: "15px", color: "var(--color-text-muted)" }}>
            {q.subtitle}
          </p>
        </div>

        {!finished ? (
          <>
            {/* Progress Bar */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                  {isUrdu ? `سوال ${currentQ + 1} / ${totalQ}` : `Question ${currentQ + 1} of ${totalQ}`}
                </span>
                <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: "600" }}>
                  {isUrdu ? `نمبر: ${score}` : `Score: ${score}`}
                </span>
              </div>
              <div style={{ backgroundColor: "var(--color-surface2)", borderRadius: "999px", height: "8px" }}>
                <div
                  style={{
                    backgroundColor: "var(--color-primary)",
                    borderRadius: "999px",
                    height: "8px",
                    width: `${((currentQ) / totalQ) * 100}%`,
                    transition: "width 0.3s",
                  }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                padding: "28px",
                marginBottom: "20px",
              }}
            >
              <h2
                className={isUrdu ? "urdu" : ""}
                style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.7", marginBottom: "24px" }}
              >
                {question.q}
              </h2>

              {/* Options */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {question.options.map((opt, idx) => {
                  let bg = "var(--color-surface2)";
                  let border = "var(--color-border)";
                  let textColor = "var(--color-text)";

                  if (answered) {
                    if (idx === question.correct) {
                      bg = "#0d2818";
                      border = "#1d9e75";
                      textColor = "#9fe1cb";
                    } else if (idx === selected && idx !== question.correct) {
                      bg = "#2a0a0a";
                      border = "#d85a30";
                      textColor = "#f0997b";
                    }
                  } else if (selected === idx) {
                    border = "var(--color-primary)";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      style={{
                        backgroundColor: bg,
                        border: `1px solid ${border}`,
                        borderRadius: "8px",
                        padding: "14px 18px",
                        textAlign: isUrdu ? "right" : "left",
                        cursor: answered ? "default" : "pointer",
                        color: textColor,
                        fontSize: "15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.2s",
                        fontFamily: isUrdu ? "'Noto Naskh Arabic', serif" : "inherit",
                        direction: isUrdu ? "rtl" : "ltr",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: answered && idx === question.correct ? "#1d9e75" :
                            answered && idx === selected && idx !== question.correct ? "#d85a30" :
                            "var(--color-surface)",
                          border: `1px solid ${border}`,
                          borderRadius: "50%",
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          flexShrink: 0,
                          color: answered && (idx === question.correct || idx === selected) ? "white" : "var(--color-text-muted)",
                        }}
                      >
                        {answered && idx === question.correct ? "✓" :
                          answered && idx === selected && idx !== question.correct ? "✗" :
                          ["A", "B", "C", "D"][idx]}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {answered && (
                <div
                  style={{
                    marginTop: "20px",
                    backgroundColor: selected === question.correct ? "#0d2818" : "#1a0808",
                    border: `1px solid ${selected === question.correct ? "#1d9e75" : "#d85a30"}`,
                    borderRadius: "8px",
                    padding: "16px 20px",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "6px",
                    color: selected === question.correct ? "#5dcaa5" : "#f0997b" }}>
                    {selected === question.correct
                      ? (isUrdu ? "✅ بالکل درست!" : "✅ Correct!")
                      : (isUrdu ? "❌ غلط جواب" : "❌ Incorrect")}
                  </div>
                  <p className={isUrdu ? "urdu" : ""}
                    style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Next Button */}
            {answered && (
              <div style={{ textAlign: "right" }}>
                <button
                  onClick={handleNext}
                  style={{
                    backgroundColor: "var(--color-primary)",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 28px",
                    color: "#0f1117",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  {currentQ + 1 >= totalQ
                    ? (isUrdu ? "نتیجہ دیکھیں" : "See Results")
                    : (isUrdu ? "اگلا سوال ←" : "Next Question →")}
                </button>
              </div>
            )}
          </>
        ) : (
          /* Results Screen */
          <div>
            {/* Score Card */}
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                border: `2px solid ${resultColor}`,
                borderRadius: "16px",
                padding: "40px",
                textAlign: "center",
                marginBottom: "28px",
              }}
            >
              {/* Score Circle */}
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-surface2)",
                  border: `4px solid ${resultColor}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <span style={{ fontSize: "32px", fontWeight: "700", color: resultColor }}>{score}</span>
                <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>/ {totalQ}</span>
              </div>

              <div style={{ fontSize: "32px", fontWeight: "700", color: resultColor, marginBottom: "8px" }}>
                {percentage}%
              </div>
              <p className={isUrdu ? "urdu" : ""}
                style={{ fontSize: "17px", color: "var(--color-text)", fontWeight: "600", marginBottom: "8px" }}>
                {resultMsg}
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
                {q.score}: {score} {q.outOf} {totalQ}
              </p>
            </div>

            {/* Answer Review */}
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "28px",
              }}
            >
              <h3 style={{ fontSize: "17px", fontWeight: "600", marginBottom: "16px", color: "var(--color-primary)" }}>
                {isUrdu ? "جوابات کا جائزہ" : "Answer Review"}
              </h3>
              {q.questions.map((question, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 0",
                    borderBottom: idx < q.questions.length - 1 ? "1px solid var(--color-border)" : "none",
                  }}
                >
                  <span style={{
                    fontSize: "16px",
                    color: answers[idx]?.wasCorrect ? "#1d9e75" : "#d85a30",
                  }}>
                    {answers[idx]?.wasCorrect ? "✅" : "❌"}
                  </span>
                  <span className={isUrdu ? "urdu" : ""}
                    style={{ fontSize: "14px", color: "var(--color-text)", flex: 1 }}>
                    {question.q}
                  </span>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
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
                {q.reviewLesson}
              </Link>
              <button
                onClick={handleRetake}
                style={{
                  backgroundColor: "var(--color-surface2)",
                  border: "1px solid var(--color-primary)",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  color: "var(--color-primary)",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {q.retake}
              </button>
              <Link
                href="/lessons/2"
                style={{
                  backgroundColor: "var(--color-primary)",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  color: "#0f1117",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                {q.nextLesson}
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function Quiz1() {
  return (
    <LanguageProvider>
      <QuizContent />
    </LanguageProvider>
  );
}