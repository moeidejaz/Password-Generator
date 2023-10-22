let pswdElOne = document.getElementById("pswd-one")
let pswdElTwo = document.getElementById("pswd-two")
let genEl = document.getElementById("gen-pswd")
const pswdEl = document.getElementById("pswd-length")
const popEl = document.getElementById("pop-up")
const inputEl = document.getElementById("pswd-length")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


// PASSWORD GENERATION
inputEl.focus()
genEl.addEventListener("click", genPassword);

function genPassword(){
    pswdElOne.textContent = ""
    for(let i=0; i<pswdEl.value; i++){
        let randonNumberOne = Math.floor(Math.random() * characters.length)
       
        pswdElOne.textContent += characters[randonNumberOne]
    }
    
    pswdElTwo.textContent = ""
    for(let i=0; i<pswdEl.value; i++){
        let randonNumberTwo = Math.floor(Math.random() * characters.length)
       
        pswdElTwo.textContent += characters[randonNumberTwo]
    }
    popEl.textContent = ""
}

// COPY TO CLIPBOARD
function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    popEl.textContent = "Password Copied!"
}
