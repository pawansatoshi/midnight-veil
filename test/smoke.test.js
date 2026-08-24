import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('Veil product foundation exists', () => {
  assert.equal(fs.existsSync('index.html'), true);
  assert.equal(fs.existsSync('app/main.js'), true);
  assert.equal(fs.existsSync('app/styles.css'), true);
  assert.equal(fs.existsSync('contracts/veil.compact'), true);
});

test('responsive overflow guard is present', () => {
  const css = fs.readFileSync('app/styles.css', 'utf8');
  assert.match(css, /overflow-x:hidden/);
  assert.match(css, /@media\(max-width:760px\)/);
});

test('privacy boundary language is documented', () => {
  const readme = fs.readFileSync('README.md', 'utf8');
  assert.match(readme, /Never store raw identity\/profile data on-chain/);
});
