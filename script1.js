function printCards (Array = []){
    //Array = [1,2,3,4,5]
    console.log(Array);

    
    ArrayCards = ""

    Array.forEach((item ) => {
        // indicarle que en el div va a ir concatenado las
        // tarjetas anteriores con una tarjetas

        let statusColor = item.status === "Alive" ? "success" : "danger"

        //if (item.status === "alive") statusColor = "success"
       // else statusColor = " danger "



        ArrayCards+= `
        <div class="card" style="width: 30rem;">
        <img src=${item.image} class="card-img-top" alt="imagen personaje">
        <div class="card-body">
            <p> ${item.name} - <span class = "text-${statusColor}">  ${item.status} </span> </p>
            <p> ${item.species}</p>
            <p> ${item.location.name}</p>
        </div>
      </div>

    `

    });
        
   document.querySelector("#printer").innerHTML = ArrayCards
        
}

function getCharacters(){
    // devuleve los personages que yo le diga

    // dafinir la url
    const url = " https://rickandmortyapi.com/api/character/3,93,30 "
    // consumer la url con fetch

    fetch(url).then(response => {
        response.json().then( data => {
           //console.log(data);
            printCards(data)
        })
    })
    .catch (error => {
        console.log( error )
    })
    // promesa exitosa o error

    // convertir la inf en un jeison


}


printCards();
getCharacters();