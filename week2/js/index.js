fetch('./people.json')//file json objects
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
                items.innerHTML = 'Name: ' + data.results[i].name + ' Height: ' + data.results[i].height
                + ' Mass: ' + data.results[i].mass + ' Hair: ' + data.results[i].hair_color
                 + ' Skin: ' + data.results[i].skin_color + ' Eyes: ' + data.results[i].eye_color 
                 + ' DOB: ' + data.results[i].birth_year + ' Gender: ' + data.results[i].gender
                 + ' Home: ' + data.results[i].homeworld + ' Films: ' + data.results[i].films;
                mainContainer.appendChild(items);
            }
        }