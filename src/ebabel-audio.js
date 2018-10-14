'use strict';

/**
 * `ebabelAudio`
 * Play music or positional sound.
 * @param {Object} input - Object with properties to specify theme music parameters. 
 * @param {Object} input.THREE - Library THREE.js
 * @param {Object} input.camera - THREE.js camera instance.
 * @param {number} input.volume - Loudness of the music, ranges from 0 to 1.
 * @param {string} input.url - Path to the theme music file.
 * @param {number} input.distance - If this is set we are using positional audio. Distance at which the sound is audible.
 * @param {string} input.name - Unique name to identify the theme music and listener in THREE.js camera children.
 * @param {boolean} input.loop - Play theme music in a loop. False by default.
 * @param {boolean} input.autostart - Stars playing the music as soon as it loads. False by default.
 * @example
 * const positionalAudio = audio({
    THREE,
    camera,
    volume: 0.45,
    distance: 10;
    url: 'assets/faery-shrine.mp3',
    name: 'faery-shrine-sounds',
  });
 * const nonPositionalAudio = audio({
    THREE,
    camera,
    volume: 0.45,
    url: 'assets/theme-music-forest.mp3',
    name: 'main-music',
  });
 * 
 * @returns {Object} Multiple objects and properties: camera, url, listener, sound, and audioLoader.
 */
 const audio = (input) => {
  const {
    THREE,
    camera,
    name,
    url,
    distance,
    loop = false,
    volume,
    autostart = false,
  } = input;

  if (!camera || !name || !url) return;

  // Create an AudioListener and add it to the camera.
  const listener = new THREE.AudioListener();
  listener.name = name;
  camera.add(listener);

  // Create a global audio source.
  const sound = (distance) ? new THREE.PositionalAudio(listener) : new THREE.Audio(listener);
  sound.name = name;

  // Load a sound and set it as the Audio object's buffer.
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load(url, (buffer) => {
    sound.setBuffer(buffer);
    if (distance) sound.setRefDistance(distance);
    sound.setLoop(loop);
    sound.setVolume(volume);
    if (autostart) sound.play();
  });

  return sound;
};

module.exports = audio;
