import { shallowMount } from '@vue/test-utils';
import Screen from '@/components/Screen.vue';

describe('Screen.vue', () => {
  it('renders props.header when passed', () => {
    const header = 'RANK';
    const wrapper = shallowMount(Screen, {
      props: {
        header,
      },
    });
    expect(wrapper.text()).toMatch(header);
  });
});
