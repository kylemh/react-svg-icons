import React from 'react';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

/*
 * We don't want to import the src modules because Jest doesn't have a way to handle SVGs.
 * In this system, we're just rendering React components which happen to render `svgs`. This will
 * more closely emulate the manner with which our consumers will use our components, also.
 */
import * as ProductionBundleIconsMap from '../dist/index.production.esm';

const createSnapshotTest = (Component) => {
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
};

const iconNames = Object.keys(ProductionBundleIconsMap);
const icons = Object.values(ProductionBundleIconsMap);

describe('svg-icons', () => {
  beforeEach(cleanup);

  icons.forEach((Icon, index) => {
    describe(`${iconNames[index]}`, () => {
      it('renders', () => {
        createSnapshotTest(<Icon />);
      });
    });
  });
});
