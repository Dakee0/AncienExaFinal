export default class User {
    #title;
    #firstName;
    lastName;
    #city;
    #country;
    age;
    #email;
    #photo;
    #element;
    #isPresent
    #userElement;
    static compteurPresence = 0;

    constructor(title, firstName, lastName, city, country, age, email, photo) {
        this.#title = title;
        this.#firstName = firstName;
        this.lastName = lastName;
        this.#city = city;
        this.#country = country;
        this.age = age;
        this.#email = email;
        this.#photo = photo;
        this.#isPresent = false;
        this.#userElement = this.#generateElement();
        this.#userElement.addEventListener("click", (e) =>{
            this.#togglePresence(e.currentTarget);
        })
    }

    #generateElement() {
        //div
        const containerMain = document.createElement("div");
        containerMain.classList.add("user");
        containerMain.dataset.value = this.#isPresent;

        //Contenu du div
        const childHTML = `
            <img src=${this.#photo}>
            <div class="user--info">
                    <h1>${this.#title} ${this.#firstName} ${this.lastName}</h1>
                    <p>${this.age} years old</p>
                    <p>${this.#city}, ${this.#country}</p>
            </div>
            <a href="mailto:${this.#email}">
                    <span class="mail">✉️</span>
            </a>
        `
        console.log(childHTML);
        containerMain.insertAdjacentHTML("afterbegin", childHTML);

        return containerMain;
    }

    render() {
        document.querySelector("main").appendChild(this.#userElement);
        //return this.#generateElement();
    }

    #togglePresence(containerMain){
        if(this.#isPresent){
            containerMain.dataset.present = false;
            this.#isPresent = false;
            User.compteurPresence--;
        }else{
            containerMain.dataset.present = true;
            this.#isPresent = true;
            User.compteurPresence++;
        }
        document.querySelector(".counter").textContent = `${User.compteurPresence}/20 people are here`;
    }

}