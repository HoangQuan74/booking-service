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