import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProdusDto } from './dto/update-produs.dto';
import { CreateProdusDto } from './dto/create-produs.dto';
import { CategoriiService } from '../categorii/categorii.service';

@Injectable()
export class ProduseService {
  constructor(private readonly categoriiService: CategoriiService) {} // <--- injecția corectă

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
    if (nume) rezultate = rezultate.filter((p) =>
      p.nume.toLowerCase().includes(nume.toLowerCase()),
    );
    if (minPret !== undefined) rezultate = rezultate.filter((p) => p.pret >= minPret);
    if (maxPret !== undefined) rezultate = rezultate.filter((p) => p.pret <= maxPret);
    return rezultate;
  }

  findOne(id: number) {
    const produs = this.produse.find(p => p.id === id);
    if (!produs) {
      throw new NotFoundException(`Produsul cu ID-ul ${id} nu a fost găsit`);
    }
    return produs;
  }

  create(createProdusDto: CreateProdusDto) {
    if (!this.categoriiService.existaCategorie(createProdusDto.categorie)) {
      throw new NotFoundException(`Categoria "${createProdusDto.categorie}" nu există`);
    }

    const newId = this.produse.length ? Math.max(...this.produse.map(p => p.id)) + 1 : 1;
    const produsNou = { id: newId, ...createProdusDto };
    this.produse.push(produsNou);
    return produsNou;
  }

  update(id: number, updateProdusDto: UpdateProdusDto) {
    let produs = this.findOne(id);

    if (updateProdusDto.categorie && !this.categoriiService.existaCategorie(updateProdusDto.categorie)) {
      throw new NotFoundException(`Categoria "${updateProdusDto.categorie}" nu există`);
    }

    produs = {
      ...produs,
      nume: updateProdusDto.nume ?? produs.nume,
      pret: updateProdusDto.pret ?? produs.pret,
      categorie: updateProdusDto.categorie ?? produs.categorie,
    };

    this.produse[this.produse.findIndex(p => p.id === id)] = produs;
    return produs;
  }

  remove(id: number) {
    const index = this.produse.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Produsul cu ID-ul ${id} nu există`);
    }
    const sters = this.produse.splice(index, 1);
    return sters[0];
  }
}
