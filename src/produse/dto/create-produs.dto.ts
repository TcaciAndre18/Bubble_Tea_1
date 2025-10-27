import { IsString, IsNumber, IsIn, Length, Min, Max } from 'class-validator';

export class CreateProdusDto {
  @IsString({ message: 'Numele produsului trebuie să fie un text.' })
  @Length(3, 50, { message: 'Numele trebuie să aibă între 3 și 50 de caractere.' })
  nume: string;

  @IsNumber({}, { message: 'Prețul trebuie să fie un număr.' })
  @Min(5, { message: 'Prețul minim este 5 lei.' })
  @Max(100, { message: 'Prețul maxim este 100 lei.' })
  pret: number;

  @IsString({ message: 'Categoria trebuie să fie un text.' })
  @IsIn(['Ceai', 'Fructe', 'Special', 'Exotic', 'Cafea'], {
    message: 'Categoria trebuie să fie una dintre: Ceai, Fructe, Special, Exotic, Cafea.',
  })
  categorie: string;
}
