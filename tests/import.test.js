import { createLocalVue, mount } from '@vue/test-utils'
import VueNestableInstall, { VueNestable, VueNestableHandle } from '../src/index'
import BasicStub from './stubs/Basic.vue'

describe('vue-nestable', () => {
  it('ensures vue-nestable can be imported globally', () => {
    const localVue = createLocalVue()
    localVue.use(VueNestableInstall)

    const wrapper = mount(BasicStub, { localVue })

    expect(wrapper.contains(BasicStub)).toBe(true)

    expect(wrapper.find(`.nestable`).exists()).toBe(true)
    expect(wrapper.find(`.nestable-item-content`).exists()).toBe(true)
  })

  it('ensures the components can be imported on-demand', () => {
    const wrapper = mount(BasicStub, {
      components: {
        VueNestable,
        VueNestableHandle
      },
      sync: true
    })

    expect(wrapper.contains(BasicStub)).toBe(true)

    expect(wrapper.find(`.nestable`).exists()).toBe(true)
    expect(wrapper.find(`.nestable-item-content`).exists()).toBe(true)
  })
})
