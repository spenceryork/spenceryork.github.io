"use strict";

let contact = 
    {
        "email": "spencerwyork@gmail.com",
        "github": "github.com/spenceryork",
        "instagram": "_spenceryork",
        "linkedin": "www.linkedin.com/in/spencer-york-66857b44/"
    };
    


let JSONContact = JSON.stringify(contact);
console.log("JSONContact", JSONContact);

localStorage.setItem('contact', JSONContact);