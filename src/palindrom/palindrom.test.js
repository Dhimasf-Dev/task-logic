const isPalindrome = require('./palindrom');

test('isPalindrome function', () => {
    expect(isPalindrome("malam")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("")).toBe(true); // String kosong dianggap palindrome
});