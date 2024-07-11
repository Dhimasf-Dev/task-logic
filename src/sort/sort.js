function sortAscending(arr) {
    let n = arr.length;

    // Melakukan nested looping
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            // Melakukan compare data dan mengurutkannya 
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function sortDescending(arr) {
    let n = arr.length;

      // Melakukan nested looping
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            // Melakukan compare data dan mengurutkannya 
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    console.log(arr)
    return arr;
}

module.exports = { sortAscending, sortDescending };