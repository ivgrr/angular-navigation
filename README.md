## Task 1 — Implementation of Navigation Service

**Description of the Work Done:**
In this task, I have implemented the abstract navigation service based on the provided abstract class and starter code. The navigation service is responsible for handling navigation data and providing functionalities for searching and retrieving navigation routes.

I defined the necessary types for navigation routes and implemented the abstract methods `getRoutes()`, `getRoute(routeUrl: string)`, and `getBreadcrumbs(routeUrl: string)` in the `NavigationService` class. The methods use RxJS to manage asynchronous data and handle navigation-related operations.

## Task 2 — Navigation Display

**Description of the Work Done:**
In this task, I have implemented the navigation display based on the provided layout and styles. I converted the layout components into Angular components and used them to display the navigation menus. The navigation data is retrieved from the previously implemented `NavigationService`.

The navigation is displayed with correct links, and clicking on the first-level items leads to the corresponding pages. If the active first-level item has child items, they are expanded. Clicking on second-level items also leads to the corresponding pages, and the menu remains expanded. Third-level items are not displayed in the menu.

Each page displays its path in breadcrumbs using arbitrary styles.
