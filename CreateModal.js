import { DateUtils } from "./DateUtils.js";
import { GenreService } from "./GenreService.js";
import { seasons, podcasts } from "./data.js";

/**
 * @file A factory function to create and manage the podcast detail modal.
 * @module createModal
 * @description This module handles the modal's DOM manipulation and state, providing public
 * methods to open and close it with specific podcast data.
 */

/**
 * Creates an object with methods to control the podcast detail modal.
 * @returns {object} An object containing the open and close methods for the modal.
 */
export const createModal = () => {
  // Cache DOM elements for efficiency
  const modal = document.getElementById("podcast-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalGenres = document.getElementById("modal-genres");
  const modalUpdated = document.getElementById("modal-updated");
  const modalSeasonsList = document.getElementById("modal-seasons-list");

  

}