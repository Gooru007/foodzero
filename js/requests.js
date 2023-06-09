"use strict";

async function fetchMenu() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Gooru007/foodzero/main/data/full-menu.json"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchMenu();
