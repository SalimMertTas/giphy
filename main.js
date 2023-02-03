let gifDOM = document.querySelector(".gifs");
let giphyElement = document.querySelector(".giphyElement");

let giphys = []

const getGiphy = async () =>{
const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=ozBmXbUmdzGnTMVPCErGa3IG8cVPTqeP&limit=5&rating=g");
const giphy = await response.json();
return giphy.data;

}
window.addEventListener("load", async (event) => {
giphys = await getGiphy();
console.log(giphys)
getGiphyList();
});

const getGiphyList = () =>{
    giphys.map((giphy) =>{
        const liItem = document.createElement("li");
        const img = document.createElement("img");
        img.src = giphy.images.downsized.url; 
        liItem.appendChild(img);
        gifDOM.appendChild(liItem);
        return;
    })
}
