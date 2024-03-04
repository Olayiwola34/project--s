let searchInput=document.getElementById('input')

//let submitValue=document.getElementById('submit')

//add event listener

searchInput.addEventListener('keyup', filtervalue)


//create function that indexes

function filtervalue(){
    
    let searchValue=document.getElementById('input').value.toUpperCase()

    //console.log(searchValue)

    let ul=document.getElementById('names')

    //get lists

    let lis=ul.querySelectorAll('li.collection-item')

    for(i=0;i< lis.length;i++){
        let a=lis[i].getElementsByTagName('a')[0]

        if(a.innerHTML.toUpperCase().indexOf(searchValue)< -1){
lis[i].style.display=""
        }else{
            lis[i].style.display='none'
        }
    }
}