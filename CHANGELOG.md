# van-type-delegate

## 1.2.16

### Patch Changes

- vanjs-core: ^1.3.0 -> ^1.4.0-rc.0

## 1.2.15

### Patch Changes

- vanjs-core: ^1.2.8 -> ^1.3.0

## 1.2.14

### Patch Changes

- tsx: ^4.7.0 -> ^4.7.1

## 1.2.13

### Patch Changes

- vanjs-core: ^1.2.7 -> ^1.2.8

## 1.2.12

### Patch Changes

- tsx: ^4.6.2 -> ^4.7.0

## 1.2.11

### Patch Changes

- vanjs-core: ^1.2.6 -> ^1.2.7

## 1.2.10

### Patch Changes

- tsx: ^4.4.0 -> ^4.5.0

## 1.2.9

### Patch Changes

- tsx: ^4.3.0 -> ^4.4.0

## 1.2.8

### Patch Changes

- tsx: ^4.1.4 -> ^4.2.0

## 1.2.7

### Patch Changes

- tsx: ^4.1.3 -> ^4.1.4

## 1.2.6

### Patch Changes

- tsx: ^4.1.2 -> ^4.1.3

## 1.2.5

### Patch Changes

- mini-van-plate: ^0.5.3 -> ^0.5.4-perf.0

## 1.2.4

### Patch Changes

- package.json: files:

      *.d.ts
      *.js
      *.json

## 1.2.3

### Patch Changes

- package.json: files: + \*.js

## 1.2.2

### Patch Changes

- fix: missing tsconfig.json

## 1.2.1

### Patch Changes

- tsx: ^4.0.0 -> ^4.1.2

## 1.2.0

### Minor Changes

- fix:types package.json exports
- tsconfig:

      "module": "ESNext"
      "moduleResolution": "nodenext"
      "target": "ESNext"

### Patch Changes

- package.json: - "svelte": "./src/index.js"

## 1.1.1

### Patch Changes

- StateVal: fix: inference

## 1.1.0

### Minor Changes

- generics: state_T extends State<unknown> = State<any>: fix: type inference:

      be_derive_pair__new
      be_state_triple__new

## 1.0.0

### Major Changes

- initial release:

      VanShape
      CoreBindingFunc,
      CoreChildDom,
      CoreTagFunc,
      CoreValidChildDomValue,
      CoreVan,
      MiniBindingFunc,
      MiniChildDom,
      MiniTagFunc,
      MiniValidChildDomValue,
      MiniVan,
      PlateBindingFunc,
      PlateChildDom,
      PlateElement,
      PlateTagFunc,
      PlateValidChildDomValue,
      PlateVan,
      Primitive,
      Props,
      PropValue,
      State,
      StateView
      UnderscoreFunc
      CoreTags
      MiniTags
      PlateTags
      StateVal
      ValidChildDomValue
      BindingFunc
      ChildDom
      AddFunc
      TagFunc
      Tags
      TagsNSFunc
      CommonVan
