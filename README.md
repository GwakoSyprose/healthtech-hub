# Blog Management App

A Vue 3 application for managing blogs with features such as viewing, filtering by topics, and adding new blog posts. This application integrates with a backend API to fetch and submit blog data.

![image](https://github.com/user-attachments/assets/369a68f8-b3ea-4a43-90db-9e0642cfff29)


## Tech Stack
- Vue 3: A progressive JavaScript framework for building user interfaces.
- Pinia: State management library.
- Tailwind CSS: Utility-first CSS framework for designing the UI.
- Axios: HTTP client for making API requests.
- Vue Router: For navigation between different views.
- Heroicons: For including SVG icons in the UI.
  
## Features
- Blog List View: Displays a list of blogs fetched from the API.
- Filter Blogs by Topic: Filter the displayed blogs by selecting topic buttons.
- Add New Blog: Fill in a form to add a new blog post with fields like name, surname, subject, body, and topic.
- API Integration: Data is fetched and submitted to a RESTful API.

## State Management
The application uses Pinia for state management. The store is located in ``src/store/blogStore.js`` and manages the state for blogs, topics, and filtering.

### Blog Store Actions
- ``setBlogs``: Sets the list of blogs.
- ``setTopics``: Sets the list of topics.
- ``addBlog``: Adds a new blog to the state.
- ``toggleTopic``: Toggles topic selection for filtering.
### Getters
- ``blogsFilteredByTopic``: Filters blogs by selected topics.

## Project Structure
The project follows a modular structure, organized by feature and functionality.

- ``api/``: Contains files for API integration using axios.
- ``assets/``: Stores static assets such as images.
- ``components``/: Contains reusable Vue components such as sidebar, go back buttons etc.
- ``views``/: Contains page-level components, representing different screens in the application. i.e   Home, About, BlogList, AddBlog and BlogDetail screen.
- ``store/:`` Manages the application state using Pinia - ``blogStore``.
- ``router/``: Configures the routing and navigation between different views.
  
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
