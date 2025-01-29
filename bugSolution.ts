function combine(a: number, b: string): number {
  return a + parseInt(b); 
}
//Alternative solution: type assertion
// function combine(a: number, b: string): number {
//   return a + (b as any as number);
// }