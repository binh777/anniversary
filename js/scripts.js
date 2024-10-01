// Ensure the script runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('envelope').onclick = function() {
        let letter = document.getElementById('letter');
        letter.classList.add('open');

        // Add class to body to initiate background change
        document.body.classList.add('open-environment');

        // Create hearts scattering effect
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement('div');
            heart.classList.add('hearts');
            heart.innerHTML = '&#x2764;';

            // Randomly place hearts
            let x = (Math.random() - 0.5) * 500;
            let y = (Math.random() - 0.5) * 500;
            heart.style.setProperty('--x', `${x}px`);
            heart.style.setProperty('--y', `${y}px`);

            document.body.appendChild(heart);

            // Remove the hearts after the animation
            setTimeout(() => heart.remove(), 2000);
        }

        // Get the envelope's dimensions and position
        const envelope = document.getElementById('envelope');
        const envelopeRect = envelope.getBoundingClientRect();

        // Create small cats scattering effect
        for (let i = 0; i < 20; i++) {
            let cat = document.createElement('div');
            cat.classList.add('cat');

            let x, y;
            do {
                x = Math.random() * window.innerWidth;
                y = Math.random() * window.innerHeight;
            } while (
                x >= envelopeRect.left && x <= envelopeRect.right &&
                y >= envelopeRect.top && y <= envelopeRect.bottom
            );

            // Set the position of the cat
            cat.style.left = `${x}px`;
            cat.style.top = `${y}px`;

            document.body.appendChild(cat);
        }
    };
});
