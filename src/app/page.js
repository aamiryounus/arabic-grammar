"use client";

import Link from "next/link";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import HierarchyDiagram from "../components/HierarchyDiagram";
import Footer from "../components/Footer";

function HomeContent() {
  const { language, t } = useLanguage();
  const isUrdu = language === "ur";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
      <Navbar />

      {/* Hero Section */}
    <section
  className="animate-fadeInUp"
  style={{
    textAlign: "center",
    padding: "80px 2rem 60px",
    maxWidth: "800px",
    margin: "0 auto",
  }}
>
        <div
          className="arabic"
          style={{
            fontSize: "48px",
            color: "var(--color-primary)",
            marginBottom: "8px",
          }}
        >
          وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
        </div>

        <h1
          className={isUrdu ? "urdu" : ""}
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "700",
            color: "var(--color-text)",
            marginBottom: "16px",
            lineHeight: "1.3",
          }}
        >
          {t.appName}
        </h1>

        <p
          className={isUrdu ? "urdu" : ""}
          style={{
            fontSize: "18px",
            color: "var(--color-primary-light)",
            marginBottom: "12px",
          }}
        >
          {t.appSubtitle}
        </p>

        <p
          className={isUrdu ? "urdu" : ""}
          style={{
            fontSize: "16px",
            color: "var(--color-text-muted)",
            lineHeight: "1.8",
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          {t.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/lessons/1"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#0f1117",
              borderRadius: "10px",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {t.startLearning}
          </Link>

          <Link
            href="/syllabus"
            style={{
              backgroundColor: "transparent",
              color: "var(--color-primary)",
              border: "1px solid var(--color-primary)",
              borderRadius: "10px",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {t.viewSyllabus}
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "var(--color-border)", margin: "0 2rem" }} />

      {/* Diagram Section */}
      <section style={{ padding: "60px 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2
          className={isUrdu ? "urdu" : ""}
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "600",
            color: "var(--color-text)",
            marginBottom: "8px",
          }}
        >
          {t.diagramTitle}
        </h2>
        <p
          className={isUrdu ? "urdu" : ""}
          style={{
            textAlign: "center",
            color: "var(--color-text-muted)",
            marginBottom: "40px",
            fontSize: "15px",
          }}
        >
          {t.diagramSubtitle}
        </p>

        <HierarchyDiagram />
      </section>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "var(--color-border)", margin: "0 2rem" }} />

      {/* Lessons Preview Section */}
      <section style={{ padding: "60px 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2
          className={isUrdu ? "urdu" : ""}
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "var(--color-primary)",
            marginBottom: "24px",
          }}
        >
          {t.level1}
        </h2>

        {/* Lesson 1 Card */}
        <Link
          href="/lessons/1"
           className="card-hover"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
flexDirection: isUrdu ? "row-reverse" : "row",
            cursor: "pointer",
            textDecoration: "none",
            color: "var(--color-text)",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
        >
          <div
            style={{
              backgroundColor: "var(--color-surface2)",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "24px",
              color: "var(--color-primary)",
              fontWeight: "700",
              minWidth: "56px",
              textAlign: "center",
            }}
          >
            1
          </div>
          <div style={{ flex: 1 }}>
            <div
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}
            >
              {t.lesson1Title}
            </div>
            <div
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "14px", color: "var(--color-text-muted)" }}
            >
              {t.lesson1Desc}
            </div>
          </div>
          <div style={{ color: "var(--color-primary)", fontSize: "20px" }}>←</div>
        </Link>

        {/* Lesson 2 Card */}
        <Link
          href="/lessons/2"
           className="card-hover"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
flexDirection: isUrdu ? "row-reverse" : "row",
            cursor: "pointer",
            textDecoration: "none",
            color: "var(--color-text)",
            transition: "border-color 0.2s",
            marginTop: "12px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
        >
          <div
            style={{
              backgroundColor: "var(--color-surface2)",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "24px",
              color: "var(--color-primary)",
              fontWeight: "700",
              minWidth: "56px",
              textAlign: "center",
            }}
          >
            2
          </div>
          <div style={{ flex: 1 }}>
            <div
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}
            >
              {isUrdu ? "حروف کا تعارف" : "Introduction to Particles"}
            </div>
            <div
              className={isUrdu ? "urdu" : ""}
              style={{ fontSize: "14px", color: "var(--color-text-muted)" }}
            >
              {isUrdu ? "عربی کے تمام حروف کی اقسام" : "All 10 types of Arabic particles"}
            </div>
          </div>
          <div style={{ color: "var(--color-primary)", fontSize: "20px" }}>←</div>
        </Link>
        {/* Lesson 3 Card */}
<Link
  href="/lessons/3"
  className="card-hover"
  style={{
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
flexDirection: isUrdu ? "row-reverse" : "row",
    cursor: "pointer",
    textDecoration: "none",
    color: "var(--color-text)",
    transition: "border-color 0.2s",
    marginTop: "12px",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
>
  <div
    style={{
      backgroundColor: "var(--color-surface2)",
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "24px",
      color: "var(--color-primary)",
      fontWeight: "700",
      minWidth: "56px",
      textAlign: "center",
    }}
  >
    3
  </div>
  <div style={{ flex: 1 }}>
    <div
      className={isUrdu ? "urdu" : ""}
      style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}
    >
      {isUrdu ? "اسم کا تعارف" : "Introduction to Nouns"}
    </div>
    <div
      className={isUrdu ? "urdu" : ""}
      style={{ fontSize: "14px", color: "var(--color-text-muted)" }}
    >
      {isUrdu ? "اسم کی خصوصیات، جنس، عدد اور اعراب" : "Gender, number, definiteness and case endings"}
    </div>
  </div>
  <div style={{ color: "var(--color-primary)", fontSize: "20px" }}>←</div>
</Link>

      </section>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}