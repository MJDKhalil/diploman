import React from 'react';
import { DEMO_MODE } from '../utils/demo';

export default function DemoBanner() {
  if (!DEMO_MODE) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#1a73e8',
      color: '#fff',
      textAlign: 'center',
      padding: '8px 16px',
      fontSize: '14px',
      fontFamily: 'inherit',
    }}>
      <strong>Portfolio Demo</strong> — This is a read-only demo. Backend is not connected; form submissions and authentication are disabled.
    </div>
  );
}
