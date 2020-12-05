const data = [
    {
      img: "bean.jpg",
      alt: "pug-dog-bean",
      name: "Bean",
      info: [
        "Raza pequeña",
        "18 meses",
        "Convive con niños y otros perros."
      ],
      type: "perro",
      size: "S"
    },
    {
      img: "hamta.jpg",
      alt: "hamta-img",
      name: "Hamta",
      info: [
        "Hamster",
        "2 meses"
      ],
      type: "hamster",
      size: "S"
    },
    {
      img: "sonic.jpg",
      alt: "Sonic like the game!",
      name: "Sonic",
      info : [
        "1 año",
        "Adopción especial"
      ],
      type: "puerco espín",
      size: "S"
    },
    {
      img: "xico.jpg",
      alt: "Xico is a dog",
      name: "Xico",
      info: [
        "Raza grande",
        "Cariñoso con los gatos"
      ],
      type: "perro",
      size: "L"
    }
  ];

  const form = document.getElementById("form");
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
  }
  
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
    img.src = `/images/top-pets/${pet.img}`;
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