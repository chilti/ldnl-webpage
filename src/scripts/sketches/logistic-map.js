
export default function sketch(p) {
    let r_min = 2.4;
    let r_max = 4.0;
    let currentRow = 0;

    p.setup = function () {
        p.background(10, 14, 39); // UNAM Dark Blue
        p.stroke(0, 180, 216, 50); // Cyan
        p.frameRate(60);
    };

    p.draw = function () {
        if (currentRow >= p.width) {
            p.noLoop();
            return;
        }

        let speed = 20; // 20 columns per frame = fast animation

        for (let k = 0; k < speed; k++) {
            if (currentRow >= p.width) break;

            let r = p.map(currentRow, 0, p.width, r_min, r_max);
            let x = 0.5;

            // Transient
            for (let j = 0; j < 100; j++) {
                x = r * x * (1 - x);
            }

            // Steady state
            for (let j = 0; j < 200; j++) {
                x = r * x * (1 - x);
                let py = p.map(x, 0, 1, p.height, 0);
                p.point(currentRow, py);
            }
            currentRow++;
        }
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight); // Component handles container size
        p.background(10, 14, 39);
        currentRow = 0;
        p.loop();
    };
}
