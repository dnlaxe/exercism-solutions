export function toRna(dna: string): string {
  const complement: Record<string, string> = { G: "C", C: "G", T: "A", A: "U" };

  for (const n of dna) {
    if (!(n in complement)) throw new Error("Invalid input DNA.");
  }

  return [...dna].map(n => complement[n]).join("");
}
