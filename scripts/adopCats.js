const data = [
    {
      img: "alet1.jpg",
      alt: "cat-alet",
      name: "Alet",
      info: [
        "3 meses",
        "Hembra",
        "Convive con niños y perros"
      ],
      category: "cat",
      specie: "other",
      size: "S",
      age: 3,
      sex: "F",
      isKidFriendly: "Y",
      isDogFriendly: "Y",
      isCatFriendly: "Y",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0

    },
    {
      img: "dobby1.jpg",
      alt: "cat-dobby",
      name: "Dobby",
      info: [
        "15 meses",
        "Macho",
        "No convive con gatos"
      ],
      category: "cat",
      specie: "other",
      size: "S",
      age: 15,
      sex: "M",
      isKidFriendly: "Y",
      isDogFriendly: "Y",
      isCatFriendly: "N",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0
    },
    {
      img: "jaco.jpg",
      alt: "cat-jaco",
      name: "Jaco",
      info: [
        "2 años",
        "Macho",
        "Convive con otros perros"
      ],
      category: "cat",
      specie: "other",
      size: "S",
      age: 24,
      sex: "M",
      isKidFriendly: "N",
      isDogFriendly: "Y",
      isCatFriendly: "N",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0

    },
    {
      img: "luka.jpg",
      alt: "cat-luka",
      name: "Luka",
      info: [
        "18 meses",
        "Macho",
        "Convive con niños y otras mascotas"
      ],
      category: "cat",
      specie: "other",
      size: "S",
      age: 18,
      sex: "M",
      isKidFriendly: "Y",
      isDogFriendly: "Y",
      isCatFriendly: "Y",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0
    },
    {
      img: "melvin.jpg",
      alt: "cat-melvin",
      name: "Melvin",
      info: [
        "3 años",
        "Macho",
        "No convive con niños ni otras mascotas"
      ],
      category: "cat",
      specie: "other",
      size: "S",
      age: 36,
      sex: "M",
      isKidFriendly: "N",
      isDogFriendly: "N",
      isCatFriendly: "N",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0
    },
    {
      img: "mobo.jpg",
      alt: "cat-mobo",
      name: "Mobo",
      info: [
        "4 años",
        "Macho",
        "Convive con niños y mascotas"
      ],
      category: "cat",
      specie: "other",
      size: "L",
      age: 48,
      sex: "M",
      isKidFriendly: "Y",
      isDogFriendly: "Y",
      isCatFriendly: "L",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0
    },
    {
      img: "moon2.jpg",
      alt: "cat-moon",
      name: "Moon",
      info: [
        "8 meses",
        "Hembra",
        "No convive con niños ni mascotas"
      ],
      category: "cat",
      specie: "other",
      size: "S",
      age: 8,
      sex: "F",
      isKidFriendly: "N",
      isDogFriendly: "N",
      isCatFriendly: "N",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0
    },
    {
      img: "pika1.jpg",
      alt: "cat-pika",
      name: "Pika",
      info: [
        "8 años",
        "Hembra",
        "Adopción especial"
      ],
      category: "cat",
      specie: "other",
      size: "S",
      age: 96,
      sex: "F",
      isKidFriendly: "N",
      isDogFriendly: "N",
      isCatFriendly: "N",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0
    },
    {
      img: "pumba.jpg",
      alt: "cat-pumba",
      name: "Pumba",
      info: [
        "3 meses",
        "Macho",
        "Convive con niños y mascotas"
      ],
      category: "cat",
      specie: "other",
      size: "L",
      age: 3,
      sex: "M",
      isKidFriendly: "Y",
      isDogFriendly: "Y",
      isCatFriendly: "Y",
      sterilized: "Y",
      vaccines: "1",
      payment: "none",
      status: 0
    }
  ];

  /*const form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const input = document.getElementById("filter");

    const dataFiltered = filterPets(data, input.value);
    addPetsToHTML(dataFiltered);
  });

  function filterPets(data, type) {
    return data.filter(function(pet) {
      return pet.type === type;
    });
  }*/
  
  function createElement(type, classNames) {
    const element = document.createElement(type);
  
    if ("undefined" === typeof classNames) {
      return element;
    }
  
    if ("string" === typeof classNames) {
      classNames = [classNames];
    }
  
    classNames.forEach(function(className){
      element.classList.add(className);
    });
  
    return element;
  };
  
  function createPetHTML(pet) {
    const article = createElement("article", "top-pets");
    const div = createElement("div", "top-pets-content");
    const figure = createElement("figure"); 
    const img = createElement("img");
    const h3 = createElement("h3");
    const p = createElement("p");
    const a = createElement("a");
  
    pet.info.forEach(function(e) {
      p.appendChild(document.createTextNode(e))
      p.appendChild(createElement("br"))
    })
    h3.innerText = pet.name;
    img.src = `/images/cats/${pet.img}`;
    img.alt = pet.alt;
  
    a.href = "#";
    a.innerText = "Adopta→";
  
    figure.appendChild(img);
  
    div.appendChild(figure);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(a);
  
    article.appendChild(div);
  
    return article;
  };

  function addPetsToHTML(pets) {
    const section = document.getElementsByClassName("pets-and-info")[0];
    section.innerHTML = "";

    const petsHTML = pets.map(function(pet) {
      return createPetHTML(pet);
    });
    
    petsHTML.forEach(function(pet){
      section.appendChild(pet);
    });
  }

  addPetsToHTML(data);