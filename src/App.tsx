import React, { useState } from 'react';
import './App.css';
import Template from './demo/Template';
import Single from './demo/Single';

function App() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  return (
    <div className='App'>
      <Template onClick={setRef} />
      <Template onClick={setRef} />
      <Single container={ref} />
    </div>
  );
}

export default App;
