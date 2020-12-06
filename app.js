var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-Input")
var outputTrans = document.querySelector("#output")

// outputTrans.innerText="hihihihhi"  ----------------- .innerText is used to show output


function clickHandler() {
    outputTrans.innerText = "smdineojvjvnv " + txtInput.value;
};
// .value is used to read values given as input  

btnTranslate.addEventListener("click", clickHandler)

