// Navigation toggle and theme handling (no UI toggle)
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('navToggle');
    var nav = document.getElementById('siteNav');
    if (btn && nav) {
        btn.addEventListener('click', function () { nav.classList.toggle('open'); });
    }

    var root = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'dark') root.setAttribute('data-theme', 'dark');
        else root.removeAttribute('data-theme');
    }

    // Determine initial theme: localStorage -> prefers-color-scheme -> light
    var saved = localStorage.getItem('theme');
    if (saved) { applyTheme(saved); }
    else {
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var initial = prefersDark ? 'dark' : 'light';
        applyTheme(initial);
    }
});
