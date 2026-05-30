"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const translations = {
  en: {
    appName: "Quranic Arabic Grammar",
    appSubtitle: "From Letters to the Language of the Quran",
    heroDescription:
      "A structured journey through Arabic grammar — built on classical scholarship, illuminated by Quranic verses.",
    startLearning: "Start Learning",
    viewSyllabus: "View Syllabus",
    level1: "Level 1 — Foundations",
    diagramTitle: "The Structure of Every Arabic Word",
    diagramSubtitle:
      "Every word in the Quran belongs to one of three categories",
    ism: "Noun",
    fil: "Verb",
    harf: "Particle",
    meaningful: "Meaningful",
    meaningless: "Non-meaningful",
    completeWord: "Complete Word",
    utterance: "Utterance",
    lessons: "Lessons",
    beginnerLevel: "Beginner",
    lesson1Title: "The Three Parts of Speech",
    lesson1Desc: "The master key to all Arabic grammar",
  },
  ur: {
    appName: "قرآنی عربی گرامر",
    appSubtitle: "حروف سے قرآن کی زبان تک",
    heroDescription:
      "عربی گرامر کا منظم سفر — کلاسیکی علم کی بنیاد پر، قرآنی آیات کی روشنی میں۔",
    startLearning: "سیکھنا شروع کریں",
    viewSyllabus: "نصاب دیکھیں",
    level1: "لیول 1 — بنیادیات",
    diagramTitle: "ہر عربی لفظ کی ساخت",
    diagramSubtitle: "قرآن کا ہر لفظ تین اقسام میں سے ایک ہے",
    ism: "اسم",
    fil: "فعل",
    harf: "حرف",
    meaningful: "با معنی",
    meaningless: "بے معنی",
    completeWord: "کلمہ",
    utterance: "لفظ",
    lessons: "اسباق",
    beginnerLevel: "ابتدائی",
    lesson1Title: "کلام کے تین اجزاء",
    lesson1Desc: "پوری عربی گرامر کی بنیادی کنجی",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
const [theme, setTheme] = useState("dark");

useEffect(() => {
  const savedLanguage = localStorage.getItem("language");
  const savedTheme = localStorage.getItem("theme");
  if (savedLanguage) setLanguage(savedLanguage);
  if (savedTheme) setTheme(savedTheme);
}, []);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--color-bg", "#0f1117");
      root.style.setProperty("--color-surface", "#1a1d2e");
      root.style.setProperty("--color-surface2", "#232640");
      root.style.setProperty("--color-primary", "#c9a84c");
      root.style.setProperty("--color-primary-light", "#e8c97a");
      root.style.setProperty("--color-text", "#f0ece0");
      root.style.setProperty("--color-text-muted", "#9e9a8e");
      root.style.setProperty("--color-border", "#2e3150");
      root.style.setProperty("--color-card-bg", "#1a1d2e");
      root.style.setProperty("--color-card-hover", "#232640");
    } else {
      root.style.setProperty("--color-bg", "#f5f0e8");
      root.style.setProperty("--color-surface", "#ffffff");
      root.style.setProperty("--color-surface2", "#ede8dc");
      root.style.setProperty("--color-primary", "#8b6914");
      root.style.setProperty("--color-primary-light", "#a07820");
      root.style.setProperty("--color-text", "#1a1410");
      root.style.setProperty("--color-text-muted", "#6b6050");
      root.style.setProperty("--color-border", "#d4c9b0");
      root.style.setProperty("--color-card-bg", "#ffffff");
      root.style.setProperty("--color-card-hover", "#ede8dc");
    }
  }, [theme]);

  const toggleLanguage = () => {
  setLanguage((prev) => {
    const next = prev === "en" ? "ur" : "en";
    localStorage.setItem("language", next);
    return next;
  });
};

const toggleTheme = () => {
  setTheme((prev) => {
    const next = prev === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    return next;
  });
};

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t, theme, toggleTheme }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}