import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

import { ImagesResponse, CloudinaryImagesResponse } from '../interfaces/cloudinaryImagesResponse';

@Injectable()
export class SliderService {
  async findAll() {
    cloudinary.config({
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      cloud_name: process.env.CLOUD_NAME,
    });

    try {
      const response: CloudinaryImagesResponse = await cloudinary.api
      .resources({
        type: 'upload',
        prefix: process.env.PATH_SLIDER_IMAGES,
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
