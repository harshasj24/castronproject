// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.

// const context = require.context('./', true, /api.service.spec.ts/);

//const context = require.context('./', true, /\.spec\.ts$/);
const context = require.context('./', true, /dashbord.component.spec.ts/);
// >>>>>>> e1860398b01bdab7ac9366021635b1fc33d52183
// And load the modules.
context.keys().map(context);
