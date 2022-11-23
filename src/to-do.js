export {toDoView}
import { projects } from "./project.js";

const toDoView = () => {

    var targetObj = [];

    const clearPage = () => {
        document.querySelector('#proj-grid').innerHTML = '';
        document.querySelector('#proj-grid').id = 'td-grid';
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

        let tdText = tdDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        tdText.setAttribute('id', 'todo-box');
    }

    const build = (id) => {
        clearPage();
        findProject(id);
        setTitle();
        setSummary();
        setDate();
        setNotes();
        setToDo();
    }

    return {
        build
    }
}