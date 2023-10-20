window.onload = function() {
    let signUp= document.getElementById("sigUp");
    let signIn= document.getElementById("sigIn");
    let nameInput= document.getElementById("nameInput");
    let title= document.getElementById("title");

    signIn.onclick= function(){
        nameInput.style.maxHeight="0";
        title.innerHTML="Login";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");
        signUp.style.backgroundColor = "#007BFF";
    }

    signUp.onclick= function(){
        nameInput.style.maxHeight="60px";
        title.innerHTML="Registro";
        signUp.classList.remove("disable");
        signIn.classList.add("disable");
        
    }
}
