document.addEventListener('DOMContentLoaded', function() {
    const moviesToRate = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Schindler's List",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King",
    "Forrest Gump",
    "Inception",
    "Fight Club",
    "The Matrix",
    "Titanic",
    "Avatar",
    "The Silence of the Lambs",
    "The Green Mile",
    "Gladiator",
    "Braveheart",
    "The Departed",
    "The Prestige",
    "The Lion King",
    "The Avengers",
    "Interstellar",
    "Forrest Gump",
    "The Godfather Part II",
    "Goodfellas",
    "Saving Private Ryan",
    "The Pianist",
    "The Usual Suspects",
    "The Intouchables",
    "The Terminator",
    "The Social Network"
	];

    const moviesForResults = [
    { title: "Inception", genres: ["Action", "Adventure", "Sci-Fi"] },
    { title: "The Shawshank Redemption", genres: ["Drama"] },
    { title: "The Dark Knight", genres: ["Action", "Crime", "Drama"] },
    { title: "Pulp Fiction", genres: ["Crime", "Drama"] },
    { title: "Fight Club", genres: ["Drama"] },
    { title: "Forrest Gump", genres: ["Drama", "Romance"] },
    { title: "The Matrix", genres: ["Action", "Sci-Fi"] },
    { title: "Star Wars", genres: ["Action", "Adventure", "Fantasy"] },
    { title: "Interstellar", genres: ["Adventure", "Drama", "Sci-Fi"] },
    { title: "The Godfather", genres: ["Crime", "Drama"] },
    { title: "The Silence of the Lambs", genres: ["Crime", "Drama", "Thriller"] },
    { title: "Gladiator", genres: ["Action", "Adventure", "Drama"] },
    { title: "Braveheart", genres: ["Biography", "Drama", "History"] },
    { title: "Saving Private Ryan", genres: ["Drama", "War"] },
    { title: "The Pianist", genres: ["Biography", "Drama", "Music"] },
    { title: "The Usual Suspects", genres: ["Crime", "Mystery", "Thriller"] },
    { title: "The Intouchables", genres: ["Biography", "Comedy", "Drama"] },
    { title: "The Terminator", genres: ["Action", "Sci-Fi"] },
    { title: "The Social Network", genres: ["Biography", "Drama"] },
    { title: "Django Unchained", genres: ["Drama", "Western"] },
    { title: "The Lion King", genres: ["Animation", "Adventure", "Drama"] },
    { title: "The Avengers", genres: ["Action", "Adventure", "Sci-Fi"] },
    { title: "The Godfather Part II", genres: ["Crime", "Drama"] },
    { title: "Goodfellas", genres: ["Biography", "Crime", "Drama"] },
    { title: "The Green Mile", genres: ["Crime", "Drama", "Fantasy"] },
    { title: "Schindler's List", genres: ["Biography", "Drama", "History"] },
    { title: "The Prestige", genres: ["Drama", "Mystery", "Sci-Fi"] },
    { title: "Titanic", genres: ["Drama", "Romance"] },
    { title: "Alien", genres: ["Horror", "Sci-Fi"] },
    { title: "The Departed", genres: ["Crime", "Drama", "Thriller"] },
    { title: "The Green Mile", genres: ["Crime", "Drama", "Fantasy"] },
    { title: "Napolean", genres: ["Biography", "Drama", "History"] },
    { title: "The Prestige", genres: ["Drama", "Mystery", "Sci-Fi"] },
    { title: "Titanic", genres: ["Drama", "Romance"] },
    { title: "Alien", genres: ["Horror", "Sci-Fi"] },
    { title: "The Departed", genres: ["Crime", "Drama", "Thriller"] },
    // Add more movies with genres here
	];


    const movieTitle = document.getElementById("movie-title");
    const instructionText = document.getElementById("instruction-text");
	const infoButton = document.getElementById("info-button");
    const startButton = document.getElementById("start-button");
    const movieForm = document.getElementById("movie-form");
    const movieContainer = document.getElementById("movie-container");
    const nextButton = document.getElementById("next-button");
    const skipButton = document.getElementById("skip-button");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    const slider = document.getElementById("movie-rating");
    const output = document.getElementById("slider-value");
	const scoreInput = document.getElementById("movie");
	const scoreValue = document.getElementById("score-value");

// Update score value display as the user adjusts the meter
	slider.addEventListener("input", function() {
		output.textContent = (parseFloat(this.value) / 10).toFixed(1);
	});
	
    let currentMovieIndex = 0;
    let moviesRanked = 0;

    // Function to display the next movie
    function displayNextMovie() {
        if (currentMovieIndex < moviesToRate.length && moviesRanked < 10) {
            movieTitle.textContent = "Rate this movie: ";
			rec.textContent = moviesToRate[currentMovieIndex];
            currentMovieIndex++;
            moviesRanked++;
        } else {
            // Remove the form and display loading message
            movieForm.style.display = "none";
			rec.style.display = "none";
            movieTitle.textContent = "Processing results...";
            setTimeout(displayMovieResult, 5000); // Wait for 5 seconds
        }

        // Reset slider value
        slider.value = 0;
        output.textContent = slider.value;
    }

    // Function to display movie result
	function displayMovieResult() {
		const randomIndex = Math.floor(Math.random() * moviesForResults.length);
		const suggestedMovie = moviesForResults[randomIndex];
		instructionText.style.display = "block";
		rec.style.display = "block";
		movieTitle.textContent = "We think you should watch";
		rec.textContent = suggestedMovie.title;
		instructionText.textContent = "Based on your taste in " + suggestedMovie.genres.join(", ");
		movieForm.style.display = "block";
		resetButton.style.display = "inline-block";
		nextButton.style.display = "none";
		skipButton.style.display = "none";
		output.style.display = "none";
		slider.style.display = "none";
		infoButton.style.display = "inline-block";
	}


    // Event listener for the "Let's go!" button
    startButton.addEventListener("click", function() {
        instructionText.style.display = "none";
        startButton.style.display = "none";
		rec.style.display = "block";
		output.style.display = "block";
		slider.style.display = "block";
		nextButton.style.display = "inline-block";
		skipButton.style.display = "inline-block";
		resetButton.style.display = "inline-block";
        movieForm.style.display = "block";
        displayNextMovie();
    });
	
	// Add event listener to update output with slider value
	slider.addEventListener("input", function() {
	  output.textContent = slider.value;
	});

    // Event listener for the "Next Movie" button
    nextButton.addEventListener("click", displayNextMovie);

    // Event listener for the "Haven't seen it" button
    skipButton.addEventListener("click", function() {
        moviesRanked--;
        displayNextMovie();
    });
	
	
	// Event listener for the "Learn more" button
    infoButton.addEventListener("click", function() {
        movieTitle.textContent = "About FilmRex";
		infoButton.style.display = "none";
		rec.style.display = "none";
		instructionText.textContent = "We know that the site is quite bare bones at the moment but that is only because we want to make sure that it is perfect \
		along every step of the way. Our first step was to deploy the Movie Recommendation Engine that you see here which is powered by FastAI's machine learning algorithims. \
		As the name implies, FastAI allows us to quickly and efficiently use machine learning to compare your movie scores with those of the 10,000 other people \
		that we have stored in our database. This vast amount of data allows us to find users with similar tastes as yours and recommend movies that those same users also loved.\
		Stay tuned for more updates throughout 2024 as we roll out features such as the creation user accounts to track your ratings and fine tune your own personalized movie\
		recommendation engine, collaboration with friends to find the best movie for the gang to watch, and many more exciting things to come.\
		Thank you for visiting and see ya at the box office!";
    });

    // Event listener for the "Reset" button
    resetButton.addEventListener("click", function() {
        // Reset all variables and display initial state
        currentMovieIndex = 0;
        moviesRanked = 0;
		infoButton.style.display = "none";
		instructionText.style.display = "block";
        movieForm.style.display = "none";
        movieTitle.textContent = "Welcome to FilmRex!";
        instructionText.textContent = "Please enter in a rating for each of the following 10 movies and our advanced FilmRex Movie Recommendation Engine will compare your\
		ratings with the ratings of 10,000 other people to learn about your tastes and find out the best movie for you to watch!";
        startButton.style.display = "inline-block";
		rec.style.display = "none";
    });

});
