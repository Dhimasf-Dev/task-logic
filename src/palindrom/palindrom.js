function isPalindrome(str) {
    // Menghapus spasi dan convert ke huruf kecil
    const word = str.replace(/\s+/g, '').toLowerCase();

    // Membalikan kaliamat yang ada
    const reverseWord = word.split('').reverse().join('');

    // Melakukan compare string
    return word === reverseWord;
}

module.exports = isPalindrome;