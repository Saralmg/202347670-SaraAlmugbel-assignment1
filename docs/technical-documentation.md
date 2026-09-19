# Technical Documentation

## Project Overview

This project is a static personal portfolio website built using HTML, CSS, and JavaScript. It does not require a backend, database, framework, or package installation.

## HTML

The `index.html` file contains the structure and content of the website. It uses semantic elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`.

The website includes:

- About Me section
- Projects section
- Contact section
- Navigation bar
- Footer

## CSS

The `css/styles.css` file controls the colors, spacing, layout, project cards, contact form, and responsive design.

CSS Flexbox is used for the navigation and form. CSS Grid is used for the project cards. A media query changes the two-column project layout into one column on smaller screens.

## JavaScript

The `js/script.js` file controls the contact-form interaction. When the form is submitted, JavaScript prevents the page from refreshing and displays a personalized confirmation message. The form fields are then cleared.

## Responsive Design

The website is designed to work on desktop, tablet, and mobile screens. At screen widths below 700 pixels:

- The navigation changes to a vertical layout.
- The project cards change from two columns to one.
- Font sizes and spacing become smaller.

## Testing

The website was tested by opening `index.html` in a browser. The navigation links, project layout, contact form, confirmation message, and mobile layout were checked.