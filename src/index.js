import './style.css';
import {projectmenu, projectTiles} from './project.js';

const proj = projectmenu();
const tiles = projectTiles();

if (document.getElementById('proj-grid') && document.getElementById('proj-grid').innerHTML == '') {
    tiles.build();
}

document.getElementById('new-proj').addEventListener('click', function(e) {
    proj.menuDisplay();
    e.preventDefault();
})

document.getElementById('submit-menu').addEventListener('click', function(e) {
    proj.addProj();
    tiles.build();
    e.preventDefault();
})

document.getElementById('close-menu').addEventListener('click', function(e) {
    proj.menuClose();
    e.preventDefault();
})