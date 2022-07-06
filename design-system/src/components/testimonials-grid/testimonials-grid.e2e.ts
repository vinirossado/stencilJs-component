import { newE2EPage } from '@stencil/core/testing';

describe('testimonials-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<testimonials-grid></testimonials-grid>');
    const element = await page.find('testimonials-grid');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
