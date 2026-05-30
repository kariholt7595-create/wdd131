const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = document.lastModified;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
}); 

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10-12",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11-15",
    area: 35546,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii",
    dedicated: "1919, November, 27-30",
    area: 42100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
  },
];

const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples) {
  gallery.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const templeCard = document.createElement("section");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
    `;

    gallery.appendChild(templeCard);
  });
}

displayTemples(temples);

const oldLink = document.querySelector("#Old");
oldLink.addEventListener("click", (event) => {
    event.preventDefault();

    const oldTemples = temples.filter((temple) => {
    return parseInt(temple.dedicated) < 1900;
  });

  displayTemples(oldTemples);
});

const newLink = document.querySelector("#New");
newLink.addEventListener("click", (event) => {
    event.preventDefault();

    const newTemples = temples.filter((temple) => {
      return parseInt(temple.dedicated) > 2000;
});

    displayTemples(newTemples);
});

const largeLink = document.querySelector("#Large");
largeLink.addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter(
    (temple) => temple.area > 90000
);

    displayTemples(largeTemples);
});

const smallLink = document.querySelector("#Small");
smallLink.addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter(
    (temple) => temple.area < 10000
);

    displayTemples(smallTemples);
});

const homeLink = document.querySelector("#Home");
homeLink.addEventListener("click", (event) => {
    event.preventDefault();

    displayTemples(temples);
});