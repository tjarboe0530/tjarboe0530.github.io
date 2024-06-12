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
    { title: "Dune", genres: ["Action", "Sci-Fi"] },
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
    { title: "The Jungle Book", genres: ["Animation", "Adventure", "Drama"] },
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
    { title: "Toy Story (1995)", genres: ["Adventure", "Animation", "Children", "Comedy", "Fantasy"] },
    { title: "Jumanji (1995)", genres: ["Adventure", "Children", "Fantasy"] },
    { title: "Grumpier Old Men (1995)", genres: ["Comedy", "Romance"] },
    { title: "Waiting to Exhale (1995)", genres: ["Comedy", "Drama", "Romance"] },
    { title: "Father of the Bride Part II (1995)", genres: ["Comedy"] },
    { title: "Heat (1995)", genres: ["Action", "Crime", "Thriller"] },
    { title: "Sabrina (1995)", genres: ["Comedy", "Romance"] },
    { title: "Tom and Huck (1995)", genres: ["Adventure", "Children"] },
    { title: "Sudden Death (1995)", genres: ["Action"] },
    { title: "GoldenEye (1995)", genres: ["Action", "Adventure", "Thriller"] },
    { title: "The American President (1995)", genres: ["Comedy", "Drama", "Romance"] },
    { title: "Dracula: Dead and Loving It (1995)", genres: ["Comedy", "Horror"] },
    { title: "Balto (1995)", genres: ["Adventure", "Animation", "Children"] },
    { title: "Nixon (1995)", genres: ["Drama"] },
    { title: "Cutthroat Island (1995)", genres: ["Action", "Adventure", "Romance"] },
    { title: "Casino (1995)", genres: ["Crime", "Drama"] },
    { title: "Sense and Sensibility (1995)", genres: ["Drama", "Romance"] },
    { title: "Four Rooms (1995)", genres: ["Comedy"] },
    { title: "Ace Ventura: When Nature Calls (1995)", genres: ["Comedy"] },
    { title: "Money Train (1995)", genres: ["Action", "Comedy", "Crime", "Drama", "Thriller"] },
    { title: "Get Shorty (1995)", genres: ["Comedy", "Crime", "Thriller"] },
    { title: "Copycat (1995)", genres: ["Crime", "Drama", "Horror", "Mystery", "Thriller"] },
    { title: "Assassins (1995)", genres: ["Action", "Crime", "Thriller"] },
    { title: "Powder (1995)", genres: ["Drama", "Sci-Fi"] },
    { title: "Leaving Las Vegas (1995)", genres: ["Drama", "Romance"] },
    { title: "Othello (1995)", genres: ["Drama"] },
    { title: "Now and Then (1995)", genres: ["Children", "Drama"] },
    { title: "Persuasion (1995)", genres: ["Drama", "Romance"] },
    { title: "City of Lost Children, The (Cité des enfants perdus, La) (1995)", genres: ["Adventure", "Drama", "Fantasy", "Mystery", "Sci-Fi"] },
    { title: "Shanghai Triad (Yao a yao yao dao waipo qiao) (1995)", genres: ["Crime", "Drama"] },
    { title: "Dangerous Minds (1995)", genres: ["Drama"] },
    { title: "Twelve Monkeys (1995)", genres: ["Mystery", "Sci-Fi", "Thriller"] },
    { title: "Babe (1995)", genres: ["Children", "Drama"] },
    { title: "Carrington (1995)", genres: ["Drama", "Romance"] },
    { title: "Dead Man Walking (1995)", genres: ["Crime", "Drama"] },
    { title: "Across the Sea of Time (1995)", genres: ["Adventure", "Documentary", "IMAX"] },
    { title: "It Takes Two (1995)", genres: ["Children", "Comedy"] },
    { title: "Clueless (1995)", genres: ["Comedy", "Romance"] },
    { title: "Cry, the Beloved Country (1995)", genres: ["Drama"] },
    { title: "Richard III (1995)", genres: ["Drama", "War"] },
    { title: "Dead Presidents (1995)", genres: ["Action", "Crime", "Drama"] },
    { title: "Restoration (1995)", genres: ["Drama"] },
    { title: "Mortal Kombat (1995)", genres: ["Action", "Adventure", "Fantasy"] },
    { title: "To Die For (1995)", genres: ["Comedy", "Drama", "Thriller"] },
    { title: "How to Make an American Quilt (1995)", genres: ["Drama", "Romance"] },
    { title: "Seven (a.k.a. Se7en) (1995)", genres: ["Crime", "Mystery", "Thriller"] },
    { title: "Pocahontas (1995)", genres: ["Animation", "Children", "Drama", "Musical", "Romance"] },
    { title: "When Night Is Falling (1995)", genres: ["Drama", "Romance"] },
    { title: "Usual Suspects, The (1995)", genres: ["Crime", "Mystery", "Thriller"] },
    { title: "Guardian Angel (1994)", genres: ["Action", "Drama", "Thriller"] },
    { title: "Mighty Aphrodite (1995)", genres: ["Comedy", "Romance"] },
    { title: "Lamerica (1994)", genres: ["Drama"] },
    { title: "Big Green, The (1995)", genres: ["Children", "Comedy"] },
    { title: "Georgia (1995)", genres: ["Drama"] },
    { title: "Home for the Holidays (1995)", genres: ["Drama"] },
    { title: "Postman, The (Postino, Il) (1994)", genres: ["Comedy", "Drama", "Romance"] },
    { title: "Confessional, The (Confessionnal, Le) (1995)", genres: ["Drama", "Mystery"] },
    { title: "Indian in the Cupboard, The (1995)", genres: ["Adventure", "Children", "Fantasy"] },
    { title: "Eye for an Eye (1996)", genres: ["Drama", "Thriller"] },
    { title: "Mr. Holland's Opus (1995)", genres: ["Drama"] },
    { title: "Don't Be a Menace to South Central While Drinking Your Juice in the Hood (1996)", genres: ["Comedy", "Crime"] },
    { title: "Two if by Sea (1996)", genres: ["Comedy", "Romance"] },
    { title: "Bio-Dome (1996)", genres: ["Comedy"] },
    { title: "Lawnmower Man 2: Beyond Cyberspace (1996)", genres: ["Action", "Sci-Fi", "Thriller"] },
    { title: "French Twist (Gazon maudit) (1995)", genres: ["Comedy", "Romance"] },
    { title: "Friday (1995)", genres: ["Comedy"] },
    { title: "From Dusk Till Dawn (1996)", genres: ["Action", "Comedy", "Horror", "Thriller"] },
    { title: "Fair Game (1995)", genres: ["Action"] },
    { title: "Kicking and Screaming (1995)", genres: ["Comedy", "Drama"] },
    { title: "Misérables, Les (1995)", genres: ["Drama", "War"] },
    { title: "Bed of Roses (1996)", genres: ["Drama", "Romance"] },
    { title: "Big Bully (1996)", genres: ["Comedy", "Drama"] },
    { title: "Screamers (1995)", genres: ["Sci-Fi", "Thriller"] },
    { title: "Nico Icon (1995)", genres: ["Documentary"] },
    { title: "Crossing Guard, The (1995)", genres: ["Drama"] },
    { title: "Juror, The (1996)", genres: ["Drama", "Thriller"] },
    { title: "White Balloon, The (Badkonake sefid) (1995)", genres: ["Children", "Drama"] },
    { title: "Things to Do in Denver When You're Dead (1995)", genres: ["Crime", "Drama", "Romance"] },
    { title: "Antonia's Line (Antonia) (1995)", genres: ["Comedy", "Drama"] },
    { title: "Once Upon a Time... When We Were Colored (1995)", genres: ["Drama"] },
    { title: "Last Summer in the Hamptons (1995)", genres: ["Comedy", "Drama"] },
    { title: "Angels and Insects (1995)", genres: ["Drama", "Romance"] },
    { title: "White Squall (1996)", genres: ["Adventure", "Drama"] },
    { title: "Dunston Checks In (1996)", genres: ["Children", "Comedy"] },
    { title: "Black Sheep (1996)", genres: ["Comedy"] },
    { title: "Nick of Time (1995)", genres: ["Action", "Thriller"] },
    { title: "Mary Reilly (1996)", genres: ["Drama", "Horror", "Thriller"] },
    { title: "Vampire in Brooklyn (1995)", genres: ["Comedy", "Horror", "Romance"] },
    { title: "Beautiful Girls (1996)", genres: ["Comedy", "Drama", "Romance"] },
    { title: "Broken Arrow (1996)", genres: ["Action", "Adventure", "Thriller"] },
    { title: "In the Bleak Midwinter (1995)", genres: ["Comedy"] },
    { title: "Hate (Haine, La) (1995)", genres: ["Crime", "Drama"] },
    { title: "Shopping (1994)", genres: ["Action", "Thriller"] },
    { title: "Heidi Fleiss: Hollywood Madam (1995)", genres: ["Documentary"] },
    { title: "City Hall (1996)", genres: ["Drama", "Thriller"] },
    { title: "Bottle Rocket (1996)", genres: ["Adventure", "Comedy", "Crime", "Romance"] },
    { title: "Mr. Wrong (1996)", genres: ["Comedy"] },
    { title: "Unforgettable (1996)", genres: ["Mystery", "Sci-Fi", "Thriller"] },
    { title: "Happy Gilmore (1996)", genres: ["Comedy"] },
    { title: "Bridges of Madison County, The (1995)", genres: ["Drama", "Romance"] },
    { title: "Nobody Loves Me (Keiner liebt mich) (1994)", genres: ["Comedy", "Drama"] },
    { title: "Muppet Treasure Island (1996)", genres: ["Adventure", "Children", "Comedy", "Musical"] },
    { title: "Catwalk (1996)", genres: ["Documentary"] },
    { title: "Braveheart (1995)", genres: ["Action", "Drama", "War"] },
    { title: "Taxi Driver (1976)", genres: ["Crime", "Drama", "Thriller"] },
    { title: "Rumble in the Bronx (Hont faan kui) (1995)", genres: ["Action", "Comedy", "Crime"] },
    { title: "Before and After (1996)", genres: ["Drama", "Mystery"] },
    { title: "Margaret's Museum (1995)", genres: ["Drama"] },
    { title: "Happiness Is in the Field (Bonheur est dans le pré, Le) (1995)", genres: ["Comedy"] },
    { title: "Anne Frank Remembered (1995)", genres: ["Documentary"] },
    { title: "Antonia's Line (1995)", genres: ["Drama"] },
    { title: "Fargo (1996)", genres: ["Comedy", "Crime", "Drama", "Thriller"] },
    { title: "Scream of Stone (Schrei aus Stein) (1991)", genres: ["Drama"] },
    { title: "Dunston Checks In (1996)", genres: ["Comedy"] },
    { title: "Brothers McMullen, The (1995)", genres: ["Comedy", "Drama"] },
    { title: "It's My Party (1996)", genres: ["Drama"] },
    { title: "Jack and Sarah (1995)", genres: ["Comedy", "Romance"] },
    { title: "Georgia (1995)", genres: ["Drama"] },
    { title: "Kids of Survival (1993)", genres: ["Documentary"] },
    { title: "Loch Ness (1995)", genres: ["Children", "Drama"] },
    { title: "Jude (1996)", genres: ["Drama"] },
    { title: "Celtic Pride (1996)", genres: ["Comedy"] },
    { title: "Flipper (1996)", genres: ["Adventure", "Children"] },
    { title: "Private Parts (1997)", genres: ["Comedy"] },
    { title: "Anaconda (1997)", genres: ["Adventure", "Horror", "Thriller"] },
    { title: "Mimic (1997)", genres: ["Horror", "Sci-Fi", "Thriller"] },
    { title: "Money Talks (1997)", genres: ["Action", "Comedy"] },
    { title: "Contact (1997)", genres: ["Drama", "Sci-Fi", "IMAX"] },
    { title: "Air Force One (1997)", genres: ["Action", "Thriller"] },
    { title: "So I Married an Axe Murderer (1993)", genres: ["Comedy", "Romance", "Thriller"] },
    { title: "Quiet Man, The (1952)", genres: ["Comedy", "Drama", "Romance"] },
    { title: "Summer of Sam (1999)", genres: ["Drama", "Thriller"] },
    { title: "Lone Star (1996)", genres: ["Drama", "Mystery", "Western"] },
    { title: "Sunset Park (1996)", genres: ["Drama"] },
    { title: "Truth About Cats & Dogs, The (1996)", genres: ["Comedy", "Romance"] },
    { title: "Bridges of Madison County, The (1995)", genres: ["Drama", "Romance"] },
    { title: "Clear and Present Danger (1994)", genres: ["Action", "Crime", "Drama", "Thriller"] },
    { title: "Escape from L.A. (1996)", genres: ["Action", "Adventure", "Sci-Fi", "Thriller"] },
    { title: "Fan, The (1996)", genres: ["Drama", "Thriller"] },
    { title: "Grease 2 (1982)", genres: ["Comedy", "Drama", "Musical", "Romance"] },
    { title: "Phenomenon (1996)", genres: ["Drama", "Fantasy", "Romance"] },
    { title: "A Time to Kill (1996)", genres: ["Crime", "Drama", "Thriller"] },
    { title: "She's the One (1996)", genres: ["Comedy", "Drama", "Romance"] },
    { title: "Indian Summer (1993)", genres: ["Comedy", "Drama"] },
    { title: "Key Largo (1948)", genres: ["Crime", "Drama", "Film-Noir", "Thriller"] },
    { title: "Shall We Dance (1937)", genres: ["Comedy", "Musical", "Romance"] },
    { title: "Ref, The (1994)", genres: ["Comedy", "Crime"] },
    { title: "Paths of Glory (1957)", genres: ["Drama", "War"] },
    { title: "Sweet Hereafter, The (1997)", genres: ["Drama"] },
    { title: "Come and See (Idi i smotri) (1985)", genres: ["Drama", "War"] },
    { title: "Cuba (1979)", genres: ["Adventure", "Drama", "Romance"] },
    { title: "Welcome to the Dollhouse (1995)", genres: ["Comedy", "Drama"] },
    { title: "Ghosts of Mississippi (1996)", genres: ["Drama"] },
    { title: "Long Kiss Goodnight, The (1996)", genres: ["Action", "Adventure", "Crime", "Drama", "Mystery", "Thriller"] },
    { title: "Mirror Has Two Faces, The (1996)", genres: ["Comedy", "Drama", "Romance"] },
    { title: "Romeo + Juliet (1996)", genres: ["Drama", "Romance"] },
    { title: "Swingers (1996)", genres: ["Comedy", "Drama"] },
    { title: "Willy Wonka & the Chocolate Factory (1971)", genres: ["Adventure", "Children", "Fantasy", "Musical"] },
    { title: "Scream (1996)", genres: ["Horror", "Mystery"] },
    { title: "Michael (1996)", genres: ["Comedy", "Drama", "Fantasy", "Romance"] },
    { title: "Air Bud (1997)", genres: ["Children", "Comedy", "Drama"] },
    { title: "Air Bud: Golden Receiver (1998)", genres: ["Children", "Comedy", "Drama"] },
    { title: "Air Bud: World Pup (2000)", genres: ["Children", "Comedy", "Drama"] },
    { title: "Air Bud: Seventh Inning Fetch (2002)", genres: ["Children", "Comedy", "Drama"] },
    { title: "Air Bud: Spikes Back (2003)", genres: ["Children", "Comedy", "Drama"] },
    { title: "Airplane! (1980)", genres: ["Comedy"] },
    { title: "Airplane II: The Sequel (1982)", genres: ["Comedy"] },
    { title: "Akira (1988)", genres: ["Action", "Animation", "Sci-Fi"] },
    { title: "Aladdin (1992)", genres: ["Adventure", "Animation", "Children", "Comedy", "Fantasy", "Musical", "Romance"] },
    { title: "Aladdin and the King of Thieves (1996)", genres: ["Adventure", "Animation", "Children", "Comedy", "Musical"] },

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
