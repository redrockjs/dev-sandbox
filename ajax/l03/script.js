let pageNumberEl = document.getElementById("pageNumber");
let clickButton = document.getElementById("clickButton");
let result = document.getElementById("result");

clickButton.addEventListener('click',request);

function request() {
    
    urlApi = `https://repetitora.net/api/JS/Images/?page=${pageNumberEl.value}&count=1`;
    $.ajax(urlApi, {
        success : (data) => {
            data.forEach(el => {
                let img = document.createElement('img');
                img.src = el.thumbnail;
                result.appendChild(img);
                /*document.querySelector("body").appendChild(img);*/
            });
        }
    });
}
