
export default function sketch(p) {
    let x = 0.01;
    let y = 0;
    let z = 0;

    let sigma = 10;
    let rho = 28;
    let beta = 8.0 / 3.0;

    let points = [];
    let angle = 0;

    p.setup = function () {
        // El size se determina desde fuera o usando full width
        // p.createCanvas(800, 600, p.WEBGL);
        // p.colorMode(p.HSB);
        // p.strokeWeight(1);
    };

    p.draw = function () {
        p.background(10, 14, 30); // Very dark blue

        let dt = 0.01;
        let dx = (sigma * (y - x)) * dt;
        let dy = (x * (rho - z) - y) * dt;
        let dz = (x * y - beta * z) * dt;

        x = x + dx;
        y = y + dy;
        z = z + dz;

        points.push(p.createVector(x, y, z));

        // Mantener performance
        if (points.length > 3000) {
            points.shift();
        }

        // Camera / Rotation
        p.translate(0, 0, -80);
        p.rotateY(angle);
        p.scale(5);
        p.noFill();

        let hu = 0;
        p.beginShape();
        for (let v of points) {
            p.stroke(hu % 255, 200, 255);
            p.vertex(v.x, v.y, v.z);
            hu += 0.5;
        }
        p.endShape();

        angle += 0.005;
    };
}
