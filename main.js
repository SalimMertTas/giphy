let gifContainer = document.querySelector(".gifs");
let giphyElement = document.querySelector(".giphyElement");
let buttonClick = document.querySelector(".button");
let catButton = document.querySelector(".catButton");
let dogButton = document.querySelector(".dogButton");
let happyButton = document.querySelector(".happyButton")
let angryButton = document.querySelector(".angryButton")
let basketballButton = document.querySelector(".basketballButton")
let avengersButton = document.querySelector(".avengersButton")
let astronoutButtton = document.querySelector(".astronoutButton")
let allButton = document.querySelector(".allButton")

let giphys = [];
let cats = [];
let dogs = [];
let happy = [];
let basketball = [];
let angry = [];
let astronout = [];
let avengers = [];


const getGiphy = async () =>{
const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=VRRf6NtsOiyQ92RoSfYHlnJGheMssyfi&limit=20&rating=g");

const giphy = await response.json();
return giphy.data;
}

window.addEventListener("load", async () => {
giphys = await getGiphy();
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

const getCat = async () =>{
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nR0iGdoCbJxTNF9hsVfm5SgF4LTqG0C4&q=cat&limit=25&offset=0&rating=g&lang=en");
    const cat = await response.json();
    return cat.data;
}

catButton.addEventListener("click", async() =>{
    cats = await getCat();
    getCatList();
})

const getCatList = () =>{
    giphyElement.innerHTML ="";
    cats.map((cat)=>{
    const catsLi = document.createElement("li")
    const catsImg = document.createElement("img")
    catsImg.src = cat.images.downsized_medium.url;
    catsLi.appendChild(catsImg);
    giphyElement.appendChild(catsLi);
    return;
    })
}

const getDog = async () => {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nR0iGdoCbJxTNF9hsVfm5SgF4LTqG0C4&q=dog&limit=25&offset=0&rating=g&lang=en");
    const dog = await response.json();
    return dog.data;
}

dogButton.addEventListener("click", async() =>{
    dogs = await getDog();
    getDogList();
})

const getDogList = () => {
    giphyElement.innerHTML = "";
    dogs.map((dog) =>{
    const dogsLi = document.createElement("li")
    const dogsImg = document.createElement("img")
    dogsImg.src = dog.images.downsized_medium.url;
    dogsLi.appendChild(dogsImg);
    giphyElement.appendChild(dogsLi);
    return;
    })
}

const getHappy = async () =>{
const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nR0iGdoCbJxTNF9hsVfm5SgF4LTqG0C4&q=happy&limit=25&offset=0&rating=g&lang=en")
const happy = await response.json();
return happy.data;
}

happyButton.addEventListener("click", async() =>{
happy = await getHappy();
getHappyList(); 
})

const getHappyList = () =>{
    giphyElement.innerHTML ="";
    happy.map((happy)=>{
    const happyLi = document.createElement("li")
    const happyImg = document.createElement("img")
    happyImg.src = happy.images.downsized_medium.url;
    happyLi.appendChild(happyImg);
    giphyElement.appendChild(happyLi);
    return;
    })
}

const getAngry = async() => {
const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nR0iGdoCbJxTNF9hsVfm5SgF4LTqG0C4&q=angry&limit=25&offset=0&rating=g&lang=en")
const angry = await response.json();
return angry.data;
}

angryButton.addEventListener("click", async()=>{
    angry = await getAngry();
    getAngryList();
})

const getAngryList = () =>{
    giphyElement.innerHTML = "";
    angry.map((angry)=>{
    const angryLi = document.createElement("li");
    const angryImg = document.createElement("img");
    angryImg.src = angry.images.downsized_medium.url;
    angryLi.appendChild(angryImg);
    giphyElement.appendChild(angryLi);
    return;
    })
     
}

const getBasketball = async () => {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nR0iGdoCbJxTNF9hsVfm5SgF4LTqG0C4&q=basketball&limit=25&offset=0&rating=g&lang=en")
    const basketball = await response.json();
    return basketball.data;
}

basketballButton.addEventListener("click" , async() =>{
    basketball = await getBasketball();
    getBasketballList();
})


const getBasketballList = () =>{
    giphyElement.innerHTML = "";
    basketball.map((basketball) => {
    const basketballLi = document.createElement("li")
    const basketballImg = document.createElement("img")
    basketballImg.src = basketball.images.downsized_medium.url;
    basketballLi.appendChild(basketballImg)
    giphyElement.appendChild(basketballLi)
    return;
    })
}

const getAvengers = async () =>{
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nR0iGdoCbJxTNF9hsVfm5SgF4LTqG0C4&q=avengers&limit=25&offset=0&rating=g&lang=en")
    const avengers = await response.json();
    return avengers.data;
}

avengersButton.addEventListener("click" , async()=>{
    avengers = await getAvengers();
    getAvengersList();
})

const getAvengersList = () => {
    giphyElement.innerHTML = "";
    avengers.map((avengers)=>{
        const avengersLi = document.createElement("li");
        const avengersImg = document.createElement("img");
        avengersImg.src = avengers.images.downsized_medium.url;
        avengersLi.appendChild(avengersImg);
        giphyElement.appendChild(avengersLi);
        return;
    })
}

const getAstronout = async() => {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nR0iGdoCbJxTNF9hsVfm5SgF4LTqG0C4&q=astronout&limit=25&offset=0&rating=g&lang=en")
    const astronout = await response.json();
    return astronout.data;
}

astronoutButtton.addEventListener("click", async()=>{
    astronout = await getAstronout();
    getAstronoutList();
})


const getAstronoutList = () =>{
    giphyElement.innerHTML = "";
    astronout.map((astronout)=>{
    const astronoutLi = document.createElement("li")
    const astronoutImg = document.createElement("img")
    astronoutImg.src = astronout.images.downsized_medium.url;
    astronoutLi.appendChild(astronoutImg);
    giphyElement.appendChild(astronoutLi);
    return;
    })
}