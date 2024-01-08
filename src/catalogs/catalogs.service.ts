import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

import { ImagesResponse, CloudinaryResponse } from '../interfaces/cloudinaryResponse';

@Injectable()
export class CatalogsService {
  async findAll(catalogName: string) {
    cloudinary.config({
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      cloud_name: process.env.CLOUD_NAME,
    });

    try {
      const response: CloudinaryResponse = await cloudinary.api
      .resources({
        type: 'upload',
        prefix: `muebleria/catalogos/${ catalogName }/`,
      });

      const { resources } = response;

      const imgs: ImagesResponse[] = [];

      resources.forEach(resource => {
        const {
          public_id,
          format,
          folder,
          url,
          secure_url
        } = resource;

        imgs.push({
          public_id,
          format,
          folder,
          url,
          secure_url
        });
      });

      return imgs;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError = (error: any) => {
    if (error.code >= 400 && error.code < 500) throw new BadRequestException(error.message);

    throw new InternalServerErrorException('Algo salió mal, inténtelo de nuevo más tarde.');
  }
}
