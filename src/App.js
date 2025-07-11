
import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🛒 Deals Hunter – Знижки ≥90%</h1>
      <p>Це демо Web Dashboard для відображення товарів зі знижками.</p>
      <button onClick={() => alert('🔄 Оновлення списку...')}>🔄 Оновити список</button>
    </div>
  );
}

export default App;
