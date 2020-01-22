# SVG Icons

Little playground to demo a dynamic setup for maintaining iconography as React components.

## Installation

This repository isn't published. It exists as a template repository for you to use, populate with SVGs, and maintain an Icon library!

If you use this template repository, please ensure that the `.browserslistrc` and `svgo.config.js` match defaults that make you and/or your company happy.

## Contributing new icons to the library

### Process

- Optimize your icon using `svgo` or with [SVGOMG](https://jakearchibald.github.io/svgomg/). The optimized `svg` should _ONLY_ have the following attributes:
  - `viewBox="{your coordinates here}"`
  - `xmlns="http://www.w3.org/2000/svg"`
  - `fill="currentColor"`
  - `aria-hidden="true"`
- Ensure that the `svg` includes a `title` element as the first child of the `svg` element.
  - Its content should be a human-readible description of the SVG (this is for accessibility)
- Put it into `src/svgs`

## Usage

### Importing

```JS
import { Alert, Basketball } from 'svg-icons';
```

### Customizing

Every component accepts all props that you'd expect an inlined `svg` to accept in a React environment. This includes `className`, `style`, `fill`, `width`, `height`, etc.

```JS
import { Alert } from 'svg-icons';

<Alert fill="#FFF" width="20px" height="20px" />
```

### Considerations

If:

- You don't want the icon to be customizable (fill, stroke, etc.) via props
- You want the paths of the icon to be controllable in animations

Please integrate [react-svg-loader](https://github.com/boopathi/react-svg-loader) into your application, steal [our svgo config](./svgo.config.js), and simply manage the implementation yourself. This repository is for uniformly behaving, customizable icon sets.

## Seeing Available Icons

Check out the available icons and interact with them via the bottom toolbar using Storybook!

`yarn storybook`

<!-- TODO: Host static instance of Storybook -->
