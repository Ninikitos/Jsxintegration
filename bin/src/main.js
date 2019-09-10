import '../node_modules/magic-script-polyfills/src/polyfills.js';
import './global-scope.js';
import React from '../node_modules/react/index.js';
import mxs from '../node_modules/magic-script-components/index.js';
import { App } from './app.js';

// Add support for things like setTimeout, setInterval and fetch.
mxs.bootstrap(React.createElement(App, {
  type: "landscape",
  volumeSize: [2, 2, 2]
}));
