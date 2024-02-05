class e{#e;#t;lastName;#s;#r;age;#a;#i;#n;#o;#c;static compteurPresence=0;constructor(e,t,s,r,a,i,n,o){this.#e=e,this.#t=t,this.lastName=s,this.#s=r,this.#r=a,this.age=i,this.#a=n,this.#i=o,this.#o=!1,this.#c=this.#l(),this.#c.addEventListener("click",e=>{this.#h(e.currentTarget)})}#l(){let e=document.createElement("div");e.classList.add("user"),e.dataset.value=this.#o;let t=`
            <img src=${this.#i}>
            <div class="user--info">
                    <h1>${this.#e} ${this.#t} ${this.lastName}</h1>
                    <p>${this.age} years old</p>
                    <p>${this.#s}, ${this.#r}</p>
            </div>
            <a href="mailto:${this.#a}">
                    <span class="mail">\u{2709}\u{FE0F}</span>
            </a>
        `;return console.log(t),e.insertAdjacentHTML("afterbegin",t),e}render(){document.querySelector("main").appendChild(this.#c)}#h(t){this.#o?(t.dataset.present=!1,this.#o=!1,e.compteurPresence--):(t.dataset.present=!0,this.#o=!0,e.compteurPresence++),document.querySelector(".counter").textContent=`${e.compteurPresence}/20 people are here`}}const t=[];(async function(){try{let e=await fetch("https://randomuser.me/api/?results=20"),t=await e.json();return console.log(t),t}catch(e){throw console.error(e),e}})().then(s=>{s.results.forEach(s=>{let r=s.name.title,a=s.name.first,i=s.name.last,n=s.location.city,o=s.location.country,c=new e(r,a,i,n,o,s.dob.age,s.email,s.picture.large);t.push(c)}),t.sort((e,t)=>e.lastName.localeCompare(t.lastName)),t.forEach(e=>{e.render()})}).catch(e=>{console.error("Error in getAPI:",e)}),render();
//# sourceMappingURL=index.253632f2.js.map
