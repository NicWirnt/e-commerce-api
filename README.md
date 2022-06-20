# API for Admin ecommerce admin CMS

## APIS

all the api end points will follow the following pattersn `{rootUrl}/api/v1`

### Category Apis

this api endpoint is responsible for handling all the category related api call

All the product api end points will follow the following patterns `{rootUrl}/api/v1/category`

| #   | PATH | METHOD | PRIVATE | DESCRIPTION                                                                              |
| --- | ---- | ------ | ------- | ---------------------------------------------------------------------------------------- |
| 1   | '/'  | POST   | YES     | This api will allow you to send the product info and create new category in the database |

### Products apis

this api endpoint is responsible for handling all the product related prodcutsapi call

All the product api end points will follow the following patterns `{rootUrl}/api/v1/products`

| #   | PATH | METHOD | PRIVATE | DESCRIPTION                                                                             |
| --- | ---- | ------ | ------- | --------------------------------------------------------------------------------------- |
| 1   | '/'  | POST   | YES     | This api will allow you to send the product info and create new Product in the database |
| 1   | '/'  | GET    | YES     | This api will allow you to get the product info                                         |
