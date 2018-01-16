"use strict";

// const $ = require('jquery');
let contact = 
    {
        email: "spencerwyork@gmail.com",
        github: "github.com/spenceryork",
        instagram: "_spenceryork",
        linkedin: "www.linkedin.com/in/spencer-york-66857b44/"
    };
    


let JSONContact = JSON.stringify(contact);
localStorage.setItem('contact', JSONContact);

// Extract the blog article data
let extractedContact = JSON.parse(localStorage.getItem('contact'));

// Transform each blog article into an <article> element string.
// Load that string into the DOM
$("#contactInfo").html(
    `<article><p><strong>Email:</strong>${extractedContact.email}</p><article>
    <article><p><strong>Github:</strong>${extractedContact.github}</p><article>
    <article><p><strong>Instagram:</strong>${extractedContact.instagram}</p><article>
    <article><p><strong>LinkedIn:</strong>${extractedContact.linkedin}</p><article>`
);
