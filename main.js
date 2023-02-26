let gifContainer = document.querySelector(".gifs");
let giphyElement = document.querySelector(".giphyElement");
let buttonClick = document.querySelector(".button");
let buttonsDOM = document.querySelector("#buttons")
let searchButton = document.querySelector("#btn")
let inputDOM = document.querySelector("#input")

let giphys = [];
let tagButtons = ["all", "cat", "dog", "happy", "angry", "basketball", "avengers", "astronout","snake"];


searchButton.addEventListener("click", () =>{
    getGiphy(inputDOM.value)
    inputDOM.value = ""
} )

const renderButton = () =>{
    
    tagButtons.map((button) =>{
    const liDOM = document.createElement("li")
    const buttonDOM = document.createElement("button")
    buttonDOM.id = button;
    buttonDOM.onclick = () =>{
        getGiphy(button);
    }
    liDOM.appendChild(buttonDOM);
    buttonsDOM.appendChild(liDOM);
    buttonDOM.innerHTML = button;
    })
}

const getGiphy = async (filterValue='all') =>{
const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=nR0iGdoCbJxTNF9hsVfm5SgF4LTqG0C4&q=${filterValue}&limit=20&offset=0&rating=g&lang=en
`)
const giphy = await response.json();
giphys = giphy.data;
getGiphyList();
return;
}

window.addEventListener("load", () => {
getGiphy();
renderButton();
})


const getGiphyList = () =>{
    giphyElement.innerHTML ="";
    giphys.map((giphy) => {
    const giphyLi = document.createElement("li");
    const giphyImg = document.createElement("img");
    giphyImg.src = giphy.images.downsized_medium.url;
    giphyLi.appendChild(giphyImg);
    giphyElement.appendChild(giphyLi);
    return;
    })
}














