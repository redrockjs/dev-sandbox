var total = 0;
var lastNum = 0;
var isPoint = false;
var isNegative = false;
var lastAction = null;
var preLastAction = null;

function isFloat(n) {
    return parseFloat(n.match(/^-?\d*(\.\d+)?$/))>0;
}

var numdisplay = document.getElementById("numdisplay");
total = numdisplay.innerText;

var key1 = document.getElementById("key1");
var key2 = document.getElementById("key2");
var key3 = document.getElementById("key3");
var key4 = document.getElementById("key4");
var key5 = document.getElementById("key5");
var key6 = document.getElementById("key6");
var key7 = document.getElementById("key7");
var key8 = document.getElementById("key8");
var key9 = document.getElementById("key9");
var key0 = document.getElementById("key0");
var keyPoint  = document.getElementById("keypoint");
var keyClear  = document.getElementById("keyclear");
var keyBack   = document.getElementById("keyback");
var keyInvert = document.getElementById("keyinvert");
var keyPlus   = document.getElementById("keyplus");
var keyMinus  = document.getElementById("keyminus");
var keyMult   = document.getElementById("keymult");
var keyDiv    = document.getElementById("keydiv");
var keyEqual  = document.getElementById("keyequal");


function pressKey1(){
    if (numdisplay.value == "0") {
        numdisplay.value= "1";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "1";
        lastNum = Number(numdisplay.value)
    }
}

function pressKey2(){
    if (numdisplay.value == "0") {
        numdisplay.value= "2";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "2";
        lastNum = Number(numdisplay.value)
    }
}

function pressKey3(){
    if (numdisplay.value == "0") {
        numdisplay.value= "3";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "3";
        lastNum = Number(numdisplay.value)
    }
}

function pressKey4(){
    if (numdisplay.value == "0") {
        numdisplay.value= "4";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "4";
        lastNum = Number(numdisplay.value)
    }
}

function pressKey5(){
    if (numdisplay.value == "0") {
        numdisplay.value= "5";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "5";
        lastNum = Number(numdisplay.value)
    }
}

function pressKey6(){
    if (numdisplay.value == "0") {
        numdisplay.value= "6";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "6";
        lastNum = Number(numdisplay.value)
    }
}

function pressKey7(){
    if (numdisplay.value == "0") {
        numdisplay.value= "7";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "7";
        lastNum = Number(numdisplay.value)
    }
}

function pressKey8(){
    if (numdisplay.value == "0") {
        numdisplay.value= "8";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "8";
        lastNum = Number(numdisplay.value)
    }    
}

function pressKey9(){
    if (numdisplay.value == "0") {
        numdisplay.value= "9";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "9";
        lastNum = Number(numdisplay.value)
    } 
}

function pressKey0(){
    if (numdisplay.value == "0") {
        numdisplay.value= "0";
        lastNum = Number(numdisplay.value)
    } else {
        numdisplay.value= numdisplay.value + "0";
        lastNum = Number(numdisplay.value)
    }  
}

function pressKeyPoint(){
    if (!isPoint)    {
        numdisplay.value= numdisplay.value + ".";
        isPoint = true;
    }
}

function pressKeyClear(){
    numdisplay.value= "0";
    total = 0;
    lastNum = 0;
    isPoint = false;
    isNegative = false;
    lastAction = null;
    preLastAction = null;
}

function pressKeyBack(){
    if (numdisplay.value == "0") {
        numdisplay.value= "0";
    } else {
    let tmp = numdisplay.value; 
    if (!isFloat(tmp)) {
        isPoint = false;
    }
    numdisplay.value = tmp.substr(0,tmp.length-1);
    }
}

function pressKeyInvert(){
    if (!isNegative) {
        numdisplay.value = "-" + numdisplay.value;
        isNegative = true;
    } else {
        isNegative = false;
        let tmp = numdisplay.value;
        numdisplay.value = tmp.substr(1,tmp.length);
    }   
}

function pressKeyPlus(){
    if ((total==0) || (lastAction="equal")) {
        total = Number(numdisplay.value);
        numdisplay.value = "0";
        lastAction = "plus";
    } else {
        numdisplay.value = total + lastNum;
        total = Number(numdisplay.value);
        lastAction = "plus";
    }
}  

function pressKeyMinus(){
    if ((total==0) || (lastAction="equal")) {
        total = Number(numdisplay.value);
        numdisplay.value = "0";
        lastAction = "minus";
    } else {
        numdisplay.value = total - lastNum;
        total = Number(numdisplay.value);
        lastAction = "minus";
    }
}
function pressKeyMult(){
    if ((total==0) || (lastAction="equal")) {
        total = Number(numdisplay.value);
        numdisplay.value = "0";
        lastAction = "mult";
    } else {
        numdisplay.value = total * lastNum;
        total = Number(numdisplay.value);
        lastAction = "mult";
    }
}
function pressKeyDiv(){
    if ((total==0) || (lastAction="equal")) {
        total = Number(numdisplay.value);
        numdisplay.value = "0";
        lastAction = "div";
    } else {
        numdisplay.value = total / lastNum;
        total = Number(numdisplay.value);
        lastAction = "div";
    }
}
function pressKeyEqual(){
    switch (lastAction) {
        case "plus":
            numdisplay.value = total + lastNum;
            total = Number(numdisplay.value);
            lastAction = "equal";
            preLastAction = "plus"
        break;
        case "minus":
            lastNum = Number(numdisplay.value)
            numdisplay.value = total - lastNum;
            total = Number(numdisplay.value);
            lastAction = "equal";
            preLastAction = "minus"
        break;
        case "mult":
            lastNum = Number(numdisplay.value)
            numdisplay.value = total * lastNum;
            total = Number(numdisplay.value);
            lastAction = "equal";
            preLastAction = "mult"
        break;
        case "div":
            lastNum = Number(numdisplay.value)
            numdisplay.value = total / lastNum;
            total = Number(numdisplay.value);
            lastAction = "equal";
            preLastAction = "div"
        break;
        case "equal":
            switch (preLastAction){
                case "plus":
                    numdisplay.value = total + lastNum;
                    total = Number(numdisplay.value);
                    lastAction = "equal";
                    preLastAction = "plus"
                break;
                case "minus":
                    numdisplay.value = total - lastNum;
                    total = Number(numdisplay.value);
                    lastAction = "equal";
                    preLastAction = "minus"
                break;
                case "mult":
                    numdisplay.value = total * lastNum;
                    total = Number(numdisplay.value);
                    lastAction = "equal";
                    preLastAction = "mult"
                break;
                case "div":
                    numdisplay.value = total / lastNum;
                    total = Number(numdisplay.value);
                    lastAction = "equal";
                    preLastAction = "div"
                break;
                default: 
            }
        break;
        default:
        alert("Уппс! Что-то пошло не так ;)");
    }
    //alert(total);
}

key1.addEventListener('click', pressKey1);
key2.addEventListener('click', pressKey2);
key3.addEventListener('click', pressKey3);
key4.addEventListener('click', pressKey4);
key5.addEventListener('click', pressKey5);
key6.addEventListener('click', pressKey6);
key7.addEventListener('click', pressKey7);
key8.addEventListener('click', pressKey8);
key9.addEventListener('click', pressKey9);
key0.addEventListener('click', pressKey0);
keyPoint.addEventListener('click', pressKeyPoint);
keyClear.addEventListener('click', pressKeyClear);
keyBack.addEventListener('click', pressKeyBack);
keyInvert.addEventListener('click', pressKeyInvert);
keyPlus.addEventListener('click', pressKeyPlus);
keyMinus.addEventListener('click', pressKeyMinus);
keyMult.addEventListener('click', pressKeyMult);
keyDiv.addEventListener('click', pressKeyDiv);
keyEqual.addEventListener('click', pressKeyEqual);
