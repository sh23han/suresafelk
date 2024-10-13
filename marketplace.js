document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');

            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product.animate');
    setTimeout(() => {
        products.forEach((product) => {
            product.style.opacity = 1;
        });
    }, 100); // Delay for smooth loading
});

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Simulate delay for slower connections or big assets (remove in production)
    setTimeout(() => {
        loader.style.display = 'none';  // Hide the loader
        mainContent.style.display = 'block';  // Show the main content
        mainContent.style.opacity = 1;  // Fade in the content
    }, 2000);  // Simulated delay of 2 seconds for demo purposes
});
