const starShips = [
    {
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
        cost_in_credits: "1000000000000",
        length: "120000",
        max_atmosphering_speed: "n/a",
        crew: "342,953",
        passengers: "843,342",
        cargo_capacity: "1000000000000",
        consumables: "3 years",
        hyperdrive_rating: "4.0",
        MGLT: "10",
        starship_class: "Deep Space Mobile Battlestation",
        pilots: [],
        films: [
            "https://swapi.dev/api/films/1/"
        ],
        created: "2014-12-10T16:36:50.509000Z",
        edited: "2014-12-20T21:26:24.783000Z",
        url: "https://swapi.dev/api/starships/9/"
    }
]

var shipList = document.getElementById("results");

for (var i = 0; i < starShips.length; i++) {
    shipList.innerHTML += "<li>" + starShips[i].name + "</li>" + "<li>" + starShips[i].model + "</li>"
    + "<li>" + starShips[i].manufacturer + "</li>" + "<li>" + starShips[i].cost_in_credits + "</li>"
    + "<li>" + starShips[i].length + "</li>" + "<li>" + starShips[i].max_atmosphering_speed + "</li>"
    + "<li>" + starShips[i].crew + "</li>" + "<li>" + starShips[i].passengers + "</li>" 
    + "<li>" + starShips[i].cargo_capacity + "</li>" + "<li>" + starShips[i].comsumables + "</li>"
    + "<li>" + starShips[i].hyperdrive_rating + "</li>" + "<li>" + starShips[i].MGLT + "</li>"
    + "<li>" + starShips[i].starship_class + "</li>" + "<li>" + starShips[i].pilots + "</li>"
    + "<li>" + starShips[i].films + "</li>" + "<li>" + starShips[i].created + "</li>"
    + "<li>" + starShips[i].edited + "</li>" + "<li>" + starShips[i].url + "</li>";
}
