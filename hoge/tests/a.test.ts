import test from 'ava';
import { aAddB } from '../src/a';

test('aAddB', t => {
  t.is(aAddB(), 600);
})


