import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProduseService {
  private produse = [
    { id: 1, nume: 'Bubble Tea Clasic', pret: 20, categorie: 'Ceai' },
    { id: 2, nume: 'Bubble Tea Matcha', pret: 25, categorie: 'Ceai' },
    { id: 3, nume: 'Bubble Tea Ciocolata', pret: 22, categorie: 'Special' },
    { id: 4, nume: 'Bubble Tea Vanilie', pret: 21, categorie: 'Special' },
    { id: 5, nume: 'Bubble Tea Mango', pret: 24, categorie: 'Fructe' },
    { id: 6, nume: 'Bubble Tea Capsuni', pret: 23, categorie: 'Fructe' },
    { id: 7, nume: 'Bubble Tea Pepene', pret: 26, categorie: 'Fructe' },
    { id: 8, nume: 'Bubble Tea Caramel', pret: 27, categorie: 'Special' },
    { id: 9, nume: 'Bubble Tea Taro', pret: 28, categorie: 'Exotic' },
    { id: 10, nume: 'Bubble Tea Cafea', pret: 30, categorie: 'Cafea' },
  ];

  getProduse() {
    return this.produse;
  }

  getProdusDupaId(id: number) {
    const produs = this.produse.find((p) => p.id === id);
    if (!produs) throw new NotFoundException('Produsul nu a fost gasit');
    return produs;
  }

  cautaProduse(nume?: string, minPret?: number, maxPret?: number) {
    let rezultate = this.produse;
    if (nume) rezultate = rezultate.filter((p) => p.nume.toLowerCase().includes(nume.toLowerCase()));
    if (minPret !== undefined) rezultate = rezultate.filter((p) => p.pret >= minPret);
    if (maxPret !== undefined) rezultate = rezultate.filter((p) => p.pret <= maxPret);
    return rezultate;
  }
}
