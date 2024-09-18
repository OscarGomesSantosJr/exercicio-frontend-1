let header = document.getElementById('header');
let text = document.getElementById('text');
let bigmac = document.getElementById('bigmac');
let fritas = document.getElementById('fritas');
let linkhome = document.getElementById('link_home');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    header.style.marginTop = value * -1.5 + 'px';
    text.style.marginTop = value * 1.9 + 'px';
    bigmac.style.left = value * -3.0 + 'px';
    fritas.style.left = value * 2.5 + 'px';
    linkhome.style.marginTop = value * 2.4 + 'px';
})