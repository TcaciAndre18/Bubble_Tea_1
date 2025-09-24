import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ComenziService {
  private comenzi = [
    { id: 1, client: 'Ana', produsId: 1 },
    { id: 2, client: 'Mihai', produsId: 3 },
    { id: 3, client: 'Ioana', produsId: 5 },
  ];

  private produse = [
    { id: 1, nume: 'Bubble Tea Clasic', pret: 20 },
    { id: 2, nume: 'Bubble Tea Matcha', pret: 25 },
    { id: 3, nume: 'Bubble Tea Ciocolata', pret: 22 },
    { id: 5, nume: 'Bubble Tea Mango', pret: 24 },
  ];

  getComenzi() {
    return this.comenzi.map((c) => ({
      ...c,
      produs: this.produse.find((p) => p.id === c.produsId),
    }));
  }

  getComandaDupaId(id: number) {
    const comanda = this.comenzi.find((c) => c.id === id);
    if (!comanda) throw new NotFoundException('Comanda nu a fost gasita');
    return {
      ...comanda,
      produs: this.produse.find((p) => p.id === comanda.produsId),
    };
  }

 cautaComenzi(client?: string, produsNume?: string) {
  let rezultate = this.getComenzi();

  if (client) {
    rezultate = rezultate.filter((c) =>
      c.client.toLowerCase().includes(client.toLowerCase()),
    );
  }

  if (produsNume) {
    rezultate = rezultate.filter(
      (c) =>
        c.produs && 
        c.produs.nume.toLowerCase().includes(produsNume.toLowerCase()),
    );
  }

  return rezultate;
}

}
