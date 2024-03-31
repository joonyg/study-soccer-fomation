import React, { useState } from 'react';
import './App.css';
import Formation from './formation/formation'
import { formation442, formation4123 } from './formation/formationDB';

interface PositionData {
  position: string;
  number: number;
  x: number;
  y: number;
}


function App() {


  const toggleFormation = (formation: PositionData[]) => {
    setCurrentfomation(formation);
  };



  const [currentfomation, setCurrentfomation] = useState<PositionData[]>(formation442)
  return (
    <div className="App">
      <div>
        <h1>축구 포메이션</h1>
        <button onClick={() => toggleFormation(formation442)}>4-4-2</button>
        <button onClick={() => toggleFormation(formation4123)}>4-3-3</button>
        {/* 추가적인 포메이션 버튼들 */}
        <Formation formationData={currentfomation} />
      </div>
    </div>
  );
}

export default App;
