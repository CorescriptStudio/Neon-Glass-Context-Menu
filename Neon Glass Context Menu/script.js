 document.addEventListener('DOMContentLoaded', () => {
            const menu = document.getElementById('context-menu');
            const colorIndicator = document.getElementById('color-indicator');

            // --- 1. Context Menu Centering Logic ---
            window.addEventListener('contextmenu', (e) => {
                e.preventDefault();

                // Get center coordinates of the viewport
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                // Position the menu at the center. The CSS transform: translate(-50%, -50%) 
                // ensures the menu's center point is exactly at (centerX, centerY).
                menu.style.left = `${centerX}px`;
                menu.style.top = `${centerY}px`;

                menu.style.display = 'block';
            });

            // --- 2. Close Menu on Left-Click ---
            window.addEventListener('click', (e) => {
                if (menu.style.display === 'block' && !menu.contains(e.target)) {
                    menu.style.display = 'none';
                }
            });

            // --- 3. Close Menu on Resize (Optional, but good practice for centering) ---
            window.addEventListener('resize', () => {
                // Re-center the menu if it's open on resize
                if (menu.style.display === 'block') {
                    const centerX = window.innerWidth / 2;
                    const centerY = window.innerHeight / 2;
                    menu.style.left = `${centerX}px`;
                    menu.style.top = `${centerY}px`;
                }
            });

            // --- 4. Color Slider Functionality ---
            const sliderR = document.getElementById('slider-r');
            const sliderG = document.getElementById('slider-g');
            const sliderB = document.getElementById('slider-b');

            function updateGlowColor() {
                const r = sliderR.value;
                const g = sliderG.value;
                const b = sliderB.value;

                const newGlow = `rgb(${r}, ${g}, ${b})`;

                // Update the global CSS variable for the neon glow effect
                document.documentElement.style.setProperty('--glow-color', newGlow);

                // Update the color indicator bar
                colorIndicator.style.backgroundColor = newGlow;
            }

            // Add event listeners to sliders
            sliderR.addEventListener('input', updateGlowColor);
            sliderG.addEventListener('input', updateGlowColor);
            sliderB.addEventListener('input', updateGlowColor);

            // Set initial glow color and indicator color on load
            updateGlowColor();
        });