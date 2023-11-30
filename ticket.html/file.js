// Sample movie data
const movies = [
    { id: 1, title: 'Movie A' },
    { id: 2, title: 'Movie B' },
    { id: 3, title: 'Movie C' },
];

// Function to populate movie options
function populateMovies() {
    const movieSelect = document.getElementById('movie');
    const movieList = document.getElementById('movie-list');

    movies.forEach(movie => {
        const option = document.createElement('option');
        option.value = movie.id;
        option.text = movie.title;
        movieSelect.appendChild(option);

        const listItem = document.createElement('div');
        listItem.textContent = movie.title;
        movieList.appendChild(listItem);
    });
}

// Function to handle booking
function bookTickets() {
    const selectedMovie = document.getElementById('movie').value;
    const numberOfSeats = document.getElementById('seats').value;

    // Add your booking logic here

    alert(`Booking confirmed for ${numberOfSeats} seat(s) for Movie ${selectedMovie}`);
}

// Populate movies on page load
window.onload = populateMovies;