# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [2.6.0] - 2020-08-26

### Changed
  - Replaces deprecated `Event.srcElement` with `Event.target`.
    [#98](https://github.com/rhwilr/vue-nestable/pull/98) (by
    [@punpunm](https://github.com/punpunm))
  - Upgraded dependencies.


## [2.5.3] - 2020-03-27

### Fixed
  - Under some conditions, the wrong `pathTo` value would be passed to the
    `change` event.


## [2.5.2] - 2020-02-28

### Fixed
  - Fixed a bug where under some conditions the `.nestable-drag-layer` element
    would not render until the next frame, therefore calculating its size would
    throw an error.


## [2.5.1] - 2020-01-31

### Fixed
  - When moving the mouse slowly, the ghost item would appear in the top left
    corner until the next mousemove event triggerd. This is now fixed.
    [#87](https://github.com/rhwilr/vue-nestable/issues/87)

### Changed
  - Upgraded dependencies.


## [2.5.0] - 2019-12-18

### Added
  - RTL support. Check out the example for details.
    [#83](https://github.com/rhwilr/vue-nestable/pull/83) (by
    [@RoOhi-E](https://github.com/RoOhi-E))

### Fixed
  - Using `keyprop` to render NestablItems in v-for.
    [#85](https://github.com/rhwilr/vue-nestable/pull/85) (by
    [@passi246](https://github.com/passi246))

### Changed
  - Upgraded dependencies.


## [2.4.5] - 2019-09-26

### Fixed
  - Fixes a bug that caused the dragging item to be offset when the content was
    in a scrollable container.
    [#17](https://github.com/rhwilr/vue-nestable/issues/17)


## [2.4.4] - 2019-08-15

This release updates many dependencies to the latest version.


## [2.4.3] - 2019-06-12

This release updates many dependencies to the latest version.
There are no new features or changes in this release.


## [2.4.2] - 2019-05-24

There are no new features or changes in this release.

### Changed
  - Upgraded many internal dev-dependencies as well as our build tools.


## [2.4.1] - 2019-05-06

### Fixed
  - Fixed an issue that caused an items nesting level to be always increased on
    the first interaction.
    [#24](https://github.com/rhwilr/vue-nestable/issues/24)


## [2.4.0] - 2019-04-25

### Added
  - You have now the option to pass hooks that get called when an item is moved.
    This gives you greater flexibility and the option to prevent specific items
    from being dragged.


## [2.3.2] - 2019-04-12

### Fixed
  - In some cases, the `onMouseEnter` event would fire after the drag operation
    was already completed. This would cause an unhandled exception.
    [#22](https://github.com/rhwilr/vue-nestable/issues/22)


## [2.3.1] - 2019-03-14

### Fixed
  - The `items` property in the `change` event is no longer undefined, but
    actually contains the data that was promised.


## [2.3.0] - 2019-03-14

### Added
  - The `options` object in the `change` event now includes the `items` prop.
    The `item` prop gives access to the new list of all items after the changes
    were applied. [#20](https://github.com/rhwilr/vue-nestable/pull/20) (by
    [@notflip](https://github.com/notflip))


## [2.2.0] - 2019-02-28

### Added
  - The default slot that renders the item now provides an `isChild` prop

### Changed
  - Small performance improvement when finding the closest parent of an element


## [2.1.1] - 2019-02-13

### Fixed
  - The position for the ghost element is now calculated correctly when the list
    is inside a scrollable container.
    [#17](https://github.com/rhwilr/vue-nestable/issues/17)


## [2.1.0] - 2019-02-05

### Added
  - You now get additional information in the change event about the item that
    was moved. For now, we only set the `pathTo` attribute.
    [#13](https://github.com/rhwilr/vue-nestable/pull/13) (by
    [@iceflash](https://github.com/iceflash))

### Changed
  - Modernized the development environment. We now use Webpack to build
    vue-nestable. In addition, we now export multiple builds: common-js, es,
    iife, and umd. You can import a different build if you need to, but node and
    webpack will automatically use what works best for your setup.

### Improved
  - Dragging items that are not of equal size should now work better. Currently
    this is only fixed on the desktop, on mobile the
    [issue](https://github.com/rhwilr/vue-nestable/issues/15) still persists.


## [2.0.0] - 2019-01-08

Only a month after we hit version 1.0.0, we are already releasing version 2.0.0!
So Yay... I guess? :smiley:

But we release this new version not because we added many new features, but
because we made a potential breaking change so you might have to make changes to
your code. And since we follow semver: here is version 2.0.0.

### Potential Breaking Change
  - The vue-nestable-handle component now uses a div instead of a span as a
    wrapper element to allow for more flexible content. If you are using the
    handle next to other content, you might have to set `display: inline;` on
    the `.nestable-handle` class.

### Added
  - support for touch events to handle drag & drop on mobile device.
  - the option to add custom classes to an item by setting `classProp` to the
    name of the property that holds your class for each item.



## [1.1.0-beta.3] - 2019-01-05

### Fixed
  - When a string was passed to the class prop it was expanded to an array of
    characters in the browser version of vue.


## [1.1.0-beta.2] - 2019-01-02

### Added
  - You can add custom classes to an item by setting `classProp` to the name of
    the property that holds your class for each item.


## [1.1.0-beta.1] - 2018-12-20

### Changed
  - The vue-nestable-handle component now uses a div instead of a span to allow
    for more flexible content. If you are using the handle next to other
    content, make sure to set `display: inline;` on `.nestable-handle`.
    [#9](https://github.com/rhwilr/vue-nestable/pull/9) (by
    [@Guntau](https://github.com/Guntau))


## [1.1.0-beta.0] - 2018-12-20

### Added
  - vue-nestable now supports touch events to handle drag & drop on mobile device.


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
