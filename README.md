# DJSL01: Vanilla JS Podcast App

---

## Project Title

**Podcast Discovery App with Interactive Modal View**

---

## Project Description

This project develops a foundational podcast discovery web application, designed to help users browse a library of podcast shows. It features a **responsive layout** that gracefully adapts to various screen sizes, organizing podcast shows into a clean, intuitive grid.

This initial version introduces a **JavaScript-driven system for dynamic podcast display**. The application fetches podcast data from an external JSON file and renders it directly on the DOM. Clicking on a podcast card opens a modal where users can view a larger cover image, a full description, and details of each season and episode. The project showcases robust DOM manipulation, event handling, and a clean, modular JavaScript architecture, providing a solid foundation for future development and the addition of new features like filtering, sorting, and search functionality.

---

## Technologies Used

* **HTML5**: Provides the structural backbone for the web page content and elements, including semantic tags and placeholders for dynamic content.
* **CSS3**: Handles the application's styling, including layout, typography, colors, and comprehensive responsive design for various screen sizes.
    * **CSS Variables**: Utilized to define a flexible color palette, simplifying theme management and ensuring consistency.
    * **Flexbox**: Employed for responsive layout of various components, ensuring flexible arrangement and alignment.
    * **CSS Grid**: Used for arranging the main podcast grid in a structured and adaptive manner.
* **JavaScript (ES6+)**: Powers all dynamic behavior, including podcast rendering, event handling, and interactive modal management.
    * **DOM Manipulation**: Extensively used to create, append, update, and remove HTML elements dynamically.
    * **Event Handling**: Manages user interactions such as clicks on podcast cards and the modal close button.
    * **Modular Structure**: Code is organized into single-responsibility modules for clarity and maintainability (e.g., `main.js` for bootstrapping, `createGrid.js` for rendering, `createModal.js` for UI interactions, `DateUtils.js` for data formatting).
* **Google Fonts**: Specifically, 'Plus Jakarta Sans', ensures consistent and modern typography throughout the application.
* **Material Symbols**: Integrated as an icon library for clean, scalable vector icons without the need for image files.

---

## Features

### Core Features:

* **Dynamic Podcast Grid**: Podcast shows are dynamically generated from JavaScript data and displayed in a responsive grid, with no hard-coded content remaining in the HTML.
* **Responsive Layout**: The grid and modal adapt seamlessly to different screen sizes, providing an optimal viewing experience on both desktop and mobile devices.
* **Themed Styling**: Uses CSS variables for a clean, light theme, making visual modifications straightforward.
* **Typography Management**: Ensures consistent font styling across the application via Google Fonts integration and specific CSS rules.
* **External Data Source**: Podcast data is fetched from an external JSON file, keeping the data separate from the application logic.

### Interactive Modal View:

* **Detailed View**: Clicking a podcast card opens a modal with comprehensive show details.
* **Large Cover Image**: The modal displays a larger, high-quality version of the podcast cover image, scaled correctly to avoid distortion.
* **Show Details**: The modal includes a full description, dynamic genre tags, and the last updated date.
* **Seasons and Episodes**: A collapsible list displays each season's title and the number of episodes it contains.
* **Clear Close Button**: A prominent 'X' button allows users to easily close the modal and return to the main view.
* **Backdrop Effect**: The modal includes a semi-transparent backdrop to focus user attention on its content.

### Code Quality & Maintainability:

* **Modular JavaScript**: Code is structured into single-responsibility modules (e.g., `createPodcastCard.js`, `createModal.js`, `DateUtils.js`, `GenreService.js`), enhancing readability and maintainability.
* **Descriptive Naming Conventions**: All variables, functions, and elements are named clearly and meaningfully, making the codebase immediately understandable.
* **JSDoc Comments**: Every major function and module is thoroughly documented with JSDoc comments, including descriptions, parameters, and return values, ensuring self-documented and easily understandable code.

---

## Setup Instructions

To run this project locally, simply follow these steps:

1.  **Clone the repository:**

    If you haven't already, clone the project repository to your local machine using the command below:

    ```bash
    git clone: https://github.com/KhodaniD/KHOMAI25088_PTO2502_GroupA_KhodaniMailula_DJS01
    ```

2.  **Navigate to the project directory:**

    Open your terminal or command prompt and change to the project's root directory:

    ```bash
    cd KHOMAI25088_PTO2502_GroupA_KhodaniMailula_DJS01 # Replace with your actual project folder name if different
    ```

3.  **Open `index.html`:**

    Locate the `index.html` file in the root of the project directory. Double-click this file or drag it into your preferred web browser (e.g., Chrome, Firefox, Safari) to open it.

    The podcast grid will display immediately.

---

## Working Usage Examples

### Desktop View:

* Open `index.html` in a desktop browser.
* Observe the podcast grid with dynamically rendered cards, each displaying the cover, title, seasons count, genres, and last updated date.
* Click on any podcast card to open the modal.
* The modal will display a larger cover image, a full description, and a detailed list of all seasons and their episode counts.
* Click the 'X' button to close the modal and return to the grid view.
* Resize your browser window to simulate different desktop screen sizes; the columns and modal will responsively adjust their layout.

### Mobile View:

* Open `index.html` in a mobile browser or use your desktop browser's developer tools to enable device emulation (e.g., Chrome DevTools -> Toggle device toolbar).
* The podcast grid will stack the cards vertically, making it easily scrollable on smaller screens.
* The modal will adapt responsively to the mobile screen, ensuring all text and images are legible.

---

## Interaction Instructions

This project provides interactive podcast browsing directly via the user interface:

* **Viewing Podcast Details:**
    1.  Click on any podcast card displayed on the grid.
    2.  A modal will appear, showing a large cover image, a full description, genre tags, and the last updated date.
    3.  Scroll down to see a detailed list of each season and its associated episode count.

* **Closing the Modal:**
    * To close the open modal and return to the main grid, click the **'X' icon** in the top right corner of the modal.

This podcast application now serves as a robust example of dynamic UI rendering and responsive design, providing a complete and intuitive user experience.