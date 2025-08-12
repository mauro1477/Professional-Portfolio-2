import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../src/components/Navbar.vue';

describe('Navbar', () => {
  it('toggles menu and icon on button click', async () => {
    const wrapper = mount(Navbar);

    expect(wrapper.vm.isOpen).toBe(false);
    expect(wrapper.find('.fa-bars').exists()).toBe(true);
    expect(wrapper.find('.fa-xmark-large').exists()).toBe(false);

    await wrapper.find('button').trigger('click');

    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.find('.fa-bars').exists()).toBe(false);
    expect(wrapper.find('.fa-xmark-large').exists()).toBe(true);
  });

  it('scrolls to section on navBarClick', async () => {
    const scrollIntoView = vi.fn();
    const getElementById = vi.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView,
    });

    const wrapper = mount(Navbar);

    await wrapper.find('#projects').trigger('click');

    expect(getElementById).toHaveBeenCalledWith('projects-section');
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    getElementById.mockRestore();
  });
});
