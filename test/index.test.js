// test/index.test.js
const helloWorld = require('../src/index');

test('should return Hello, CodeBuild!', () => {
    expect(helloWorld()).toBe('Hello, CodeBuild!');
});