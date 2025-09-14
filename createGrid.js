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


}