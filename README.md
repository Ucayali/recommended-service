# Ucayali - Related Products Component

> Services for an e-commerce site's basic product page. This repo is for a single component - the sponsored products carousel.

## Related Projects

  - https://github.com/Ucayali/Michael-Service
  - https://github.com/Ucayali/Matt-Service
  - https://github.com/Ucayali/Review-Service
  - https://github.com/Ucayali/a-tiller-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This component uses mysql for a DBMS. Please ensure that mysql is running and import the schema.sql file, then execute `npm run seed` to seed your database.

- `npm run build` Runs webpack in production mode
- `npm start` Starts server listening on port 3003

Visit http://localhost:3003/?id=[id] to view the related products for product id [id]. (Note: seed file generates product info for product id's 1-100. Visiting any id outside that range or exluding an id in the url parameter will load the message "No product selected.")

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

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
|  **PATCH**   |  /api/related_products/*PID*/*SID*  |  Adds a recommendation for *SID* to record *PID*       |
|  **DELETE**  |  /api/related_products/*PID*/*SID*  |  Removes a recommendation for *SID* from record *PID*  |
