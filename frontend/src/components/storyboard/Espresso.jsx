import { useState, useRef, useCallback, useEffect } from 'react';
import { espressoData } from '../../data/espresso';
import BeatCard from './BeatCard';
import BeatSVG from './BeatSVG';

export default function Espresso({ mode }) {
  const [activeBeat, setActiveBeat] = useState(0);
  const [playingBeat, setPlayingBeat] = useState(null);
  const [playingAll, setPlayingAll] = useState(false);
  const timeoutRef = useRef(null);
  const allTimeoutRef = useRef([]);

  const beats = espressoData.beats;
  const totalDuration = beats.reduce((s, b) => s + b.duration, 0);

  const playBeat = useCallback((index) => {
    setPlayingBeat(index);
    setActiveBeat(index);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setPlayingBeat(null);
    }, beats[index].duration * 1000);
  }, [beats]);

  const playAll = useCallback(() => {
    setPlayingAll(true);
    allTimeoutRef.current.forEach(clearTimeout);
    allTimeoutRef.current = [];

    let elapsed = 0;
    beats.forEach((beat, i) => {
      const id = setTimeout(() => {
        playBeat(i);
      }, elapsed);
      allTimeoutRef.current.push(id);
      elapsed += beat.duration * 1000;
    });

    const endId = setTimeout(() => {
      setPlayingAll(false);
      setPlayingBeat(null);
    }, elapsed);
    allTimeoutRef.current.push(endId);
  }, [beats, playBeat]);

  const stopAll = useCallback(() => {
    allTimeoutRef.current.forEach(clearTimeout);
    allTimeoutRef.current = [];
    clearTimeout(timeoutRef.current);
    setPlayingAll(false);
    setPlayingBeat(null);
  }, []);

  useEffect(() => {
    return () => {
      allTimeoutRef.current.forEach(clearTimeout);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="storyboard-item">
      {/* Item header */}
      <div className="item-header">
        <div className="item-badge" style={{ backgroundColor: espressoData.badgeColor }}>
          <span className="badge-icon">{espressoData.badgeIcon}</span>
          <span className="badge-name">#{espressoData.number} {espressoData.name}</span>
        </div>
        <div className="item-stats">
          <span>{espressoData.stats.beats} beats</span>
          <span>~{espressoData.stats.words} palavras</span>
          <span>~{espressoData.stats.duration}s narração</span>
        </div>
        <p className="item-role">{espressoData.role}</p>
      </div>

      {/* Controls */}
      <div className="play-controls">
        {!playingAll ? (
          <button className="btn-play" onClick={playAll}>
            ▶ Play All ({totalDuration}s)
          </button>
        ) : (
          <button className="btn-stop" onClick={stopAll}>
            ■ Stop
          </button>
        )}
        <div className="timeline-bar">
          {beats.map((beat, i) => {
            const width = (beat.duration / totalDuration) * 100;
            return (
              <div
                key={beat.id}
                className={`timeline-segment ${activeBeat === i ? 'active' : ''} ${playingBeat === i ? 'playing' : ''}`}
                style={{ width: `${width}%` }}
                onClick={() => { setActiveBeat(i); playBeat(i); }}
                title={`Beat ${beat.id}: ${beat.type} (${beat.duration}s)`}
              >
                <span className="timeline-label">{beat.id}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content based on mode */}
      {mode === 'timeline' ? (
        <div className="beats-timeline">
          {beats.map((beat, i) => (
            <div key={beat.id} className="beat-row-timeline" onClick={() => setActiveBeat(i)}>
              <div className="beat-svg-container">
                <BeatSVG beat={beat} playing={playingBeat === i} />
                <button
                  className="btn-play-beat"
                  onClick={(e) => { e.stopPropagation(); playBeat(i); }}
                >
                  {playingBeat === i ? '⏸' : '▶'}
                </button>
              </div>
              <BeatCard beat={beat} isActive={activeBeat === i} />
            </div>
          ))}
        </div>
      ) : (
        /* Presentation mode */
        <div className="beats-presentation">
          <div className="presentation-svg">
            <BeatSVG beat={beats[activeBeat]} playing={playingBeat === activeBeat} />
            <div className="presentation-nav">
              <button
                disabled={activeBeat === 0}
                onClick={() => setActiveBeat(a => a - 1)}
              >
                ← Anterior
              </button>
              <span>Beat {beats[activeBeat].id} / {beats.length}</span>
              <button
                disabled={activeBeat === beats.length - 1}
                onClick={() => setActiveBeat(a => a + 1)}
              >
                Próximo →
              </button>
            </div>
          </div>
          <div className="presentation-card">
            <BeatCard beat={beats[activeBeat]} isActive={true} />
            <button
              className="btn-play-single"
              onClick={() => playBeat(activeBeat)}
            >
              {playingBeat === activeBeat ? '⏸ Playing...' : `▶ Play Beat ${beats[activeBeat].id} (${beats[activeBeat].duration}s)`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
