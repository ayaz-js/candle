function flame() {
    let flame = document.querySelector('.flame'),
    btn = document.querySelector('.btn'),
    text = document.querySelector('.text');

    btn.addEventListener('click', () => {
        flame.style.visibility = 'visible';
        flame.style.opacity = '1';
        flame.style.transition = '0.5s';
        text.innerHTML = 'Пусть она тебя согреет в стужу, И в ночи подарит яркий свет!'
    });

}

flame();