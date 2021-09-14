function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    console.log(textAreas);
    console.log(buttons);
    
    const elements = {
        encode: {
            text: textAreas[0],
            button: buttons[0],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0) + 1);
            }
        },

        decode: {
            text: textAreas[1],
            button: buttons[1],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0) - 1);
            }
        }
    }

    document.getElementById('main').addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        const type = e.target.textContent
        .toLowerCase()
        .trim()
        .includes('encode') ? 'encode' : 'decode';

        let message = elements[type].text.value
        .split('')
        .map(elements[type].func);

        elements.encode.text.value = '';
        elements.decode.text.value = message.join('');
    })
};