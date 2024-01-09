<p align="center" style="background-color: #FFF;">
    <img src="https://discomsin.netlify.app/img/logo.png" alt="Logo" />
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

La API de Discomsin está hecha con [Nest](https://nestjs.com/) y [Typescript](https://www.typescriptlang.org/).

## Instalación

```bash
$ npm i -E
```

## Para correr la aplicación

Estos son los comandos para correr la API en sus diferentes modos:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# debug mode
$ npm run start:debug

# production mode
$ npm run start:prod
```

## Test

Estos son los comandos para correr las pruebas:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Explicación de variables de entorno

NOTA: todos los valores de las variables que a continuación se presentan son ejemplos utilizados meramente para explicación.

```bash
# Api Key de Cloudinary
API_KEY=123123

# Api Secret de Cloudinary
API_SECRET=abcABC

# Cloud Name de Cloudinary
CLOUD_NAME=apicloudname

# URL de sitio web de Discomsin, solamente desde este sitio se podrá hacer llamados a la API, de lo contrario habrá error de CORS
DISCOMSIN_URL=http://localhost:5173

# Carpeta principal donde se alojarán las imágenes y los catálogos de las imágenes
ROOT_PATH=pathfolder

# Ruta donde se encontrarán todos los catálogos
CATALOGS_PATH=pathfolder/catalogspathfolder/

# Ruta donde se encontrarán las imágenes que se utilizan en el Slider o Carrusel en el sitio web de Discomsin
PATH_SLIDER_IMAGES=pathfolder/sliderpathfolder/
```