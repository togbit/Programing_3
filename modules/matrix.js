var matrix = []
var n = m = 80;
var grass = require("./Grass");
for (y = 0; y < n; y++) {
    matrix[y] = [];
    for (x = 0; x < n; x++) {
        matrix[y][x] = Math.floor(Math.random() * 5)
    }
}

module.exports = matrix;



/*
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var grObj = new Grass(x, y, 1);
        }
        // else if (matrix[y][x] == 2) {
        //     matrix[y][x] = new GrassEater(x, y, 2);
        // }
        // else if (matrix[y][x] == 3) {
        //     matrix[y][x] = new Gishatich(x, y, 3);
        // }
        // else if (matrix[y][x] == 4) {
        //     matrix[y][x] = new Kerpar(x, y, 4);
        // }
        // else if (matrix[y][x] == 5) {
        //     matrix[y][x] = new Kerpar_(x, y, 5);
        // }
        // else if (matrix[y][x] == 6) {
        //     matrix[y][x] = new Kerpar$(x, y, 6);
        // }
    }
}
*/