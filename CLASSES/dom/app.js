class Modal {
    constructor (message) {
        this.message = message;
        this.elem = this._initialize();
    }

    _initialize () {
        const container = e('div', e('p', this.message), e('button', 'OK'))
        return container;
    }
}


window.addEventListener('load', () => {
    const main = document.querySelector('main');
    const myModal = new Modal('It Works');

    main.appendChild(myModal.elem);
});


function e(type, ...content) {
    const result = document.createElement(type);

    content.forEach(e => {
        if (typeof e === 'string') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}