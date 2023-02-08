let gifContainer = document.querySelector(".gifs");
let giphyElement = document.querySelector(".giphyElement");
let buttonClick = document.querySelector(".button")

let giphys = [];


const getGiphy = async () =>{
const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=VRRf6NtsOiyQ92RoSfYHlnJGheMssyfi&limit=20&rating=g");

const giphy = await response.json();
return giphy.data;
}

window.addEventListener("load", async () => {
giphys = await getGiphy();
console.log(giphys)
getGiphyList();
})


const getGiphyList = () =>{
    giphys.map((giphy) => {
    const giphyLi = document.createElement("li");
    const giphyImg = document.createElement("img");
    giphyImg.src = giphy.images.downsized_medium.url;
    giphyLi.appendChild(giphyImg);
    giphyElement.appendChild(giphyLi);
    return;
    })
}


