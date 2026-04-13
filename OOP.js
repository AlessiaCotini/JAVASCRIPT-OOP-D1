console.log("ESERCIZIO UNO");
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  sameAgeOrNot = function (y) {
    if (this.age === y.age) {
      console.log(`${this.firstName} e ${y.firstName} hanno la stessa età!`);
    } else if (this.age > y.age) {
      console.log(`${this.firstName} è più maturo di ${y.firstName}!`);
    } else {
      console.log(`${this.firstName} è più giovane di ${y.firstName}!`);
    }
  };
}

const user1 = new User("Alessandro", "Bolle", "10", "Maldive");
const user2 = new User("Mattia", "Secchi", "12", "Canarie");
const user3 = new User("Filippo", "Carli", "14", "Berlino");

user1.sameAgeOrNot(user2);
user2.sameAgeOrNot(user3);
user3.sameAgeOrNot(user1);

console.log("ESERCIZIO DUE");
const petArray = [];
const results = document.getElementById("results");
const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(otherPet) {
    const list = document.createElement("p");
    if (this.ownerName === otherPet.ownerName) {
      list.textContent = `${this.petName} e ${otherPet.petName} hanno lo stesso padrone!`;
    } else {
      list.textContent = `${this.petName} e ${otherPet.petName} non hanno lo stesso padrone!`;
    }
    results.appendChild(list);
  }
}
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const petName = petNameInput.value;
  const ownerName = ownerNameInput.value;
  const species = speciesInput.value;
  const breed = breedInput.value;
  const newPet = new Pet(petName, ownerName, species, breed);
  console.log("Pet Saved In Our List", newPet);
  petArray.push(newPet);
  results.innerHTML = "";
  for (let i = 0; i < petArray.length - 1; i++) {
    newPet.sameOwner(petArray[i]);
  }
  form.reset();
});
console.log(results);
