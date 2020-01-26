declare module '*.svg' {
  import { SVGFactory } from 'react';

  const component: SVGFactory;

  export default component;
}
