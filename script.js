const petsData = [
  {
    petName: "Stella",
    age: 7,
    weightInKilos: 24,
    breed: "Dalmation",
    pic: "stella.png"
  },
  {
    petName: "Cody",
    age: 8,
    weightInKilos: 22,
    breed: "Corgi",
    pic: "cody.png"
  },
  {
    petName: "Mango",
    age: 2,
    weightInKilos: 11,
    breed: "Persian",
    pic: "mango.png"
  },
  {
    petName: "Lucy",
    age: 4,
    weightInKilos: 35,
    breed: "Ball Python",
    pic: "lucy.png"
  },
  {
    petName: "Buhmie",
    age: 1,
    weightInKilos: 28,
    breed: "Bull-dog",
    pic: "buhmie.png"
    
  },
    {
    petName: "Carmie",
    age: 1,
    weightInKilos: 30,
    breed: "Dawg",
    pic: "carmie.png"
  },
    {
    petName: "Copper",
    age: 6,
    weightInKilos: 25,
    breed: "Lizard",
    pic: "copper.png"
  }
];

const showInfo = () => {
  let petNumber = document.querySelector("#petNum").value;
  petNumber = parseInt(petNumber) - 1;

  let selectedPetInfo = document.querySelector(".selectedPetInfo");
  let petPic = document.querySelector(".selectedPetPic");

  if (isNaN(petNumber) || petNumber < 0 || petNumber >= petsData.length) {
    alert("Please enter a valid pet number (1–5).");
    console.log("Invalid pet number entered:", petNumber + 1);
    selectedPetInfo.textContent = "";
    petPic.src = "";
    return;
  }

  let pet = petsData[petNumber];

  selectedPetInfo.textContent = `${pet.petName} is a ${pet.breed} and is ${pet.age} years old.`;
  petPic.src = pet.pic;
    
  alert(`You selected ${pet.petName}!`);
  console.log(`Pet Selected: ${pet.petName}, Breed: ${pet.breed}, Age: ${pet.age}, Image: ${pet.pic}`);
};

// welcome message
let petsInfo = document.querySelector(".petsInfo");
petsInfo.textContent = `Welcome to our newest pet, ${petsData[petsData.length - 1].petName} the ${petsData[petsData.length - 1].breed}`;

// displaying pet list
let petsList = document.querySelector(".petsList");
let allPetsList = `<ol>`;
petsData.forEach((pet) => {
  allPetsList += `<li>${pet.petName} the ${pet.breed}</li>`;
});
allPetsList += `</ol>`;
petsList.innerHTML = allPetsList;
