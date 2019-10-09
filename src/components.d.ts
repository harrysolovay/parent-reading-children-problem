/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface CChild {}
  interface CParentTakesChildViaProp {
    'child': HTMLElement;
  }
  interface CParentTakesChildViaSlot {}
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCChildElement extends Components.CChild, HTMLStencilElement {}
  var HTMLCChildElement: {
    prototype: HTMLCChildElement;
    new (): HTMLCChildElement;
  };

  interface HTMLCParentTakesChildViaPropElement extends Components.CParentTakesChildViaProp, HTMLStencilElement {}
  var HTMLCParentTakesChildViaPropElement: {
    prototype: HTMLCParentTakesChildViaPropElement;
    new (): HTMLCParentTakesChildViaPropElement;
  };

  interface HTMLCParentTakesChildViaSlotElement extends Components.CParentTakesChildViaSlot, HTMLStencilElement {}
  var HTMLCParentTakesChildViaSlotElement: {
    prototype: HTMLCParentTakesChildViaSlotElement;
    new (): HTMLCParentTakesChildViaSlotElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'c-child': HTMLCChildElement;
    'c-parent-takes-child-via-prop': HTMLCParentTakesChildViaPropElement;
    'c-parent-takes-child-via-slot': HTMLCParentTakesChildViaSlotElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface CChild {}
  interface CParentTakesChildViaProp {
    'child'?: HTMLElement;
  }
  interface CParentTakesChildViaSlot {}

  interface IntrinsicElements {
    'app-root': AppRoot;
    'c-child': CChild;
    'c-parent-takes-child-via-prop': CParentTakesChildViaProp;
    'c-parent-takes-child-via-slot': CParentTakesChildViaSlot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'c-child': LocalJSX.CChild & JSXBase.HTMLAttributes<HTMLCChildElement>;
      'c-parent-takes-child-via-prop': LocalJSX.CParentTakesChildViaProp & JSXBase.HTMLAttributes<HTMLCParentTakesChildViaPropElement>;
      'c-parent-takes-child-via-slot': LocalJSX.CParentTakesChildViaSlot & JSXBase.HTMLAttributes<HTMLCParentTakesChildViaSlotElement>;
    }
  }
}

