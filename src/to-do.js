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
        console.log(targetObj)
    }

    const build = (id) => {
        clearPage();
        findProject(id);
    }

    return {
        build
    }
}