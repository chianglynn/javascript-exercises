/*
Basic Exercise 5
Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
*/

// Solution 1
/*
function stringRotate(id) {
    const p = document.getElementById(id);
    const stringNode = p.childNodes[0];
    let string = stringNode.data;

    setInterval(() => {
        string = string[string.length - 1] + string.substring(0, string.length - 1);
        stringNode.data = string;
    }, 1000);
}
*/

// Solution 2
const stringEl = document.getElementById('string');
let string = 'w3resource';

stringRotate();

function stringRotate() {
    string = string[string.length - 1] + string.substring(0, string.length - 1);
    stringEl.innerText = string;
    setTimeout(stringRotate, 1000);
}

/*
1. w3schoolsResource:
(1) HTML DOM childNodes Property: https://www.w3schools.com/JSREF/prop_node_childnodes.asp
(2) jQuery Misc data() Method: https://www.w3schools.com/jquery/misc_data.asp

2. MDN Resource:
String.prototype.substring(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
*/