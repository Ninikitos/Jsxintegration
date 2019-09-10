// Add support for things like setTimeout, setInterval and fetch.
// Simply importing this sets all these as global definitions.
// They are declared in the .eslintrc so your editor won't complain.
import 'magic-script-polyfills';
import process from './global-scope.js';
import React from 'react';
import mxs from 'magic-script-components';

import { App } from './app.js';

mxs.bootstrap(<App type='landscape' volumeSize={[2, 2, 2]}/>);
