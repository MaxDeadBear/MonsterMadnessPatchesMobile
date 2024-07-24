document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        toggleButton.style.display = sidebar.classList.contains('open') ? 'none' : 'block';
    });

    sidebar.addEventListener('mouseenter', function () {
        sidebar.classList.add('open');
        toggleButton.style.display = 'none';
    });

    sidebar.addEventListener('mouseleave', function () {
        sidebar.classList.remove('open');
        toggleButton.style.display = 'block';
    });
});
