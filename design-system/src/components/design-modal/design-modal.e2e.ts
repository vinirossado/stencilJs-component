import { newE2EPage } from '@stencil/core/testing';

describe('design-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<design-modal></design-modal>');
    const element = await page.find('design-modal');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
