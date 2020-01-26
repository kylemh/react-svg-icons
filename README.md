# SVG Icons

This is a template repository used to quickly scaffold a React SVG Icon library.

## Installation

This repository isn't published. It exists as a template repository for you to use, populate with SVGs, and maintain an Icon library!

If you use this template repository, please ensure that the `.browserslistrc` and `svgo.config.js` match defaults that make you and/or your company happy. Additionally, you'll want to change the import path defining `ProductionBundleIconsMap` in both `src/index.test.js` and `src/index.stories.tsx` to match the `name` field of your `package.json`.

## Contributing new icons to the library

### Process

- Put your SVG icon into `src/svgs`
- Ensure that the `svg` includes a `title` element as the first child of the `svg` element.
  - Its content should be a human-readible description of the SVG (this is for accessibility)
- Add the correct type-safe mapping in `src/index.ts` (follow the pattern)
- `yarn build && yarn test -u` to updates snapshots
- `yarn storybook` to go and see the result of your work in Storybook.

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

1. If you want the icon to express meaning by itself (without text):

Please render the SVG inline into your application. Be sure that `aria-hidden="false"` and also apply an `id` to the `<title>` aspect of the SVG. Lastly, give the value of that `id` to the attribute `aria-labelledby` on the actual `<svg>`.

---

2. If you don't want the icon to be customizable (fill, stroke, etc.) via props
3. You want the paths of the icon to be controllable in animations

This repository is for uniformly behaving, customizable icon sets. Please render the SVG inline into your application OR please integrate [react-svg-loader](https://github.com/boopathi/react-svg-loader) into your application, steal [our svgo config](./svgo.config.js), and simply manage the implementation yourself.
