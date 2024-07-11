function fishBash(n) {
    // Melakukan Looping per kata 
    for (let i = 1; i <= n; i++) {
        let output = "";

        // Jika kelipatan 3 print fish
        if (i % 3 === 0) {
            output += "fish";
        }

        // Jika kelipatan 5 print bash
        if (i % 5 === 0) {
            output += "bash";
        }

        // Jika kosong pront dirinya sendiri
        if (output === "") {
            output = i.toString();
        }
        console.log(output);
    }
}

module.exports = fishBash;