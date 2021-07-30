function updateMap() {
    fetch("/vaccinedata.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                dose = element.peopleVaccinated;
                totalpopulation = element.population;
                pert = dose / totalpopulation * 100;
                if(pert < 10)
                    color = "black"
                else if(pert < 30) 
                    color = "red"    
                else if(pert < 50) 
                    color = "green";
                else if(pert < 70)
                    color = "blue"
                else
                    color = "skyblue"
                                
                // Mark on the map
                new mapboxgl.Marker({
                    color: color,
                    draggable: false
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
            });
        })
}

let interval = 20000;
setInterval(updateMap, interval); 