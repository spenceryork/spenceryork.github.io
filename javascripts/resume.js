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
localStorage.setItem('resume', JSONResume);


