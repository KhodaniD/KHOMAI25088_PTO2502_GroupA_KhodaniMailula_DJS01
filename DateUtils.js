/**
 * @file A utility module for handling date formatting.
 * @module DateUtils
 * @description This module's sole responsibility is to convert date strings into a human-readable format,
 * adhering to the Single Responsibility Principle (SRP).
 */

/**
 * An object containing date-related utility methods.
 * @type {object}
 */
export const DateUtils = {
    /**
     * Formats an ISO date string into a human-readable format (e.g., "Month Day, Year").
     * @param {string} dateString The date string to format, typically from the podcast data.
     * @returns {string} The formatted date string.
     */
    format: (dateString) => {
        const date = new Date(dateString);
        // Using toLocaleDateString for a robust, internationalized format.
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    },
};