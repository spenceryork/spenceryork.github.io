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
        title: "Personal Website",
        technologies: "JavaScript, JQuery, LocalStorage",
        completed: "January 2016 - November 2017",
        teammates: ["Me"],
        url: "www.website.com"
    },
    {
        title: "Personal Website",
        technologies: "JavaScript, JQuery, LocalStorage",
        completed: "January 2016 - November 2017",
        teammates: ["Me"],
        url: "www.website.com"
    },
];

let JSONProjects = JSON.stringify(projects);
localStorage.setItem('projects', JSONProjects);