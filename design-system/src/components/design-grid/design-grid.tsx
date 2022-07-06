import { Component, h } from '@stencil/core';

@Component({
  tag: 'design-grid',
  styleUrl: 'design-grid.css',
  shadow: true,
})
export class DesignGrid {

  render() {
    return (
      <div class="container">
        <div class="item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id incidunt in iste corrupti magni ipsa quibusdam error natus distinctio ex porro quasi et, magnam accusamus esse iure totam hic mollitia!</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
        <div class="item">Item 7</div>
        <div class="item">Item 8</div>
        <div class="item">Item 9</div>
      </div>
    );
  }

}
