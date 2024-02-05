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
        CleanDataAPI(dataAPI);
    })
    .catch(error => {
        console.error("Error in getAPI:", error);
    });

function CleanDataAPI(dataAPI) {
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
}


render();


