"use client";

import { useLanguage } from "../context/LanguageContext";

export default function HierarchyDiagram() {
  const { t } = useLanguage();

  const nodeStyle = (color) => ({
    fill: color,
    rx: "8",
  });

  return (
    <div style={{ width: "100%", maxWidth: "720px", margin: "0 auto" }}>
      <svg
        width="100%"
        viewBox="0 0 680 480"
        style={{ overflow: "visible" }}
      >
        {/* Arrow marker */}
        <defs>
          <marker
            id="arrow"
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

        {/* ROOT: لفظ */}
        <rect x="290" y="20" width="100" height="48" rx="8" fill="#3c3489" />
        <text
          x="340"
          y="44"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif"
          fontSize="20"
          fill="#cec bf6"
          fontWeight="500"
        >
          لفظ
        </text>
        <text
          x="340"
          y="62"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="10"
          fill="#afa9ec"
        >
          {t.utterance}
        </text>

        {/* Connector from لفظ */}
        <line x1="340" y1="68" x2="340" y2="95" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="170" y1="95" x2="510" y2="95" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="170" y1="95" x2="170" y2="125" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrow)" />
        <line x1="510" y1="95" x2="510" y2="125" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrow)" />

        {/* با معنی */}
        <rect x="80" y="125" width="180" height="48" rx="8" fill="#085041" />
        <text
          x="170"
          y="145"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif"
          fontSize="18"
          fill="#9fe1cb"
          fontWeight="500"
        >
          با معنی
        </text>
        <text x="170" y="163" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#5dcaa5">
          {t.meaningful}
        </text>

        {/* بے معنی */}
        <rect x="420" y="125" width="180" height="48" rx="8" fill="#4a1b0c" />
        <text
          x="510"
          y="145"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif"
          fontSize="18"
          fill="#f0997b"
          fontWeight="500"
        >
          بے معنی
        </text>
        <text x="510" y="163" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#d85a30">
          {t.meaningless}
        </text>

        {/* Connector from با معنی to کلمہ */}
        <line x1="170" y1="173" x2="170" y2="205" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="170" y1="205" x2="340" y2="205" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="340" y1="205" x2="340" y2="230" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrow)" />

        {/* کلمہ */}
        <rect x="265" y="230" width="150" height="48" rx="8" fill="#0c447c" />
        <text
          x="340"
          y="250"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif"
          fontSize="20"
          fill="#b5d4f4"
          fontWeight="500"
        >
          کلمہ
        </text>
        <text x="340" y="268" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#85b7eb">
          {t.completeWord}
        </text>

        {/* Connectors from کلمہ to 3 leaves */}
        <line x1="340" y1="278" x2="340" y2="305" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="130" y1="305" x2="550" y2="305" stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="130" y1="305" x2="130" y2="330" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrow)" />
        <line x1="340" y1="305" x2="340" y2="330" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrow)" />
        <line x1="550" y1="305" x2="550" y2="330" stroke="#c9a84c" strokeWidth="1.2" markerEnd="url(#arrow)" />

        {/* اسم */}
        <rect x="50" y="330" width="160" height="56" rx="8" fill="#085041" />
        <text
          x="130"
          y="350"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif"
          fontSize="22"
          fill="#9fe1cb"
          fontWeight="500"
        >
          اسم
        </text>
        <text x="130" y="372" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5dcaa5">
          {t.ism}
        </text>

        {/* فعل */}
        <rect x="260" y="330" width="160" height="56" rx="8" fill="#633806" />
        <text
          x="340"
          y="350"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif"
          fontSize="22"
          fill="#fac775"
          fontWeight="500"
        >
          فعل
        </text>
        <text x="340" y="372" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#ef9f27">
          {t.fil}
        </text>

        {/* حرف */}
        <rect x="470" y="330" width="160" height="56" rx="8" fill="#4a1b0c" />
        <text
          x="550"
          y="350"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif"
          fontSize="22"
          fill="#f0997b"
          fontWeight="500"
        >
          حرف
        </text>
        <text x="550" y="372" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#d85a30">
          {t.harf}
        </text>

        {/* Bottom label */}
        <text x="340" y="420" textAnchor="middle" fontSize="11" fill="#9e9a8e">
          {t.diagramSubtitle}
        </text>
      </svg>
    </div>
  );
}