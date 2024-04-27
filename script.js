document.addEventListener('DOMContentLoaded', function() {
    var circle = document.getElementById('circle');
    var navHeight = document.querySelector('.contenedor-header').offsetHeight;
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('#nav ul'); // Asegúrate de que este selector sea correcto.

    function toggleMenu() {
        menu.classList.toggle('active');
    }

    // Manejador para el botón de menú hamburguesa
    menuToggle.addEventListener('click', toggleMenu);

    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            circle.classList.add('hover');
        });
        link.addEventListener('mouseleave', function() {
            circle.classList.remove('hover');
        });

        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();  // Solo prevenir el comportamiento por defecto si el enlace es interno
                var targetElement = document.querySelector(href);
                if (targetElement) {
                    var scrollToPosition = targetElement.offsetTop - navHeight;
                    window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
                }
            }
            // De lo contrario, permite la navegación normal (external links will work as expected)
        });
    });

    document.addEventListener('mousemove', function(e) {
        circle.style.left = e.clientX + 'px';
        circle.style.top = e.clientY + 'px';
    });
    
    const form = document.querySelector(".formcontato__form");
    if (form) {
        form.addEventListener("submit", validateForm);
        form.querySelectorAll("input[type='text'], input[type='email'], textarea").forEach(input => {
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.classList.remove('invalid-input');
                }
            });
        });
    }
});

function validateForm(event) {
    const inputs = this.querySelectorAll("input[type='text'], input[type='email'], textarea");
    let valid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('invalid-input');
            valid = false;
        } else {
            input.classList.remove('invalid-input');
        }
    });
    if (!valid) {
        event.preventDefault(); // Detiene el envío del formulario si hay campos no completados
    }
}
