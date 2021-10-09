/* 
Сюда вынесли ф-ции работы с запросами, данными
Когда в ф-цию в Ajax приходят данные мы говорим функции getImages выполни ф-цию successCallback
*/

function getImagesOld(pageNum,successCallback) {
    
    urlApi = `https://repetitora.net/api/JS/Images/?page=${pageNum}&count=1`;
    $.ajax(urlApi, {
        success : (data) => {
            successCallback(data);
        }
    });
}


function getImages(pageNum) {
    
    urlApi = `https://repetitora.net/api/JS/Images/?page=${pageNum}&count=1`;
        
    let promise = axios.get(urlApi);

    return promise.then ( (response) => {
            return response.data;
    }

    );

}
