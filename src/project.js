var projects = [];

const projectmenu = () => {
    
    const menuDisplay = () => {
        document.getElementById('np-menu').style.display = 'block';
    }

    const menuClose = () => {
        document.getElementById('np-menu').style.display = 'none';
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

        projects.push(newProj)
    }

    return {
        menuDisplay,
        menuClose,
        addProj
    }
}

// const projectTile = () => {
//     //Creates main project tile
//     const projDiv = () => {
//         const pGrid = document.getElementById('proj-grid');
//         pGrid.appendChild(document.createElement('div'));
//         pGrid.children[0].setAttribute('id', 'pTile');

        
//     }
// }