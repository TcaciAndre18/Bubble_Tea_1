import { IsString, IsNumber, IsIn, Length, Min, Max, IsOptional, ValidateIf } from 'class-validator';

export class UpdateProdusDto {
  @IsOptional()
  @IsString({ message: 'Numele produsului trebuie să fie un text.' })
  @Length(3, 50, { message: 'Numele trebuie să aibă între 3 și 50 de caractere.' })
  nume?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Prețul trebuie să fie un număr.' })
  @Min(5, { message: 'Prețul minim este 5 lei.' })
  @Max(100, { message: 'Prețul maxim este 100 lei.' })
  pret?: number;

  @IsOptional()
  @IsString({ message: 'Categoria trebuie să fie un text.' })
  @IsIn(['Ceai', 'Fructe', 'Special', 'Exotic', 'Cafea'], {
    message: 'Categoria trebuie să fie una dintre: Ceai, Fructe, Special, Exotic, Cafea.',
  })
  categorie?: string;


  @ValidateIf((o) => o.categorie === 'Cafea' && o.pret !== undefined)
  @Min(20, { message: 'Pentru categoria Cafea, prețul minim trebuie să fie 20 lei.' })
  pretCafeaValid?: number;
}
