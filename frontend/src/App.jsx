import { useState } from 'react';
import Espresso from './components/storyboard/Espresso';
import './App.css';

const ITEMS = [
  { id: 'espresso', name: 'Espresso', component: Espresso, ready: true },
  { id: 'turkish-coffee', name: 'Turkish Coffee', ready: false },
  { id: 'cold-brew', name: 'Cold Brew', ready: false },
  { id: 'cappuccino', name: 'Cappuccino', ready: false },
  { id: 'kopi-luwak', name: 'Kopi Luwak', ready: false },
  { id: 'french-press', name: 'French Press', ready: false },
  { id: 'vietnamese', name: 'Vietnamese Coffee', ready: false },
  { id: 'pour-over', name: 'Pour Over', ready: false },
];

export default function App() {
  const [activeItem, setActiveItem] = useState('espresso');
  const [mode, setMode] = useState('presentation');

  const current = ITEMS.find(i => i.id === activeItem);
  const CurrentComponent = current?.component;

  return (
    <div className="app">
      {/* Top bar */}
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-icon">☕</span>
          Every Type of Coffee Explained
          <span className="title-badge">STORYBOARD V3</span>
        </h1>
        <div className="mode-toggle">
          <button
            className={mode === 'timeline' ? 'active' : ''}
            onClick={() => setMode('timeline')}
          >
            ≡ Timeline
          </button>
          <button
            className={mode === 'presentation' ? 'active' : ''}
            onClick={() => setMode('presentation')}
          >
            ▣ Apresentação
          </button>
        </div>
      </header>

      {/* Item navigation */}
      <nav className="item-nav">
        {ITEMS.map((item, i) => (
          <button
            key={item.id}
            className={`item-tab ${activeItem === item.id ? 'active' : ''} ${!item.ready ? 'disabled' : ''}`}
            onClick={() => item.ready && setActiveItem(item.id)}
            disabled={!item.ready}
          >
            <span className="tab-number">#{i + 1}</span>
            <span className="tab-name">{item.name}</span>
            {!item.ready && <span className="tab-lock">🔒</span>}
          </button>
        ))}
      </nav>

      {/* Storyboard content */}
      <main className="storyboard-main">
        {CurrentComponent ? (
          <CurrentComponent mode={mode} />
        ) : (
          <div className="placeholder">
            <p>Item ainda não gerado. Use Claude Code para gerar:</p>
            <code>Gere o storyboard V3 para #{current?.name}</code>
          </div>
        )}
      </main>
    </div>
  );
}
