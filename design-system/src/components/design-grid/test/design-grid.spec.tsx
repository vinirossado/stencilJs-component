import { newSpecPage } from '@stencil/core/testing';
import { DesignGrid } from '../design-grid';

describe('design-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DesignGrid],
      html: `<design-grid></design-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <design-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </design-grid>
    `);
  });
});
