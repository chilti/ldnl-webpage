/**
 * Dynamical System Animation - Lorenz Attractor
 * Creates an animated visualization of the Lorenz attractor for the Hero section
 */

export class DynamicalSystemAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = this.canvas.offsetWidth;
        this.height = this.canvas.height = this.canvas.offsetHeight;

        // Lorenz attractor parameters
        this.sigma = 10;
        this.rho = 28;
        this.beta = 8 / 3;
        this.dt = 0.005;

        // Initial conditions
        this.x = 0.1;
        this.y = 0;
        this.z = 0;

        // Trail points
        this.points = [];
        this.maxPoints = 2000;

        // Colors
        this.colors = [
            'rgba(0, 61, 130, 0.6)',    // UNAM Blue
            'rgba(0, 180, 216, 0.6)',   // Cyan
            'rgba(114, 9, 183, 0.6)',   // Purple
        ];
        this.currentColorIndex = 0;

        // Animation
        this.animationId = null;
        this.isRunning = false;

        // Resize handler
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.width = this.canvas.width = this.canvas.offsetWidth;
        this.height = this.canvas.height = this.canvas.offsetHeight;
    }

    // Lorenz system equations
    lorenz() {
        const dx = this.sigma * (this.y - this.x);
        const dy = this.x * (this.rho - this.z) - this.y;
        const dz = this.x * this.y - this.beta * this.z;

        this.x += dx * this.dt;
        this.y += dy * this.dt;
        this.z += dz * this.dt;

        return { x: this.x, y: this.y, z: this.z };
    }

    // Project 3D point to 2D canvas
    project(x, y, z) {
        const scale = 8;
        const offsetX = this.width / 2;
        const offsetY = this.height / 2;

        return {
            x: offsetX + x * scale,
            y: offsetY + z * scale - 200
        };
    }

    draw() {
        // Semi-transparent background for trail effect
        this.ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Calculate next point
        const point3D = this.lorenz();
        const point2D = this.project(point3D.x, point3D.y, point3D.z);

        // Add to points array
        this.points.push(point2D);
        if (this.points.length > this.maxPoints) {
            this.points.shift();
        }

        // Draw trail
        if (this.points.length > 1) {
            for (let i = 1; i < this.points.length; i++) {
                const alpha = i / this.points.length;
                const colorIndex = Math.floor((i / this.points.length) * this.colors.length);

                this.ctx.beginPath();
                this.ctx.moveTo(this.points[i - 1].x, this.points[i - 1].y);
                this.ctx.lineTo(this.points[i].x, this.points[i].y);
                this.ctx.strokeStyle = this.colors[colorIndex % this.colors.length].replace('0.6', alpha.toString());
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }
        }

        // Draw current point
        this.ctx.beginPath();
        this.ctx.arc(point2D.x, point2D.y, 3, 0, Math.PI * 2);
        this.ctx.fillStyle = this.colors[this.currentColorIndex];
        this.ctx.fill();
    }

    animate() {
        this.draw();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            // Clear canvas
            this.ctx.fillStyle = 'rgba(10, 14, 39, 1)';
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.animate();
        }
    }

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
        }
    }
}

// Auto-initialize if canvas exists
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('dynamical-system-canvas');
    if (canvas) {
        const animation = new DynamicalSystemAnimation('dynamical-system-canvas');
        animation.start();
    }
});
