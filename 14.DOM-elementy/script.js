// Zadanie 1
function getTagsFromList (elementList) {
    let tagList = [];
    elementList.forEach(el => tagList.push(el.nodeName));
    return tagList;
};

// Zadanie 2
function inspectShortList (shortListElement) {
    // 1
    console.log(shortListElement.innerHTML);
    // 2
    console.log(shortListElement.outerHTML);
    // 3
    console.log(shortListElement.className);
    // 4
    console.log(shortListElement.className.split(/\s+/));
    // 5
    console.log(shortListElement.dataset);
}
inspectShortList(document.querySelector('.short-list'));

// Zadanie 3
function doOperations (num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log('Suma: ' + (num1 + num2));
    console.log('Różnica: ' + (num1 - num2));
}
doOperations(
    document.getElementById('datasetCheck').dataset.numberone,
    document.getElementById('datasetCheck').dataset.numbertwo
)

// Zadanie 4
document.getElementById('spanText').innerText = 'Hello World!';

// Zadanie 5
document.getElementById('spanText').className = 'exampleClass';

// Zadanie 6
function explodeClasses (classList) {
    classList.forEach(className => console.log(className));
    console.log(classList.join('+'));
    document.getElementById('classes').className = '';
    console.log('Usunięto wszystkie klasy');
}
explodeClasses(document.getElementById('classes').className.split(/\s+/));

// Zadanie 7
function completeListWithDataset () {
    allElements.forEach(element => {
        if (!element.dataset.text) {
            element.dataset.text = "text";
        }
    })
}
const allElements = document.getElementById('longList').querySelectorAll('li');
completeListWithDataset(allElements);

// Zadanie 8
function generateObject (classString) {
    return {
        newClass: classString
    };
}
function changeClass (object) {
    const { newClass } = object;
    document.getElementById('myDiv').className = newClass;
}

changeClass(
    generateObject('helloClass')
);

// Zadanie 9
function addClassToNumbers (number) {
    let newClass = '';
    if (number % 2 === 0) {
        newClass = 'even';
    } else {
        newClass = 'odd';
    }

    document.getElementById('numbers').className += newClass;
}
addClassToNumbers(Math.round(Math.random() * 10));

// Zadanie 10
function getValuesFromList (parentElement) {
    let values = [];
    parentElement.querySelectorAll('li').forEach(children => {
        values.push(children.innerText);
    })
    return values;
}
getValuesFromList(document.getElementById('longList'));

// Zadanie 11
function hideValuesFromList (parentElement) {
    parentElement.querySelectorAll('li').forEach(children => {
        children.dataset.oldnumber = children.innerText;
        children.innerText = Math.round(Math.random() * 10);
    })
}
hideValuesFromList(document.getElementById('longList'));