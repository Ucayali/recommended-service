# Ucayali - Related Products Component

> A microservice that provides the related products carousel for the item detail page of an general e-commerce website.

## Related Projects

  - [Item Images Module](https://github.com/Ucayali/Michael-Service)
  - [Item Details Module](https://github.com/Ucayali/Matt-Service)
  - [Product Reviews Module](https://github.com/Ucayali/Review-Service)
  - [Dummy Image Script](https://github.com/Ucayali/dummy-imager)

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

A seeding script is provided for generating dummy data for testing purposes. This script is intended to be paired with the script (linked above) for fetching, resizing, compressing, and hosting product images for testing purposes. Scripts are provided to produces a product listing and a join table (in SQL style) to allow for flexibility in data shape, but if the join table script is used test data will then need to be denormalized to fit the Cassandra data model provided.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10+
- Cassandra 3+

## Development

- `npm run build-dev` Runs webpack in dev mode
- `npm run server-dev` Starts nodemon listening on port 3003
- `npm run test` Runs jest tests

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## API

|  Method      |  Endpoint                           |  Action                                                |
| ------------ | ----------------------------------- | ------------------------------------------------------ |
|  **POST**    |  /api/related_products/*            |  Creates recommendation based on body object           |
|  **GET**     |  /api/related_products/*PID*        |  Response body contains related products for *PID*     |

