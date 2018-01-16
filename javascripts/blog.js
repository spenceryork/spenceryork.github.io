"use strict";

let blog = [
    {
        title: "My Blog 1",
        date: "November 30th, 2017",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim felis, dignissim vitae nisl in, placerat blandit elit. Mauris et sapien venenatis, dapibus dui eget, egestas ante. Nam quis diam nibh. Integer nibh urna, convallis quis hendrerit vel, semper ut metus. Vestibulum auctor laoreet venenatis. Fusce pretium pharetra ipsum quis placerat. Phasellus interdum fermentum eros ac tristique. Suspendisse potenti. Nunc ut volutpat diam. Cras eleifend est lorem, vitae tincidunt magna luctus placerat. Aliquam ac ex pulvinar, vestibulum dui porta, pellentesque dolor. Aenean aliquet enim vel blandit dictum. Donec egestas egestas velit, in iaculis neque viverra nec."
    },
    {
        title: "My Blog 2",
        date: "December 5th, 2017",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim felis, dignissim vitae nisl in, placerat blandit elit. Mauris et sapien venenatis, dapibus dui eget, egestas ante. Nam quis diam nibh. Integer nibh urna, convallis quis hendrerit vel, semper ut metus. Vestibulum auctor laoreet venenatis. Fusce pretium pharetra ipsum quis placerat. Phasellus interdum fermentum eros ac tristique. Suspendisse potenti. Nunc ut volutpat diam. Cras eleifend est lorem, vitae tincidunt magna luctus placerat. Aliquam ac ex pulvinar, vestibulum dui porta, pellentesque dolor. Aenean aliquet enim vel blandit dictum. Donec egestas egestas velit, in iaculis neque viverra nec."
    },
    {
        title: "My Blog 3",
        date: "December 21st, 2017",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, nisl eget interdum venenatis, nulla elit consectetur diam, in pretium tellus elit at est. Praesent dignissim tincidunt nibh. Morbi ac dignissim ex, ac vehicula ante. Nam luctus vulputate aliquam. In eget elementum tortor, nec ultricies velit. Pellentesque vitae massa eget sem scelerisque venenatis. Fusce lobortis quam risus, a tristique elit molestie sed. Curabitur dignissim velit laoreet diam dignissim sollicitudin. Nullam sit amet sem sit amet nisl aliquet blandit."
    },
    {
        title: "My Blog 4",
        date: "January 28th, 2018",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et tellus massa. Etiam semper fermentum elit, at pretium nulla lobortis in. Proin tincidunt justo in vestibulum ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac tellus libero. Mauris sed lacus fermentum, vehicula velit a, tristique orci. Nulla rhoncus lacus vel enim tempus condimentum. Vivamus tellus lectus, dictum et convallis at, bibendum ut nulla. Donec in sapien ut dui interdum dictum. Nulla vel fermentum enim, nec maximus odio. Pellentesque nec risus orci. Quisque pulvinar sapien risus, eu gravida sapien mollis sed. Phasellus luctus, lacus dapibus convallis congue, sem ligula malesuada augue, eu bibendum ex erat non velit. In eros arcu, ornare ut diam in, ullamcorper porttitor leo. Etiam efficitur nisl id dui molestie, at lobortis dui finibus."
    },
    {
        title: "My Blog 5",
        date: "January 28th, 2018",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare mauris ex. Nam viverra urna nisi, a iaculis leo interdum vitae. Nulla euismod, neque vitae dignissim vehicula, magna nisl laoreet tortor, vitae fringilla mi leo sed diam. Cras molestie est quis sem facilisis, sit amet varius ex elementum. Sed eget elit magna. Proin porttitor, nulla ut bibendum mollis, elit augue eleifend dui, et molestie tellus quam at elit. Suspendisse cursus felis a diam dictum, quis vulputate orci eleifend. Vestibulum maximus ligula non porttitor tincidunt. Fusce vulputate arcu sit amet lobortis laoreet. Donec iaculis urna ipsum, a sollicitudin eros varius at. Donec non consequat arcu, eu iaculis diam. Donec sed diam elit. Vestibulum laoreet finibus condimentum. Vivamus finibus accumsan augue, sed tempus lorem eleifend vel. Aenean tempus convallis magna, vel varius mauris consequat sed."   
    },
    {
        title: "My Blog 6",
        date: "February 28th, 2018",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare mauris ex. Nam viverra urna nisi, a iaculis leo interdum vitae. Nulla euismod, neque vitae dignissim vehicula, magna nisl laoreet tortor, vitae fringilla mi leo sed diam. Cras molestie est quis sem facilisis, sit amet varius ex elementum. Sed eget elit magna. Proin porttitor, nulla ut bibendum mollis, elit augue eleifend dui, et molestie tellus quam at elit. Suspendisse cursus felis a diam dictum, quis vulputate orci eleifend. Vestibulum maximus ligula non porttitor tincidunt. Fusce vulputate arcu sit amet lobortis laoreet. Donec iaculis urna ipsum, a sollicitudin eros varius at. Donec non consequat arcu, eu iaculis diam. Donec sed diam elit. Vestibulum laoreet finibus condimentum. Vivamus finibus accumsan augue, sed tempus lorem eleifend vel. Aenean tempus convallis magna, vel varius mauris consequat sed."   
    },
    {
        title: "My Blog 7",
        date: "March 8th, 2018",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare mauris ex. Nam viverra urna nisi, a iaculis leo interdum vitae. Nulla euismod, neque vitae dignissim vehicula, magna nisl laoreet tortor, vitae fringilla mi leo sed diam. Cras molestie est quis sem facilisis, sit amet varius ex elementum. Sed eget elit magna. Proin porttitor, nulla ut bibendum mollis, elit augue eleifend dui, et molestie tellus quam at elit. Suspendisse cursus felis a diam dictum, quis vulputate orci eleifend. Vestibulum maximus ligula non porttitor tincidunt. Fusce vulputate arcu sit amet lobortis laoreet. Donec iaculis urna ipsum, a sollicitudin eros varius at. Donec non consequat arcu, eu iaculis diam. Donec sed diam elit. Vestibulum laoreet finibus condimentum. Vivamus finibus accumsan augue, sed tempus lorem eleifend vel. Aenean tempus convallis magna, vel varius mauris consequat sed."   
    },

    
];

// Store the info in local storage
let JSONBlog = JSON.stringify(blog);
localStorage.setItem('blog', JSONBlog);

// Extract the blog article data
let extractedBlog = JSON.parse(localStorage.getItem('blog'));
// console.log("extractedBlog", extractedBlog);

// Transform each blog article into an <article> element string.
// Load that string into the DOM

extractedBlog.forEach( (blog) => {
    $("#blog-holder").append( `
    <article class="b-article">
    <h4>${blog.title}</h4>
    <p>${blog.date}</p>
    <p>${blog.content}</p>
    </article>`);
});


// FOLLOWED ALONG WITH A YOUTUBE VIDEO JQUERY ON PAGINATION "jQuery Tutorial - Pagination" URL: https://www.youtube.com/watch?v=Xznn-ggD0GU
// Pagination

// Dynamically figring out how many blogs I have
let numberOfBlogs = $("#blog-holder .b-article").length;

// Setting my page limit
let limitPerPage = 5;

//Hiding any number of blogs that are above the limit per page
$("#blog-holder .b-article:gt(" + (limitPerPage - 1) + ")").hide();

// Setting the total number of pages based on the number of blogs I have
let totalPages = Math.ceil(numberOfBlogs / limitPerPage);

// Appending the first button that will always appear
$('.pagination').append("<li class='page-item currentPage active'><a class='page-link' href='#'>" + 1 + "</a></li>");

//Looping over the number of total pages to determine how many page buttons there needs to be
for (let i = 2; i <= totalPages; i++ ) {
    $('.pagination').append("<li class='page-item currentPage'><a class='page-link' href='#'>" + i + "</a></li>");
}


// This function controls the "active" class for each button clicked and the blogs that need to appear on each page.
$('.pagination li.currentPage').on('click', function() {
    if ($(this).hasClass("active")) {
        return false;
    } else {
        console.log("this when clicked", event.target);
        let currentPageClicked = $(this).index() + 1;
        console.log("currentPageClicked", currentPageClicked);
        console.log("currentPageClicked", this);

        $('.pagination li').removeClass("active");
        $(this).addClass("active");
        $("#blog-holder .b-article").hide();

        let overallTotal = limitPerPage * currentPageClicked;
        for (let i = overallTotal - limitPerPage; i < overallTotal; i++) {
            $("#blog-holder .b-article:eq(" + i + ")").show();
        }
    }
});

