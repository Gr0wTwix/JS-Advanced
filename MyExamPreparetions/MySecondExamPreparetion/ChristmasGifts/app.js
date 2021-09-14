function solution() {
    const input = document.querySelector('input');
    let [gifts, sent, discarded] = document.querySelectorAll('section ul');
    document.querySelector('button').addEventListener('click', add);
    function add() {
        const inputName = input.value;
        input.value = '';
        const element = e('li', inputName, 'gift');
        const sendBtn = e('button', 'Send', 'sendButton');
        const discardBtn = e('button', 'Discard', 'discardButton');
        element.appendChild(sendBtn);
        element.appendChild(discardBtn);
        gifts.appendChild(element);
        sendBtn.addEventListener('click', () => sendGifts(inputName,element));
        discardBtn.addEventListener('click', () => discardGifts(inputName,element));
        sortGifts();
    }

    function sendGifts(name,element) {
        element.remove();
        const gift = e('li', name, 'gift');
        sent.appendChild(gift);
    }

    function discardGifts(name, element) {
        element.remove();
        const gift = e('li', name, 'gift');
        discarded.appendChild(gift);
    }

    function sortGifts() {
        Array
        .from(gifts.children)
        .sort((a,b) => a.textContent.localeCompare(b.textContent))
        .forEach(g => gifts.appendChild(g));
    }

    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }

    // function createElement(type, text, attributes = []) {
    //     let element = document.createElement(type);
    //     if (text) {
    //         element.textContent = text;
    //     }
    //     attributes.map(attr => attr.split('=').forEach(([name, value]) => {
    //         element.setAttribute(name, value);
    //     }));
    //     return element;
    // }
};