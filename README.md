## Task 0 — Project Creation and Setup

**Instructions to Run the Application:**

1. Clone the repository "junior-angular-developer-tasks" to your local machine.
2. Install Node.js and Angular CLI if not already installed.
3. Navigate to the project's root directory and run `npm install` to install dependencies.
4. Run the application using `ng serve` command.
5. Access the application at "http://localhost:4200/" in your web browser.

**Description of the Work Done:**

- Created a new private repository on GitHub named "junior-angular-developer-tasks" and shared it with the user "@thekiba."
- Created a new Angular project using Angular CLI with the name "junior-angular-developer-tasks." The project uses CSS for styles and has routing enabled.
- Transferred necessary resources into the project:
  - Copied layout from "assets/index.html" to "index.html" and "app.component.html" for better structure.
  - Moved styles to "assets/styles.css."
  - Housed SVG images in "assets/sprites.svg."
- Copied "TASKS.md" and created "README.md" files in the project.

**Executable Code:**
Please refer to the repository "junior-angular-developer-tasks" on GitHub for the executable code.

## Task 1 — Implementation of Navigation Service

**Description of the Work Done:**
In this task, I have implemented the abstract navigation service based on the provided abstract class and starter code. The navigation service is responsible for handling navigation data and providing functionalities for searching and retrieving navigation routes.

I defined the necessary types for navigation routes and implemented the abstract methods `getRoutes()`, `getRoute(routeUrl: string)`, and `getBreadcrumbs(routeUrl: string)` in the `NavigationService` class. The methods use RxJS to manage asynchronous data and handle navigation-related operations.

## Task 2 — Navigation Display

**Description of the Work Done:**
In this task, I have implemented the navigation display based on the provided layout and styles. I converted the layout components into Angular components and used them to display the navigation menus. The navigation data is retrieved from the previously implemented `NavigationService`.

The navigation is displayed with correct links, and clicking on the first-level items leads to the corresponding pages. If the active first-level item has child items, they are expanded. Clicking on second-level items also leads to the corresponding pages, and the menu remains expanded. Third-level items are not displayed in the menu.

Each page displays its path in breadcrumbs using arbitrary styles.

## Task 3 — Creating Card Components

**Description of the Work Done:**
In this task, I have implemented the required card components for displaying cards on the "Accounts and Symbols" page. The components are created as per the provided layout.

- `app-page-cards`: A general component for displaying cards on the page.
- `app-page-card-item`: A component representing a single card.
- `app-page-card-item-heading`: A component for displaying the card's heading.
- `app-page-card-item-content`: A component for displaying the card's content.
