'use strict';

const { mockTHREE } = require('ebabel-mocks');
const ebabelAudio = require('../src/ebabel-audio.js');

let THREE;
let scene;  /* eslint no-unused-vars:0 */

beforeEach(() => {
  THREE = mockTHREE;
  scene = new THREE.Scene();
});

test('ebabelAudio returns something other than undefined.', () => {
  const result = ebabelAudio();
  expect(result !== undefined).toBe(true);
});
