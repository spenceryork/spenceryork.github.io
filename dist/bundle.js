(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("is this working");
const resume = require('./resume');

// let blogs = [
//     {
//         "title": "My Blog 1",
//         "date": "November 30th, 2017",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim felis, dignissim vitae nisl in, placerat blandit elit. Mauris et sapien venenatis, dapibus dui eget, egestas ante. Nam quis diam nibh. Integer nibh urna, convallis quis hendrerit vel, semper ut metus. Vestibulum auctor laoreet venenatis. Fusce pretium pharetra ipsum quis placerat. Phasellus interdum fermentum eros ac tristique. Suspendisse potenti. Nunc ut volutpat diam. Cras eleifend est lorem, vitae tincidunt magna luctus placerat. Aliquam ac ex pulvinar, vestibulum dui porta, pellentesque dolor. Aenean aliquet enim vel blandit dictum. Donec egestas egestas velit, in iaculis neque viverra nec."
//     },
//     {
//         "title": "My Blog 2",
//         "date": "December 5th, 2017",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim felis, dignissim vitae nisl in, placerat blandit elit. Mauris et sapien venenatis, dapibus dui eget, egestas ante. Nam quis diam nibh. Integer nibh urna, convallis quis hendrerit vel, semper ut metus. Vestibulum auctor laoreet venenatis. Fusce pretium pharetra ipsum quis placerat. Phasellus interdum fermentum eros ac tristique. Suspendisse potenti. Nunc ut volutpat diam. Cras eleifend est lorem, vitae tincidunt magna luctus placerat. Aliquam ac ex pulvinar, vestibulum dui porta, pellentesque dolor. Aenean aliquet enim vel blandit dictum. Donec egestas egestas velit, in iaculis neque viverra nec."
//     },
//     {
//         "title": "My Blog 3",
//         "date": "December 21st, 2017",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, nisl eget interdum venenatis, nulla elit consectetur diam, in pretium tellus elit at est. Praesent dignissim tincidunt nibh. Morbi ac dignissim ex, ac vehicula ante. Nam luctus vulputate aliquam. In eget elementum tortor, nec ultricies velit. Pellentesque vitae massa eget sem scelerisque venenatis. Fusce lobortis quam risus, a tristique elit molestie sed. Curabitur dignissim velit laoreet diam dignissim sollicitudin. Nullam sit amet sem sit amet nisl aliquet blandit."
//     },
//     {
//         "title": "My Blog 4",
//         "date": "January 28th, 2018",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et tellus massa. Etiam semper fermentum elit, at pretium nulla lobortis in. Proin tincidunt justo in vestibulum ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac tellus libero. Mauris sed lacus fermentum, vehicula velit a, tristique orci. Nulla rhoncus lacus vel enim tempus condimentum. Vivamus tellus lectus, dictum et convallis at, bibendum ut nulla. Donec in sapien ut dui interdum dictum. Nulla vel fermentum enim, nec maximus odio. Pellentesque nec risus orci. Quisque pulvinar sapien risus, eu gravida sapien mollis sed. Phasellus luctus, lacus dapibus convallis congue, sem ligula malesuada augue, eu bibendum ex erat non velit. In eros arcu, ornare ut diam in, ullamcorper porttitor leo. Etiam efficitur nisl id dui molestie, at lobortis dui finibus."
//     },
//     {
//         "title": "My Blog 5",
//         "date": "January 28th, 2018",
//         "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare mauris ex. Nam viverra urna nisi, a iaculis leo interdum vitae. Nulla euismod, neque vitae dignissim vehicula, magna nisl laoreet tortor, vitae fringilla mi leo sed diam. Cras molestie est quis sem facilisis, sit amet varius ex elementum. Sed eget elit magna. Proin porttitor, nulla ut bibendum mollis, elit augue eleifend dui, et molestie tellus quam at elit. Suspendisse cursus felis a diam dictum, quis vulputate orci eleifend. Vestibulum maximus ligula non porttitor tincidunt. Fusce vulputate arcu sit amet lobortis laoreet. Donec iaculis urna ipsum, a sollicitudin eros varius at. Donec non consequat arcu, eu iaculis diam. Donec sed diam elit. Vestibulum laoreet finibus condimentum. Vivamus finibus accumsan augue, sed tempus lorem eleifend vel. Aenean tempus convallis magna, vel varius mauris consequat sed."   
//     }
// ];

// blogs.forEach( (blog) => {
//     let blogHolder = document.createElement("article");
//     blogHolder.setAttribute("class", "b-article");
//     let blogString = `
//     <h4>${blog.title}</h4>
//     <p>${blog.date}</p>
//     <p>${blog.content}</p>`;
//     blogHolder.innerHTML = blogString;
//     document.getElementById("blog-holder").appendChild(blogHolder);
// });
},{"./resume":2}],2:[function(require,module,exports){
"use strict";

let resume = [
    {
        title: "Product Manager",
        company: "Bernard Health",
        dates: "January 2016 - November 2017",
        responsibilities: {
            responsibility: ["Lead product development team with members in Nashville, Maine and Jaipur, India", "Work with CEO and lead software developer to prioritize projects.", "Conduct weekly meetings with team members to determine and clarify work priorities.", "Conduct weekly meetings with team members to determine and clarify work priorities.", "Oversee UI and UX design.", "Conduct weekly meetings with team members to determine and clarify work priorities.", "Develop and lead communication of product enhancements to colleagues in marketing, sales, customer services, and the Bernard Health team.", "Conduct weekly meetings with team members to determine and clarify work priorities.", "Manage projects through online platforms such as Github and Waffle.", "Collaborated with marketing and other departments to launch new features for clients and end users.", "Created strong working relationships with developers to ensure clarity throughout the coding process.", "Effectively managed the quality assurance testing of new features to meet product milestones."]
        } 
    },
    {
        title: "Client Success Representative",
        company: "Bernard Health",
        dates: "August 2014 - January 2016",
        responsibilities: ["Setup online benefit enrollment platforms for clients.", "Troubleshoot software problems and outline resolutions.", "Acted as a liaison between brokers and BerniePortal.", "Trained individuals on BerniePortal’s features and capabilities.",
        ]
    },
    {
        title: "Academic Advisor",
        company: "Bethel University",
        dates: "October 2013 - August 2014",
        responsibilities: ["Serve as liaison and advocate for a portfolio of 140+ students and faculty.", "Coordinate and monitor student’s registration activities and academic progress.", "Provide advice and recommend solutions to students on academic probation or have academic difficulties.", "Monitor students’ financial accounts including financial aid status.", "Provide expertise and leadership to other positions within the student services department.",
        ]
    },
];

let JSONResume = JSON.stringify(resume);
console.log("JSONResume", JSONResume);

localStorage.setItem('resume', JSONResume);



},{}]},{},[1]);
