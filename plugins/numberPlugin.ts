/**
 * Generate an integer value
 * @param min 
 * @param max 
 */
export function dummyInteger(min: number, max: number): number {
  if (max <= min) return 0;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 
 * @param max 
 */
export function dummyMoney(max: number): number {
  if (max < 1) return 0.00;
  return Number(`${dummyInteger(0, max)}.${dummyInteger(0, 99)}`);
}
