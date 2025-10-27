import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriiService {
  private readonly CATEGORII = ['Ceai', 'Fructe', 'Special', 'Exotic', 'Cafea'] as const;

  getCategorii(): readonly string[] {
    return this.CATEGORII;
  }

  existaCategorie(categorie: string): boolean {
    return this.CATEGORII.includes(categorie as any);
  }
}
