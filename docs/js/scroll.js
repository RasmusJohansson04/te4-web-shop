const nav = document.getElementById('nav');
const header = document.getElementById('main');
const navHeight = nav.getBoundingClientRect().height;

function updateNavColor(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        nav.classList.add("nav-blur");
        nav.classList.remove("nav-colored");
    } else {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-blur");
    }

}

const headerObserver = new IntersectionObserver(updateNavColor, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});

headerObserver.observe(header)