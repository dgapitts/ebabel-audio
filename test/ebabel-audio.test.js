'use strict';

const { mockTHREE } = require('ebabel-mocks');
const ebabelAudio = require('../src/ebabel-audio.js');

let THREE;
let camera;

beforeEach(() => {
  THREE = mockTHREE;
  camera = new THREE.PerspectiveCamera();
});


test('audio returns something other than undefined.', () => {
  const result = ebabelAudio({
    THREE,
    camera,
    name: 'death',
    url: 'assets/death-groan.ogg'
  });
  expect(result !== undefined).toBe(true);
});
