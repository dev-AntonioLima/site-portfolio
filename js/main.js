function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';

    textArray.forEach((letter, i) => {
        setTimeout (() => (el.innerHTML += letter), 90 * i)});

        console.log("teste");
}

typeWriter(elementEl);
