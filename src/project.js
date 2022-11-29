import Arrow from './arrow.svg'
import Delete from './delete.svg'
export {projectmenu, projectTiles, localProjects}
import {toDoView} from './to-do.js'
import {Sidebar} from './sidebar.js'

var localProjects = [];

const projectmenu = () => {
    
    const menuDisplay = () => {
        document.getElementById('np-menu').style.display = 'block';
        document.getElementsByTagName('header')[0].style.opacity = '0.5';
        document.getElementsByTagName('main')[0].style.opacity = '0.5';
        document.getElementsByTagName('main')[0].style.zIndex = '-1';
        document.getElementById('sidebar').style.boxShadow = 'none';
        document.getElementsByTagName('footer')[0].style.opacity = '0.5';

    }

    const menuClose = () => {
        document.getElementById('np-menu').style.display = 'none';
        document.getElementsByTagName('header')[0].style.opacity = '1';
        document.getElementsByTagName('main')[0].style.opacity = '1';
        document.getElementsByTagName('main')[0].style.zIndex = '0';
        document.getElementsByTagName('footer')[0].style.opacity = '1';
        document.getElementById('sidebar').style.boxShadow = 'inset 0px 4px 4px 0 gray';
    }

    const addProj = () => {
        const pTitle = document.getElementById('pTitle').value;
        const pDescrip = document.getElementById('pDescrip').value;
        const pDate = document.getElementById('pDate').value;
        const pNotes = document.getElementById('pNotes').value;

        var newProj = Object.create({}, {
            title: {
                value: pTitle
            },
            descrip: {
                value: pDescrip
            },
            duedate: {
                value: pDate
            },
            notes: {
                value: pNotes
            }
        });

        menuClose();

        var projectBuilder = {
            'title': newProj.title,
            'descrip': newProj.descrip,
            'duedate': newProj.duedate,
            'notes': newProj.notes
        }

        localStorage.setItem(`${newProj.title}`, JSON.stringify(projectBuilder));
    }

    return {
        menuDisplay,
        menuClose,
        addProj
    }
}

const projectTiles = () => {
    const pGrid = document.getElementById('proj-grid');
    //Creates main project tile
    const mainDiv = (i, array) => {
        let newDiv = pGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        newDiv.setAttribute('class', 'proj-tile');
        newDiv.setAttribute('id', array[i].title);
    }

    const setTitle = (i, array) => {
        let titleDiv = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('div'));
        titleDiv.setAttribute('class', 'tile-title');
        titleDiv.innerHTML = array[i].title;
    }

    const setDescrip = (i, array) => {
        let descripDiv = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('div'));
        descripDiv.setAttribute('class', 'tile-descrip');
        descripDiv.innerHTML = array[i].descrip;
    }

    const setDate = (i, array) => {
        let dateDiv = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('div'));
        dateDiv.setAttribute('class', 'tile-date');
        dateDiv.innerHTML = array[i].duedate;
    }

    const setArrow = (i) => {
        let arrow = new Image();
        arrow.src = Arrow;
        arrow.setAttribute('class', 'arrow-img');

        var aTag = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('a'));
        aTag.setAttribute('href', "");
        aTag.setAttribute('class', 'arrow-btn');
        aTag.insertAdjacentElement('beforeend', arrow);

        const toDo = toDoView();
        aTag.addEventListener('click', function(e) {
            let targetId = e.target.closest('.proj-tile').id;
            toDo.build(targetId)
            e.preventDefault();
        })
    }

    const setDelete = (i) => {
        let trash = new Image();
        trash.src = Delete;
        trash.setAttribute('class', 'delete-img');

        var aTag = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('a'));
        aTag.setAttribute('href', "");
        aTag.setAttribute('class', 'delete-btn');
        aTag.insertAdjacentElement('beforeend', trash);

        aTag.addEventListener('click', function(e) {
            let targetId = e.target.closest('.proj-tile').id;
            localStorage.removeItem(targetId);
            e.target.closest('.proj-tile').removeItem()
            e.preventDefault();
        })
    }

    const build = () => {
        if (document.getElementById('proj-grid')) {
            pGrid.innerHTML = '';
            localProjects.splice(0, localProjects.length);

            for (var key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    if (!localProjects.includes(JSON.parse(localStorage[key]))) {
                        localProjects.push(JSON.parse(localStorage[key]));
                    }
                }
            }

            for (let i = 0; i < localProjects.length; i++) {
                mainDiv(i, localProjects);
                setTitle(i, localProjects);
                setDate(i, localProjects);
                setDescrip(i, localProjects);
                setArrow(i)
                setDelete(i);
            }

            var sb = Sidebar();
            sb.addProj(localProjects);
            
        } else {
            localProjects.splice(0, localProjects.length);

            for (var key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    if (!localProjects.includes(JSON.parse(localStorage[key]))) {
                        localProjects.push(JSON.parse(localStorage[key]));
                    }
                }
            }

            var sb = Sidebar();
            sb.addProj(localProjects);
        }
    }

    return {
        build
    }
}