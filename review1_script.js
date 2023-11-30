// Declare movieDetails as a single variable
let movieDetails;

// Sample reviews
const reviews = [
    { rating: 5, review: "A mind-bending journey! Loved every moment." },
    { rating: 4, review: "Great cinematography and storyline." },
];

// Function to display movie details
function displayMovieDetails() {
    const movieDetailsSection = document.getElementById("movieDetails");
    movieDetailsSection.innerHTML = `
        <h2>${movieDetails.title}</h2>
        <p><strong>Director:</strong> ${movieDetails.director}</p>
        <p><strong>Genre:</strong> ${movieDetails.genre}</p>
        <p><strong>Release Year:</strong> ${movieDetails.releaseYear}</p>
    `;
}

// Function to display user reviews
function displayUserReviews() {
    const userReviewsSection = document.getElementById("userReviews");
    userReviewsSection.innerHTML = "<h2>User Reviews</h2>";
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        const starRating = Array.from({ length: 5 }, (_, i) => {
            const isSelected = i < review.rating;
            return `<img src="star.png" alt="star" class="star-icon ${isSelected ? 'selected' : ''}">`;
        }).join('');

        reviewElement.innerHTML = `
            <div class="star-rating">
                ${starRating}
            </div>
            <p>${review.review}</p>
        `;

        userReviewsSection.appendChild(reviewElement);
    });
}

// Function to submit a new review
function submitReview() {
    const reviewInput = document.getElementById("review");

    // Validate input
    if (reviewInput.checkValidity()) {
        const selectedStars = document.querySelectorAll('.star-icon.selected');
        const rating = selectedStars.length;

        const newReview = {
            rating: rating,
            review: reviewInput.value,
        };

        // Add the new review to the array
        reviews.push(newReview);

        // Update the displayed reviews
        displayUserReviews();

        // Clear the form
        reviewInput.value = "";
    }
}

// Function to handle star clicks
function handleStarClick(event) {
    const clickedStar = event.target;
    const starIcons = event.currentTarget.querySelectorAll('.star-icon');

    starIcons.forEach((star, index) => {
        if (star === clickedStar || star.compareDocumentPosition(clickedStar) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            star.classList.toggle('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Initial setup
movieDetails = {
    title: "Beyond the Horizon",
    director: "Sarah Rodriguez",
    genre: "Sci-Fi",
    releaseYear: 2022,
};

displayMovieDetails();
displayUserReviews();
