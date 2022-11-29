const pokemons = document.querySelector('.pokeList')


fetch("https://pokeapi.co/api/v2/pokemon/?limit=900")
.then(response=>response.json())
.then(responseDeserialise =>{
    responseDeserialise.results.forEach(pokemon=>{
        name = pokemon.name
        templateCartePokemon(name)
    })
})


function templateCartePokemon(name){
    let templateCartePoke=`
            <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          </div>
    `
    pokemons.innerHTML += templateCartePoke
}