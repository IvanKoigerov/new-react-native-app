const makeConfig = require('@web-bee-ru/commitlint-config');
module.exports = makeConfig({
  commitTypes: [
    'feat', // @NOTE: implementation of functionality
    'fix', // @NOTE: bugfix
    'wip', // @NOTE: work in progress
    'WIP', // @NOTE: work in progress
    'ci', // @NOTE: continuous integration related issues
    'chore', // @NOTE: should be moved in the starter-project
    'build', // @NOTE: build settings
    'refactor', // @NOTE: refactor
    'docs', // @NOTE: docs
    'perf', // @NOTE: performance issues
    'style', // @NOTE: style fixes
    'deps', // @NOTE: dependencies update
    'test', // @NOTE: tests
    'pr', // @NOTE: fixed pull request comments
  ],
});
