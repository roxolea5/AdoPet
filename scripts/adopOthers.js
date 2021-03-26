const data = [
    {
      img: "bugs.jpg",
      alt: "other-bugs",
      name: "Bugs",
      info: [
        "3 meses",
        "Macho",
        "Convive con niños y perros"
      ],
      category: "other",
      specie: "rabbit",
      size: "S",
      age: 3,
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
      img: "hamta.jpg",
      alt: "other-hamta",
      name: "Hamta",
      info: [
        "15 meses",
        "Macho",
        "No convive con gatos"
      ],
      category: "other",
      specie: "hamster",
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
      img: "jiago.jpg",
      alt: "other-jiago",
      name: "Jiago",
      info: [
        "Macho",
        "Convive con otros perros"
      ],
      category: "other",
      specie: "bird",
      size: "S",
      age: 2,
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
      img: "lola.jpg",
      alt: "other-lola",
      name: "Lola",
      info: [
        "18 meses",
        "Hembra",
        "Convive con niños y otras mascotas"
      ],
      category: "other",
      specie: "rabbit",
      size: "S",
      age: 18,
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
      img: "sonic.jpg",
      alt: "other-sonic",
      name: "Sonic",
      info: [
        "Macho",
        "No convive con niños ni otras mascotas"
      ],
      category: "other",
      specie: "hedgehog",
      size: "S",
      age: 6,
      sex: "M",
      isKidFriendly: "N",
      isDogFriendly: "N",
      isCatFriendly: "N",
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
    img.src = `/images/others/${pet.img}`;
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