import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProduseService } from './produse.service';
import { UppercasePipe } from 'src/uppercase/uppercase/uppercase.pipe';

@Controller('produse')
export class ProduseController {
  constructor(private readonly produseService: ProduseService) {}

  @Get('list')
  getAll() {
    return this.produseService.getProduse();
  }

  @Get('details/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.produseService.getProdusDupaId(id);
  }

  @Get('search')
  search(
    @Query('nume', UppercasePipe) nume?: string,
    @Query('minPret') minPret?: string,
    @Query('maxPret') maxPret?: string,
  ) {
    return this.produseService.cautaProduse(
      nume,
      minPret ? +minPret : undefined,
      maxPret ? +maxPret : undefined,
    );
  }

  @Get(':name')
  getProductByName(@Param('name', UppercasePipe) name: string) {
    return (
      this.produseService.getProduse().find(
        (p) => p.nume.toUpperCase() === name,
      ) || { message: 'Produs inexistent' }
    );
  }
}
