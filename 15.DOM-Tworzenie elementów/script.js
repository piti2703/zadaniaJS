// Zadanie 1
const divElement = document.createElement('div');
divElement.innerText = 'To jest nowy element';
document.body.appendChild(divElement);

// Zadanie 2
const listElement = document.createElement('ul');
listElement.innerHTML += `<li> Jabłka </li>`;
listElement.innerHTML += `<li> Gruszki </li>`;
listElement.innerHTML += `<li> Banany </li>`;
listElement.innerHTML += `<li> Winogrona </li>`;
listElement.innerHTML += `<li> Truskawki </li>`;
listElement.innerHTML += `<li> Mandarynki </li>`;
document.body.appendChild(listElement);

// Zadanie 3
listElement.addEventListener('click', ev => {
    ev.currentTarget.querySelectorAll('li:nth-child(even)').forEach(child => {
        child.remove();
    })
})

// Zadanie 5
const randomNumber = Math.round(Math.random() * 10);
for(let i = 0; i <= randomNumber; i++) {
    const newElement = document.createElement('div');
    newElement.innerText = `To jest div numer ${i}`;
    document.body.appendChild(newElement);
}

// Zadanie 6
const div1 = document.createElement('div');
div1.innerText = 'to jest div';
const span1 = document.createElement('span');
span1.innerText = 'to jest span';
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div3.innerText = 'to jest div';
div2.appendChild(div3);
const span2 = document.createElement('span');
span2.innerText = 'to jest span';

document.body.appendChild(div1);
document.body.appendChild(span1);
document.body.appendChild(div2);
document.body.appendChild(span2);

// Zadanie 7
const firstList = document.createElement('ul');
firstList.innerHTML += `<li> BMW </li>`;
firstList.innerHTML += `<li> Audi </li>`;
firstList.innerHTML += `<li> Porsche </li>`;
firstList.innerHTML += `<li> Lamborghini </li>`;
firstList.innerHTML += `<li> Toyota </li>`;
firstList.innerHTML += `<li> Mazda </li>`;
const firstListButton = document.createElement('button');
firstListButton.innerText = 'Przenieś';

const secondList = document.createElement('ul');
const secondListButton = document.createElement('button');
secondListButton.innerText = 'Przenieś';
secondListButton.disabled = true;

document.body.appendChild(firstList);
document.body.appendChild(firstListButton);
document.body.appendChild(secondList);
document.body.appendChild(secondListButton);

firstListButton.addEventListener('click', ev => {
    const lastElement = firstList.querySelector('li:last-child');
    secondList.appendChild(lastElement);
    secondListButton.disabled = false;
    if (firstList.children.length === 0) {
        firstListButton.disabled = true;
    }
});
secondListButton.addEventListener('click', ev => {
    const lastElement = secondList.querySelector('li:last-child');
    firstList.appendChild(lastElement);
    firstListButton.disabled = false;
    if (secondList.children.length === 0) {
        secondListButton.disabled = true;
    }
});

// Zadanie 8
const form = document.createElement('form');

const tagInput = document.createElement('input');
tagInput.name = 'tag';
tagInput.placeholder = 'Tag';

const textInput = document.createElement('input');
textInput.name = 'text';
textInput.placeholder = 'Text';

const colorInput = document.createElement('input');
colorInput.name = 'color';
colorInput.placeholder = 'Color';

const repeatInput = document.createElement('input');
repeatInput.name = 'repeat';
repeatInput.placeholder = 'Repeat';

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.innerText = 'Create';

form.appendChild(tagInput);
form.appendChild(textInput);
form.appendChild(colorInput);
form.appendChild(repeatInput);
form.appendChild(submitButton);

document.body.appendChild(form);

form.addEventListener('submit', ev => {
    ev.preventDefault();
    
    const tagName = ev.currentTarget.querySelector('input[name="tag"]').value;
    const text = ev.currentTarget.querySelector('input[name="text"]').value;
    const color = ev.currentTarget.querySelector('input[name="color"]').value;
    const repeat = ev.currentTarget.querySelector('input[name="repeat"]').value;

    const newElement = document.createElement(tagName);
    newElement.innerText = text;
    newElement.style.color = color;

    for (let i = 0; i < repeat; i++) {
        document.body.appendChild(newElement.cloneNode(true));
    }
});

// Zadanie 9


// Zadanie 14
const obiekt14 = {
    name: '',
    surname: '',
    age: ''
}
const updateObject = () => {
    obiekt14.name = 'John';
    obiekt14.nameLength = obiekt14.name.length;
    obiekt14.surname = 'Snow';
    obiekt14.surnameLength = obiekt14.surname.length;
    obiekt14.age = 'seventeen';
    obiekt14.ageLength = obiekt14.age.length;

    if (obiekt14.nameLength > 5 || obiekt14.surnameLength > 5 || obiekt14.ageLength > 5) {
        let buttonElement = document.createElement('button');
        document.getElementsById('root').appendChild(buttonElement);
        buttonElement.addEventListener('click', () => {
            console.log(obiekt14);
        })
    }
}
updateObject()