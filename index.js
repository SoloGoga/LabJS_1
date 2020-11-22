document.querySelectorAll('[data-modal-toggle]').forEach(function(element){
    element.addEventListener('click', ()=> {
        document.querySelector('.modal').classList.toggle("modal-on");
        document.querySelector('.overlayer').classList.toggle("overlayer-on")

    })
})