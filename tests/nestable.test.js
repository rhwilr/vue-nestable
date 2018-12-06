import { createLocalVue, mount } from '@vue/test-utils'
import VueNestable from '../src/index'
import VueNestableStub from './stubs/VueNestable.vue'

const localVue = createLocalVue()
localVue.use(VueNestable)

describe('vue-nestable', () => {
  const wrapper = mount(VueNestableStub, { localVue })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain(`nestable`)
    expect(wrapper.html()).toContain(`<ol class="nestable-list nestable-group">`)
    expect(wrapper.html()).toContain(`<li class="nestable-item nestable-item-0">`)
    expect(wrapper.html()).toContain(`nestable-item-name`)
  })
})
