const pokemons = document.querySelector('.pokeList')
const body = document.querySelector('body')

let name=''
let sprite=''

fetch("https://pokeapi.co/api/v2/pokemon/?limit=1100")
.then(response=>response.json())
.then(responseDeserialise =>{
    responseDeserialise.results.forEach(pokemon=>{

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(responseSerialise=>responseSerialise.json())
            .then(responseDeserialise2=>{
                    name = pokemon.name
                    sprite = responseDeserialise2.sprites.front_default
                    templateCartePokemon(name,sprite)
                })

            })

    })







/*fetch('https://api.pokemontcg.io/v2/cards')
    .then(responseSerialise=>responseSerialise.json())
    .then(responseDeserialise=>{
        responseDeserialise.data.forEach(card=>{
            console.log(card.name)
            name=card.name
            sprite=card.images.large
            templateCartePokemon(name,sprite)
        })
    })*/


function templateCartePokemon(name,img){
    let templateCartePoke=`
            <div class="row">
          <div class="col-sm-10">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <img class="card-text" src="${img}".>
                <button class="btn btn-primary bouton"></button>
              </div>
            </div>
          </div>
          </div>
    `
    pokemons.innerHTML += templateCartePoke
}

function templateCartePokemonComplete(img){
    let templatePokeComplete=`<div class="row">
          <div class="col-sm-8">
            <div class="card">
              <div class="card-body">
                <img class="card-text" height="150px" width="50px" src="${img}".>
    
    `
}