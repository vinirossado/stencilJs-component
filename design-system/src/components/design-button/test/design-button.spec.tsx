import { newSpecPage } from '@stencil/core/testing';
import { DesignButton } from '../design-button';

describe('design-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DesignButton],
      html: `<design-button></design-button>`,
    });
    expect(page.root).toEqualHtml(`
      <design-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </design-button>
    `);
  });
});
