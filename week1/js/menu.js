fetch('./store/menu.json')//file json objects
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.results.length; i++) {
        var items = document.createElement("div");
        items.innerHTML = ' COLD SANDWICHES: ' + " Turkey: " + data.results[i].coldSandwiches.turkey
            +  " Ham: " + data.results[i].coldSandwiches.ham +  " Chicken " + data.results[i].coldSandwiches.chicken + ' HOT SANDWICHES: ' + " BLT " + data.results[i].hotSandwiches.blt
            + " Chicken " + data.results[i].hotSandwiches.chicken + " GrilledCheese: " + data.results[i].hotSandwiches.grilledCheese + " DESERTS: " + data.results[i].deserts.darkSwirl
            + " StrawBerry: " + data.results[i].deserts.strawberry  + " Blueberry: " + data.results[i].deserts.blueberrySwirl + " DRINKS: " + data.results[i].drinks;
        mainContainer.appendChild(items);
    }
}