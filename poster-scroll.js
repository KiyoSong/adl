const posterSection = document.querySelector('.poster-section-wrapper');
        let isDown = false;
        let startX;
        let scrollLeft;

        posterSection.addEventListener('mousedown', (e) => {
            isDown = true;
            posterSection.classList.add('active');
            startX = e.pageX - posterSection.offsetLeft;
            scrollLeft = posterSection.scrollLeft;
        });

        posterSection.addEventListener('mouseleave', () => {
            isDown = false;
            posterSection.classList.remove('active');
        });

        posterSection.addEventListener('mouseup', () => {
            isDown = false;
            posterSection.classList.remove('active');
        });

        posterSection.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - posterSection.offsetLeft;
            const walk = (x - startX) * 3; // Adjust scroll speed
            posterSection.scrollLeft = scrollLeft - walk;
        });