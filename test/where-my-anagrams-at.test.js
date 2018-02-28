const anagrams = require("../src/where-my-anagrams-at");

test("测试1", function () {
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual(['aabb', 'bbaa']);
});
test("测试2", function () {
    expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer']);
});
test("测试3", function () {
    expect(anagrams('laser', ['lazing', 'lazy',  'lacer'])).toEqual([]);
});