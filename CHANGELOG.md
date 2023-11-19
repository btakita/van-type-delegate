# van-type-delegate

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
