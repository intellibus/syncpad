import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Syncpad Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'syncpad');
});

export const { run } = test;
