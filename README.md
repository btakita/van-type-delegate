# van-type-delegate

Typescript types to support isomorphic web development using vanjs-core, mini-van, van-plate. Uses utility 
types to infer the type in the correct van library. 

## Under Development

This project is under development in a personal project. It is currently a git submodule in the `vendor` directory 
in the [btakita/briantakita.me-dev](https://github.com/btakita/briantakita.me-dev) monorepo.

When I am satisfied with it's usage, I will release this as an npm package.

## Usage

### `VanShape`

`VanShape` is simply a union of the `Van` types in the VanJS ecosystem. The `<V extends VanShape>` generic is used 
to infer what where the `Van` type originate from; either the vanjs-core, mini-van, or van-plate library. 
Since the source of the `Van` type is inferred, additional types in one of the van libraries can be inferred.
