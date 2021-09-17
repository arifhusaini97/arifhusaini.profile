import { shallowMount } from '@vue/test-utils';
import Screen from '@/components/Screen.vue';

describe('Screen.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Screen, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
