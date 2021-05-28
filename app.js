let add = document.getElementById('add');
add.addEventListener("click", () =>{
    
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson'==null)){
        console.log("update list");
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
});