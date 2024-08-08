## CLI

| Name          | CLI                                              | Description                         |
| :------------ | :----------------------------------------------- | :---------------------------------- |
| `decorator`   | `nest g d common/decorators/decorator-name`      | Generate a custom decorator         |
| `filter`      | `nest g f common/filters/filter-name`            | Generate a filter declaration       |
| `guard`       | `nest g gu common/guards/guard-name`             | Generate a guard declaration        |
| `interceptor` | `nest g itc common/interceptors/interceptor-name`| Generate an interceptor declaration |
| `interface`   | `nest g itf common/interfaces/interface-name`    | Generate an interface               |
| `middleware`  | `nest g mi common/middlewares/middleware-name`   | Generate a middleware declaration   |
| `controller`  | `nest g co modules/controller-name`              | Generate a controller declaration   |
| `resource`    | `nest g res modules/resource-name`               | Generate a new CRUD resource        |
| `service`     | `nest g s modules/service-name`                  | Generate a service declaration      |
| `module`      | `nest g mo modules/module-name`                  | Generate a module declaration       |

## Migration

```sh
yarn migration:generate src/database/migrations/[name] // Naming convention: [actionName]_[tableName]_table
yarn migration:create src/database/migrations/[name] // Naming convention: [actionName]_[tableName]_table
yarn migration:run
yarn migration:show
yarn migration:sync
yarn migration:revert

example: yarn migration:generate src/database/migrations/create_user_table
```

## Format code

```sh
yarn format
```

## Folders

```js
+-- dist // Source build
+-- public // Static Files
+-- src // Source files
|   +-- config // Environment Configuration
|   +-- database // TypeORM Entities
|   |   +-- entities // TypeORM Entities
|   |   +-- migrations // TypeORM Migrations
|   +-- modules // Nest Modules
|   +-- common //
|   |   +-- constants // Constant value and Enum
|   |   +-- controllers // Nest Controllers
|   |   +-- decorators // Nest Decorators
|   |   +-- dto // DTO (Data Transfer Object) Schema, Validation
|   |   +-- filters // Nest Filters
|   |   +-- guards // Nest Guards
|   |   +-- interceptors // Nest Interceptors
|   |   +-- interfaces // TypeScript Interfaces
|   |   +-- middleware // Nest Middleware
|   |   +-- types // Type definitions
|   |   +-- middleware // Nest Middleware
|   |   +-- * // models, repositories, services...
|   +-- utils // utility functions, system utilities
|   +-- * // Other Nest Modules, non-global, same as common structure above
+-- test // Jest testing
```

## Tech Stack

**Node:** 18.16.0

**Nestjs:** 9.3.0

**Mysql:** 8.1.\*

II 
# XML to JSON Converter and NestJS API

This project includes two XML to JSON converters and a NestJS API to serve the converted data.

## Custom XML to JSON Converter

The custom converter uses a recursive approach to parse the XML structure. Here's how it works:

1. It starts by parsing the root element of the XML.
2. For each element, it checks if the element has text content. If so, it returns the text content.
3. If the element has child elements, it recursively parses each child.
4. It handles cases where multiple child elements have the same tag by converting the value to a list.

The time complexity of this algorithm is O(n), where n is the number of characters in the XML string, as it processes each character once.

## Library XML to JSON Converter

The library converter uses the `xml2js` library, which provides a simple way to convert XML to a JavaScript object.

## API Design

The API includes one main endpoint:

- `/booking/<confirmation_no>`: A GET endpoint protected by JWT authentication that returns the booking data for the given confirmation number.

The API reads the corresponding XML file based on the confirmation number, converts it to JSON using both converters, and returns the results.

## Design Choices

- The custom converter was designed to be flexible and handle various XML structures without relying on external libraries.
- The library converter was included to provide a comparison and a more robust solution for complex XML structures.
- JWT authentication was used to secure the API and demonstrate how to implement protected routes in NestJS.
- The API design allows for easy comparison between the custom and library converters.

To use the API, you need to implement a login endpoint to obtain a JWT token, then use this token in the Authorization header when making requests to the `/booking/<confirmation_no>` endpoint.