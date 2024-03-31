import React from 'react';

// 포메이션 데이터의 타입 정의
interface PositionData {
  position: string;
  number: number;
  x: number;
  y: number;
}

// Formation 컴포넌트에 대한 props의 타입 정의
interface FormationProps {
  formationData: PositionData[];
}

// 함수 컴포넌트 작성시 Props 타입을 명시적으로 지정
const Formation = (props: FormationProps) => {
  const { formationData } = props;

  return (
    <svg width="100%" height="100%">
      {formationData.map(({ position, number, x, y }) => (
        <circle key={number} cx={`${x}%`} cy={`${y}%`} r="3" fill="black" />
      ))}
    </svg>
  );
};

export default Formation;
