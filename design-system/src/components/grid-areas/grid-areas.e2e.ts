import { newE2EPage } from '@stencil/core/testing';

describe('grid-areas', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<grid-areas></grid-areas>');
    const element = await page.find('grid-areas');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
