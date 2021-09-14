function solve() {
    let formControls = document.querySelectorAll('.form-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const optionModule = document.querySelector('select');
    const modulesOutput = document.querySelector('.modules');
    let state = {};


    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes.map(attr => attr.split('=').forEach(([name, value]) => {
            element.setAttribute(name, value);
        }));

        return element;
    }

    function add(e) {
        e.preventDefault();
        if (lecture.value === '' || date.value === '' || optionModule.value === 'Select module') {
            return;
        }
        let mylectureName = lecture.value;
        let dateString = date.value
        const lectureTitle = mylectureName + ' - ' + dateString.split('-').join('/').split('T').join(' - ');
        let delBtn = createElement('button', 'Del', [`class=red`]);
        const lectureH4 = createElement('h4', lectureTitle);
        const li = createElement('li', undefined, ['class=flex']);
        li.appendChild(lectureH4);
        li.appendChild(delBtn);
        let module;
        let ul;

        if (!state[optionModule.value]) {
            let h3 = createElement('h3', `${optionModule.value.toUpperCase()} - MODULE`);
            ul = createElement('ul');
            lis = [];
            module = createElement('div', undefined, ['class=module']);

            module.appendChild(h3);
            module.appendChild(ul);
            state[optionModule.value] = { module, ul, lis: [] };
        } else {
            module = state[optionModule.value].module;
            ul = state[optionModule.value].ul;
        }

        state[optionModule.value].lis.push({ li, date: date.value });
        state[optionModule.value].lis.sort((a, b) => { return a.date.localeCompare(b.date) }).forEach(({ li }) => {
            ul.appendChild(li);
        });

        modulesOutput.appendChild(module);
    }
    function del(e) {
        let li = e.target.parentNode;
        console.log(li);
        let ul = li.parentNode;
        console.log(ul);
        let module = ul.parentNode;
        console.log(module);
        li.remove();
        if (ul.children.length === 0) {
            module.remove();
        }
    }
    // document.querySelector('button').addEventListener('click', add);
    document.getElementsByTagName('main')[0].addEventListener('click', (e) => {
        if (e.target.tagName === `BUTTON`) {
            if (!e.target.classList.contains('red')) {
                add(e);
            } else {
                del(e);
            }

            
            Object.entries(state).forEach(([name, module]) => {
                modulesOutput.appendChild(module.module);
            });
        }
    });
};