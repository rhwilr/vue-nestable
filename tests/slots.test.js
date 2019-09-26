import { createLocalVue, mount } from '@vue/test-utils'
import VueNestable from '../src/index'
import BasicStub from './stubs/Basic.vue'

const localVue = createLocalVue()
localVue.use(VueNestable)

describe('slots', () => {
  const wrapper = mount(BasicStub, { localVue })

  it('ensures the item and index is passed in a scoped slot', () => {
    const items = wrapper.findAll('li.nestable-item div div')

    expect(items.at(0).text()).toBe('0 - Andy')
    expect(items.at(1).text()).toBe('1 - Harry')
    expect(items.at(2).text()).toBe('0 - David')
    expect(items.at(3).text()).toBe('2 - Lisa')
  })
})
