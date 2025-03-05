const longueurElt = document.getElementById("longueur");
const majElt = document.getElementById("upperCase");
const minElt = document.getElementById("lowerCase");
const nblt = document.getElementById("number");
const specialElt = document.getElementById("special");
const pwdBoxElt = document.getElementById("pwdbox");
const generatePwdElt = document.getElementById("generatePwd");


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function modifyPwd(str){
    let temp ="";
    while ( temp.length < longueurElt.value){
        let car = str[Math.floor(Math.random()*str.length)]
        temp += car;
        str = str.replace(car,"");
    }
}

generatePwdElt.addEventListener('click', () => {

    let pwd = ""
    while ( pwd.length < longueurElt.value ){

        if (majElt.checked){
            pwd+= getRandomUpper()
        }
        if (minElt.checked){
            pwd+= getRandomLower()
        }
        if (nblt.checked){
            pwd+= getRandomNumber()
        }
        if(specialElt.checked){
            pwd+= getRandomSymbol()
        }
 
    } 
    pwdBoxElt.innerHTML=pwd.slice()
    }
);