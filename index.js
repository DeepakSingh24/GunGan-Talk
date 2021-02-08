function errorHandler(err){
    console.log('some error occured');
    alert('some error occured',err);
}
let serviceUrl='https://api.funtranslations.com/translate/gungan.json?text=';
function constructUrl(textToTranslate){
    return serviceUrl+textToTranslate;
}
function translateText(){
    let inputValue=document.getElementById('top_input').value;
    var translatedText=document.getElementById('bottom_input');
    fetch(constructUrl(inputValue)).then(res => res.json()).
    then(resp => translatedText.innerText=resp.contents.translated
    ).catch((err)=>{
        errorHandler(err);
    })
}
