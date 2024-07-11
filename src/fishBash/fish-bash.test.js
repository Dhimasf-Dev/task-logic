const fishBash = require('./fish-bash');

test('fishBash function with n=1', () => {
    console.log = jest.fn();
    fishBash(1);
    expect(console.log).toHaveBeenCalledWith("1");
});

test('fishBash function with n=3', () => {
    console.log = jest.fn();
    fishBash(3);
    expect(console.log).toHaveBeenNthCalledWith(1, "1");
    expect(console.log).toHaveBeenNthCalledWith(2, "2");
    expect(console.log).toHaveBeenNthCalledWith(3, "fish");
});

test('fishBash function with n=5', () => {
    console.log = jest.fn();
    fishBash(5);
    expect(console.log).toHaveBeenNthCalledWith(1, "1");
    expect(console.log).toHaveBeenNthCalledWith(2, "2");
    expect(console.log).toHaveBeenNthCalledWith(3, "fish");
    expect(console.log).toHaveBeenNthCalledWith(4, "4");
    expect(console.log).toHaveBeenNthCalledWith(5, "bash");
});

test('fishBash function with n=15', () => {
    console.log = jest.fn();
    fishBash(15);
    expect(console.log).toHaveBeenNthCalledWith(1, "1");
    expect(console.log).toHaveBeenNthCalledWith(2, "2");
    expect(console.log).toHaveBeenNthCalledWith(3, "fish");
    expect(console.log).toHaveBeenNthCalledWith(4, "4");
    expect(console.log).toHaveBeenNthCalledWith(5, "bash");
    expect(console.log).toHaveBeenNthCalledWith(6, "fish");
    expect(console.log).toHaveBeenNthCalledWith(7, "7");
    expect(console.log).toHaveBeenNthCalledWith(8, "8");
    expect(console.log).toHaveBeenNthCalledWith(9, "fish");
    expect(console.log).toHaveBeenNthCalledWith(10, "bash");
    expect(console.log).toHaveBeenNthCalledWith(11, "11");
    expect(console.log).toHaveBeenNthCalledWith(12, "fish");
    expect(console.log).toHaveBeenNthCalledWith(13, "13");
    expect(console.log).toHaveBeenNthCalledWith(14, "14");
    expect(console.log).toHaveBeenNthCalledWith(15, "fishbash");
});