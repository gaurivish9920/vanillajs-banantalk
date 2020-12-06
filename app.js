var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-Input")
var outputTrans = document.querySelector("#output")

// outputTrans.innerText="hihihihhi"  ----------------- .innerText is used to show output

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverurl + "?" + text
}

function errorHandler(error) {
    console.log("error occured!",error)
    alert("somethins is wrong with the server! Try again after sometime!")
}


function clickHandler() {
    // outputTrans.innerText = "smdineojvjvnv " + txtInput.value;
    var inputText= txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        outputTrans.innerText= translatedText;
    })
    .catch(errorHandler)
};
// .value is used to read values given as input  

btnTranslate.addEventListener("click", clickHandler)

