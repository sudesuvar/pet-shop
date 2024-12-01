document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.getElementById('blogForm');
    const blogTitleInput = document.getElementById('blogTitle');
    const blogDateInput = document.getElementById('blogDate');
    const blogParagraphInput = document.getElementById('blogParagraph');
    const blogImageInput = document.getElementById('blogImage');
    const blogContainer = document.getElementById('blogContainer');
    let blogCount = 0; // Track the number of blogs added

    // Load existing blogs from localStorage on page load
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    savedBlogs.forEach(blog => {
        addBlogToDOM(blog);
    });
    blogCount = savedBlogs.length;

    // Handle form submission
    blogForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Check if we already have 2 blogs
        if (blogCount >= 2) {
            alert("You can only add a maximum of 2 blogs.");
            return;
        }

        // Get the input values
        const title = blogTitleInput.value;
        const date = blogDateInput.value;
        const paragraph = blogParagraphInput.value;
        const image = blogImageInput.files[0];

        // Validate that image is selected
        if (!image) {
            alert("Please select an image for the blog.");
            return;
        }

        // Convert image to Base64
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageBase64 = event.target.result;

            // Create an object to hold the blog details
            const blogData = {
                title,
                date,
                paragraph,
                image: imageBase64 // Store Base64 image data
            };

            // Save blog to localStorage
            const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
            blogs.push(blogData);
            localStorage.setItem('blogs', JSON.stringify(blogs));

            // Add blog to DOM
            addBlogToDOM(blogData);

            // Increment the blog count
            blogCount++;

            // Reset the form fields
            blogForm.reset();
        };
        reader.readAsDataURL(image);
    });

    // Function to add a blog to the DOM
    function addBlogToDOM(blogData) {
        const { title, date, paragraph, image } = blogData;

        const blogDiv = document.createElement('div');
        blogDiv.classList.add('uk-card', 'uk-card-default', 'uk-margin-small');

        const blogHeader = document.createElement('div');
        blogHeader.classList.add('uk-card-header');
        blogHeader.innerText = title;

        const blogBody = document.createElement('div');
        blogBody.classList.add('uk-card-body');

        const blogDate = document.createElement('p');
        blogDate.classList.add('uk-text-muted');
        blogDate.innerText = `Date: ${date}`;

        const blogParagraph = document.createElement('p');
        blogParagraph.innerText = paragraph;

        // Image
        const img = document.createElement('img');
        img.classList.add('uk-width-1-1');
        img.src = image;
        img.alt = title;

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('uk-button', 'uk-button-danger', 'uk-width-1-1', 'uk-margin-top');
        deleteButton.innerText = 'Delete Blog';
        deleteButton.addEventListener('click', function () {
            blogContainer.removeChild(blogDiv);
            blogCount--; // Decrease blog count when removed

            // Remove blog from localStorage
            const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
            const updatedBlogs = blogs.filter(blog => blog.title !== title || blog.date !== date);
            localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
        });

        // Append everything to the blog container
        blogBody.appendChild(blogDate);
        blogBody.appendChild(blogParagraph);
        blogBody.appendChild(img);
        blogBody.appendChild(deleteButton);

        blogDiv.appendChild(blogHeader);
        blogDiv.appendChild(blogBody);

        blogContainer.appendChild(blogDiv);
    }
});
