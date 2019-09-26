import { createLocalVue, mount } from '@vue/test-utils'
import VueNestable from '../src/index'
import BasicStub from './stubs/Basic.vue'

const localVue = createLocalVue()
localVue.use(VueNestable)

describe('vue-nestable', () => {
  const wrapper = mount(BasicStub, { localVue })

  it('renders the correct markup', () => {
    expect(wrapper.contains(BasicStub)).toBe(true)

    expect(wrapper.find('.nestable').exists()).toBe(true)
    expect(wrapper.find('.nestable-item-content').exists()).toBe(true)

    expect(wrapper.find('ol.nestable-list.nestable-group').exists()).toBe(true)
    expect(wrapper.find('li.nestable-item').exists()).toBe(true)

    expect(wrapper.find('li.nestable-item .nestable-item-content').exists()).toBe(true)
    expect(wrapper.find('li.nestable-item').find('div').exists()).toBe(true)
  })

  it('renderes all the items', () => {
    expect(wrapper.findAll('li.nestable-item  div div').length).toBe(4)

    expect(wrapper.html()).toContain('Andy')
    expect(wrapper.html()).toContain('Harry')
    expect(wrapper.html()).toContain('David')
    expect(wrapper.html()).toContain('Lisa')
  })

  it('respects the order of the items', () => {
    const items = wrapper.findAll('li.nestable-item div div')

    expect(items.at(0).text()).toContain('Andy')
    expect(items.at(1).text()).toContain('Harry')
    expect(items.at(2).text()).toContain('David')
    expect(items.at(3).text()).toContain('Lisa')
  })

  it('ensures the item 2 is nested under item 1', () => {
    const parent = wrapper.findAll('li.nestable-item').at(1)
    const children = parent.find('ol.nestable-list')

    expect(parent.find('.nestable-item-content div').text()).toContain('Harry')

    expect(children.exists()).toBe(true)
    expect(children.find('.nestable-item-content div').text()).toContain('David')
  })

  it('adds a custom class to the nestable-item if defined', () => {
    const items = wrapper.findAll('li.nestable-item')

    expect(items.at(0).classes()).toEqual(['nestable-item', 'nestable-item-0', 'purple-text'])
    expect(items.at(1).classes()).toEqual(['nestable-item', 'nestable-item-1'])
    expect(items.at(3).classes()).toEqual(['nestable-item', 'nestable-item-3', 'purple-text', 'red-text'])
  })
})
