document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Gráfico de Pizza
    const ctx = document.getElementById('pieChart').getContext('2d');
    const data = {
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'],
        datasets: [{
            label: 'Gráfico de Pizza',
            data: [10, 20, 30, 40],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    };

    const options = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
});
