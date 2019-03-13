const {
  toCamel,
  toPascal,
  toKebab,
  toSnake,
  toSpace,
} = require('./index');

const varName = 'helloWORLD   IMtestingWeird-var-NAMES--likeThis___ONE_';

test('toCamel', () => {
  expect(toCamel(varName))
    .toBe('helloWorldImTestingWeirdVarNamesLikeThisOne');
});

test('toPascal', () => {
  expect(toPascal(varName))
    .toBe('HelloWorldImTestingWeirdVarNamesLikeThisOne');
});

test('toKebab', () => {
  expect(toKebab(varName))
    .toBe('hello-world-im-testing-weird-var-names-like-this-one');
});

test('toSnake', () => {
  expect(toSnake(varName))
    .toBe('hello_world_im_testing_weird_var_names_like_this_one');
});

test('toSpace', () => {
  expect(toSpace(varName))
    .toBe('hello world im testing weird var names like this one');
});
