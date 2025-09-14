import { createPodcastCard } from "./createPodcastCard.js";
import { createModal } from "./CreateModal.js";

/**
 * @file A factory function to create and manage the podcast grid.
 * @module createGrid
 * @description This module handles the rendering of podcast cards into the main grid container.
 * It follows the Single Responsibility Principle by delegating the creation of individual cards
 * to the `createPodcastCard` module.
 */

/**
 * Creates an object with a render method to manage the podcast grid.
 * @returns {object} An object containing the render method.
 */
export const createGrid = () => {
  const container = document.getElementById("podcast-grid");

/**
   * Renders a list of podcast objects into the grid container.
   * @param {object[]} podcastList An array of podcast objects to be rendered.
   */
  const render = (podcastList) => {
    // Clear the grid to prevent duplicate content
    container.innerHTML = "";

    // Loop through the podcast list and render each card
    podcastList.forEach((podcast) => {
      // Create a card using our factory function
      // The `createModal().open` is passed as the onClick handler,
      // creating a direct link between the card click and modal functionality.
      const card = createPodcastCard(podcast, createModal().open);

      // Append the new card to the grid
      container.appendChild(card);
    });
  };

  // Return the public interface
  return {
    render,
  };
};