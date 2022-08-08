'use strict';
const getSiblings = (TargetNode) =>
    [...TargetNode.parentNode.children].filter(
        (siblings) => siblings !== TargetNode
    );

document.querySelector('.home-btn').addEventListener('click', () => {
    document.getElementById('home-display').style.setProperty('display', 'block');
    getSiblings(document.getElementById('home-display')).forEach((siblings => {
        siblings.style.display = "none";
    }))


})

document.querySelector('.info-btn').addEventListener('click', () => {
    document.getElementById('fact-display').style.setProperty('display', 'initial');
    getSiblings(document.getElementById('fact-display')).forEach((siblings => {
        siblings.style.display = "none";
    }))
})

document.querySelector('.map-btn').addEventListener('click', () => {
    document.getElementById('map-display').style.setProperty('display', 'initial');
    getSiblings(document.getElementById('map-display')).forEach((siblings => {
        siblings.style.display = "none";
    }))
})
document.querySelector('.adm-btn').addEventListener('click', () => {
    document.getElementById('adm-display').style.setProperty('display', 'initial');
    getSiblings(document.getElementById('adm-display')).forEach((siblings => {
        siblings.style.display = "none";
    }))
})

document.querySelector('.img-btn').addEventListener('click', () => {
    document.getElementById('image-display').style.setProperty('display', 'initial');
    getSiblings(document.getElementById('image-display')).forEach((siblings => {
        siblings.style.display = "none";
    }));
    document.querySelector('nav').style = "z-index: 2";
})