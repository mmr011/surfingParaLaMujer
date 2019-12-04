const button = document.getElementById('ins');

const compress = event => {
    event.target.style.padding = '2%';
};

const decompress = event => {
    event.target.style.padding = '';
};

const eventAssignment = a => {
    a.onmousedown = compress;
    a.onmouseup = decompress;
}