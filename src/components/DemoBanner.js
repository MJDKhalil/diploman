import React from 'react';
import { DEMO_MODE } from '../utils/demo';

export default function DemoBanner() {
  if (!DEMO_MODE) return null;

  return (
    <div style={{
      background: '#1a73e8',
      color: '#fff',
      textAlign: 'center',
      padding: '6px 16px',
      fontSize: '13px',
      fontFamily: 'inherit',
      width: '100%',
    }}>
      Demo: Backend features disabled — form submissions and authentication are inactive in this portfolio demo.
    </div>
  );
}
