let myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc == "images/test-image-cat.jpg"){
        myImage.setAttribute("src", "images/cat-1046544_1280.jpg"); 
    }
    else{
        myImage.setAttribute("src", "images/test-image-cat.jpg"); 
    }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function getUserName (){
    let myName = prompt("Please, enter your name: ");
    if(!myName){
        getUserName();
    } else{
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "The story of a red cat for you, " + myName;
    } 
}

if (!localStorage.getItem("name")){
    getUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.innerHTML = "The story of a red cat for you, " + storedName;
}

myButton.onclick = () => {
    getUserName();
};