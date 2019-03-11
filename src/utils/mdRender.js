import markdownIt from 'markdown-it';
import highlight from 'highlight.js';


const cfg = {
    highlight(code) {
        console.log('md==>', code, highlight.highlightAuto(code).value);
        return highlight.highlightAuto(code).value;
    },
};

const md = new markdownIt();
md.set(cfg);


function renderHtml(raw) {
    return md.render(raw);
}


export default renderHtml;
