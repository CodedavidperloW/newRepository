const thePlanets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];


for (planet of thePlanets){
    console.log(planet);
    const div = document.createElement("div");
    div.classList.add("planet");
    div.classList.add(planet);
    console.log('div',div)
    let planetSection = document.querySelector(".listPlanets")
    planetSection.appendChild(div)
}


