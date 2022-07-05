import { Component, EventEmitter, Event, getAssetPath, h, Prop, State } from '@stencil/core';


@Component({
    tag: 'design-modal',
    styleUrl: 'design-modal.css',
    shadow: true,
    assetsDirs: ['assets']
})
export class DesignModal {

  @Prop({
    mutable:true,
    reflect:true,
  })

  @Prop() isOpen: boolean = false;

  @Prop() header: string = null;

  @Prop() appearance: string = null;

  @Prop() closeIcon:string ="x.svg";

  @Prop() buttons:string;

  //State for our buttons array;
  @State() _buttons: Array<any>

  //EventEmitter
  @Event() private action : EventEmitter;

  //Watch for data;
  arrayDataWatcher(buttons){
    if(typeof buttons === 'string'){
      this._buttons = JSON.parse(buttons);
    }else{
      this._buttons = buttons;
    }
  }

  //Before the component loads, we need to convert the buttons string to an array
  componentWillLoad(){
    this.arrayDataWatcher(this.buttons);
  }

  handleCancel = () => {
    this.isOpen = false;
  }

  handleAction = () => {
    this.action.emit();
  }

    render() {
        return (
           <div class={this.isOpen ? 'modal-wrapper is-open' : 'modal-wrapper'}>
            <div class="modal-overlay" onClick={this.handleCancel}/>
            <div class="modal">

              <div class="header">
                <h6>{this.header}</h6>
                <div class="close" onClick={this.handleCancel}>
                 <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" />
                </div>
              </div>

              <div class="body">
                <slot/>
              </div>
              <div class="footer">
                {this._buttons.map((button, index) => (
                  <design-button  text={button.text} appearance={index === 0 && this.appearance} />
                ))}
              </div>
             </div>
           </div>

        );
    }
}
