import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

/*
 * We don't want to import the src modules lest we need to maintain a development environment via a
 * custom webpack configuration for Storybook. This will more closely emulate the manner with which
 * our consumers will use our components, also.
 */
import * as ProductionBundleIconsMap from '../dist/index.production.esm';

const iconNames = Object.keys(ProductionBundleIconsMap);
const icons = Object.values(ProductionBundleIconsMap);

icons.forEach((Icon, index) => {
  storiesOf('Icons', module)
    .addDecorator(withKnobs)
    .add(`${iconNames[index]}`, () => (
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginTop: '1rem',

          // it's in an iframe, hence window.innerHeight
          height: `${window.innerHeight}px`,
        }}
      >
        {/* TODO: We could eventually use knobs in a more friendly manner to non-devs, but keep in mind you should map all possible props! */}
        <Icon {...object('props', { width: '200' })} />
      </div>
    ));
});
