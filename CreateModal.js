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

  /**
   * Populates the modal with the details of a specific podcast.
   * @param {object} podcast The podcast object to display.
   */
  const open = (podcast) => {
    // Find the full seasons data for the given podcast ID
    const podcastSeasons = seasons.find((s) => s.id === podcast.id);

    // 1. Populate the modal with main podcast data
    modalTitle.textContent = podcast.title;
    modalImage.src = podcast.image;
    modalImage.alt = podcast.title;
    modalDescription.textContent = podcast.description;
    modalUpdated.textContent = `Last updated: ${DateUtils.format(podcast.updated)}`;

    // 2. Populate genre tags
    modalGenres.innerHTML = "";
    const genres = GenreService.getNames(podcast.genres);
    genres.forEach((genre) => {
      const span = document.createElement("span");
      span.classList.add("modal-genre-tag");
      span.textContent = genre;
      modalGenres.appendChild(span);
    });

    // 3. Populate the seasons list
    modalSeasonsList.innerHTML = "";
    if (podcastSeasons && podcastSeasons.seasonDetails) {
      podcastSeasons.seasonDetails.forEach((season) => {
        const li = document.createElement("li");
        li.classList.add("season-item");
        li.innerHTML = `
          <h4>${season.title}</h4>
          <p class="episode-count">${season.episodes} episodes</p>
        `;
        modalSeasonsList.appendChild(li);
      });
    }

  