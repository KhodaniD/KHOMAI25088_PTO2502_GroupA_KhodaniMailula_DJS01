import { genres } from "./data.js";

/**
 * @file A utility module for handling genre-related services.
 * @module GenreService
 * @description This module's sole responsibility is to provide genre data lookup services,
 * mapping genre IDs to their corresponding names.
 */

/**
 * An object containing genre-related utility methods.
 * @type {object}
 */
export const GenreService = {
  /**
   * Takes an array of genre IDs and returns an array of their corresponding titles.
   * @param {string[]} genreIds An array of genre IDs from the podcast data.
   * @returns {string[]} An array of genre names.
   */
  getNames: (genreIds) => {
    // Map over the input array of IDs
    return genreIds.map((id) => {
      // Find the corresponding genre object in the genres data
      const genre = genres.find((g) => g.id === id);
      // Return the genre's title, or 'Unknown' if not found
      return genre?.title || "Unknown";
    });
  },
};