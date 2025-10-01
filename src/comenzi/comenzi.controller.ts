import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ComenziService } from './comenzi.service';
import { UppercasePipe } from 'src/uppercase/uppercase/uppercase.pipe';

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
    @Query('client', UppercasePipe) client?: string,
    @Query('produs', UppercasePipe) produsNume?: string,
  ) {
    return this.comenziService.cautaComenzi(client, produsNume);
  }

  @Get('client/:name')
  getOrdersByClient(@Param('name', UppercasePipe) name: string) {
    return this.comenziService
      .getComenzi()
      .filter((c) => c.client.toUpperCase() === name);
  }
}
