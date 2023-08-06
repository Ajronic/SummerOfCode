let dogs = [];
let globalID = 1;

function displayDogs() {
  document.getElementById("dog-list").innerHTML = '';
  dogs.forEach((dog) => {
    let dogNode = document.createElement("div");
    dogNode.innerText = "{" + dog.id + "} " + dogname + '\n' + breed + sex + year;
    document.getElementById("dog-list").appendChild(dogNode);
  })
}

function addDog() {
  let dogname = document.getElementById("dogname").value;
  let breed = document.getElementById("breed").value;
  let sex = document.getElementById("sex").value;
  let year = document.getElementById("year").value;
  dogs.push({id: globalID, dogname, breed, sex, year});
  globalID++;
  displayDogs();
}

function deleteDog() {
  let id = document.getElementById("id").value;
  let idx = dogs.findIndex((dog) => dog.id == id);
  if (idx != -1) dogs.splice(idx, 1);
  displayDogs();
}