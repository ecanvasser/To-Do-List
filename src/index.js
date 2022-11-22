import './style.css';
import {projectmenu} from './project.js';

const proj = projectmenu();

document.getElementById('new-proj').addEventListener('click', function(e) {
    proj.menuDisplay();
    e.preventDefault();
})

document.getElementById('submit-menu').addEventListener('click', function(e) {
    proj.addProj();
    e.preventDefault();
})

document.getElementById('close-menu').addEventListener('click', function(e) {
    proj.menuClose();
    e.preventDefault();
})