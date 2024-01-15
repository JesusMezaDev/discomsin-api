import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

import { ImagesResponse, CloudinaryImagesResponse, Info } from '../interfaces/cloudinaryImagesResponse';
import { CloudinaryFoldersResponse } from 'src/interfaces/cloudinaryFoldersResponse';

@Injectable()
export class CatalogsService {
  async findAll(catalogName: string) {
    cloudinary.config({
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      cloud_name: process.env.CLOUD_NAME,
    });
    
    try {
      const response: CloudinaryImagesResponse = await cloudinary.api
      .resources({
        type: 'upload',
        prefix: `${ process.env.CATALOGS_PATH }${ catalogName }/`,
        context: true,
      });

      const { resources } = response;

      const imgs: ImagesResponse[] = [];

      resources.forEach(resource => {
        const {
          context,
          folder,
          format,
          public_id,
          secure_url,
          url,
        } = resource;

        const info: { title: string, description: string } = { title: context?.custom.caption, description: context?.custom.alt }; 

        imgs.push({
          folder,
          format,
          info,
          public_id,
          secure_url,
          url,
        });
      });

      return imgs;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getCatalogs() {
    cloudinary.config({
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      cloud_name: process.env.CLOUD_NAME,
    });
    
    try {
      const response: CloudinaryFoldersResponse = await cloudinary.api.sub_folders(process.env.CATALOGS_PATH);

      const { folders } = response;
      
      return folders;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError = (error: any) => {
    if (error.code >= 400 && error.code < 500) throw new BadRequestException(error.message);
    if (error.http_code>= 400 && error.http_code < 500) throw new BadRequestException(error.message);

    throw new InternalServerErrorException('Algo salió mal, inténtelo de nuevo más tarde.');
  }
}
