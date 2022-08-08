'use strict';


document.querySelector('.home-btn').addEventListener('click', () => {
    document.getElementById('home-display').style.setProperty('display', 'initial');
    document.getElementById('fact-display').style.setProperty('display', 'none');
    document.getElementById('map-display').style.setProperty('display', 'none');
    document.getElementById('image-display').style.setProperty('display', 'none');
    document.getElementById('adm-display').style.setProperty('display', 'none');
})

document.querySelector('.info-btn').addEventListener('click', () => {
    document.getElementById('fact-display').style.setProperty('display', 'initial');
    document.getElementById('home-display').style.setProperty('display', 'none');
    document.getElementById('map-display').style.setProperty('display', 'none');
    document.getElementById('adm-display').style.setProperty('display', 'none');
    document.getElementById('image-display').style.setProperty('display', 'none');
})

document.querySelector('.map-btn').addEventListener('click', () => {
    document.getElementById('map-display').style.setProperty('display', 'initial');
    document.getElementById('fact-display').style.setProperty('display', 'none');
    document.getElementById('adm-display').style.setProperty('display', 'none');
    document.getElementById('home-display').style.setProperty('display', 'none');
    document.getElementById('image-display').style.setProperty('display', 'none');
})
document.querySelector('.adm-btn').addEventListener('click', () => {
    document.getElementById('adm-display').style.setProperty('display', 'initial');
    document.getElementById('fact-display').style.setProperty('display', 'none');
    document.getElementById('home-display').style.setProperty('display', 'none');
    document.getElementById('map-display').style.setProperty('display', 'none');
    document.getElementById('image-display').style.setProperty('display', 'none');
})

document.querySelector('.img-btn').addEventListener('click', () => {
    document.getElementById('image-display').style.setProperty('display', 'initial');
    document.getElementById('adm-display').style.setProperty('display', 'none');
    document.getElementById('fact-display').style.setProperty('display', 'none');
    document.getElementById('home-display').style.setProperty('display', 'none');
    document.getElementById('map-display').style.setProperty('display', 'none');
    document.querySelector('nav').style = "z-index: 2";
})