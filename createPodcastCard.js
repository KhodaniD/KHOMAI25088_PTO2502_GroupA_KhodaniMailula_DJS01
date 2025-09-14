import { DateUtils } from "./DateUtils.js";
import { GenreService } from "./GenreService.js";

/**
 * @file A factory function to create a single podcast card element.
 * @module createPodcastCard
 * @description This module encapsulates all logic for creating a podcast card, including DOM manipulation,
 * data population, and event handling, adhering to the Single Responsibility Principle.
 */

/**
 * Creates and returns a complete HTML element for a podcast card.
 *
 * @param {object} podcast The podcast object containing all the necessary data.
 * @param {function} onClick A callback function to be executed when the card is clicked.
 * @returns {HTMLElement} The fully constructed podcast card element.
 */
export const createPodcastCard = (podcast, onClick) => {
    // Create the main container element for the card
    const card = document.createElement("div");
    card.classList.add("podcast-card");


// Populate the inner HTML with podcast data
    // The use of template literals makes it easy to mix HTML and JavaScript variables.
    card.innerHTML = `
        <img src="${podcast.image}" alt="${podcast.title} cover" class="podcast-cover">
        <div class="podcast-info">
            <h3 class="podcast-title">${podcast.title}</h3>
            <div class="podcast-details">
                <div class="seasons-count">
                    <span class="material-symbols-outlined seasons-icon">movie</span>
                    <p>${podcast.seasons} season${podcast.seasons !== 1 ? 's' : ''}</p>
                </div>
                <div class="genre-tags">
                    ${GenreService.getNames(podcast.genres).map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
                </div>
            </div>
            <p class="last-updated">
                Updated: ${DateUtils.format(podcast.updated)}
            </p>
        </div>
    `;

    // Add the click event listener
    // When the card is clicked, it executes the provided onClick callback with the podcast data.
    card.addEventListener("click", () => onClick(podcast));

    // Return the complete element
    return card;
};