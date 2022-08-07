'use strict';

document.querySelector('.home-btn').addEventListener('click', () => {
    document.getElementById('home-display').style.setProperty('display', 'initial');
    document.getElementById('fact-display').style.setProperty('display', 'none');
})

document.querySelector('.info-btn').addEventListener('click', () => {
    document.getElementById('fact-display').style.setProperty('display', 'initial');
    document.getElementById('home-display').style.setProperty('display', 'none');
})