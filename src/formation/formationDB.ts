// formations.ts
export interface PositionData {
  position: string;
  number: number;
  x: number;
  y: number;
}

export const formation442: PositionData[] = [
  { position: "GK", number: 1, x: 50, y: 5 },
  { position: "DF", number: 2, x: 40, y: 30 },
  { position: "DF", number: 3, x: 60, y: 30 },
  { position: "DF", number: 4, x: 25, y: 30 },
  { position: "DF", number: 5, x: 75, y: 30 },
  { position: "MF", number: 6, x: 40, y: 55 },
  { position: "MF", number: 7, x: 60, y: 55 },
  { position: "MF", number: 8, x: 25, y: 55 },
  { position: "MF", number: 9, x: 75, y: 55 },
  { position: "FW", number: 10, x: 40, y: 90 },
  { position: "FW", number: 11, x: 60, y: 90 },
];

export const formation4123: PositionData[] = [
  { position: "GK", number: 1, x: 50, y: 5 },
  { position: "DF", number: 2, x: 40, y: 20 },
  { position: "DF", number: 3, x: 60, y: 20 },
  { position: "DF", number: 4, x: 25, y: 20 },
  { position: "DF", number: 5, x: 75, y: 20 },
  { position: "DMF", number: 6, x: 50, y: 35 },
  { position: "MF", number: 7, x: 40, y: 55 },
  { position: "MF", number: 8, x: 60, y: 55 },
  { position: "RW", number: 9, x: 25, y: 85 },
  { position: "LW", number: 10, x: 75, y: 85 },
  { position: "FW", number: 11, x: 50, y: 90 },
];
