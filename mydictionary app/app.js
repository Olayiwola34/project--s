//assign variables and get the api url
const apiUrl='https://api.dictionaryapi.dev/api/v2/entries/en/';

const result=document.querySelector('.result');
const button=document.querySelector('.btn');


//add event listener

button.addEventListener('click',()=>{
    const inputValue=document.querySelector('.input').value;
    fetch(`${apiUrl}${inputValue}`)
     .then((response) =>
       response.json()).then((data)=>{
        result.innerHTML=`<div class="details">
        <h2>${inputValue}</h2>
    </div>
    <div class="description">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>${data[0].phonetic}</p>
    
    
    </div>
    <div class="meaning">
        <p class="meaning-word">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="example">
            ${data[0].meanings[0].definitions[0].example || ''}
            </p>
    </div>`
        
           console.log(data);
})

//catching  error 
.catch(()=>{
  result.innerHTML=`<h4 class='error'>This word cant be found. Try another word.</h4>`
})
})