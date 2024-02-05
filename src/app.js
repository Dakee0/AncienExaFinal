import User from './modules/user';

"use strict";

const tableauUser = [];
async function getAPI() {
    try {
        const fetchedAPI = await fetch(`https://randomuser.me/api/?results=20`);
        const dataAPI = await fetchedAPI.json();
        console.log(dataAPI);
        return dataAPI;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

getAPI()
    .then(dataAPI => {
        cleanDataAPI(dataAPI);
    })
    .catch(error => {
        console.error("Error in getAPI:", error);
    });

function cleanDataAPI(dataAPI) {
    dataAPI.results.forEach(result => {
        const title = result.name.title;
        const firstName = result.name.first;
        const lastName = result.name.last;
        const city = result.location.city;
        const country = result.location.country;
        const age = result.dob.age;
        const email = result.email;
        const photo = result.picture.large;

        const newUser = new User(title, firstName, lastName, city, country, age, email, photo);
        tableauUser.push(newUser);
    });

    // trie de A-Z
    tableauUser.sort((a, b) => {
        return a.lastName.localeCompare(b.lastName);
    });

    tableauUser.forEach((element) => {
        element.render();
    });

    const buttonsortbyname = document.querySelector('#sort--name');
    const buttonsortbyage = document.querySelector('#sort--age');

    buttonsortbyname.addEventListener("click", (e) => {
        if (!e.target.classList.contains("selected")) {
            e.target.classList.add("selected");
            buttonsortbyage.classList.remove("selected");

            tableauUser.sort((a, b) => {
                return a.lastName.localeCompare(b.lastName);
            });

            tableauUser.forEach((user) => {
                user.render();
            });

        } else {
            console.log("Le bouton est déjà selected");
        }
    });

    buttonsortbyage.addEventListener("click", (e) => {
        if (!e.target.classList.contains("selected")) {
            e.target.classList.add("selected");
            buttonsortbyname.classList.remove("selected");

            tableauUser.sort((a, b) => {
                return a.age - b.age;
            });

            tableauUser.forEach((user) => {
                user.render();
            });
        } else {
            console.log("Le bouton est déjà selected");
        }
    });

}

/*
function sort(){
    console.log("sort est bien appelé");
    document.querySelector(".filters").addEventListener("click", (event) => {
        if (!event.target.classList.contains("selected")) {
          if (event.target.id === "sort--name") {
            document.querySelector(".selected").classList.remove("selected");
            event.target.classList.add("selected");
            tableauUser.sort((a, b) => {
              return a.lastName.localeCompare(b.lastName);
            });
            document.querySelector("main").innerHTML = "";
            tableauUser.forEach((element) => {
              element.render();
            });
          } else if (event.target.id === "sort--age") {
            document.querySelector(".selected").classList.remove("selected");
            event.target.classList.add("selected");
            tableauUser.sort((a, b) => {
              return a.age - b.age;
            });
            document.querySelector("main").innerHTML = "";
            tableauUser.forEach((element) => {
              element.render();
            });
          }
        }
      });
}
*/



