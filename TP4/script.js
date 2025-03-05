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

function add(){
    const addOn = []
    if(minElt.checked){
        addOn.push(getRandomLower());
    }
    if(majElt.checked){
        addOn.push(getRandomUpper());
    }
    if (nblt.checked){
        addOn.push(getRandomNumber());
    }
    if(specialElt.checked){
        addOn.push(getRandomSymbol());
    }
    return addOn[Math.floor(Math.random() * addOn.length)];
}

function generatePwd(){
    let pwd = ""
    for (i=0;i<longueurElt.value; i++){
        pwd += add();
    }
    pwdBoxElt.innerHTML=pwd
}

generatePwdElt.addEventListener("click", () => {
    generatePwd()
})


