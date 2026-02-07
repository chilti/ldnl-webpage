
export default function sketch(p) {
    let grid;
    let cols;
    let rows;
    let resolution = 10;

    function make2DArray(c, r) {
        let arr = new Array(c);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(r);
        }
        return arr;
    }

    // Helper inside closure to access cols/rows if needed, or passed
    function countNeighbors(grid, x, y) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (x + i + cols) % cols;
                let row = (y + j + rows) % rows;
                sum += grid[col][row];
            }
        }
        sum -= grid[x][y];
        return sum;
    }

    p.setup = function () {
        // Init canvas - handled by container usually but good to set default
        // Standard full container size if not specified
        const w = p.canvas ? p.width : 400;
        const h = p.canvas ? p.height : 400;

        p.frameRate(10);
        cols = Math.floor(w / resolution);
        rows = Math.floor(h / resolution);

        grid = make2DArray(cols, rows);
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = p.floor(p.random(2));
            }
        }
        p.background(10, 14, 39);
    };

    p.draw = function () {
        p.background(10, 14, 39);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x = i * resolution;
                let y = j * resolution;
                if (grid[i][j] == 1) {
                    p.fill(0, 255, 255); // Cyan
                    p.stroke(0);
                    p.rect(x, y, resolution - 1, resolution - 1);
                }
            }
        }

        let next = make2DArray(cols, rows);

        // Compute next based on grid
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let state = grid[i][j];
                // Count live neighbors!
                let neighbors = countNeighbors(grid, i, j);

                if (state == 0 && neighbors == 3) {
                    next[i][j] = 1;
                } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                    next[i][j] = 0;
                } else {
                    next[i][j] = state;
                }
            }
        }

        grid = next;
    };

    p.windowResized = function () {
        const w = p.windowWidth > 800 ? 800 : p.windowWidth - 40;
        p.resizeCanvas(w, 400);
        cols = Math.floor(w / resolution);
        rows = Math.floor(400 / resolution);
        // Reset grid on resize
        grid = make2DArray(cols, rows);
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = p.floor(p.random(2));
            }
        }
    };
}
