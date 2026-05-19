"use client";

import { useLanguage } from "../context/LanguageContext";

export default function HierarchyDiagram() {
  const { t } = useLanguage();

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

        {/* ===== ROOT: لفظ ===== */}
        <rect x="290" y="20" width="100" height="50" rx="8"
          fill="#3c3489" stroke="#7f77dd" strokeWidth="1" />
        <text x="340" y="40" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif" fontSize="20"
          fill="#cecbf6" fontWeight="500">لفظ</text>
        <text x="340" y="60" textAnchor="middle" dominantBaseline="central"
          fontSize="10" fill="#afa9ec">Utterance</text>

        {/* Line down from لفظ */}
        <line x1="340" y1="70" x2="340" y2="100"
          stroke="#c9a84c" strokeWidth="1.2" />
        {/* Horizontal branch */}
        <line x1="170" y1="100" x2="510" y2="100"
          stroke="#c9a84c" strokeWidth="1.2" />
        {/* Down to با معنی */}
        <line x1="170" y1="100" x2="170" y2="128"
          stroke="#c9a84c" strokeWidth="1.2"
          markerEnd="url(#arrowhead)" />
        {/* Down to بے معنی */}
        <line x1="510" y1="100" x2="510" y2="128"
          stroke="#c9a84c" strokeWidth="1.2"
          markerEnd="url(#arrowhead)" />

        {/* ===== با معنی ===== */}
        <rect x="80" y="128" width="180" height="52" rx="8"
          fill="#085041" stroke="#1d9e75" strokeWidth="1" />
        <text x="170" y="148" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif" fontSize="18"
          fill="#9fe1cb" fontWeight="500">با معنی</text>
        <text x="170" y="168" textAnchor="middle" dominantBaseline="central"
          fontSize="10" fill="#5dcaa5">Meaningful</text>

        {/* ===== بے معنی ===== */}
        <rect x="420" y="128" width="180" height="52" rx="8"
          fill="#4a1b0c" stroke="#d85a30" strokeWidth="1" />
        <text x="510" y="148" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif" fontSize="18"
          fill="#f0997b" fontWeight="500">بے معنی</text>
        <text x="510" y="168" textAnchor="middle" dominantBaseline="central"
          fontSize="10" fill="#d85a30">Non-meaningful</text>

        {/* Line from با معنی down to کلمہ */}
        <line x1="170" y1="180" x2="170" y2="210"
          stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="170" y1="210" x2="340" y2="210"
          stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="340" y1="210" x2="340" y2="235"
          stroke="#c9a84c" strokeWidth="1.2"
          markerEnd="url(#arrowhead)" />

        {/* ===== کلمہ ===== */}
        <rect x="265" y="235" width="150" height="52" rx="8"
          fill="#0c447c" stroke="#378add" strokeWidth="1" />
        <text x="340" y="255" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif" fontSize="20"
          fill="#b5d4f4" fontWeight="500">کلمہ</text>
        <text x="340" y="275" textAnchor="middle" dominantBaseline="central"
          fontSize="10" fill="#85b7eb">Complete Word</text>

        {/* Lines from کلمہ down to 3 nodes */}
        <line x1="340" y1="287" x2="340" y2="315"
          stroke="#c9a84c" strokeWidth="1.2" />
        <line x1="110" y1="315" x2="570" y2="315"
          stroke="#c9a84c" strokeWidth="1.2" />
        {/* Down to اسم */}
        <line x1="110" y1="315" x2="110" y2="340"
          stroke="#c9a84c" strokeWidth="1.2"
          markerEnd="url(#arrowhead)" />
        {/* Down to فعل */}
        <line x1="340" y1="315" x2="340" y2="340"
          stroke="#c9a84c" strokeWidth="1.2"
          markerEnd="url(#arrowhead)" />
        {/* Down to حرف */}
        <line x1="570" y1="315" x2="570" y2="340"
          stroke="#c9a84c" strokeWidth="1.2"
          markerEnd="url(#arrowhead)" />

        {/* ===== اسم ===== */}
        <rect x="30" y="340" width="160" height="70" rx="8"
          fill="#085041" stroke="#1d9e75" strokeWidth="1" />
        <text x="110" y="362" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif" fontSize="26"
          fill="#9fe1cb" fontWeight="500">اسم</text>
        <text x="110" y="390" textAnchor="middle" dominantBaseline="central"
          fontSize="12" fill="#5dcaa5">Noun</text>

        {/* ===== فعل ===== */}
        <rect x="260" y="340" width="160" height="70" rx="8"
          fill="#633806" stroke="#ef9f27" strokeWidth="1" />
        <text x="340" y="362" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif" fontSize="26"
          fill="#fac775" fontWeight="500">فعل</text>
        <text x="340" y="390" textAnchor="middle" dominantBaseline="central"
          fontSize="12" fill="#ef9f27">Verb</text>

        {/* ===== حرف ===== */}
        <rect x="490" y="340" width="160" height="70" rx="8"
          fill="#4a1b0c" stroke="#d85a30" strokeWidth="1" />
        <text x="570" y="362" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Noto Naskh Arabic', serif" fontSize="26"
          fill="#f0997b" fontWeight="500">حرف</text>
        <text x="570" y="390" textAnchor="middle" dominantBaseline="central"
          fontSize="12" fill="#d85a30">Particle</text>

        {/* ===== Bottom caption ===== */}
        <text x="340" y="445" textAnchor="middle"
          fontSize="12" fill="#9e9a8e">{t.diagramSubtitle}</text>

      </svg>
    </div>
  );
}