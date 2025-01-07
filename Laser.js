const canvas = document.getElementById("LaserCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Store the positions of the circles
const circleRadius = 10;  // Smaller circles
const margin = 40;
const circleSpeed = 0.2;  // Speed of the circle movement (slow glide)
const circlePositions = [
    { x: margin, y: margin, dx: Math.random() * 2 - 1, dy: Math.random() * 2 - 1 }, // top-left
    { x: canvas.width - margin, y: margin, dx: Math.random() * 2 - 1, dy: Math.random() * 2 - 1 }, // top-right
    { x: margin, y: canvas.height - margin, dx: Math.random() * 2 - 1, dy: Math.random() * 2 - 1 }, // bottom-left
    { x: canvas.width - margin, y: canvas.height - margin, dx: Math.random() * 2 - 1, dy: Math.random() * 2 - 1 } // bottom-right
];

// Track mouse position
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Particle array
let particles = [];

const maxParticles = 10;  // More particles, but still manageable

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1; // Smaller particles
    this.speedX = Math.random() * 1.5 - 0.75; // Slower movement
    this.speedY = Math.random() * 1.5 - 0.75; // Slower movement
    this.life = 100; // Shorter lifespan
    this.gravity = 0.05; // Reduced gravity effect
}

Particle.prototype.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += this.gravity; // Apply gravity to make particles fall
    this.life -= 1;
    this.size = Math.max(0, this.size - 0.03); // Slow size decrease

    if (this.life <= 0) {
        return false; // Remove particle if it's dead
    }
    return true;
};

Particle.prototype.draw = function () {
    // Brighter color for the particles, fading out as they die
    ctx.fillStyle = `rgba(255, 69, 0, ${this.life / 40})`; // Brighter red fading
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

// Create laser function with gentle convergence and smooth glow
function createLaser(x1, y1, x2, y2) {
    // Set convergence point slightly left and slightly up from the original middle
    const targetX = (mouseX + (mouseX + 20)) / 2 - 6; // Slightly move to the left
    const targetY = (mouseY + (mouseY + 20)) / 2 - 3; // Slightly move up

    const gradient = ctx.createLinearGradient(x1, y1, targetX, targetY);
    gradient.addColorStop(0, 'rgba(255, 69, 0, 1)'); // Bright red-orange near the circle
    gradient.addColorStop(0.8, 'rgba(255, 140, 0, 0.8)'); // Slightly lighter red near the middle
    gradient.addColorStop(1, 'rgba(255, 140, 0, 0.3)'); // Lighter red-orange towards mouse

    ctx.lineWidth = 5;  // Slightly thinner laser line
    ctx.strokeStyle = gradient;
    ctx.shadowBlur = 10; // Add subtle glow effect around the laser
    ctx.shadowColor = 'rgba(255, 140, 0, 0.7)'; // Glowing effect around laser
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(targetX, targetY);
    ctx.stroke();
    ctx.shadowBlur = 0; // Reset shadow after drawing
}

// Draw and animate the circles with glow effect and pulsing
function drawCircles() {
    for (let i = 0; i < circlePositions.length; i++) {
        const pos = circlePositions[i];

        // Update the circle's position with slow random movement
        pos.x += pos.dx * circleSpeed;
        pos.y += pos.dy * circleSpeed;

        // Ensure circles don't overlap
        for (let j = 0; j < circlePositions.length; j++) {
            if (i !== j) {
                const other = circlePositions[j];
                const dist = Math.sqrt(Math.pow(pos.x - other.x, 2) + Math.pow(pos.y - other.y, 2));

                if (dist < circleRadius * 2) { // If circles are too close, reverse direction
                    pos.dx *= -1;
                    pos.dy *= -1;
                }
            }
        }

        // Keep circles within the bounds of the canvas
        if (pos.x < circleRadius || pos.x > canvas.width - circleRadius) pos.dx *= -1;
        if (pos.y < circleRadius || pos.y > canvas.height - circleRadius) pos.dy *= -1;

        // Circle pulsating effect (glowing)
        const pulse = Math.sin(Date.now() / 300 + i) * 3 + 7; // Pulse effect
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 69, 0, 0.6)`;  // Fading glow effect for the circles
        ctx.fill();
    }
}

// Animate everything
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Calculate laser convergence point
    const targetX = (mouseX + (mouseX + 20)) / 2 - 6; // Slightly move to the left
    const targetY = (mouseY + (mouseY + 20)) / 2 - 3; // Slightly move up

    // Draw soft reddish-orange background glow centered on the laser convergence point
    const backgroundGradient = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, 50);
    backgroundGradient.addColorStop(0, 'rgba(255, 140, 0, 0.8)'); // Bright orange-yellow center
    backgroundGradient.addColorStop(0.4, 'rgba(255, 140, 0, 0.3)'); // Quickly fades to a more dim color
    backgroundGradient.addColorStop(1, 'rgba(255, 140, 0, 0)'); // Transparent around the edge

    ctx.fillStyle = backgroundGradient;
    ctx.fillRect(targetX - 50, targetY - 50, 100, 100); // Draw the glow area around the laser convergence point

    // Update and draw particles (centered at convergence point)
    particles = particles.filter(p => p.update());
    particles.forEach(p => p.draw());

    // Draw the circles in the corners
    drawCircles();

    // Draw lasers from each circle to the mouse
    circlePositions.forEach(pos => {
        createLaser(pos.x, pos.y, mouseX, mouseY);
    });

    // Create particles (sparks) when laser touches the mouse, at a low rate
    if (Math.random() < 0.05) { // Even lower chance to create a particle (about 5 per second)
        particles.push(new Particle(targetX + Math.random() * 10 - 5, targetY + Math.random() * 10 - 5));
    }

    requestAnimationFrame(animate); // Repeat animation
}


// Mouse move event listener to track mouse position
canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start the animation
animate();
