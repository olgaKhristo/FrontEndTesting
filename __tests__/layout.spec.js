const {renderDOM} = require('./helpers');

let dom;
let document;

describe('index.html', () => {
    beforeEach(async () => {
        dom = await renderDOM('../index.html');
        document = await dom.window.document;
    });

    it('has a button', () => {
        const btn = document.querySelector('button');
        expect(btn).toBeTruthy;
    })

    it ('h1 contains HEllo when website loads', () => {
const h1 = document.querySelector('h1');
expect(h1.innerHTML).toContain('Hello');

    })

    it('Display Good morning! when button is clicked', () => {
        const btn = document.querySelector('button');
        const h1 = document.querySelector('h1');       
        btn.click();
        expect(h1.innerHTML).toContain('Good morning!');
    })

});