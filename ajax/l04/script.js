/* Сюда вынесли ф-ции работы с UI*/

let pageNumberEl = document.getElementById("pageNumber");
let clickButton = document.getElementById("clickButton");
let result = document.getElementById("result");

clickButton.addEventListener('click', () => { 
    getImages(pageNumberEl.value,onDataReceived);
});

function onDataReceived(data) {
    data.forEach(el => {
        let img = document.createElement('img');
        img.src = el.thumbnail;
        result.appendChild(img);
        /*document.querySelector("body").appendChild(img);*/
    });
}
