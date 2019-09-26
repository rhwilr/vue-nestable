import { createLocalVue, mount } from '@vue/test-utils'
import VueNestableInstall, { VueNestable, VueNestableHandle } from '../src/index'
import BasicStub from './stubs/Basic.vue'

describe('import', () => {
  it('ensures vue-nestable can be imported globally', () => {
    const localVue = createLocalVue()
    localVue.use(VueNestableInstall)

    const wrapper = mount(BasicStub, { localVue })

    expect(wrapper.contains(BasicStub)).toBe(true)

    expect(wrapper.find('.nestable').exists()).toBe(true)
    expect(wrapper.find('.nestable-item-content').exists()).toBe(true)
  })

  it('ensures the components can be imported on-demand', () => {
    expect(!!VueNestable).toBe(true)
    expect(!!VueNestableHandle).toBe(true)
  })
})
