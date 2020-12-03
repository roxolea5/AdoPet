const data = [
    {
      img: "bean.jpg",
      alt: "pug-dog-bean",
      name: "Bean",
      info: [
        "Raza pequeña",
        "18 meses",
        "Convive con niños y otros perros."
      ]
    },
    {
      img: "hamta.jpg",
      alt: "hamta-img",
      name: "Hamta",
      info: [
        "Hamster",
        "2 meses"
      ]
    }
  ];
  
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
  
  const section = document.getElementsByClassName("pets-and-info")[0];
  
  const pets = data.map(function(pet) {
    return createPetHTML(pet);
  });
  
  pets.forEach(function(pet){
    section.appendChild(pet);
  });