body = document.body;

body.append('hello world');


id1 = document.getElementById("test1");
id1.style.border = "1px solid blue";
id1.style.display = "inline-block";
id1.style.width = "50vw";
id1.style.textAlign = "center";
id1.style.backgroundColor = "yellow";


h4_el = document.createElement("h4");
h4_el.innerText = "List of Birds2";
h4_el.setAttribute("abc", "Awesome");
body.appendChild(h4_el);

ul_el = document.createElement("ul");
body.appendChild(ul_el);

birds = ["Parrot", "Eagle", "Swan", "Cuckoo", "Crane"];
for (ind = 0; ind < birds.length; ind++) {
    li_el = document.createElement("li");
    li_el.innerText = birds[ind];
    ul_el.appendChild(li_el);
};


let emp1 = {
    firstname: 'suraj',
    lastname: 'oliver',
    location: 'blore'
};


mesg = document.getElementById("mesg");
mesg.innerHTML = 'tes 3';

//mesg.value = 'test';


