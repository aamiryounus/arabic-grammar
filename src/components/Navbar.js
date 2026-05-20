"use client";

import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
  const { language, toggleLanguage, t, theme, toggleTheme } = useLanguage();
  const isDark = theme === "dark";

  return (
    <nav
      style={{
        backgroundColor: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* App Name */}
<Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "22px" }}>☪️</span>
        <span
          className={language === "ur" ? "urdu" : ""}
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "var(--color-primary)",
          }}
        >
          {t.appName}
        </span>
      </Link>

      {/* Right side buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          style={{
            backgroundColor: "var(--color-surface2)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "8px 14px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.2s",
            color: "var(--color-text)",
            fontSize: "14px",
            fontWeight: "500",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-border)")
          }
        >
          <span style={{ fontSize: "16px" }}>{isDark ? "☀️" : "🌙"}</span>
          <span>{isDark ? "Light" : "Dark"}</span>
        </button>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          style={{
            backgroundColor: "var(--color-surface2)",
            border: "1px solid var(--color-primary)",
            borderRadius: "8px",
            padding: "8px 20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.2s",
          }}
        >
          <span style={{ fontSize: "16px" }}>🌐</span>
          <span
            style={{
              color: "var(--color-primary)",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {language === "en" ? "اردو" : "English"}
          </span>
        </button>

      </div>
    </nav>
  );
}