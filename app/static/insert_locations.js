function getPlaceType(){
  let placeType = document.getElementById("place_type").value.toLowerCase();
  let structuredLocationDiv = document.getElementById("structured_location_div");

  if(placeType === "city"){
    let regionDiv = document.createElement("div");
    regionDiv.id = "region_div";
    regionDiv.innerHTML = '<br><label for = "region">Region:</label><br><input id = "region" placeholder = "Examplo: São Paulo" required>';

    structuredLocationDiv.appendChild(regionDiv);

    let cityDiv = document.createElement("div");
    cityDiv.id = "city_div";
    cityDiv.innerHTML = '<br><label for = "city">City:</label><br><input id = "city" placeholder = "Examplo: São Paulo">';

    structuredLocationDiv.appendChild(cityDiv);

  }else if(placeType === "region"){
    let regionDiv = document.createElement("div");
    regionDiv.id = "region_div";
    regionDiv.innerHTML = '<br><label for = "region">Region:</label><br><input id = "region" placeholder = "Examplo: São Paulo" required>';

    structuredLocationDiv.appendChild(regionDiv);

  }else{
    if(document.getElementById("city_div")){
      document.getElementById("city_div").remove();
    }
    if(document.getElementById("region_div")){
      document.getElementById("region_div").remove();
    }
  }
}

document.getElementById("place_type").addEventListener("input", getPlaceType);
