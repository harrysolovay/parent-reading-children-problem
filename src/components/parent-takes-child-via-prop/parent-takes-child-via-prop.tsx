import { Component, h, Prop } from '@stencil/core';

@Component({tag: 'c-parent-takes-child-via-prop', shadow: true})
export class CParentTakesChildrenViaProp {
  @Prop() child: HTMLElement;

  render() {
    // Computed styles are empty :/... How do we ensure
    // the child is rendered first & accessible to the parent?
    // How would we get the height for example?

    // null before first render:
    console.log(this.child["$elm$"])

    // after first render...
    if (this.child["$elm$"].style) {
      // all computed styles are blank :/
      console.log(this.child["$elm$"].style)
    }

    return (
      <div>
        {this.child}
      </div>
    )
  }
}
