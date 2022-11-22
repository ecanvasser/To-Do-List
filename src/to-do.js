export {toDoView}
import { projects } from "./project.js";

const toDoView = () => {

    let targetObj = [];

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
        sTitle.innerHTML = 'Summary:';

        let sText = summParent.insertAdjacentElement('beforeend', document.createElement('div'));
        sText.setAttribute('id', 'summ-text');
        sText.innerHTML = `${targetObj[0].descrip}`;
    }

    const build = (id) => {
        clearPage();
        findProject(id);
        setTitle();
        setSummary();
    }

    return {
        build
    }
}