"use client";

import { useLanguage } from "../context/LanguageContext";

export default function HierarchyDiagram() {
  const { t, language } = useLanguage();
  const isUrdu = language === "ur";

  // Font family based on language
  const scriptFont = isUrdu
    ? "'Noto Nastaliq Urdu', serif"
    : "'Noto Naskh Arabic', serif";

  // Each node renders either:
  // - English mode: one English text label (centred in the box)
  // - Urdu mode: one Urdu/Arabic script label (centred in the box)
  // cy = vertical centre of the box

  function NodeLabel({ x, cy, enText, urText, fontSize = 14, enFill, urFill }) {
    if (isUrdu) {
      return (
        <text x={x} y={cy} textAnchor="middle" dominantBaseline="central"
          fontFamily={scriptFont} fontSize={fontSize}
          fill={urFill} fontWeight="500">
          {urText}
        </text>
      );
    }
    return (
      <text x={x} y={cy} textAnchor="middle" dominantBaseline="central"
        fontSize={fontSize} fill={enFill}>
        {enText}
      </text>
    );
  }

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <svg
        width="100%"
        viewBox="0 0 680 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: "320px" }}
      >
        <defs>
          <marker
            id="arrowhead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1L8 5L2 9"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* ===== ROOT: لفظ / Utterance ===== */}
        <rect x="290" y="20" width="100" height="50" rx="8"
          fill="#3c3489" stroke="#7f77dd" strokeWidth="1" />
        <NodeLabel x={340} cy={37}
          enText="Utterance" enFill="#afa9ec"
          urText="لفظ" urFill="#cecbf6"
          fontSize={isUrdu ? 30 : 12} />

        {/* Lines */}
        <line x1="340" y1="70" x2="340" y2="100" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="170" y1="100" x2="510" y2="100" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="170" y1="100" x2="170" y2="128" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrowhead)" />
        <line x1="510" y1="100" x2="510" y2="128" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrowhead)" />

        {/* ===== با معنی / Meaningful ===== */}
        <rect x="80" y="128" width="180" height="52" rx="8"
          fill="#085041" stroke="#1d9e75" strokeWidth="1" />
        <NodeLabel x={170} cy={147}
          enText="Meaningful" enFill="#5dcaa5"
          urText="با معنی" urFill="#9fe1cb"
          fontSize={isUrdu ? 23 : 12} />

        {/* ===== بے معنی / Non-meaningful ===== */}
        <rect x="420" y="128" width="180" height="52" rx="8"
          fill="#4a1b0c" stroke="#d85a30" strokeWidth="1" />
        <NodeLabel x={510} cy={147}
          enText="Non-meaningful" enFill="#d85a30"
          urText="بے معنی" urFill="#f0997b"
          fontSize={isUrdu ? 23 : 11} />

        {/* Lines from با معنی to کلمہ */}
        <line x1="170" y1="180" x2="170" y2="210" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="170" y1="210" x2="340" y2="210" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="340" y1="210" x2="340" y2="235" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrowhead)" />

        {/* ===== کلمہ / Complete Word ===== */}
        <rect x="265" y="235" width="150" height="52" rx="8"
          fill="#0c447c" stroke="#378add" strokeWidth="1" />
        <NodeLabel x={340} cy={261}
          enText="Complete Word" enFill="#85b7eb"
          urText="کلمہ" urFill="#b5d4f4"
          fontSize={isUrdu ? 23 : 12} />

        {/* Lines from کلمہ to 3 nodes */}
        <line x1="340" y1="287" x2="340" y2="315" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="110" y1="315" x2="570" y2="315" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="110" y1="315" x2="110" y2="340" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrowhead)" />
        <line x1="340" y1="315" x2="340" y2="340" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrowhead)" />
        <line x1="570" y1="315" x2="570" y2="340" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrowhead)" />

        {/* ===== اسم / Noun ===== */}
        <a href="/lessons/3" style={{ cursor: "pointer" }}>
          <rect x="30" y="340" width="160" height="70" rx="8"
            fill="#085041" stroke="#1d9e75" strokeWidth="1" />
          {isUrdu ? (
            <text x="110" y="365" textAnchor="middle" dominantBaseline="central"
              fontFamily={scriptFont} fontSize="26" fill="#9fe1cb" fontWeight="500">
              اسم
            </text>
          ) : (
            <>
              <text x="110" y="362" textAnchor="middle" dominantBaseline="central"
                fontSize="16" fill="#9fe1cb" fontWeight="600">
                Noun
              </text>
              <text x="110" y="385" textAnchor="middle" dominantBaseline="central"
                fontSize="11" fill="#5dcaa5">
                Click to Learn
              </text>
            </>
          )}
        </a>

        {/* ===== فعل / Verb ===== */}
        <rect x="260" y="340" width="160" height="70" rx="8"
          fill="#633806" stroke="#ef9f27" strokeWidth="1" />
        <NodeLabel x={340} cy={367}
          enText="Verb" enFill="#ef9f27"
          urText="فعل" urFill="#fac775"
          fontSize={isUrdu ? 26 : 16} />

        {/* ===== حرف / Particle ===== */}
        <a href="/lessons/2" style={{ cursor: "pointer" }}>
          <rect x="490" y="340" width="160" height="70" rx="8"
            fill="#4a1b0c" stroke="#d85a30" strokeWidth="1" />
          {isUrdu ? (
            <text x="570" y="367" textAnchor="middle" dominantBaseline="central"
              fontFamily={scriptFont} fontSize="26" fill="#f0997b" fontWeight="500">
              حرف
            </text>
          ) : (
            <>
              <text x="570" y="362" textAnchor="middle" dominantBaseline="central"
                fontSize="16" fill="#f0997b" fontWeight="600">
                Particle
              </text>
              <text x="570" y="385" textAnchor="middle" dominantBaseline="central"
                fontSize="11" fill="#d85a30">
                Click to Learn
              </text>
            </>
          )}
        </a>

        {/* ===== Bottom caption ===== */}
        <text x="340" y="445" textAnchor="middle"
          fontSize="12" fill="#9e9a8e"
          fontFamily={isUrdu ? scriptFont : "inherit"}>
          {t.diagramSubtitle}
        </text>

      </svg>
    </div>
  );
}