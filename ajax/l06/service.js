/* 
Сюда вынесли ф-ции работы с запросами, данными
Когда в ф-цию в Ajax приходят данные мы говорим функции getImages выполни ф-цию successCallback
*/

function createTasks(widgetId, title) {
  urlApi = `https://repetitora.net/api/JS/Tasks`;

  let promise = axios.post(urlApi, {
                    widgetId: widgetId,
                    title: title
                        });
  return promise.then((response) => {
    return response.data;
  });
}

function getTasks(widgetId) {
  urlApi = `https://repetitora.net/api/JS/Tasks/?widgetId=${widgetId}`;

  let promise = axios.get(urlApi);
  return promise.then((response) => {
    return response.data;
  });
}