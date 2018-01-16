"use strict";

let projects = [
    {
        title: "Personal Website",
        technologies: "JavaScript, JQuery, LocalStorage",
        completed: "January 2016 - November 2017",
        teammates: ["Me"],
        url: "www.website.com"
    },
    {
        title: "Front End Capstone",
        technologies: "JavaScript, JQuery, LocalStorage",
        completed: "January 2016 - November 2017",
        teammates: ["Me"],
        url: "www.website.com"
    },
    {
        title: "Back End Capstone",
        technologies: "JavaScript, JQuery, LocalStorage",
        completed: "January 2016 - November 2017",
        teammates: ["Me"],
        url: "www.website.com"
    },
];

let JSONProjects = JSON.stringify(projects);
localStorage.setItem('projects', JSONProjects);


// Extract the blog article data
let extractedProjects = JSON.parse(localStorage.getItem('projects'));
console.log("extractedProjects", extractedProjects);

extractedProjects.forEach( (project) => {
    $("#projects").append(
        `<article class="project">
        <h4>${project.title}</h4>
        <p>${project.technologies}</p>
        <p>${project.completed}</p>
        <p>${project.teamates}</p>
        <p>${project.url}</p>
        </article>`);
});