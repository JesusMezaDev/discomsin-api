import { Controller, Get, Param } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';

@Controller('catalogs')
export class CatalogsController {
  constructor(private readonly catalogsService: CatalogsService) {}

  @Get(':catalogName')
  async findAll(@Param('catalogName') catalogName: string) {
    return await this.catalogsService.findAll(catalogName);
  }
  
  @Get()
  async findAllCatalogs() {
    return await this.catalogsService.getCatalogs();
  }
}
