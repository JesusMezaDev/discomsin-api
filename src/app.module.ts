import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { SliderModule } from './slider/slider.module';
import { CatalogsModule } from './catalogs/catalogs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // CloudinaryModule,
    SliderModule,
    CatalogsModule,
  ],
})
export class AppModule {}
