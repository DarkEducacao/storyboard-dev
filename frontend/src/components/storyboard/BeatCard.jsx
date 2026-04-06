import { CATEGORY_COLORS } from '../../data/espresso';

export default function BeatCard({ beat, isActive }) {
  const cat = CATEGORY_COLORS[beat.category] || CATEGORY_COLORS.broll;

  return (
    <div
      className={`beat-card ${isActive ? 'active' : ''}`}
      style={{ borderLeftColor: cat.border, backgroundColor: isActive ? cat.bg : '#fff' }}
    >
      {/* Header */}
      <div className="beat-card-header">
        <span className="beat-number" style={{ backgroundColor: cat.border }}>
          Beat {beat.id}
        </span>
        <span className="beat-type">{beat.type}</span>
        <span className="beat-duration">{beat.duration}s</span>
      </div>

      {/* Narration */}
      <blockquote className="beat-narration">
        {beat.narration}
      </blockquote>

      {/* Micro-beat highlight */}
      {beat.microBeat && (
        <div className="micro-beat-highlight">
          ★ MICRO-BEAT: "{beat.microBeat}"
        </div>
      )}

      {/* Direction */}
      <div className="beat-section">
        <span className="beat-label">VISUAL:</span>
        <p>{beat.visual}</p>
      </div>

      <div className="beat-row">
        <div className="beat-section beat-section-half">
          <span className="beat-label">CÂMERA:</span>
          <p>{beat.camera}</p>
        </div>
        <div className="beat-section beat-section-half">
          <span className="beat-label">TRANSIÇÃO:</span>
          <p>{beat.transition}</p>
        </div>
      </div>

      {/* Assets */}
      <div className="beat-section">
        <span className="beat-label">ASSETS ({beat.assets.length}):</span>
        <ul className="asset-list">
          {beat.assets.map((a, i) => (
            <li key={i}>
              <span className="asset-type">{a.type}</span>
              <span className="asset-desc">{a.desc}</span>
              <span className="asset-meta">{a.format} · {a.source}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Editor notes */}
      {beat.notes && (
        <div className="beat-notes">
          <span className="beat-label">NOTA EDIÇÃO:</span>
          <p>{beat.notes}</p>
        </div>
      )}
    </div>
  );
}
