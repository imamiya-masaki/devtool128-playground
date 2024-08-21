(async() => {
    
console.log('sample1-defer.js loaded');

// Load sample2.js
const script2Defer = document.createElement('script');
script2Defer.src = 'sample2-defer.js';
document.body.appendChild(script2Defer);

// Fetch and insert /sample3 response into DOM
fetch('/sample3-defer')
    .then(response => response.text())
    .then(html => {
        const div = document.createElement('div');
        div.innerHTML = html;
        document.body.appendChild(div);
    });
})()