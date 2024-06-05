'use strict'

const model=document.querySelector('.model');
const overlay=document.querySelector('.overlay');

const btnCloseModel= document.querySelector('.close-model');
const btnOpenModel = document.querySelectorAll('.show-model');

const openModel = function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModel = function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i=0; i<btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click',openModel);

    btnCloseModel.addEventListener('click',closeModel);
    overlay.addEventListener('click',closeModel);
    // after closing the model box, it has to over laid aswell.

    document.addEventListener('keydown',function(e) {
        console.log(e.key);
        // e is an event performed here -> events ==> key- up down release and press.

        if (e.key==='Escape' && !model.classList.contains('hidden')) {
            closeModel();
        // when escape key is pressed and when the class given is not 'hidden' it will close the model box.
        }
    });
}