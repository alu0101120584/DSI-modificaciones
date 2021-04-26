/**
 * Interfaz genérica de Pokémon
 */
export interface Pokemon {
  getNombre(): string;
  getAltura(): number;
  getPeso(): number;
  getStats(): number[];
}
