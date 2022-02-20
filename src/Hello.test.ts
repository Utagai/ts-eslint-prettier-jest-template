import hello from './Hello';

test('test hello', () => {
  expect(hello('Person')).toBe('Hello Person');
});
