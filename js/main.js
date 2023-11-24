function typeWriter(el, elementor) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter), 90 * i)
        console.log(el.lenght);
    });


    if (el.length = 23) {
        const textArray = elementor.innerHTML.split('');
        elementor.innerHTML = '';

        textArray.forEach((letter, i) => {
            setTimeout(() => (elementor.innerHTML += letter), 90 * i)
        });

        console.log("teste");
    }
}

typeWriter(elementEl, elementEm);
