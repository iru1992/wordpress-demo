window.onload = function() {

    buttonsSelector = document.querySelectorAll('.homey-accordion-toggle')

    buttons = Array.from(buttonsSelector)

    buttons.forEach(button => {
        button.addEventListener('click', handleToggle)
    });

}

function handleToggle(e) {

    buttonSelector = e.target
    textSelector = e.target.parentElement.nextElementSibling


    if (!textSelector.classList.contains('homey-show')) {
       
        textSelector.classList.add('homey-show')
        buttonSelector.classList.add('homey-toggle')

        return;

    }

    textSelector.classList.remove('homey-show')
    buttonSelector.classList.remove('homey-toggle')

}