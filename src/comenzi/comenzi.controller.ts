import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ComenziService } from './comenzi.service';

@Controller('comenzi')
export class ComenziController {
  constructor(private readonly comenziService: ComenziService) {}

  @Get('list')
  getAll() {
    return this.comenziService.getComenzi();
  }

  @Get('details/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.comenziService.getComandaDupaId(id);
  }

  @Get('search')
  search(
    @Query('client') client?: string,
    @Query('produs') produsNume?: string,
  ) {
    return this.comenziService.cautaComenzi(client, produsNume);
  }
}
