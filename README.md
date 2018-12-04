# vue-nestable

Drag & drop hierarchical list made as a vue component.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/vue-nestable.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/vue-nestable

[travis-image]: https://img.shields.io/travis/rhwilr/vue-nestable/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/rhwilr/vue-nestable

<hr />


## Goals
  - A simple vue component to create a draggable list to customizable items
  - Reorder items by dragging them above an other item
  - Intuitively nest items by dragging right
  - Fully customizable, ships with no css
  - Everything is configurable: item identifier, max nesting level, threshold for nesting


## Table of contents
  * [Demo](#Demo)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Simple Example](#simple-example)
  * [Advanced Example](#advanced-example)
  * [Props](#props)
  * [Slots](#slots)
  * [Events](#events)


## Demo

[Live Demo](https://rhwilr.github.io/vue-nestable/)


## Installation

1. Install the plugin:

```sh
npm install --save vue-nestable
```

2. Add the plugin into your app:

```js
import Vue from 'vue'
import VueNestable from 'vue-nestable'

Vue.use(VueNestable)
```

## Simple Example

You only need two components: `vue-nestable` which renders the list and `vue-nestable-handle` which indicates the are the user can drag the item by.

It can't get any easier than this. 

```html
<template>

  <vue-nestable v-model="nestableItems">
    <vue-nestable-handle
      slot-scope="{ item }"
      :item="item">
      {{ item.text }}
    </vue-nestable-handle>
  </vue-nestable>

</template>

<script type="text/babel">
export default {
  data () {
    return {
      nestableItems: [
        {
          id: 0,
          text: 'Andy'
        }, {
          id: 1,
          text: 'Harry',
          children: [{
            id: 2,
            text: 'David'
          }]
        }, {
          id: 3,
          text: 'Lisa'
        }
      ]
    }
  }
}
</script>
```

## Advanced Example

vue-nestable is extremly customizable. For example you don't have to make the entire item draggable. Instead you can just add an icon by which the item can be dragged. We also limited the nesting level to 2 in this example.

```html
<template>

  <vue-nestable
    v-model="nestableItems"
    :max-depth="2">
    <template slot-scope="{ item }">
      <!-- Handler -->
      <vue-nestable-handle :item="item">
        ☰
      </vue-nestable-handle>

      <!-- Content -->
      <span>Item :: {{ item.text }}</span>
    </template>
  </vue-nestable>

</template>
```


## Props
| Property     | Type             | Default       | Description                                                                                                                                                                                                                     |
| :----------- | :--------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| value        | Array            | [ ]           | Array of objects to be used in the list. **Important:** Each item must have a unique key by which it can be identified. By default the key is assumed to be named `id` but you can change it by setting the `keyProp` property. |
| threshold    | Number           | 30            | Amount of pixels by which the mouse must be move horizontally before increasing/decreasing level (nesting) of current element.                                                                                                  |
| maxDepth     | Number           | 10            | Maximum available level of nesting. Setting this to 0 will prevent dragging altogether.                                                                                                                                         |
| group        | String or Number | random String | Different group numbers may be passed if you have more than one nestable component on a page and want some extra styles for portal instances.                                                                                   |
| keyProp      | String           | 'id'          | Optional name of property with identifier.                                                                                                                                                                                      |
| childrenProp | String           | 'children'    | Optional name of property with children.                                                                                                                                                                                        |

## Slots
| Slot Name   | Description                                                                     |
| :---------- | :------------------------------------------------------------------------------ |
| placeholder | Lets you define a custom template that is used when no elements are in the list |


## Events
| Event | Parameters | Description                         |
| :---- | :--------- | :---------------------------------- |
| input | value      | triggered whenever the list changes |

