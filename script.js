const pokemonNameJS = document.querySelector(".pokemonName")
const pokemonNumberJS = document.querySelector(".pokemonNumber")
const pokemonImageJS = document.querySelector(".pokemonImage")

const formJS = document.querySelector('.form');
const inputJS = document.querySelector('.inputSearch');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponse.status === 200){
        const data =  await APIResponse.json();
        return data;
    }  
}

const renderPokemon = async (pokemon) => {
     
    pokemonNameJS.innerHTML = "Loading..."
    pokemonNumberJS.innerHTML = "";

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImageJS.style.display = "block";
        pokemonNameJS.innerHTML = data.name;
        pokemonNumberJS.innerHTML = data.id
        pokemonImageJS.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        inputJS.value = '';
    } else {
        pokemonImageJS.getElementsByClassName.display = 'none';
        pokemonNameJS.innerHTML = 'Not Found :c';
        pokemonNumberJS.innerHTML = '';
    }
}

formJS.addEventListener('submit', (event) =>{
    event.preventDefault();
    renderPokemon(inputJS.value.toLowerCase());
});

buttonPrev.addEventListener('click', (event) =>{
    if (searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

buttonNext.addEventListener('click', (event) =>{
   searchPokemon += 1;
   renderPokemon(searchPokemon);
});


renderPokemon(searchPokemon);                                              