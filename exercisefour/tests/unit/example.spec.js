import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('has a button', () => {
    const wrapper = shallowMount(HelloWorld)
      expect(wrapper.contains('button')).toBe(true)
})
})