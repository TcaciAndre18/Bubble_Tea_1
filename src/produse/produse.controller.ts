import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProduseService } from './produse.service';

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
    @Query('nume') nume?: string,
    @Query('minPret') minPret?: string,
    @Query('maxPret') maxPret?: string,
  ) {
    return this.produseService.cautaProduse(
      nume,
      minPret ? +minPret : undefined,
      maxPret ? +maxPret : undefined,
    );
  }
}
