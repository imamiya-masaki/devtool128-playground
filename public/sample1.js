(async() => {

console.log('sample1.js loaded');

// Load sample2.js
const script2 = document.createElement('script');
script2.src = 'sample2.js';
document.body.appendChild(script2);

// Fetch and insert /sample3 response into DOM
fetch('/sample3')
    .then(response => response.text())
    .then(html => {
        const div = document.createElement('div');
        div.innerHTML = html;
        document.body.appendChild(div);
    });

})()