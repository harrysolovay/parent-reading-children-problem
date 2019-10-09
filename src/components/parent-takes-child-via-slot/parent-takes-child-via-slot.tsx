import { Component, h } from '@stencil/core';

@Component({tag: 'c-parent-takes-child-via-slot', shadow: true})
export class CParentTakesChildrenViaSlot {

  // all args undefined...
  // only way to access slot seems to be to attach callback ref...
  // which is only accessible after first render
  connectedCallback() { console.log("connectedCallback ", arguments); }
  componentWillLoad() { console.log("componentWillLoad", arguments); }
  componentWillRender() { console.log("componentWillRender", arguments); }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
