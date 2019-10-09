import { Component, h } from '@stencil/core';

@Component({tag: 'c-child', shadow: true})
export class CChild {
  render() {
    return (
      <div>Some child</div>
    );
  }
}
