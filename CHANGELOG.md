# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Added
  - vue-nestable now supports toucheEvents to handle drag & drop on mobile device.


## [1.0.0] - 2018-12-16

:tada: I'm proud to announce that version 1.0 has landed. :tada: 

No changes since the last beta release, but if you are upgrading from a 0.x
release, please note that the polyfill for the 
[experimental support](https://github.com/vuejs/vue/pull/7765) for binding 
scopedSlots was removed. See 
[Installation](https://github.com/rhwilr/vue-nestable#installation) for details 
on how to import the component.


## [1.0.0-beta.2] - 2018-12-15

### Added
 - You can now access the `index` of the item in the scoped-slot.
 - The components `VueNestable` and `VueNestableHandle` are exposed as named exports.

### Changed
 - Renamed component names to PascalCase.


## [1.0.0-beta.1] - 2018-12-07

### Fixed
 - `keyProp` was documented but never implemented. You can now set the `keyProp`
   that is used to identifie the item.


## [1.0.0-beta.0] - 2018-12-04

:tada: We are approaching the first official release of vue-nestable. Check out
this beta and please report any bugs you may encounter.

### Changed
 - Switched from binding scopedSlots to useing a template loop with slots,
   [#2](https://github.com/rhwilr/vue-nestable/pull/2) (by
   [@pbastowski](https://github.com/pbastowski))

### Removed
 - The polyfill for the [experimental support](https://github.com/vuejs/vue/pull/7765)
   for binding scopedSlots was removed.
