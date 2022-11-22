export {projectmenu, projectTiles}

var projects = [];

const projectmenu = () => {
    
    const menuDisplay = () => {
        document.getElementById('np-menu').style.display = 'block';
        document.getElementsByTagName('header')[0].style.opacity = '0.5';
        document.getElementsByTagName('main')[0].style.opacity = '0.5';
        document.getElementsByTagName('footer')[0].style.opacity = '0.5';
    }

    const menuClose = () => {
        document.getElementById('np-menu').style.display = 'none';
        document.getElementsByTagName('header')[0].style.opacity = '1';
        document.getElementsByTagName('main')[0].style.opacity = '1';
        document.getElementsByTagName('footer')[0].style.opacity = '1';
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

        projects.push(newProj);
        menuClose();
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
    const mainDiv = (i) => {
        let newDiv = pGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        newDiv.setAttribute('class', 'proj-tile');
        newDiv.setAttribute('id', i)
    }

    const setAttr = () => {
    }

    const build = () => {
        for (let i = 0; i < projects.length; i++) {
            mainDiv(i);
        }
    }

    return {
        build
    }
}