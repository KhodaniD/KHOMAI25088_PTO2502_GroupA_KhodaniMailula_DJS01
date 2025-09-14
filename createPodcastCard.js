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

}