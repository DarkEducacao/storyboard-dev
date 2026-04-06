import { useState, useRef, useEffect } from 'react';

const BADGE_STYLE = {
  pill: { x: 20, y: 15, width: 170, height: 34, rx: 17, fill: '#1A365D' },
  icon: { cx: 37, cy: 32, r: 13 },
  text: { x: 110, y: 37, fontSize: 12, fill: 'white', fontWeight: 'bold' },
};

function Badge({ name }) {
  return (
    <g className="badge">
      <rect {...BADGE_STYLE.pill} />
      <circle {...BADGE_STYLE.icon} fill="#2D3748" />
      <text x={34} y={36} textAnchor="middle" fontSize="10" fill="white">☕</text>
      <text {...BADGE_STYLE.text} textAnchor="middle">{name}</text>
    </g>
  );
}

function ImagePlaceholder({ x, y, width, height, label, sublabel, className = '' }) {
  return (
    <g className={className}>
      <rect x={x} y={y} width={width} height={height} rx={12}
        fill="#E2E8F0" stroke="#CBD5E0" strokeWidth={1} />
      <text x={x + width / 2} y={y + height / 2 - 6} textAnchor="middle"
        fontSize={11} fill="#718096" fontWeight="500">{label}</text>
      {sublabel && (
        <text x={x + width / 2} y={y + height / 2 + 10} textAnchor="middle"
          fontSize={9} fill="#A0AEC0">{sublabel}</text>
      )}
    </g>
  );
}

/* ── Scene-specific SVG renderers ── */

function TitleCardScene({ beat, playing }) {
  return (
    <svg viewBox="0 0 854 480" className={`beat-svg ${playing ? 'playing' : ''}`}>
      <rect width="854" height="480" fill="#FFFFFF" />
      <g className="anim-cutout">
        <ImagePlaceholder x={302} y={60} width={250} height={260}
          label="CUTOUT PNG" sublabel="xícara espresso + crema" />
      </g>
      <text className="anim-name" x={530} y={370}
        transform="rotate(-15, 530, 370)"
        fontSize={36} fontWeight="bold" fill="#000"
        fontStyle="italic" fontFamily="Georgia, serif">ESPRESSO</text>
    </svg>
  );
}

function BrollMisconceptionScene({ beat, playing }) {
  return (
    <svg viewBox="0 0 854 480" className={`beat-svg ${playing ? 'playing' : ''}`}>
      <rect width="854" height="480" fill="#FFFFFF" />
      <Badge name="ESPRESSO" />
      {/* 3 images in sequence */}
      <g className="anim-img1">
        <ImagePlaceholder x={80} y={100} width={200} height={200}
          label="FOTO: grãos" sublabel="café cru" />
        <g className="anim-x1">
          <line x1={110} y1={130} x2={250} y2={270} stroke="#E53E3E" strokeWidth={6} strokeLinecap="round" />
          <line x1={250} y1={130} x2={110} y2={270} stroke="#E53E3E" strokeWidth={6} strokeLinecap="round" />
        </g>
      </g>
      <g className="anim-img2">
        <ImagePlaceholder x={327} y={100} width={200} height={200}
          label="FOTO: torra" sublabel="roast" />
        <g className="anim-x2">
          <line x1={357} y1={130} x2={497} y2={270} stroke="#E53E3E" strokeWidth={6} strokeLinecap="round" />
          <line x1={497} y1={130} x2={357} y2={270} stroke="#E53E3E" strokeWidth={6} strokeLinecap="round" />
        </g>
      </g>
      <g className="anim-img3">
        <ImagePlaceholder x={574} y={100} width={200} height={200}
          label="FOTO: máquina" sublabel="espresso" />
        <g className="anim-check">
          <circle cx={674} cy={150} r={20} fill="#38A169" />
          <polyline points="662,150 670,158 686,142" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <text x={180} y={340} fontSize={13} fill="#E53E3E" fontWeight="bold" fontStyle="italic">NOT A BEAN</text>
      <text x={427} y={340} textAnchor="middle" fontSize={13} fill="#E53E3E" fontWeight="bold" fontStyle="italic">NOT A ROAST</text>
      <text x={674} y={340} textAnchor="middle" fontSize={13} fill="#38A169" fontWeight="bold" fontStyle="italic">A METHOD ✓</text>
    </svg>
  );
}

function DataPressureScene({ beat, playing }) {
  return (
    <svg viewBox="0 0 854 480" className={`beat-svg ${playing ? 'playing' : ''}`}>
      <rect width="854" height="480" fill="#FFFFFF" />
      <Badge name="ESPRESSO" />
      {/* Espresso extraction photo */}
      <g className="anim-photo">
        <ImagePlaceholder x={60} y={80} width={340} height={250}
          label="FOTO: extração espresso" sublabel="portafilter, jato dourado" />
      </g>
      {/* Pressure infographic */}
      <g className="anim-data">
        <rect x={460} y={80} width={340} height={250} rx={12}
          fill="#F7FAFC" stroke="#E2E8F0" strokeWidth={1} />
        {/* Depth scale */}
        <line x1={500} y1={100} x2={500} y2={310} stroke="#CBD5E0" strokeWidth={2} />
        <text x={510} y={115} fontSize={10} fill="#A0AEC0">0m</text>
        <text x={510} y={210} fontSize={10} fill="#A0AEC0">45m</text>
        <text x={510} y={305} fontSize={10} fill="#3182CE" fontWeight="bold">90m</text>
        {/* Diver silhouette hint */}
        <circle cx={540} cy={290} r={6} fill="#2D3748" />
        <line x1={540} y1={296} x2={540} y2={315} stroke="#2D3748" strokeWidth={2} />
        {/* Big data */}
        <text className="anim-slam" x={660} y={200} textAnchor="middle"
          fontSize={48} fontWeight="bold" fill="#1A365D"
          fontStyle="italic" fontFamily="Georgia, serif">9 BARS</text>
        <text className="anim-analogy" x={660} y={240} textAnchor="middle"
          fontSize={13} fill="#718096">≈ 90 metros submerso</text>
      </g>
    </svg>
  );
}

function ComparisonCremaScene({ beat, playing }) {
  return (
    <svg viewBox="0 0 854 480" className={`beat-svg ${playing ? 'playing' : ''}`}>
      <rect width="854" height="480" fill="#FFFFFF" />
      <Badge name="ESPRESSO" />
      {/* 3 cremas side by side */}
      <g className="anim-crema1">
        <ImagePlaceholder x={60} y={90} width={220} height={200}
          label="CREMA CLARA" sublabel="sub-extraído" />
        <g className="anim-label1">
          <rect x={110} y={300} width={120} height={30} rx={4} fill="#E53E3E" />
          <text x={170} y={320} textAnchor="middle" fontSize={12} fill="white" fontWeight="bold">TOO FAST</text>
        </g>
      </g>
      <g className="anim-crema2">
        <ImagePlaceholder x={317} y={90} width={220} height={200}
          label="CREMA DOURADA" sublabel="perfeita" />
        <g className="anim-label2">
          <rect x={367} y={300} width={120} height={30} rx={4} fill="#38A169" />
          <text x={427} y={320} textAnchor="middle" fontSize={12} fill="white" fontWeight="bold">PERFECT</text>
        </g>
      </g>
      <g className="anim-crema3">
        <ImagePlaceholder x={574} y={90} width={220} height={200}
          label="CREMA ESCURA" sublabel="sobre-extraído" />
        <g className="anim-label3">
          <rect x={624} y={300} width={120} height={30} rx={4} fill="#E53E3E" />
          <text x={684} y={320} textAnchor="middle" fontSize={12} fill="white" fontWeight="bold">BURNED</text>
        </g>
      </g>
      {/* Arrows */}
      <text x={290} y={200} fontSize={24} fill="#CBD5E0">→</text>
      <text x={547} y={200} fontSize={24} fill="#CBD5E0">→</text>
    </svg>
  );
}

function BrollHistoricScene({ beat, playing }) {
  return (
    <svg viewBox="0 0 854 480" className={`beat-svg ${playing ? 'playing' : ''}`}>
      <rect width="854" height="480" fill="#FFFFFF" />
      <Badge name="ESPRESSO" />
      <g className="anim-historic">
        <ImagePlaceholder x={60} y={70} width={350} height={280}
          label="FOTO HISTÓRICA" sublabel="café italiano, séc. XX, sépia" />
      </g>
      <g className="anim-silhouette">
        {/* Simplified impatient person silhouette */}
        <circle cx={620} cy={200} r={25} fill="#2D3748" />
        <rect x={605} y={225} width={30} height={60} rx={4} fill="#2D3748" />
        <rect x={580} y={235} width={80} height={8} rx={4} fill="#2D3748" />
        {/* Clock icon */}
        <circle cx={580} cy={180} r={16} fill="none" stroke="#2D3748" strokeWidth={2} />
        <line x1={580} y1={172} x2={580} y2={180} stroke="#2D3748" strokeWidth={2} />
        <line x1={580} y1={180} x2={588} y2={184} stroke="#2D3748" strokeWidth={2} />
      </g>
      <g className="anim-punchline">
        <text x={427} y={410} textAnchor="middle"
          fontSize={22} fontWeight="bold" fill="#000"
          fontStyle="italic" fontFamily="Georgia, serif">
          INVENTED OUT OF IMPATIENCE
        </text>
      </g>
    </svg>
  );
}

function CloserMontageScene({ beat, playing }) {
  return (
    <svg viewBox="0 0 854 480" className={`beat-svg ${playing ? 'playing' : ''}`}>
      <rect width="854" height="480" fill="#FFFFFF" />
      <Badge name="ESPRESSO" />
      {/* 4 drinks in 2x2 grid */}
      <g className="anim-drink1">
        <ImagePlaceholder x={167} y={70} width={220} height={160}
          label="LATTE" sublabel="latte art" />
      </g>
      <g className="anim-drink2">
        <ImagePlaceholder x={467} y={70} width={220} height={160}
          label="CAPPUCCINO" sublabel="espuma uniforme" />
      </g>
      <g className="anim-drink3">
        <ImagePlaceholder x={167} y={250} width={220} height={160}
          label="AMERICANO" sublabel="caneca transparente" />
      </g>
      <g className="anim-drink4">
        <ImagePlaceholder x={467} y={250} width={220} height={160}
          label="ESPRESSO" sublabel="demitasse clássico" />
      </g>
      <g className="anim-closer">
        <rect x={177} y={200} width={500} height={50} rx={8} fill="rgba(255,255,255,0.92)" />
        <text x={427} y={232} textAnchor="middle"
          fontSize={20} fontWeight="bold" fill="#000"
          fontStyle="italic" fontFamily="Georgia, serif">
          WITHOUT THIS, NONE OF THEM EXIST.
        </text>
      </g>
    </svg>
  );
}

const SCENE_RENDERERS = {
  1: TitleCardScene,
  2: BrollMisconceptionScene,
  3: DataPressureScene,
  4: ComparisonCremaScene,
  5: BrollHistoricScene,
  6: CloserMontageScene,
};

export default function BeatSVG({ beat, playing }) {
  const Renderer = SCENE_RENDERERS[beat.id];
  if (!Renderer) return null;
  return <Renderer beat={beat} playing={playing} />;
}
