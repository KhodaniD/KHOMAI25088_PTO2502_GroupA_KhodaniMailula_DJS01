import { podcasts, genres } from "./data.js";
import { createGrid } from "./createGrid.js";

/**
 * @file The main entry point for the Podcast App.
 * @module main
 * @description This script orchestrates the entire application. It initializes the UI,
 * handles user interactions (filtering and sorting), and manages the rendering
 * of the podcast grid.
 */

// Cache the main DOM elements
const podcastGrid = document.getElementById("podcast-grid");
const genresDropdown = document.getElementById("genres-dropdown");
const sortDropdown = document.getElementById("sort-dropdown");

// Instantiate the grid factory
const grid = createGrid();

// Populate the genres dropdown dynamically
const populateGenresDropdown = () => {
    genres.forEach((genre) => {
        const option = document.createElement("option");
        option.value = genre.id;
        option.textContent = genre.title;
        genresDropdown.appendChild(option);
    });
};


// Function to filter and sort the podcasts based on dropdown selections
const filterAndSortPodcasts = () => {
    const selectedGenreId = genresDropdown.value;
    const sortBy = sortDropdown.value;

    let filteredPodcasts = podcasts;

    // Filter by genre
    if (selectedGenreId !== "all") {
        filteredPodcasts = podcasts.filter((podcast) =>
            podcast.genres.includes(parseInt(selectedGenreId))
        );
    }

    // Sort the filtered list
    if (sortBy === "updated-desc") {
        filteredPodcasts.sort(
            (a, b) => new Date(b.updated) - new Date(a.updated)
        );
    } else if (sortBy === "title-asc") {
        filteredPodcasts.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Render the sorted and filtered podcasts
    grid.render(filteredPodcasts);
};

// Add event listeners to the dropdowns
genresDropdown.addEventListener("change", filterAndSortPodcasts);
sortDropdown.addEventListener("change", filterAndSortPodcasts);

// Initial application setup
document.addEventListener("DOMContentLoaded", () => {
    populateGenresDropdown();
    filterAndSortPodcasts(); // Initial render of all podcasts
});