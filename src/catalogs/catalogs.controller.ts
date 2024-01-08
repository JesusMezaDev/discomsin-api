import { Controller, Get, Param } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';

@Controller('catalogs')
export class CatalogsController {
  constructor(private readonly catalogsService: CatalogsService) {}

  @Get(':catalogName')
  findAll(@Param('catalogName') catalogName: string) {
    return this.catalogsService.findAll(catalogName);
  }
}
