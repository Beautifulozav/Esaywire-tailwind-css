const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const times = document.querySelector('#times');


burger.addEventListener ('click', () => {
if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
} else {
    menu.classList.add('hidden');
}
})

times.addEventListener ('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
    })
