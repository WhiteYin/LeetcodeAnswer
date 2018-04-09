const sumStrings = require('../src/codewars/sum-strings-as-numbers');
test('big number', function () {
    expect(sumStrings('712569312664357328695151392', '8100824045303269669937')).toBe('712577413488402631964821329');
});
