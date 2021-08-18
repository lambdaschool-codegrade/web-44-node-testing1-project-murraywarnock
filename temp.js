const myObj = { foox: '  foo ', barx: 'bar ', bazx: ' baz' };

function trimProperties(obj) {
    // ✨ implement
    return Object.keys(obj).map(k => obj[k] = obj[k].trim());
}

console.log(trimProperties(myObj));