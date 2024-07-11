const { sortAscending, sortDescending } = require('./sort');

test('sortAscending function with a random array', () => {
    expect(sortAscending([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    expect(sortAscending([5, 3, 8, 6, 2])).toEqual([2, 3, 5, 6, 8]);
    expect(sortAscending([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]); // Already sorted
    expect(sortAscending([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]); // Reverse order
    expect(sortAscending([])).toEqual([]); // Empty array
});

test('sortDescending function with a random array', () => {
    expect(sortDescending([64, 34, 25, 12, 22, 11, 90])).toEqual([90, 64, 34, 25, 22, 12, 11]);
    expect(sortDescending([5, 3, 8, 6, 2])).toEqual([8, 6, 5, 3, 2]);
    expect(sortDescending([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]); // Already sorted in ascending order
    expect(sortDescending([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2, 1]); // Already sorted in descending order
    expect(sortDescending([])).toEqual([]); // Empty array
});
