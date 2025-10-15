let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

function toggleExtra() {
    let box = document.getElementById("extraBtns");
    box.classList.toggle("show");
        if(box.style.display === "grid"){
            box.style.display = "none";
        } else {
            box.style.display = "grid";
        }
}
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        let value = e.target.innerHTML;
        if(value === "More"){
            toggleExtra();
            return;
        }
        if(value === '='){
            string = eval(string);
            input.value = string;
        }
        else if(value == 'AC'){
            string = "";
            input.value =string;
            return;
        }else if(e.target.innerHTML == 'DEL'){
          string = string.substring(0, string.length-1);
          input.value = string;
        }
        else{
            string += value;
            input.value = string;
        }  
    });
});