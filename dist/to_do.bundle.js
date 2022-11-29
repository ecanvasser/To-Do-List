/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localProjects": () => (/* binding */ localProjects),
/* harmony export */   "projectTiles": () => (/* binding */ projectTiles),
/* harmony export */   "projectmenu": () => (/* binding */ projectmenu)
/* harmony export */ });
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow.svg */ "./src/arrow.svg");
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.svg */ "./src/delete.svg");
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do.js */ "./src/to-do.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");



;


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
        arrow.src = _arrow_svg__WEBPACK_IMPORTED_MODULE_0__;
        arrow.setAttribute('class', 'arrow-img');

        var aTag = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('a'));
        aTag.setAttribute('href', "");
        aTag.setAttribute('class', 'arrow-btn');
        aTag.insertAdjacentElement('beforeend', arrow);

        const toDo = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_2__.toDoView)();
        aTag.addEventListener('click', function(e) {
            let targetId = e.target.closest('.proj-tile').id;
            toDo.build(targetId)
            e.preventDefault();
        })
    }

    const setDelete = (i) => {
        let trash = new Image();
        trash.src = _delete_svg__WEBPACK_IMPORTED_MODULE_1__;
        trash.setAttribute('class', 'delete-img');

        var aTag = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('a'));
        aTag.setAttribute('href', "");
        aTag.setAttribute('class', 'delete-btn');
        aTag.insertAdjacentElement('beforeend', trash);
    }

    const build = () => {

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

        var sb = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.Sidebar)();
        sb.addProj(localProjects);
    }

    return {
        build
    }
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow.svg */ "./src/arrow.svg");
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ "./src/to-do.js");

;


const Sidebar = () => {

    const addProj = (array) => {
        const sbcol = document.getElementById('sb-projcol')
        sbcol.innerHTML = '';

        for (let i = 0; i < array.length; i++) {
            var sbTitle = array[i].title;
            let sbDiv = sbcol.insertAdjacentElement('beforeend', document.createElement('div'));
            sbDiv.setAttribute('class', 'sb-row');
            sbDiv.setAttribute('id', `${sbTitle}`);
            sbDiv.innerHTML = sbTitle;
            setLink(sbDiv);
        }
    }

    const setLink = (div) => {
        const projArrow = new Image();
        projArrow.src = _arrow_svg__WEBPACK_IMPORTED_MODULE_0__;

        let sbaTag = div.insertAdjacentElement('beforeend', document.createElement('a'));
        sbaTag.setAttribute('class', 'sb-link');
        sbaTag.setAttribute('href', "");
        sbaTag.addEventListener('click', (e) => {
            let tdText = e.target.closest('.sb-row').id;
            let tdLink = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.toDoView)();
            tdLink.build(tdText);
            e.preventDefault();
        })

        let sbImg = sbaTag.insertAdjacentElement('beforeend', projArrow);
        sbImg.setAttribute('class', 'sb-img');
    }

    // const linkEvent = (link, e) => {
    //     link.addEventListener('click', () => {
    //         console.log('test');
    //         // e.preventDefault();
    //     });
    //     e.preventDefault();
    // }

    return {
        addProj
    }
}

/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoView": () => (/* binding */ toDoView)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.svg */ "./src/add.svg");
/* harmony import */ var _arrow_back_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow_back.svg */ "./src/arrow_back.svg");

;



const toDoView = () => {

    var targetObj = [];

    const setPage = () => {
        if (document.getElementById('td-grid')) {
            document.getElementById('td-grid').innerHTML = '';
        } else {
            document.querySelector('#proj-grid').id = 'td-grid';
            document.querySelector('#td-grid').innerHTML = '';
        }
    }

    const backArrow = () => {
        var bArrow = new Image();
        bArrow.src = _arrow_back_svg__WEBPACK_IMPORTED_MODULE_2__;

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

            let returnDash = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.projectTiles)();
            returnDash.build();
            e.preventDefault();
        })
    }

    const findProject = (id) => {
        targetObj.push(_project_js__WEBPACK_IMPORTED_MODULE_0__.localProjects.find(x => x.title == id));
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
        addIcon.src = _add_svg__WEBPACK_IMPORTED_MODULE_1__;
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
        var targProj = _project_js__WEBPACK_IMPORTED_MODULE_0__.localProjects.find(x => x.title == targText);

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
        var targetProj = _project_js__WEBPACK_IMPORTED_MODULE_0__.localProjects.find(x => x.title == titleText);
        
        if (targetProj['tasks']) {
            targetProj['tasks'].push(task);
        } else {
            targetProj['tasks'] = new Array();
            targetProj['tasks'].push(task);
        }

        localStorage.setItem(`${titleText}`, JSON.stringify(targetProj));
    } 
    
    return {
        makeTask
    }

}

/***/ }),

/***/ "./src/add.svg":
/*!*********************!*\
  !*** ./src/add.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46ae0e09d1132337aa92.svg";

/***/ }),

/***/ "./src/arrow.svg":
/*!***********************!*\
  !*** ./src/arrow.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8272589614ba1980d393.svg";

/***/ }),

/***/ "./src/arrow_back.svg":
/*!****************************!*\
  !*** ./src/arrow_back.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9933390d8fe945a2bdb2.svg";

/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3270f2c93c8c138fa6cc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/to-do.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90by1kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnJvdyBmcm9tICcuL2Fycm93LnN2ZydcbmltcG9ydCBEZWxldGUgZnJvbSAnLi9kZWxldGUuc3ZnJ1xuZXhwb3J0IHtwcm9qZWN0bWVudSwgcHJvamVjdFRpbGVzLCBsb2NhbFByb2plY3RzfVxuaW1wb3J0IHt0b0RvVmlld30gZnJvbSAnLi90by1kby5qcydcbmltcG9ydCB7U2lkZWJhcn0gZnJvbSAnLi9zaWRlYmFyLmpzJ1xuXG52YXIgbG9jYWxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBwcm9qZWN0bWVudSA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtZW51RGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25wLW1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUuekluZGV4ID0gJy0xJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKS5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb290ZXInKVswXS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG5cbiAgICB9XG5cbiAgICBjb25zdCBtZW51Q2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCducC1tZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS56SW5kZXggPSAnMCc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb290ZXInKVswXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwcHggNHB4IDRweCAwIGdyYXknO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2ogPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwVGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcERlc2NyaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncERlc2NyaXAnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncERhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcE5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BOb3RlcycpLnZhbHVlO1xuXG4gICAgICAgIHZhciBuZXdQcm9qID0gT2JqZWN0LmNyZWF0ZSh7fSwge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcFRpdGxlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzY3JpcDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwRGVzY3JpcFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1ZWRhdGU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcERhdGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3Rlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwTm90ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVudUNsb3NlKCk7XG5cbiAgICAgICAgdmFyIHByb2plY3RCdWlsZGVyID0ge1xuICAgICAgICAgICAgJ3RpdGxlJzogbmV3UHJvai50aXRsZSxcbiAgICAgICAgICAgICdkZXNjcmlwJzogbmV3UHJvai5kZXNjcmlwLFxuICAgICAgICAgICAgJ2R1ZWRhdGUnOiBuZXdQcm9qLmR1ZWRhdGUsXG4gICAgICAgICAgICAnbm90ZXMnOiBuZXdQcm9qLm5vdGVzXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtuZXdQcm9qLnRpdGxlfWAsIEpTT04uc3RyaW5naWZ5KHByb2plY3RCdWlsZGVyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVudURpc3BsYXksXG4gICAgICAgIG1lbnVDbG9zZSxcbiAgICAgICAgYWRkUHJvalxuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdFRpbGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2otZ3JpZCcpO1xuICAgIC8vQ3JlYXRlcyBtYWluIHByb2plY3QgdGlsZVxuICAgIGNvbnN0IG1haW5EaXYgPSAoaSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IG5ld0RpdiA9IHBHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBuZXdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLXRpbGUnKTtcbiAgICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBhcnJheVtpXS50aXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoaSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gcEdyaWQuY2hpbGRyZW5baV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZS10aXRsZScpO1xuICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBhcnJheVtpXS50aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZXNjcmlwID0gKGksIGFycmF5KSA9PiB7XG4gICAgICAgIGxldCBkZXNjcmlwRGl2ID0gcEdyaWQuY2hpbGRyZW5baV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRlc2NyaXBEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlLWRlc2NyaXAnKTtcbiAgICAgICAgZGVzY3JpcERpdi5pbm5lckhUTUwgPSBhcnJheVtpXS5kZXNjcmlwO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSAoaSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IGRhdGVEaXYgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbGUtZGF0ZScpO1xuICAgICAgICBkYXRlRGl2LmlubmVySFRNTCA9IGFycmF5W2ldLmR1ZWRhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QXJyb3cgPSAoaSkgPT4ge1xuICAgICAgICBsZXQgYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYXJyb3cuc3JjID0gQXJyb3c7XG4gICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXJyb3ctaW1nJyk7XG5cbiAgICAgICAgdmFyIGFUYWcgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgXCJcIik7XG4gICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnJvdy1idG4nKTtcbiAgICAgICAgYVRhZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGFycm93KTtcblxuICAgICAgICBjb25zdCB0b0RvID0gdG9Eb1ZpZXcoKTtcbiAgICAgICAgYVRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qLXRpbGUnKS5pZDtcbiAgICAgICAgICAgIHRvRG8uYnVpbGQodGFyZ2V0SWQpXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVsZXRlID0gKGkpID0+IHtcbiAgICAgICAgbGV0IHRyYXNoID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRyYXNoLnNyYyA9IERlbGV0ZTtcbiAgICAgICAgdHJhc2guc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGUtaW1nJyk7XG5cbiAgICAgICAgdmFyIGFUYWcgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgXCJcIik7XG4gICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGUtYnRuJyk7XG4gICAgICAgIGFUYWcuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCB0cmFzaCk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGQgPSAoKSA9PiB7XG5cbiAgICAgICAgcEdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGxvY2FsUHJvamVjdHMuc3BsaWNlKDAsIGxvY2FsUHJvamVjdHMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsUHJvamVjdHMuaW5jbHVkZXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Vba2V5XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsUHJvamVjdHMucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYWluRGl2KGksIGxvY2FsUHJvamVjdHMpO1xuICAgICAgICAgICAgc2V0VGl0bGUoaSwgbG9jYWxQcm9qZWN0cyk7XG4gICAgICAgICAgICBzZXREYXRlKGksIGxvY2FsUHJvamVjdHMpO1xuICAgICAgICAgICAgc2V0RGVzY3JpcChpLCBsb2NhbFByb2plY3RzKTtcbiAgICAgICAgICAgIHNldEFycm93KGkpXG4gICAgICAgICAgICBzZXREZWxldGUoaSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2IgPSBTaWRlYmFyKCk7XG4gICAgICAgIHNiLmFkZFByb2oobG9jYWxQcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRcbiAgICB9XG59IiwiZXhwb3J0IHsgU2lkZWJhciB9XG5pbXBvcnQgQXJyb3cgZnJvbSAnLi9hcnJvdy5zdmcnXG5pbXBvcnQgeyB0b0RvVmlldyB9IGZyb20gJy4vdG8tZG8uanMnXG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBhZGRQcm9qID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNiY29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NiLXByb2pjb2wnKVxuICAgICAgICBzYmNvbC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2JUaXRsZSA9IGFycmF5W2ldLnRpdGxlO1xuICAgICAgICAgICAgbGV0IHNiRGl2ID0gc2Jjb2wuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICBzYkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NiLXJvdycpO1xuICAgICAgICAgICAgc2JEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3NiVGl0bGV9YCk7XG4gICAgICAgICAgICBzYkRpdi5pbm5lckhUTUwgPSBzYlRpdGxlO1xuICAgICAgICAgICAgc2V0TGluayhzYkRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRMaW5rID0gKGRpdikgPT4ge1xuICAgICAgICBjb25zdCBwcm9qQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcHJvakFycm93LnNyYyA9IEFycm93O1xuXG4gICAgICAgIGxldCBzYmFUYWcgPSBkaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICAgICAgICBzYmFUYWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzYi1saW5rJyk7XG4gICAgICAgIHNiYVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcbiAgICAgICAgc2JhVGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0ZFRleHQgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2Itcm93JykuaWQ7XG4gICAgICAgICAgICBsZXQgdGRMaW5rID0gdG9Eb1ZpZXcoKTtcbiAgICAgICAgICAgIHRkTGluay5idWlsZCh0ZFRleHQpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzYkltZyA9IHNiYVRhZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHByb2pBcnJvdyk7XG4gICAgICAgIHNiSW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2ItaW1nJyk7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgbGlua0V2ZW50ID0gKGxpbmssIGUpID0+IHtcbiAgICAvLyAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgLy8gICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvalxuICAgIH1cbn0iLCJleHBvcnQge3RvRG9WaWV3fVxuaW1wb3J0IHsgcHJvamVjdFRpbGVzLCBsb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiXG5pbXBvcnQgQWRkIGZyb20gJy4vYWRkLnN2ZydcbmltcG9ydCBCYWNrIGZyb20gJy4vYXJyb3dfYmFjay5zdmcnXG5cbmNvbnN0IHRvRG9WaWV3ID0gKCkgPT4ge1xuXG4gICAgdmFyIHRhcmdldE9iaiA9IFtdO1xuXG4gICAgY29uc3Qgc2V0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1ncmlkJykuaWQgPSAndGQtZ3JpZCc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGQtZ3JpZCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmFja0Fycm93ID0gKCkgPT4ge1xuICAgICAgICB2YXIgYkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJBcnJvdy5zcmMgPSBCYWNrO1xuXG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG4gICAgICAgIGxldCBiQXJyb3dMaW5rID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgIGJBcnJvd0xpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrLWJ0bicpO1xuICAgICAgICBiQXJyb3dMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiXCIpO1xuXG4gICAgICAgIGxldCBiQXJyb3dJbWcgPSBiQXJyb3dMaW5rLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYkFycm93KTtcbiAgICAgICAgYkFycm93SW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFjay1pbWcnKTtcblxuICAgICAgICBsZXQgYkFycm93VGV4dCA9IGJBcnJvd0xpbmsuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGJBcnJvd1RleHQuaW5uZXJIVE1MID0gJ01haW4gRGFzaGJvYXJkJztcblxuICAgICAgICBiQXJyb3dMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpLmlkID0gJ3Byb2otZ3JpZCc7XG5cbiAgICAgICAgICAgIGxldCByZXR1cm5EYXNoID0gcHJvamVjdFRpbGVzKCk7XG4gICAgICAgICAgICByZXR1cm5EYXNoLmJ1aWxkKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmluZFByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgdGFyZ2V0T2JqLnB1c2gobG9jYWxQcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSBpZCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCB0aXRsZURpdiA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC10aXRsZScpO1xuICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBgJHt0YXJnZXRPYmpbMF0udGl0bGV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTdW1tYXJ5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCBzdW1tUGFyZW50ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBzdW1tUGFyZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VtbWFyeScpO1xuXG4gICAgICAgIGxldCBzVGl0bGUgPSBzdW1tUGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBzVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdzdW1tLXRpdGxlJyk7XG4gICAgICAgIHNUaXRsZS5pbm5lckhUTUwgPSAnU3VtbWFyeSc7XG5cbiAgICAgICAgbGV0IHNUZXh0ID0gc3VtbVBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgc1RleHQuc2V0QXR0cmlidXRlKCdpZCcsICdzdW1tLXRleHQnKTtcbiAgICAgICAgc1RleHQuaW5uZXJIVE1MID0gYCR7dGFyZ2V0T2JqWzBdLmRlc2NyaXB9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCBkYXRlRGl2ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkYXRlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtZGF0ZScpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGxldCBkVGl0bGUgPSBkYXRlRGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXRpdGxlJyk7XG4gICAgICAgIGRUaXRsZS5pbm5lckhUTUwgPSAnRXN0aW1hdGVkIENvbXBsZXRpb24nO1xuXG4gICAgICAgIGxldCBkVGV4dCA9IGRhdGVEaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS10ZXh0Jyk7XG4gICAgICAgIGRUZXh0LmlubmVySFRNTCA9IGAke3RhcmdldE9ialswXS5kdWVkYXRlfWA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Tm90ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IG5vdGVEaXYgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIG5vdGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1ub3RlcycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5UaXRsZSA9IG5vdGVEaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIG5UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGVzLXRpdGxlJyk7XG4gICAgICAgIG5UaXRsZS5pbm5lckhUTUwgPSAnTm90ZXMnO1xuXG4gICAgICAgIGxldCBuVGV4dCA9IG5vdGVEaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIG5UZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZXMtdGV4dCcpO1xuICAgICAgICBuVGV4dC5pbm5lckhUTUwgPSBgJHt0YXJnZXRPYmpbMF0ubm90ZXN9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUb0RvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCB0ZERpdiA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1kaXYnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0ZFRpdGxlID0gdGREaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRkVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLXRpdGxlJyk7XG4gICAgICAgIHRkVGl0bGUuaW5uZXJIVE1MID0gJ1RvLURvJztcblxuICAgICAgICBidWlsZEZvcm0odGREaXYpO1xuXG4gICAgICAgIGxldCB0ZFRleHQgPSB0ZERpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1ib3gnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJY29uID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBhZGRJY29uLnNyYyA9IEFkZDtcbiAgICAgICAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWltZycpO1xuXG4gICAgICAgIGNvbnN0IHRkX3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgbGV0IHRkQSA9IHRkX3RpdGxlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgdGRBLnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtYnRuJyk7XG4gICAgICAgIHRkQS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcblxuICAgICAgICB0ZEEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGRBLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYWRkSWNvbik7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRGb3JtID0gKHBhcikgPT4ge1xuICAgICAgICB2YXIgZm9ybSA9IHBhci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1mb3JtJyk7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gZm9ybS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0ZC1pbnB1dCcpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRW50ZXIgdGFzazonO1xuXG4gICAgICAgIGxldCBpbnB1dCA9IGZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1pbnB1dCcpO1xuXG4gICAgICAgIGxldCBzdWJCdG4gPSBmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG4gICAgICAgIHN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLXN1Ym1pdCcpO1xuICAgICAgICBzdWJCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJCdG4uc2V0QXR0cmlidXRlKCd2YWxlJywgJ0FkZCcpO1xuXG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB0YXNrRnVuYyA9IFRhc2soKTtcbiAgICAgICAgICAgIHRhc2tGdW5jLm1ha2VUYXNrKGlucFRleHQpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHZhciB0YXJnVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC10aXRsZScpLmlubmVySFRNTDtcbiAgICAgICAgdmFyIHRhcmdQcm9qID0gbG9jYWxQcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSB0YXJnVGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdQcm9qWyd0YXNrcyddKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdQcm9qWyd0YXNrcyddLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1ib3gnKTtcbiAgICAgICAgICAgICAgICBsZXQgdGR0YXNrID0gdGRib3guaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICAgICAgdGR0YXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1yb3cnKVxuICAgICAgICAgICAgICAgIHRkdGFzay5pbm5lckhUTUwgPSBgJHt0YXJnUHJvalsndGFza3MnXVtpXX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkID0gKGlkKSA9PiB7XG4gICAgICAgIHNldFBhZ2UoKTtcbiAgICAgICAgYmFja0Fycm93KCk7XG4gICAgICAgIGZpbmRQcm9qZWN0KGlkKTtcbiAgICAgICAgc2V0VGl0bGUoKTtcbiAgICAgICAgc2V0U3VtbWFyeSgpO1xuICAgICAgICBzZXREYXRlKCk7XG4gICAgICAgIHNldE5vdGVzKCk7XG4gICAgICAgIHNldFRvRG8oKTtcbiAgICAgICAgc2V0SWNvbigpO1xuICAgICAgICBsaXN0VGFza3MoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZFxuICAgIH1cbn1cblxuY29uc3QgVGFzayA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1ha2VUYXNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWJveCcpO1xuICAgICAgICBsZXQgdGFzayA9IGJveC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stcm93JylcbiAgICAgICAgdGFzay5pbm5lckhUTUwgPSBgJHt2YWx1ZX1gO1xuICAgICAgICBsb2dUYXNrKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLXRpdGxlJykuaW5uZXJIVE1MO1xuICAgICAgICB2YXIgdGFyZ2V0UHJvaiA9IGxvY2FsUHJvamVjdHMuZmluZCh4ID0+IHgudGl0bGUgPT0gdGl0bGVUZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0YXJnZXRQcm9qWyd0YXNrcyddKSB7XG4gICAgICAgICAgICB0YXJnZXRQcm9qWyd0YXNrcyddLnB1c2godGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRQcm9qWyd0YXNrcyddID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICB0YXJnZXRQcm9qWyd0YXNrcyddLnB1c2godGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aXRsZVRleHR9YCwgSlNPTi5zdHJpbmdpZnkodGFyZ2V0UHJvaikpO1xuICAgIH0gXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZVRhc2tcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90by1kby5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==