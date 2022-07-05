import { newE2EPage } from '@stencil/core/testing';

describe('design-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<design-button></design-button>');

    const element = await page.find('design-button');
    expect(element).toHaveClass('hydrated');
  });
});
