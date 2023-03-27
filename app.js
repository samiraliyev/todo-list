let form = document.querySelector("form");
let input = document.querySelector("input");
const button = document.querySelector("button");
let ul = document.querySelector("ul");

form.addEventListener("submit", formFunc);

function formFunc(e) {
  e.preventDefault();
}

button.addEventListener("click", addToDolist);

function addToDolist() {
    let inputValue = input.value;

  if(inputValue  == ""){
    input.value = "to do list boshdur"
    input.style.backgroundColor = "red";
    setInterval(()=>{
        input.style.backgroundColor = "";
        input.value = "";
    },1000)
}else{
   
    let li = document.createElement("li");
    li.className = "r-item";
    // list item reverse
    // ul.prepend(li);

    // this also
    ul.insertBefore(li, ul.childNodes[0]);

    // for word
    let wordDiv = document.createElement("div");
    wordDiv.className = "wordDiv";
  
    li.appendChild(wordDiv);
    wordDiv.innerText = inputValue;
  
    let edit = document.createElement("i");
    let remove = document.createElement("i");
    edit.className = "fa-solid fa-pen fa-bounce";
    remove.className = "fa-solid fa-trash fa-shake";
//   for icons
    let iconDiv = document.createElement("div");
  
    iconDiv.className = "iconlar";
    iconDiv.appendChild(edit);
    iconDiv.appendChild(remove);
  
    li.appendChild(iconDiv);
  
    input.value = "";
    remove.addEventListener("click", deleteFunc);
  
    function deleteFunc() {
      li.remove();
    }
  
    edit.addEventListener("click", editFunc);
  
    function editFunc() {
      wordDiv.classList.toggle("change");
        // let badArray = ul.childNodes;
        // let newBadArray = Array.prototype.slice.call(badArray);
        // newBadArray.splice(0,1);
        // console.log(newBadArray);
        // newBadArray.forEach((item)=>{
        //     if(item.children[0].className == "change"){
        //         item.remove();
        //         console.log('dsfsdfdsf')
        //     };
        // })


    }
  
  }



}





