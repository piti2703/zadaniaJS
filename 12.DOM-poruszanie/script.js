// Zadanie 1
console.log(document.getElementById('buz').parentNode);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentNode);
console.log(document.getElementById('foo').firstChild);
console.log(document.getElementById('foo').children[1]);

// Zadanie 2
function bindClickOnElement (element) {
    element.addEventListener('click', ev => {
        console.log(
            ev.currentTarget.children[0]
            .children[0].children[0]
            .children[1].children[0]
            .children[0].innerText
        );
    })
}

bindClickOnElement(document.getElementById('ex2'));

// Zadanie 3
function addEx3Events () {
    document.querySelectorAll('div#ex3 button').forEach(element => {
        element.addEventListener('click', ev => {
            const currentDisplay = ev.currentTarget.nextElementSibling.style.display;
            if (currentDisplay === 'inline') {
                ev.currentTarget.nextElementSibling.style.display = 'none';
            } else {
                ev.currentTarget.nextElementSibling.style.display = 'inline';
            }
        });
    })
}
addEx3Events();

// Zadanie 4
function addEx4Events () {
    document.querySelectorAll('div#ex3 button').forEach(element => {
        element.addEventListener('click', ev => {
            ev.currentTarget.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    })
}
addEx4Events();

// Zadanie 5
document.querySelectorAll('#ex5 div').forEach(el => {
    el.addEventListener('mouseenter', ev => {
        const backgroundColor = ev.currentTarget.style.backgroundColor;

        const siblingList = el.parentElement.querySelector('ul');
        // 1
        siblingList.querySelectorAll('li')[0].style.backgroundColor = backgroundColor;
        // 2
        siblingList.querySelector('li:last-child').style.backgroundColor = backgroundColor;
        // 3
        siblingList.querySelectorAll('li:nth-child(even)').forEach(el => {
            el.style.backgroundColor = backgroundColor;
        })
        // 4
        siblingList.querySelectorAll('li').forEach(el => {
            el.style.backgroundColor = backgroundColor;
        })
        // 5
        siblingList.style.backgroundColor = backgroundColor;

    })
}) 

// Zadanie 6
const startDiv = document.getElementById('ex6');
// 1
const element1 = startDiv.children[0].children[0].children[0];
// 2
const element2 = startDiv.children[0].parentElement.children[0];
// 3
const element3 = startDiv.parentElement.children[0].parentElement.children[1]
                .children[0].children[0].children[0];