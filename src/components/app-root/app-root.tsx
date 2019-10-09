import { Component, h } from '@stencil/core';

@Component({tag: 'app-root', shadow: true})
export class AppRoot {

  render() {
    return (
      <div>
        <c-parent-takes-child-via-slot>
          <c-child />
        </c-parent-takes-child-via-slot>
        <c-parent-takes-child-via-prop child={<c-child />} />
      </div>
    );
  }
}
