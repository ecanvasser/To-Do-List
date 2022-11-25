export {toDoView}
import { projectTiles, projects } from "./project.js"
import Add from './add.svg'
import Back from './arrow_back.svg'

const toDoView = () => {

    var targetObj = [];

    const setPage = () => {
        document.querySelector('#proj-grid').innerHTML = '';
        document.querySelector('#proj-grid').id = 'td-grid';
    }

    const backArrow = () => {
        var bArrow = new Image();
        bArrow.src = Back;

        const tdGrid = document.getElementById('td-grid');
        let bArrowLink = tdGrid.insertAdjacentElement('afterbegin', document.createElement('a'));
        bArrowLink.setAttribute('id', 'back-btn');
        bArrowLink.setAttribute('href', "");

        let bArrowImg = bArrowLink.insertAdjacentElement('beforeend', bArrow);
        bArrowImg.setAttribute('id', 'back-img');

        let bArrowText = bArrowLink.insertAdjacentElement('beforeend', document.createElement('div'));
        bArrowText.innerHTML = 'Main Dashboard';

        bArrowLink.addEventListener('click', (e) => {
            document.getElementById('td-grid').innerHTML = '';
            document.getElementById('td-grid').id = 'proj-grid';

            let returnDash = projectTiles();
            returnDash.build();
            e.preventDefault();
        })
    }

    const findProject = (id) => {
        targetObj.push(projects.find(x => x.title == id));
    }

    const setTitle = () => {
        const tdGrid = document.getElementById('td-grid');

        let titleDiv = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        titleDiv.setAttribute('id', 'td-title');
        titleDiv.innerHTML = `${targetObj[0].title}`;
    }

    const setSummary = () => {
        const tdGrid = document.getElementById('td-grid');

        let summParent = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        summParent.setAttribute('id', 'summary');

        let sTitle = summParent.insertAdjacentElement('beforeend', document.createElement('div'));
        sTitle.setAttribute('id', 'summ-title');
        sTitle.innerHTML = 'Summary';

        let sText = summParent.insertAdjacentElement('beforeend', document.createElement('div'));
        sText.setAttribute('id', 'summ-text');
        sText.innerHTML = `${targetObj[0].descrip}`;
    }

    const setDate = () => {
        const tdGrid = document.getElementById('td-grid');

        let dateDiv = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        dateDiv.setAttribute('id', 'td-date');
        
        
        let dTitle = dateDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        dTitle.setAttribute('id', 'date-title');
        dTitle.innerHTML = 'Estimated Completion';

        let dText = dateDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        dText.setAttribute('id', 'date-text');
        dText.innerHTML = `${targetObj[0].duedate}`;
    }

    const setNotes = () => {
        const tdGrid = document.getElementById('td-grid');

        let noteDiv = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        noteDiv.setAttribute('id', 'td-notes');
        
        let nTitle = noteDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        nTitle.setAttribute('id', 'notes-title');
        nTitle.innerHTML = 'Notes';

        let nText = noteDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        nText.setAttribute('id', 'notes-text');
        nText.innerHTML = `${targetObj[0].notes}`;
    }

    const setToDo = () => {
        const tdGrid = document.getElementById('td-grid');

        let tdDiv = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        tdDiv.setAttribute('id', 'td-div');
        
        let tdTitle = tdDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        tdTitle.setAttribute('id', 'todo-title');
        tdTitle.innerHTML = 'To-Do';

        buildForm(tdDiv);

        let tdText = tdDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        tdText.setAttribute('id', 'todo-box');
    }

    const setIcon = () => {
        let addIcon = new Image();
        addIcon.src = Add;
        addIcon.setAttribute('id', 'td-img');

        const td_title = document.getElementById('todo-title');
        let tdA = td_title.insertAdjacentElement('beforeend', document.createElement('a'));
        tdA.setAttribute('id', 'td-btn');
        tdA.setAttribute('href', "");

        tdA.addEventListener('click', function(e) {
            document.getElementById('td-form').style.display = 'flex';
            e.preventDefault();
        })

        tdA.insertAdjacentElement('beforeend', addIcon);
    }

    const buildForm = (par) => {
        var form = par.insertAdjacentElement('beforeend', document.createElement('form'));
        form.setAttribute('id', 'td-form');

        let label = form.insertAdjacentElement('beforeend', document.createElement('label'));
        label.setAttribute('for', 'td-input');
        label.innerHTML = 'Enter task:';

        let input = form.insertAdjacentElement('beforeend', document.createElement('input'));
        input.setAttribute('id', 'td-input');

        let subBtn = form.insertAdjacentElement('beforeend', document.createElement('input'));
        subBtn.setAttribute('id', 'td-submit');
        subBtn.setAttribute('type', 'submit');
        subBtn.setAttribute('vale', 'Add');

        subBtn.addEventListener('click', function(e) {
            const inpText = document.getElementById('td-input').value;
            let taskFunc = Task();
            taskFunc.makeTask(inpText);
            e.preventDefault();
        })

        form.style.display = 'none';
    }

    const listTasks = () => {
        var targText = document.getElementById('td-title').innerHTML;
        var targProj = projects.find(x => x.title == targText);

        if (targProj['tasks']) {
            for (let i = 0; i < targProj['tasks'].length; i++) {
                const tdbox = document.getElementById('todo-box');
                let tdtask = tdbox.insertAdjacentElement('beforeend', document.createElement('div'));
                tdtask.setAttribute('class', 'task-row')
                tdtask.innerHTML = `${targProj['tasks'][i]}`;
            }
        };
    }

    const build = (id) => {
        setPage();
        backArrow();
        findProject(id);
        setTitle();
        setSummary();
        setDate();
        setNotes();
        setToDo();
        setIcon();
        listTasks();
    }

    return {
        build
    }
}

var taskList = new Array();

const Task = () => {

    const makeTask = (value) => {
        const box = document.getElementById('todo-box');
        let task = box.insertAdjacentElement('beforeend', document.createElement('div'));
        task.setAttribute('class', 'task-row')
        task.innerHTML = `${value}`;
        logTask(value);
    }

    const logTask = (task) => {
        const titleText = document.getElementById('td-title').innerHTML;
        var targetProj = projects.find(x => x.title == titleText);
        targetProj['tasks'] = new Array();
        targetProj['tasks'].push(task);
    } 
    
    return {
        makeTask
    }

}