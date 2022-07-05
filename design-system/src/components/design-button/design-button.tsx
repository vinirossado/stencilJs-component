import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'design-button',
  styleUrl: 'design-button.css',
  shadow: true,
})
export class DesignButton {

  @Prop() text:string;
  @Prop() appearance :string;

  render() {
    return (
      <button class={`btn  ${this.appearance}`} type='button'>
        {this.text}
      </button>
    );
  }

}
