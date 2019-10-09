import { Component, h } from '@stencil/core';

@Component({tag: 'c-child', shadow: true})
export class CChild {
  render() {
    return (
      <div class="test-class">Some child</div>
    );
  }
}
