window.addEventListener("DOMContentLoaded", init);

function init(event) {
  const header = document.querySelector("header");
  loadUsers();
}

async function loadUsers() {
  //Mockup users generated at mockaroo.com
  //Random images from source.unsplash.com
  const response = await fetch("users.json");
  console.log("response2", response);
  const users = await response.json();

  displayUsers(users);
}

function displayUsers(userJSON) {
  const userTemplate = document.querySelector("template").content;

  userJSON.forEach((user) => {
    const templateClone = userTemplate.cloneNode(true);

    templateClone.querySelector(".card_image").src = user.image;

    templateClone.querySelector(
      ".card_name"
    ).textContent = `${user.first_name} ${user.last_name}`;

    // select the element with the class "card_slogan"
    const cardSlogan = templateClone.querySelector(".card_slogan");

    // get the text content and capitalize the first letter
    const textContent =
      user.slogan.charAt(0).toUpperCase() + user.slogan.slice(1);

    // set the new text content with the capitalized first letter
    cardSlogan.textContent = textContent;

    templateClone.querySelector(
      ".card_mail"
    ).innerHTML = `<a href="mailto:${user.email}" target="_blank">${user.email}</a>`;

    templateClone.querySelector(".card_title").innerHTML = `${user.title}`;

    document.querySelector("#card_container").appendChild(templateClone);
  });
}

// select the element with the class "card_slogan"
const cardSlogan = document.querySelector(".card_slogan");

// convert the text to uppercase
cardSlogan.textContent = cardSlogan.textContent.toUpperCase();