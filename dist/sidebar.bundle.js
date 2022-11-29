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

            var sb = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.Sidebar)();
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

            var sb = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.Sidebar)();
            sb.addProj(localProjects);
        }
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sidebar.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvLWRvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFycm93IGZyb20gJy4vYXJyb3cuc3ZnJ1xuaW1wb3J0IERlbGV0ZSBmcm9tICcuL2RlbGV0ZS5zdmcnXG5leHBvcnQge3Byb2plY3RtZW51LCBwcm9qZWN0VGlsZXMsIGxvY2FsUHJvamVjdHN9XG5pbXBvcnQge3RvRG9WaWV3fSBmcm9tICcuL3RvLWRvLmpzJ1xuaW1wb3J0IHtTaWRlYmFyfSBmcm9tICcuL3NpZGViYXIuanMnXG5cbnZhciBsb2NhbFByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3RtZW51ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1lbnVEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnAtbWVudScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS56SW5kZXggPSAnLTEnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcblxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25wLW1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJykuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDBweCA0cHggNHB4IDAgZ3JheSc7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvaiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwRGVzY3JpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwRGVzY3JpcCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBwRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwRGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwTm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncE5vdGVzJykudmFsdWU7XG5cbiAgICAgICAgdmFyIG5ld1Byb2ogPSBPYmplY3QuY3JlYXRlKHt9LCB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwVGl0bGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBEZXNjcmlwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVlZGF0ZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwRGF0ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vdGVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBOb3Rlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZW51Q2xvc2UoKTtcblxuICAgICAgICB2YXIgcHJvamVjdEJ1aWxkZXIgPSB7XG4gICAgICAgICAgICAndGl0bGUnOiBuZXdQcm9qLnRpdGxlLFxuICAgICAgICAgICAgJ2Rlc2NyaXAnOiBuZXdQcm9qLmRlc2NyaXAsXG4gICAgICAgICAgICAnZHVlZGF0ZSc6IG5ld1Byb2ouZHVlZGF0ZSxcbiAgICAgICAgICAgICdub3Rlcyc6IG5ld1Byb2oubm90ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke25ld1Byb2oudGl0bGV9YCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEJ1aWxkZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtZW51RGlzcGxheSxcbiAgICAgICAgbWVudUNsb3NlLFxuICAgICAgICBhZGRQcm9qXG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0VGlsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvai1ncmlkJyk7XG4gICAgLy9DcmVhdGVzIG1haW4gcHJvamVjdCB0aWxlXG4gICAgY29uc3QgbWFpbkRpdiA9IChpLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgbmV3RGl2ID0gcEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otdGlsZScpO1xuICAgICAgICBuZXdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGFycmF5W2ldLnRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChpLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgdGl0bGVEaXYgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IGFycmF5W2ldLnRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERlc2NyaXAgPSAoaSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IGRlc2NyaXBEaXYgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZGVzY3JpcERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbGUtZGVzY3JpcCcpO1xuICAgICAgICBkZXNjcmlwRGl2LmlubmVySFRNTCA9IGFycmF5W2ldLmRlc2NyaXA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChpLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgZGF0ZURpdiA9IHBHcmlkLmNoaWxkcmVuW2ldLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkYXRlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZS1kYXRlJyk7XG4gICAgICAgIGRhdGVEaXYuaW5uZXJIVE1MID0gYXJyYXlbaV0uZHVlZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBcnJvdyA9IChpKSA9PiB7XG4gICAgICAgIGxldCBhcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBhcnJvdy5zcmMgPSBBcnJvdztcbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnJvdy1pbWcnKTtcblxuICAgICAgICB2YXIgYVRhZyA9IHBHcmlkLmNoaWxkcmVuW2ldLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcbiAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Fycm93LWJ0bicpO1xuICAgICAgICBhVGFnLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYXJyb3cpO1xuXG4gICAgICAgIGNvbnN0IHRvRG8gPSB0b0RvVmlldygpO1xuICAgICAgICBhVGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldElkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2otdGlsZScpLmlkO1xuICAgICAgICAgICAgdG9Eby5idWlsZCh0YXJnZXRJZClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZWxldGUgPSAoaSkgPT4ge1xuICAgICAgICBsZXQgdHJhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdHJhc2guc3JjID0gRGVsZXRlO1xuICAgICAgICB0cmFzaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZS1pbWcnKTtcblxuICAgICAgICB2YXIgYVRhZyA9IHBHcmlkLmNoaWxkcmVuW2ldLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcbiAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZS1idG4nKTtcbiAgICAgICAgYVRhZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHRyYXNoKTtcblxuICAgICAgICBhVGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldElkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2otdGlsZScpLmlkO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGFyZ2V0SWQpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2otdGlsZScpLnJlbW92ZUl0ZW0oKVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2otZ3JpZCcpKSB7XG4gICAgICAgICAgICBwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGxvY2FsUHJvamVjdHMuc3BsaWNlKDAsIGxvY2FsUHJvamVjdHMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvY2FsUHJvamVjdHMuaW5jbHVkZXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Vba2V5XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFByb2plY3RzLnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Vba2V5XSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtYWluRGl2KGksIGxvY2FsUHJvamVjdHMpO1xuICAgICAgICAgICAgICAgIHNldFRpdGxlKGksIGxvY2FsUHJvamVjdHMpO1xuICAgICAgICAgICAgICAgIHNldERhdGUoaSwgbG9jYWxQcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgc2V0RGVzY3JpcChpLCBsb2NhbFByb2plY3RzKTtcbiAgICAgICAgICAgICAgICBzZXRBcnJvdyhpKVxuICAgICAgICAgICAgICAgIHNldERlbGV0ZShpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNiID0gU2lkZWJhcigpO1xuICAgICAgICAgICAgc2IuYWRkUHJvaihsb2NhbFByb2plY3RzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxQcm9qZWN0cy5zcGxpY2UoMCwgbG9jYWxQcm9qZWN0cy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9jYWxQcm9qZWN0cy5pbmNsdWRlcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXldKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUHJvamVjdHMucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXldKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzYiA9IFNpZGViYXIoKTtcbiAgICAgICAgICAgIHNiLmFkZFByb2oobG9jYWxQcm9qZWN0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZFxuICAgIH1cbn0iLCJleHBvcnQgeyBTaWRlYmFyIH1cbmltcG9ydCBBcnJvdyBmcm9tICcuL2Fycm93LnN2ZydcbmltcG9ydCB7IHRvRG9WaWV3IH0gZnJvbSAnLi90by1kby5qcydcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGFkZFByb2ogPSAoYXJyYXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2Jjb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ItcHJvamNvbCcpXG4gICAgICAgIHNiY29sLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzYlRpdGxlID0gYXJyYXlbaV0udGl0bGU7XG4gICAgICAgICAgICBsZXQgc2JEaXYgPSBzYmNvbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgIHNiRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2Itcm93Jyk7XG4gICAgICAgICAgICBzYkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7c2JUaXRsZX1gKTtcbiAgICAgICAgICAgIHNiRGl2LmlubmVySFRNTCA9IHNiVGl0bGU7XG4gICAgICAgICAgICBzZXRMaW5rKHNiRGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldExpbmsgPSAoZGl2KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwcm9qQXJyb3cuc3JjID0gQXJyb3c7XG5cbiAgICAgICAgbGV0IHNiYVRhZyA9IGRpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgIHNiYVRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NiLWxpbmsnKTtcbiAgICAgICAgc2JhVGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiXCIpO1xuICAgICAgICBzYmFUYWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRkVGV4dCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zYi1yb3cnKS5pZDtcbiAgICAgICAgICAgIGxldCB0ZExpbmsgPSB0b0RvVmlldygpO1xuICAgICAgICAgICAgdGRMaW5rLmJ1aWxkKHRkVGV4dCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHNiSW1nID0gc2JhVGFnLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgcHJvakFycm93KTtcbiAgICAgICAgc2JJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzYi1pbWcnKTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBsaW5rRXZlbnQgPSAobGluaywgZSkgPT4ge1xuICAgIC8vICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAvLyAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qXG4gICAgfVxufSIsImV4cG9ydCB7dG9Eb1ZpZXd9XG5pbXBvcnQgeyBwcm9qZWN0VGlsZXMsIGxvY2FsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCJcbmltcG9ydCBBZGQgZnJvbSAnLi9hZGQuc3ZnJ1xuaW1wb3J0IEJhY2sgZnJvbSAnLi9hcnJvd19iYWNrLnN2ZydcblxuY29uc3QgdG9Eb1ZpZXcgPSAoKSA9PiB7XG5cbiAgICB2YXIgdGFyZ2V0T2JqID0gW107XG5cbiAgICBjb25zdCBzZXRQYWdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLWdyaWQnKS5pZCA9ICd0ZC1ncmlkJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZC1ncmlkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiYWNrQXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHZhciBiQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYkFycm93LnNyYyA9IEJhY2s7XG5cbiAgICAgICAgY29uc3QgdGRHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKTtcbiAgICAgICAgbGV0IGJBcnJvd0xpbmsgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgYkFycm93TGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2stYnRuJyk7XG4gICAgICAgIGJBcnJvd0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgXCJcIik7XG5cbiAgICAgICAgbGV0IGJBcnJvd0ltZyA9IGJBcnJvd0xpbmsuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBiQXJyb3cpO1xuICAgICAgICBiQXJyb3dJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrLWltZycpO1xuXG4gICAgICAgIGxldCBiQXJyb3dUZXh0ID0gYkFycm93TGluay5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgYkFycm93VGV4dC5pbm5lckhUTUwgPSAnTWFpbiBEYXNoYm9hcmQnO1xuXG4gICAgICAgIGJBcnJvd0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJykuaWQgPSAncHJvai1ncmlkJztcblxuICAgICAgICAgICAgbGV0IHJldHVybkRhc2ggPSBwcm9qZWN0VGlsZXMoKTtcbiAgICAgICAgICAgIHJldHVybkRhc2guYnVpbGQoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kUHJvamVjdCA9IChpZCkgPT4ge1xuICAgICAgICB0YXJnZXRPYmoucHVzaChsb2NhbFByb2plY3RzLmZpbmQoeCA9PiB4LnRpdGxlID09IGlkKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IGAke3RhcmdldE9ialswXS50aXRsZX1gO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFN1bW1hcnkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IHN1bW1QYXJlbnQgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHN1bW1QYXJlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdzdW1tYXJ5Jyk7XG5cbiAgICAgICAgbGV0IHNUaXRsZSA9IHN1bW1QYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1bW0tdGl0bGUnKTtcbiAgICAgICAgc1RpdGxlLmlubmVySFRNTCA9ICdTdW1tYXJ5JztcblxuICAgICAgICBsZXQgc1RleHQgPSBzdW1tUGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBzVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1bW0tdGV4dCcpO1xuICAgICAgICBzVGV4dC5pbm5lckhUTUwgPSBgJHt0YXJnZXRPYmpbMF0uZGVzY3JpcH1gO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IGRhdGVEaXYgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRhdGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1kYXRlJyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgbGV0IGRUaXRsZSA9IGRhdGVEaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtdGl0bGUnKTtcbiAgICAgICAgZFRpdGxlLmlubmVySFRNTCA9ICdFc3RpbWF0ZWQgQ29tcGxldGlvbic7XG5cbiAgICAgICAgbGV0IGRUZXh0ID0gZGF0ZURpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXRleHQnKTtcbiAgICAgICAgZFRleHQuaW5uZXJIVE1MID0gYCR7dGFyZ2V0T2JqWzBdLmR1ZWRhdGV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROb3RlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGRHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKTtcblxuICAgICAgICBsZXQgbm90ZURpdiA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgbm90ZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLW5vdGVzJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgblRpdGxlID0gbm90ZURpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgblRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZXMtdGl0bGUnKTtcbiAgICAgICAgblRpdGxlLmlubmVySFRNTCA9ICdOb3Rlcyc7XG5cbiAgICAgICAgbGV0IG5UZXh0ID0gbm90ZURpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgblRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdub3Rlcy10ZXh0Jyk7XG4gICAgICAgIG5UZXh0LmlubmVySFRNTCA9IGAke3RhcmdldE9ialswXS5ub3Rlc31gO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IHRkRGl2ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0ZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWRpdicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRkVGl0bGUgPSB0ZERpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgdGRUaXRsZS5pbm5lckhUTUwgPSAnVG8tRG8nO1xuXG4gICAgICAgIGJ1aWxkRm9ybSh0ZERpdik7XG5cbiAgICAgICAgbGV0IHRkVGV4dCA9IHRkRGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0ZFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWJveCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEljb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBhZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFkZEljb24uc3JjID0gQWRkO1xuICAgICAgICBhZGRJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtaW1nJyk7XG5cbiAgICAgICAgY29uc3QgdGRfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpO1xuICAgICAgICBsZXQgdGRBID0gdGRfdGl0bGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICAgICAgICB0ZEEuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1idG4nKTtcbiAgICAgICAgdGRBLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiXCIpO1xuXG4gICAgICAgIHRkQS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0ZEEuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBhZGRJY29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZEZvcm0gPSAocGFyKSA9PiB7XG4gICAgICAgIHZhciBmb3JtID0gcGFyLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWZvcm0nKTtcblxuICAgICAgICBsZXQgbGFiZWwgPSBmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RkLWlucHV0Jyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdFbnRlciB0YXNrOic7XG5cbiAgICAgICAgbGV0IGlucHV0ID0gZm9ybS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWlucHV0Jyk7XG5cbiAgICAgICAgbGV0IHN1YkJ0biA9IGZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcbiAgICAgICAgc3ViQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtc3VibWl0Jyk7XG4gICAgICAgIHN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIHN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbGUnLCAnQWRkJyk7XG5cbiAgICAgICAgc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc3QgaW5wVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHRhc2tGdW5jID0gVGFzaygpO1xuICAgICAgICAgICAgdGFza0Z1bmMubWFrZVRhc2soaW5wVGV4dCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgdmFyIHRhcmdUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLXRpdGxlJykuaW5uZXJIVE1MO1xuICAgICAgICB2YXIgdGFyZ1Byb2ogPSBsb2NhbFByb2plY3RzLmZpbmQoeCA9PiB4LnRpdGxlID09IHRhcmdUZXh0KTtcblxuICAgICAgICBpZiAodGFyZ1Byb2pbJ3Rhc2tzJ10pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ1Byb2pbJ3Rhc2tzJ10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWJveCcpO1xuICAgICAgICAgICAgICAgIGxldCB0ZHRhc2sgPSB0ZGJveC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgICAgICB0ZHRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLXJvdycpXG4gICAgICAgICAgICAgICAgdGR0YXNrLmlubmVySFRNTCA9IGAke3RhcmdQcm9qWyd0YXNrcyddW2ldfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGQgPSAoaWQpID0+IHtcbiAgICAgICAgc2V0UGFnZSgpO1xuICAgICAgICBiYWNrQXJyb3coKTtcbiAgICAgICAgZmluZFByb2plY3QoaWQpO1xuICAgICAgICBzZXRUaXRsZSgpO1xuICAgICAgICBzZXRTdW1tYXJ5KCk7XG4gICAgICAgIHNldERhdGUoKTtcbiAgICAgICAgc2V0Tm90ZXMoKTtcbiAgICAgICAgc2V0VG9EbygpO1xuICAgICAgICBzZXRJY29uKCk7XG4gICAgICAgIGxpc3RUYXNrcygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkXG4gICAgfVxufVxuXG5jb25zdCBUYXNrID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWFrZVRhc2sgPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tYm94Jyk7XG4gICAgICAgIGxldCB0YXNrID0gYm94Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1yb3cnKVxuICAgICAgICB0YXNrLmlubmVySFRNTCA9IGAke3ZhbHVlfWA7XG4gICAgICAgIGxvZ1Rhc2sodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ1Rhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtdGl0bGUnKS5pbm5lckhUTUw7XG4gICAgICAgIHZhciB0YXJnZXRQcm9qID0gbG9jYWxQcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSB0aXRsZVRleHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhcmdldFByb2pbJ3Rhc2tzJ10pIHtcbiAgICAgICAgICAgIHRhcmdldFByb2pbJ3Rhc2tzJ10ucHVzaCh0YXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFByb2pbJ3Rhc2tzJ10gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIHRhcmdldFByb2pbJ3Rhc2tzJ10ucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RpdGxlVGV4dH1gLCBKU09OLnN0cmluZ2lmeSh0YXJnZXRQcm9qKSk7XG4gICAgfSBcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlVGFza1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NpZGViYXIuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=