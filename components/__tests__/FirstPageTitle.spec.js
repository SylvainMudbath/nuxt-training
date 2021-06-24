import { shallowMount, mount } from '@vue/test-utils'
import FirstPageTitle from '../FirstPageTitle.vue'

describe('FirstPageTitle', () => {
  test('renders correctly', () => {
    expect(
      mount(FirstPageTitle, {
        propsData: { titleTextHere: 'I am a title' },
      }).element
    ).toMatchSnapshot()
  })
})
