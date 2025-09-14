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

