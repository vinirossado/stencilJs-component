import { newE2EPage } from '@stencil/core/testing';

describe('design-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<design-grid></design-grid>');

    const element = await page.find('design-grid');
    expect(element).toHaveClass('hydrated');
  });
});
