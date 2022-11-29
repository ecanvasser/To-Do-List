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
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ "./src/to-do.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");


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

        let aTag = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('a'));
        aTag.setAttribute('href', "");
        aTag.setAttribute('class', 'arrow-btn');
        aTag.insertAdjacentElement('beforeend', arrow);

        const toDo = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.toDoView)();
        aTag.addEventListener('click', function(e) {
            let targetId = e.target.closest('.proj-tile').id;
            toDo.build(targetId)
            e.preventDefault();
        })
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
            setDescrip(i, localProjects);
            setDate(i, localProjects);
            setArrow(i)
        }

        var sb = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.Sidebar)();
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sidebar.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJyb3cgZnJvbSAnLi9hcnJvdy5zdmcnXG5leHBvcnQge3Byb2plY3RtZW51LCBwcm9qZWN0VGlsZXMsIGxvY2FsUHJvamVjdHN9XG5pbXBvcnQge3RvRG9WaWV3fSBmcm9tICcuL3RvLWRvLmpzJztcbmltcG9ydCB7U2lkZWJhcn0gZnJvbSAnLi9zaWRlYmFyLmpzJztcblxudmFyIGxvY2FsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHJvamVjdG1lbnUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbWVudURpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCducC1tZW51Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLnpJbmRleCA9ICctMSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJykuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9vdGVyJylbMF0uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuXG4gICAgfVxuXG4gICAgY29uc3QgbWVudUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnAtbWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUuekluZGV4ID0gJzAnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9vdGVyJylbMF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKS5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgMHB4IDRweCA0cHggMCBncmF5JztcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncFRpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHBEZXNjcmlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BEZXNjcmlwJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHBEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BEYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHBOb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwTm90ZXMnKS52YWx1ZTtcblxuICAgICAgICB2YXIgbmV3UHJvaiA9IE9iamVjdC5jcmVhdGUoe30sIHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBUaXRsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXA6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcERlc2NyaXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdWVkYXRlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBEYXRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm90ZXM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcE5vdGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lbnVDbG9zZSgpO1xuXG4gICAgICAgIHZhciBwcm9qZWN0QnVpbGRlciA9IHtcbiAgICAgICAgICAgICd0aXRsZSc6IG5ld1Byb2oudGl0bGUsXG4gICAgICAgICAgICAnZGVzY3JpcCc6IG5ld1Byb2ouZGVzY3JpcCxcbiAgICAgICAgICAgICdkdWVkYXRlJzogbmV3UHJvai5kdWVkYXRlLFxuICAgICAgICAgICAgJ25vdGVzJzogbmV3UHJvai5ub3Rlc1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7bmV3UHJvai50aXRsZX1gLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QnVpbGRlcikpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1lbnVEaXNwbGF5LFxuICAgICAgICBtZW51Q2xvc2UsXG4gICAgICAgIGFkZFByb2pcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RUaWxlcyA9ICgpID0+IHtcbiAgICBjb25zdCBwR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qLWdyaWQnKTtcbiAgICAvL0NyZWF0ZXMgbWFpbiBwcm9qZWN0IHRpbGVcbiAgICBjb25zdCBtYWluRGl2ID0gKGksIGFycmF5KSA9PiB7XG4gICAgICAgIGxldCBuZXdEaXYgPSBwR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai10aWxlJyk7XG4gICAgICAgIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYXJyYXlbaV0udGl0bGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKGksIGFycmF5KSA9PiB7XG4gICAgICAgIGxldCB0aXRsZURpdiA9IHBHcmlkLmNoaWxkcmVuW2ldLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbGUtdGl0bGUnKTtcbiAgICAgICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gYXJyYXlbaV0udGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzY3JpcCA9IChpLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgZGVzY3JpcERpdiA9IHBHcmlkLmNoaWxkcmVuW2ldLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkZXNjcmlwRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZS1kZXNjcmlwJyk7XG4gICAgICAgIGRlc2NyaXBEaXYuaW5uZXJIVE1MID0gYXJyYXlbaV0uZGVzY3JpcDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREYXRlID0gKGksIGFycmF5KSA9PiB7XG4gICAgICAgIGxldCBkYXRlRGl2ID0gcEdyaWQuY2hpbGRyZW5baV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRhdGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlLWRhdGUnKTtcbiAgICAgICAgZGF0ZURpdi5pbm5lckhUTUwgPSBhcnJheVtpXS5kdWVkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEFycm93ID0gKGkpID0+IHtcbiAgICAgICAgbGV0IGFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFycm93LnNyYyA9IEFycm93O1xuICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Fycm93LWltZycpO1xuXG4gICAgICAgIGxldCBhVGFnID0gcEdyaWQuY2hpbGRyZW5baV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICAgICAgICBhVGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiXCIpO1xuICAgICAgICBhVGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXJyb3ctYnRuJyk7XG4gICAgICAgIGFUYWcuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBhcnJvdyk7XG5cbiAgICAgICAgY29uc3QgdG9EbyA9IHRvRG9WaWV3KCk7XG4gICAgICAgIGFUYWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0SWQgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvai10aWxlJykuaWQ7XG4gICAgICAgICAgICB0b0RvLmJ1aWxkKHRhcmdldElkKVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkID0gKCkgPT4ge1xuXG4gICAgICAgIHBHcmlkLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsb2NhbFByb2plY3RzLnNwbGljZSgwLCBsb2NhbFByb2plY3RzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhbFByb2plY3RzLmluY2x1ZGVzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2tleV0pKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFByb2plY3RzLnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Vba2V5XSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWFpbkRpdihpLCBsb2NhbFByb2plY3RzKTtcbiAgICAgICAgICAgIHNldFRpdGxlKGksIGxvY2FsUHJvamVjdHMpO1xuICAgICAgICAgICAgc2V0RGVzY3JpcChpLCBsb2NhbFByb2plY3RzKTtcbiAgICAgICAgICAgIHNldERhdGUoaSwgbG9jYWxQcm9qZWN0cyk7XG4gICAgICAgICAgICBzZXRBcnJvdyhpKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNiID0gU2lkZWJhcigpO1xuICAgICAgICBzYi5hZGRQcm9qKGxvY2FsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkXG4gICAgfVxufSIsImV4cG9ydCB7IFNpZGViYXIgfVxuaW1wb3J0IEFycm93IGZyb20gJy4vYXJyb3cuc3ZnJ1xuaW1wb3J0IHsgdG9Eb1ZpZXcgfSBmcm9tICcuL3RvLWRvLmpzJ1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgYWRkUHJvaiA9IChhcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBzYmNvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYi1wcm9qY29sJylcbiAgICAgICAgc2Jjb2wuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNiVGl0bGUgPSBhcnJheVtpXS50aXRsZTtcbiAgICAgICAgICAgIGxldCBzYkRpdiA9IHNiY29sLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICAgICAgc2JEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzYi1yb3cnKTtcbiAgICAgICAgICAgIHNiRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtzYlRpdGxlfWApO1xuICAgICAgICAgICAgc2JEaXYuaW5uZXJIVE1MID0gc2JUaXRsZTtcbiAgICAgICAgICAgIHNldExpbmsoc2JEaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGluayA9IChkaXYpID0+IHtcbiAgICAgICAgY29uc3QgcHJvakFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHByb2pBcnJvdy5zcmMgPSBBcnJvdztcblxuICAgICAgICBsZXQgc2JhVGFnID0gZGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgc2JhVGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2ItbGluaycpO1xuICAgICAgICBzYmFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgXCJcIik7XG4gICAgICAgIHNiYVRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGRUZXh0ID0gZS50YXJnZXQuY2xvc2VzdCgnLnNiLXJvdycpLmlkO1xuICAgICAgICAgICAgbGV0IHRkTGluayA9IHRvRG9WaWV3KCk7XG4gICAgICAgICAgICB0ZExpbmsuYnVpbGQodGRUZXh0KTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc2JJbWcgPSBzYmFUYWcuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBwcm9qQXJyb3cpO1xuICAgICAgICBzYkltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NiLWltZycpO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGxpbmtFdmVudCA9IChsaW5rLCBlKSA9PiB7XG4gICAgLy8gICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIC8vICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2pcbiAgICB9XG59IiwiZXhwb3J0IHt0b0RvVmlld31cbmltcG9ydCB7IHByb2plY3RUaWxlcywgbG9jYWxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIlxuaW1wb3J0IEFkZCBmcm9tICcuL2FkZC5zdmcnXG5pbXBvcnQgQmFjayBmcm9tICcuL2Fycm93X2JhY2suc3ZnJ1xuXG5jb25zdCB0b0RvVmlldyA9ICgpID0+IHtcblxuICAgIHZhciB0YXJnZXRPYmogPSBbXTtcblxuICAgIGNvbnN0IHNldFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otZ3JpZCcpLmlkID0gJ3RkLWdyaWQnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RkLWdyaWQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJhY2tBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgdmFyIGJBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiQXJyb3cuc3JjID0gQmFjaztcblxuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuICAgICAgICBsZXQgYkFycm93TGluayA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICAgICAgICBiQXJyb3dMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFjay1idG4nKTtcbiAgICAgICAgYkFycm93TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcblxuICAgICAgICBsZXQgYkFycm93SW1nID0gYkFycm93TGluay5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGJBcnJvdyk7XG4gICAgICAgIGJBcnJvd0ltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2staW1nJyk7XG5cbiAgICAgICAgbGV0IGJBcnJvd1RleHQgPSBiQXJyb3dMaW5rLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBiQXJyb3dUZXh0LmlubmVySFRNTCA9ICdNYWluIERhc2hib2FyZCc7XG5cbiAgICAgICAgYkFycm93TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKS5pZCA9ICdwcm9qLWdyaWQnO1xuXG4gICAgICAgICAgICBsZXQgcmV0dXJuRGFzaCA9IHByb2plY3RUaWxlcygpO1xuICAgICAgICAgICAgcmV0dXJuRGFzaC5idWlsZCgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbmRQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIHRhcmdldE9iai5wdXNoKGxvY2FsUHJvamVjdHMuZmluZCh4ID0+IHgudGl0bGUgPT0gaWQpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGRHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtdGl0bGUnKTtcbiAgICAgICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gYCR7dGFyZ2V0T2JqWzBdLnRpdGxlfWA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U3VtbWFyeSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGRHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKTtcblxuICAgICAgICBsZXQgc3VtbVBhcmVudCA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgc3VtbVBhcmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1bW1hcnknKTtcblxuICAgICAgICBsZXQgc1RpdGxlID0gc3VtbVBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgc1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VtbS10aXRsZScpO1xuICAgICAgICBzVGl0bGUuaW5uZXJIVE1MID0gJ1N1bW1hcnknO1xuXG4gICAgICAgIGxldCBzVGV4dCA9IHN1bW1QYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHNUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VtbS10ZXh0Jyk7XG4gICAgICAgIHNUZXh0LmlubmVySFRNTCA9IGAke3RhcmdldE9ialswXS5kZXNjcmlwfWA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGRHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKTtcblxuICAgICAgICBsZXQgZGF0ZURpdiA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWRhdGUnKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBsZXQgZFRpdGxlID0gZGF0ZURpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS10aXRsZScpO1xuICAgICAgICBkVGl0bGUuaW5uZXJIVE1MID0gJ0VzdGltYXRlZCBDb21wbGV0aW9uJztcblxuICAgICAgICBsZXQgZFRleHQgPSBkYXRlRGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtdGV4dCcpO1xuICAgICAgICBkVGV4dC5pbm5lckhUTUwgPSBgJHt0YXJnZXRPYmpbMF0uZHVlZGF0ZX1gO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5vdGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCBub3RlRGl2ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBub3RlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtbm90ZXMnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBuVGl0bGUgPSBub3RlRGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBuVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdub3Rlcy10aXRsZScpO1xuICAgICAgICBuVGl0bGUuaW5uZXJIVE1MID0gJ05vdGVzJztcblxuICAgICAgICBsZXQgblRleHQgPSBub3RlRGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBuVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGVzLXRleHQnKTtcbiAgICAgICAgblRleHQuaW5uZXJIVE1MID0gYCR7dGFyZ2V0T2JqWzBdLm5vdGVzfWA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VG9EbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGRHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKTtcblxuICAgICAgICBsZXQgdGREaXYgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGRUaXRsZSA9IHRkRGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0ZFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby10aXRsZScpO1xuICAgICAgICB0ZFRpdGxlLmlubmVySFRNTCA9ICdUby1Ebyc7XG5cbiAgICAgICAgYnVpbGRGb3JtKHRkRGl2KTtcblxuICAgICAgICBsZXQgdGRUZXh0ID0gdGREaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRkVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tYm94Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SWNvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYWRkSWNvbi5zcmMgPSBBZGQ7XG4gICAgICAgIGFkZEljb24uc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1pbWcnKTtcblxuICAgICAgICBjb25zdCB0ZF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgIGxldCB0ZEEgPSB0ZF90aXRsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgIHRkQS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWJ0bicpO1xuICAgICAgICB0ZEEuc2V0QXR0cmlidXRlKCdocmVmJywgXCJcIik7XG5cbiAgICAgICAgdGRBLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRkQS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGFkZEljb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkRm9ybSA9IChwYXIpID0+IHtcbiAgICAgICAgdmFyIGZvcm0gPSBwYXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtZm9ybScpO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGQtaW5wdXQnKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0VudGVyIHRhc2s6JztcblxuICAgICAgICBsZXQgaW5wdXQgPSBmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtaW5wdXQnKTtcblxuICAgICAgICBsZXQgc3ViQnRuID0gZm9ybS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuICAgICAgICBzdWJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1zdWJtaXQnKTtcbiAgICAgICAgc3ViQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgc3ViQnRuLnNldEF0dHJpYnV0ZSgndmFsZScsICdBZGQnKTtcblxuICAgICAgICBzdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zdCBpbnBUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBsZXQgdGFza0Z1bmMgPSBUYXNrKCk7XG4gICAgICAgICAgICB0YXNrRnVuYy5tYWtlVGFzayhpbnBUZXh0KTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdFRhc2tzID0gKCkgPT4ge1xuICAgICAgICB2YXIgdGFyZ1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtdGl0bGUnKS5pbm5lckhUTUw7XG4gICAgICAgIHZhciB0YXJnUHJvaiA9IGxvY2FsUHJvamVjdHMuZmluZCh4ID0+IHgudGl0bGUgPT0gdGFyZ1RleHQpO1xuXG4gICAgICAgIGlmICh0YXJnUHJvalsndGFza3MnXSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnUHJvalsndGFza3MnXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRkYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tYm94Jyk7XG4gICAgICAgICAgICAgICAgbGV0IHRkdGFzayA9IHRkYm94Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICAgICAgICAgIHRkdGFzay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stcm93JylcbiAgICAgICAgICAgICAgICB0ZHRhc2suaW5uZXJIVE1MID0gYCR7dGFyZ1Byb2pbJ3Rhc2tzJ11baV19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZCA9IChpZCkgPT4ge1xuICAgICAgICBzZXRQYWdlKCk7XG4gICAgICAgIGJhY2tBcnJvdygpO1xuICAgICAgICBmaW5kUHJvamVjdChpZCk7XG4gICAgICAgIHNldFRpdGxlKCk7XG4gICAgICAgIHNldFN1bW1hcnkoKTtcbiAgICAgICAgc2V0RGF0ZSgpO1xuICAgICAgICBzZXROb3RlcygpO1xuICAgICAgICBzZXRUb0RvKCk7XG4gICAgICAgIHNldEljb24oKTtcbiAgICAgICAgbGlzdFRhc2tzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRcbiAgICB9XG59XG5cbmNvbnN0IFRhc2sgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtYWtlVGFzayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1ib3gnKTtcbiAgICAgICAgbGV0IHRhc2sgPSBib3guaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLXJvdycpXG4gICAgICAgIHRhc2suaW5uZXJIVE1MID0gYCR7dmFsdWV9YDtcbiAgICAgICAgbG9nVGFzayh2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9nVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC10aXRsZScpLmlubmVySFRNTDtcbiAgICAgICAgdmFyIHRhcmdldFByb2ogPSBsb2NhbFByb2plY3RzLmZpbmQoeCA9PiB4LnRpdGxlID09IHRpdGxlVGV4dCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGFyZ2V0UHJvalsndGFza3MnXSkge1xuICAgICAgICAgICAgdGFyZ2V0UHJvalsndGFza3MnXS5wdXNoKHRhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0UHJvalsndGFza3MnXSA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgdGFyZ2V0UHJvalsndGFza3MnXS5wdXNoKHRhc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGl0bGVUZXh0fWAsIEpTT04uc3RyaW5naWZ5KHRhcmdldFByb2opKTtcbiAgICB9IFxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VUYXNrXG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2lkZWJhci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==