//**************************************   Init    *******************************************
// Playlist here because WebStorm does not have LiveServer analog

const playList = [
    {
        title: 'Aqua Caelestis',
        src: '../assets/sounds/Aqua Caelestis.mp3',
        duration: '00:39'
    },
    {
        title: 'River Flows In You',
        src: '../assets/sounds/River Flows In You.mp3',
        duration: '01:37'
    },
    {
        title: 'Summer Wind',
        src: '../assets/sounds/Summer Wind.mp3',
        duration: '01:50'
    },
    {
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
        duration: '01:37'
    }
]

let defaultCity = "Minsk"// i18next.t('default-city');

let appSettings = {
    "sliderWidget": true,
    "weatherWidget": true,
    "playerWidget": true,
    "clockWidget": true,
    "greetingWidget": true,
    "quotesWidget": true,
    "app-language": "en",
    "bg-source": "github"
}

//*************** onLoad
window.addEventListener('load', () => {
    if (localStorage.getItem('name')) {
        inputNameId.value = localStorage.getItem('name');
    }

    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }

    if (localStorage.getItem('appSettings')) {
        appSettings = JSON.parse(localStorage.getItem('appSettings'));
    }

    getWeather();

});

//*************** onClose
window.addEventListener('beforeunload', () => {
    localStorage.setItem('name', inputNameId.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('appSettings', JSON.stringify(appSettings));

})

document.addEventListener("DOMContentLoaded", () => {
    getGithubImages();
    setBg(currentBgImage);
    if (appSettings["app-language"]==='ru') {
        i18next.changeLanguage('ru');
        langBtns[0].checked = false
        langBtns[1].checked = true
    } else {
        i18next.changeLanguage('en');
        langBtns[0].checked = true
        langBtns[1].checked = false
    }

    if (appSettings["bg-source"] === "github") {
        sourceBtns[0].checked = true
        sourceBtns[1].checked = false
        sourceBtns[2].checked = false
    } else if (appSettings["bg-source"] === "unsplash") {
        sourceBtns[0].checked = false
        sourceBtns[1].checked = true
        sourceBtns[2].checked = false
    } else if (appSettings["bg-source"] === "flickr") {
        sourceBtns[0].checked = false
        sourceBtns[1].checked = false
        sourceBtns[2].checked = true
    }


});

//************************************ Reused functions****************************************
function getRandomNum(maxNum) {
    return Math.ceil(Math.random() * maxNum);
}

function formatTime(time) {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60);

    if (!isFinite(seconds)) seconds = 0
    if (!isFinite(minutes)) minutes = 0

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

function errorMessage(message) {
    console.log(message);
}

//********************************  i18next localisation **************************************

const intlRuStore = {
    "greet-morning": "Доброе утро",
    "greet-afternoon": "Добрый день",
    "greet-evening": "Добрый вечер",
    "greet-night": "Доброй ночи",
    "placeholder": "Введите имя",
    "lang": "ru",
    "locales": "ru-RU",
    "default-city": "Minsk",
    "error-cityname": "Ошибка в названии города",
    "wind" : "Ветер",
    "humidity" : "Влажность",
    //****settings menu*****//
    "settings": "Настройки",
    "widgets": "Виджеты",
    "slider": "Слайдер",
    "weather": "Погода",
    "player": "Плеер",
    "clock": "Часы",
    "greeting": "Приветствие",
    "quotes": "Цитаты",
    "app-language": "Язык приложения",
    "bg-source": "Источник фона",
    "save-btn": "Сохранить"
}

const intlEnStore = {
    "greet-morning": "Good morning",
    "greet-afternoon": "Good afternoon",
    "greet-evening": "Good evening",
    "greet-night": "Good night",
    "placeholder": "Enter name",
    "lang": "en",
    "locales": "en-EN",
    "default-city": "Minsk",
    "error-cityname": "Incorrect city name",
    "wind" : "Wind",
    "humidity" : "Humidity",
    //****settings menu*****//
    "settings": "Settings",
    "widgets": "Widgets",
    "slider": "Slider",
    "weather": "Weather",
    "player": "Player",
    "clock": "Clock",
    "greeting": "Greeting",
    "quotes": "Quotes",
    "app-language": "App language",
    "bg-source": "Background source",
    "save-btn": "Save"
}

i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
        debug: false,
        resources: {
            en: {
                translation: intlEnStore
            },
            ru: {
                translation: intlRuStore
            }
        }
    });

i18next.on('languageChanged', () => {
    getWeather();
    showDate();
    getQuotes(i18next.t('lang'));
    inputNameId.placeholder = i18next.t('placeholder');
    settingsLabelId.textContent = i18next.t('settings');

    settingsHeader.textContent = i18next.t('settings');
    widgetsMenu.textContent = i18next.t('widgets');
    appLanguageMenu.textContent = i18next.t('app-language');
    bgSourceMenu.textContent = i18next.t('bg-source');
    widgetsSubmenuHeader.textContent = i18next.t('widgets');
    appLanguageSubmenuHeader.textContent = i18next.t('app-language');
    bgSourceSubmenuHeader.textContent = i18next.t('bg-source');

    sliderSubmenuItem.textContent = i18next.t('slider');
    weatherSubmenuItem.textContent = i18next.t('weather');
    playerSubmenuItem.textContent = i18next.t('player');
    clockSubmenuItem.textContent = i18next.t('clock');
    greetingSubmenuItem.textContent = i18next.t('greeting');
    quotesSubmenuItem.textContent = i18next.t('quotes');
    settingsSaveBtn.textContent = i18next.t('save-btn');
});

const settingsHeader = document.getElementById('settings-header');
const widgetsMenu = document.getElementById('widgets-menu');
const appLanguageMenu = document.getElementById('app-lang-menu');
const bgSourceMenu = document.getElementById('bg-source-menu');

const widgetsSubmenuHeader = document.getElementById('widgets-submenu-header');
const appLanguageSubmenuHeader = document.getElementById('app-lang-submenu-header');
const bgSourceSubmenuHeader = document.getElementById('bg-source-submenu-header');

const sliderSubmenuItem = document.getElementById('slider-submenu-item');
const weatherSubmenuItem = document.getElementById('slider-submenu-item');
const playerSubmenuItem = document.getElementById('player-submenu-item');
const clockSubmenuItem = document.getElementById('clock-submenu-item');
const greetingSubmenuItem = document.getElementById('greeting-submenu-item');
const quotesSubmenuItem = document.getElementById('quotes-submenu-item');

// const wind = document.getElementById('wind');
// const humidity = document.getElementById('humidity');
//**************************************Quotes Widget******************************************
function getQuotes(lang) {
    const quotes = `assets/json/${lang}-quotes.json`;
    fetch(quotes)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                quotesArr[i] = data[i]
            }
            quoteId.innerText = `"${quotesArr[quoteIdx].text}"`
            authorId.innerText = quotesArr[quoteIdx].author
        });
}

getQuotes(i18next.t('lang'));

let quotesArr = [];
let quoteIdx = getRandomNum(12);

const quotesEvent = document.getElementById("change-quote-id")
const quoteId = document.getElementById("quote-id")
const authorId = document.getElementById("author-id")

quotesEvent.addEventListener('click', () => {
    quoteIdx++
    if (quoteIdx > quotesArr.length - 1) {
        quoteIdx = 0
    }
    quoteId.innerText = `"${quotesArr[quoteIdx].text}"`
    authorId.innerText = quotesArr[quoteIdx].author
})

//**************************************Date-Time Widget******************************************

const dateId = document.getElementById("date-id");
const timeId = document.getElementById("time-id");

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeId.textContent = currentTime;
    setTimeout(() => {
        showTime();
        showDate();
        showGreeting();
    }, 1000);
}

showTime();

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString(i18next.t('locales'), options);
    dateId.textContent = currentDate;
}

showDate();

//**************************************Greeting Widget******************************************
function getTimeOfDay(hour) {
    if (hour >= 6 && hour <= 11) return "morning";
    if (hour >= 12 && hour <= 17) return "afternoon";
    if (hour >= 18 && hour <= 23) return "evening";
    if (hour >= 0 && hour <= 5) return "night";
}

const date = new Date();
const hours = date.getHours();
const greetingId = document.getElementById("greeting-Id");

function showGreeting() {
    switch (getTimeOfDay(hours)) {
        case 'morning' :
            greetingId.textContent = `${i18next.t('greet-morning')},`
            break
        case 'afternoon' :
            greetingId.textContent = `${i18next.t('greet-afternoon')},`
            break
        case 'evening' :
            greetingId.textContent = `${i18next.t('greet-evening')},`
            break
        case 'night' :
            greetingId.textContent = `${i18next.t('greet-night')},`
            break
        default :
            greetingId.textContent = `${i18next.t('greet-afternoon')},`
    }
}

showGreeting();

const inputNameId = document.getElementById("input-name-id")

inputNameId.placeholder = i18next.t('placeholder')
// Moved setLocalStorage, getLocalStorage up to init block

//**************************************Wallpapers Widget******************************************

let currentBgImage,
    loadedImageURLs = [];

currentBgImage = getRandomNum(20);

const slidePrevId = document.getElementById("slide-prev-id");
const slideNextId = document.getElementById("slide-next-id");

function getSlidePrev() {
    currentBgImage--
    if (currentBgImage < 1) currentBgImage = 20
    setBg(currentBgImage);
}

function getSlideNext() {
    currentBgImage++
    if (currentBgImage > 20) currentBgImage = 1
    setBg(currentBgImage);
}

slidePrevId.addEventListener('click', getSlidePrev)
slideNextId.addEventListener('click', getSlideNext)

function setBg(currentBgImage) {
    const img = new Image();
    img.src = loadedImageURLs[currentBgImage]
    img.addEventListener('load', () => {
        document.body.style.background = `url("${img.src}") center/cover, rgba(0, 0, 0, 0.5)`;
    })
}

//********************************** Images API functions***************************************

function getGithubImages() {
    loadedImageURLs = [];
    let timeOfDay = getTimeOfDay(date.getHours()),
        bgNum;

    for (let i = 1; i <= 20; i++) {
        bgNum = String(i).padStart(2, "0");
        loadedImageURLs.push(`https://raw.githubusercontent.com/redrockjs/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`)
    }
    setBg(currentBgImage)
}

async function getUnsplashApi() {
    loadedImageURLs = [];
    let timeOfDay = getTimeOfDay(date.getHours());

    try {
        const url = `https://api.unsplash.com/search/photos/?client_id=pBrhgJeC5WpGLCIWkIsNCHEu_8Ro2oNV-WnMqqR1Qbg&query="${timeOfDay}"&orientation=landscape&per_page=20`;
        const res = await fetch(url);
        const data = await res.json();
        loadedImageURLs = data.results.map(el => el.urls.regular);
        setBg(currentBgImage);
    } catch (err) {
        errorMessage(err);
    }
}

async function getFlickrApi() {
    loadedImageURLs = [];
    let timeOfDay = getTimeOfDay(date.getHours());

    try {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=52034004b370629cb216ce8bdde80bc7&text="${timeOfDay}"&media=photos&per_page=20&nojsoncallback=1`;
        const res = await fetch(url);
        const data = await res.json();
        loadedImageURLs = data.photos.photo.map(el => {
            return `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_b.jpg`
        });
        setBg(currentBgImage);
    } catch (err) {
        errorMessage(err);
    }
}

//**************************************Weather Widget******************************************
async function getWeather() {
    city.value
        ? city.value = city.value
        : city.value = defaultCity
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${i18next.t('lang')}&appid=c6e56d40457da110ead14db0312cea6d&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        //console.log(data.cod)
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)} °C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `${i18next.t('wind')}: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `${i18next.t('humidity')}: ${data.main.humidity} %`;
        weatherError.textContent = ""
    } catch (err) {
        errorMessage(err); // TypeError: failed to fetch
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = ""
        weatherDescription.textContent = ""
        wind.textContent = ""
        humidity.textContent = ""
        weatherError.textContent = `${i18next.t('error-cityname')},`
    }
}

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');

city.addEventListener('change', getWeather);

//**************************************Player Widget******************************************

const audio = document.querySelector('audio');
let isPlay = false;
let trackIdx = 0;

function playAudio() {
    audio.currentTime = currentTimeNum;
    audio.play();
    isPlay = true;
    playButton.className = "pause player-icon";
    playListContainer.childNodes.forEach((el, idx) => {
        el.classList.remove('item-active');
        if (idx === trackIdx) el.classList.add('item-active')
    })

    /***/
    if (!progress.getAttribute('max')) progress.setAttribute('max', String(audio.duration));
    durationId.textContent = "0:00";
    currentTimeId.textContent = "0:00";
    currentTrackId.textContent = playList[trackIdx].title;
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
    playButton.className = "play player-icon"
}

const playButton = document.querySelector('.play')

playButton.addEventListener('click', () => {
    !isPlay
        ? playAudio()
        : pauseAudio()
})

const playListContainer = document.querySelector('.play-list')

//console.log(playListContainer.childNodes)

playList.forEach(el => {
    const li = document.createElement("li")
    li.classList.add('play-item')
    li.textContent = el.title
    playListContainer.append(li)
})

audio.src = playList[0].src;

const playPrevId = document.querySelector('.play-prev')
const playNextId = document.querySelector('.play-next')

playPrevId.addEventListener('click', playPrev)
playNextId.addEventListener('click', playNext)

function playPrev() {
    trackIdx--;
    if (trackIdx < 0) {
        trackIdx = playList.length - 1;
    }
    audio.src = playList[trackIdx].src;
    playAudio();
    audio.currentTime = 0;
}

function playNext() {
    trackIdx++
    if (trackIdx > playList.length - 1) {
        trackIdx = 0
    }
    audio.src = playList[trackIdx].src;
    playAudio();
    audio.currentTime = 0;
}

audio.addEventListener('ended', playNext);

//********************************* Player Controls Widget ************************************

let currentTimeNum = 0;

const progress = document.getElementById('progress');
const durationId = document.getElementById('duration-id');
const currentTimeId = document.getElementById('currenttime-id');
const currentTrackId = document.getElementById('current-track-id');

audio.addEventListener('timeupdate', function () {
    durationId.textContent = formatTime(audio.duration)
    currentTimeId.textContent = formatTime(audio.currentTime);
    currentTimeNum = audio.currentTime;
    if (audio.currentTime) progress.value = Math.floor((audio.currentTime / audio.duration) * 100);
    //console.log(progress.value)
    //console.log(audio.duration, audio.currentTime, Math.floor((audio.currentTime / audio.duration) * 100))
});

progress.addEventListener('click', function (e) {
    let pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
    audio.currentTime = pos * audio.duration;
});

//******************************** Volume controls Widget**************************************

const volume = document.querySelector('.volume');
const mute = document.querySelector('.mute');
const volumeLevel = document.getElementById('volume-level');

let currentVolume = volumeLevel.value;

audio.volume = currentVolume / 100;

volume.addEventListener('click', () => {
    currentVolume = audio.volume * 100;
    volume.setAttribute('style', 'display:none;')
    mute.setAttribute('style', 'display:block;')
    audio.volume = 0;
})
mute.addEventListener('click', () => {
    volume.setAttribute('style', 'display:block;')
    mute.setAttribute('style', 'display:none;')
    audio.volume = currentVolume / 100;
})

volumeLevel.addEventListener('click', function (e) {
    let pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
    audio.volume = pos
    volumeLevel.value = Math.floor(pos * 100);
});

//******************************** Settings menu widget **************************************

const settingsIconId = document.getElementById('settings_icon');
const settingsLabelId = document.getElementById('settings_label');
const settingsMenuId = document.getElementById('settings-menu-id');
const settingsBox = document.querySelector('.settings');

settingsIconId.addEventListener('click', (e) => {
    e.stopPropagation();
    showSettings();
});
settingsLabelId.addEventListener('click', (e) => {
    e.stopPropagation();
    showSettings();
});

function showSettings() {
    settingsMenuId.classList.toggle('show')
}

document.addEventListener('click', (e) => {
    if (!settingsMenuId.contains(e.target)) {
        settingsMenuId.classList.remove('show')
    }
});

//******************************** Settings sub-menu widget **************************************
const submenuHandle = document.querySelector('.settings-submenu')
const contentHandle = document.querySelector('.settings-content-container');

submenuHandle.addEventListener('click', (e) => {
    let currentMenuItemId = e.target.dataset.menuid;

    Array.from(submenuHandle.children).forEach((el, idx) => {
        //console.log(el.dataset.menuid,idx)
        //console.log(contentHandle.children[idx].className);
        el.className = el.className.replace(' active', '');
        contentHandle.children[idx].className = contentHandle.children[idx].className.replace('show-content', '')
        if (currentMenuItemId === el.dataset.menuid) {
            el.className += ' active';
            contentHandle.children[idx].className += ' show-content';
        }
    })

})

const sliderWidgetToggle = document.getElementById('slider-widget-toggle')
const weatherWidgetToggle = document.getElementById('weather-widget-toggle')
const playerWidgetToggle = document.getElementById('player-widget-toggle')
const clockWidgetToggle = document.getElementById('clock-widget-toggle')
const greetingWidgetToggle = document.getElementById('greeting-widget-toggle')
const quotesWidgetToggle = document.getElementById('quotes-widget-toggle')
const settingsSaveBtn = document.getElementById('settings-save-btn')

sliderWidgetToggle.addEventListener('change', () => {
    //console.log("slider: ", sliderWidgetToggle.checked);
    const sliderWidget = document.getElementById('slider')
    sliderWidget.classList.toggle('hidden-box')

    if (!sliderWidget.classList.contains('hidden-box')) {
        sliderWidget.classList.toggle('hidden-box')
        sliderWidget.classList.toggle('active-box')
    }

    sliderWidgetToggle.checked
        ? appSettings.sliderWidget = true
        : appSettings.sliderWidget = false

    console.log(appSettings)

});

weatherWidgetToggle.addEventListener('change', () => {
    //console.log("weather: ", weatherWidgetToggle.checked);
    const weatherWidget = document.querySelector('.weather')
    weatherWidget.classList.toggle('hidden-box')

    if (!weatherWidget.classList.contains('hidden-box')) {
        weatherWidget.classList.toggle('hidden-box')
        weatherWidget.classList.toggle('active-box')
    }

    weatherWidgetToggle.checked
        ? appSettings.weatherWidget = true
        : appSettings.weatherWidget = false

    console.log(appSettings)
});

playerWidgetToggle.addEventListener('change', () => {
    //console.log("player: ", playerWidgetToggle.checked);
    const playerWidget = document.querySelector('.player')
    playerWidget.classList.toggle('hidden-box')

    if (!playerWidget.classList.contains('hidden-box')) {
        playerWidget.classList.toggle('hidden-box')
        playerWidget.classList.toggle('active-box')
    }

    playerWidgetToggle.checked
        ? appSettings.playerWidget = true
        : appSettings.playerWidget = false

    console.log(appSettings)
});

clockWidgetToggle.addEventListener('change', () => {
    //console.log("clock: ", clockWidgetToggle.checked);
    const clockWidget = document.querySelector('.time')
    const dateWidget = document.querySelector('.date')

    clockWidget.classList.toggle('hidden-box')
    if (!clockWidget.classList.contains('hidden-box')) {
        clockWidget.classList.toggle('hidden-box')
        clockWidget.classList.toggle('active-box')
    }
    dateWidget.classList.toggle('hidden-box')
    if (!dateWidget.classList.contains('hidden-box')) {
        dateWidget.classList.toggle('hidden-box')
        dateWidget.classList.toggle('active-box')
    }

    clockWidgetToggle.checked
        ? appSettings.clockWidget = true
        : appSettings.clockWidget = false
    console.log(appSettings)
});

greetingWidgetToggle.addEventListener('change', () => {
    //console.log("greeting: ", greetingWidgetToggle.checked);
    const greetingWidget = document.querySelector('.greeting-container')
    greetingWidget.classList.toggle('hidden-box')

    if (!greetingWidget.classList.contains('hidden-box')) {
        greetingWidget.classList.toggle('hidden-box')
        greetingWidget.classList.toggle('active-box')
    }

    greetingWidgetToggle.checked
        ? appSettings.greetingWidget = true
        : appSettings.greetingWidget = false

    console.log(appSettings)
});

quotesWidgetToggle.addEventListener('change', () => {
    //console.log("quotes: ", quotesWidgetToggle.checked);
    const quotesWidget = document.querySelector('.bottom-center')
    quotesWidget.classList.toggle('hidden-box')

    if (!quotesWidget.classList.contains('hidden-box')) {
        quotesWidget.classList.toggle('hidden-box')
        quotesWidget.classList.toggle('active-box')
    }

    quotesWidgetToggle.checked
        ? appSettings.quotesWidget = true
        : appSettings.quotesWidget = false

    console.log(appSettings)
});

const langBtns = document.getElementsByName('lang')
const sourceBtns = document.getElementsByName('source')

settingsSaveBtn.addEventListener('click', () => {
    if (langBtns[0].checked) {
        i18next.changeLanguage('en');
        appSettings["app-language"] = 'en';
    } else {
        i18next.changeLanguage('ru');
        appSettings["app-language"] = 'ru';
    }

    if (sourceBtns[0].checked) {
        getGithubImages();
        appSettings["bg-source"] = 'github';
    } else if (sourceBtns[1].checked) {
        getUnsplashApi();
        appSettings["bg-source"] = 'unsplash'
    } else {
        getFlickrApi();
        appSettings["bg-source"] = 'flickr'
    }
    settingsMenuId.classList.remove('show')

    console.log(appSettings)
})
