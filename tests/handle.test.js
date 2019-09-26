import { createLocalVue, mount } from '@vue/test-utils'
import VueNestable from '../src/index'
import HandleStub from './stubs/Handle.vue'

const localVue = createLocalVue()
localVue.use(VueNestable)

describe('handle', () => {
  const wrapper = mount(HandleStub, { localVue })

  it('the handle is draggable', () => {
    expect(wrapper.contains(HandleStub)).toBe(true)

    expect(wrapper.find('.nestable').exists()).toBe(true)
    expect(wrapper.find('.nestable-item-content').exists()).toBe(true)

    expect(wrapper.find('ol.nestable-list.nestable-group').exists()).toBe(true)
    expect(wrapper.find('li.nestable-item').exists()).toBe(true)

    expect(wrapper.find('li.nestable-item .nestable-item-content').exists()).toBe(true)
    expect(wrapper.find('li.nestable-item').find('span').exists()).toBe(true)
  })
})
