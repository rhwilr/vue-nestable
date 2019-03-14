import { mount } from '@vue/test-utils'
import { VueNestable } from '../src/index'

describe('props', () => {
  const wrapperDefault = mount(VueNestable, {
    propsData: {
      value: []
    }
  })

  const wrapper = mount(VueNestable, {
    propsData: {
      value: [{
        key: 0,
        text: 'Harry Potter'
      }],
      threshold: 1,
      maxDepth: 2,
      keyProp: 'key',
      group: 'characters',
      childrenProp: 'nested',
      classProp: 'class'
    }
  })

  it('tests the value prop', () => {
    expect(wrapperDefault.props('value')).toEqual([])

    expect(wrapper.props('value')).toEqual([{
      key: 0,
      text: 'Harry Potter'
    }])
  })

  it('tests the threshold prop', () => {
    expect(wrapperDefault.props('threshold')).toBe(30)
    expect(wrapper.props('threshold')).toBe(1)
  })

  it('tests the maxDepth prop', () => {
    expect(wrapperDefault.props('maxDepth')).toBe(10)
    expect(wrapper.props('maxDepth')).toBe(2)
  })

  it('tests the keyProp prop', () => {
    expect(wrapperDefault.props('keyProp')).toBe('id')
    expect(wrapper.props('keyProp')).toBe('key')
  })

  it('tests the group prop', () => {
    expect(wrapper.props('group')).toBe('characters')
  })

  it('tests the childrenProp prop', () => {
    expect(wrapperDefault.props('childrenProp')).toBe('children')
    expect(wrapper.props('childrenProp')).toBe('nested')
  })

  it('tests the classProp prop', () => {
    expect(wrapperDefault.props('classProp')).toBe(null)
    expect(wrapper.props('classProp')).toBe('class')
  })
})
