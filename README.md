# Semester-Project
For the love of all that is holy, please let me not screw this up.

# CSC 590 - Spring 2016 - Major Project

## Due Dates
The project is worth 40% of your total grade. Completing it is required. To prevent
procrastination and to assist with lowering end-of-semester stress, there are checkpoints
along the way where you must turn in your assignment progress.

 * Checkpoint 1 - Project setup and basic build system: 4/15/2016 - 10% of assignment grade
 * Checkpoint 2 - Static routes and HTML mocks: 4/22/2016 - 10% of assignment grade
 * Final project turn in - 5/6/2016 - 80% of assignment grade

## Objective
Implement a single page web application which utilizes a remote api and saves data between browsing sessions. The project is expected to utilize all of the major technologies covered in the course:

  * Semantic HTML5
  * Advanced CSS
  * JavaScript

## Specifications
 * The project must have a README which covers an overview, installation instructions and any other needed info.
 * Implement at least 3 views. Different views contain substantially different HTML and have different use cases for the use.
 * Utilize a remote API for date retrieval.
 * Allow users to create preferences and save the state between browser sessions.
 * Use a templating language/framework to avoid introducing XSS vulnerabilities.
 * Use a build system to package up your project and manage dependencies.
 * Style/theme your templates. CSS is required for this assignment.

## Suggested APIs
This list is no intended to be comprehensive.

 * [Flickr](https://www.flickr.com/services/api/)
 * [YouTube](https://developers.google.com/youtube/v3/getting-started)
 * [Google Custom Search](https://developers.google.com/custom-search/json-api/v1/overview)
 * [Google Calendar](https://developers.google.com/google-apps/calendar/quickstart/js)
 * [Google Maps](https://developers.google.com/maps/documentation/javascript/reference)

## Project Setup
The entire project should be created in a GIT repository. Create your own repository on GitHub or BitBucket.

## Tips for Success
 1. Commit often
 2. Write a small proof of concept to retrieve data from your api.
 3. Create sample HTML Templates complete with styles.
 4. Implement and wire up a router to match URLs to controllers which serve static HTML
 5. Implement each controller to obtain live data
