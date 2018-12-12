import { createLocalVue, mount } from '@vue/test-utils'
import VueNestable from '../src/index'
import VueNestableStub from './stubs/VueNestable.vue'

const localVue = createLocalVue()
localVue.use(VueNestable)

describe('vue-nestable', () => {
  const wrapper = mount(VueNestableStub, { localVue })

  it('renders the correct markup', () => {
    expect(wrapper.contains(VueNestableStub)).toBe(true)

    expect(wrapper.find(`.nestable`).exists()).toBe(true)
    expect(wrapper.find(`.nestable-item-content`).exists()).toBe(true)

    expect(wrapper.find(`ol.nestable-list.nestable-group`).exists()).toBe(true)
    expect(wrapper.find(`li.nestable-item`).exists()).toBe(true)

    expect(wrapper.find(`li.nestable-item .nestable-item-content`).exists()).toBe(true)
    expect(wrapper.find(`li.nestable-item`).find(`span`).exists()).toBe(true)
  })

  it('renderes all the items', () => {
    expect(wrapper.findAll(`li.nestable-item span`).length).toBe(4)

    expect(wrapper.html()).toContain(`Andy`)
    expect(wrapper.html()).toContain(`Harry`)
    expect(wrapper.html()).toContain(`David`)
    expect(wrapper.html()).toContain(`Lisa`)
  })

  it('respects the order of the items', () => {
    let items = wrapper.findAll(`li.nestable-item span`)

    expect(items.at(0).text()).toBe(`Andy`)
    expect(items.at(1).text()).toBe(`Harry`)
    expect(items.at(2).text()).toBe(`David`)
    expect(items.at(3).text()).toBe(`Lisa`)
  })

  it('ensures the item 2 is nested under item 1', () => {
    let parent = wrapper.findAll(`li.nestable-item`).at(1)
    let children = parent.find('ol.nestable-list')

    expect(parent.find(`.nestable-item-content span`).text()).toBe(`Harry`)

    expect(children.exists()).toBe(true)
    expect(children.find(`.nestable-item-content span`).text()).toBe(`David`)
  })
})
