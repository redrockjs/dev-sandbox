urlApi = "https://repetitora.net/api/JS/Images";

$.ajax(urlApi, {
    success : (data) => {
        data.forEach(el => {
            let img = document.createElement('img');
            img.src = el.thumbnail;
            document.querySelector("body").appendChild(img);
        });
    }
});



