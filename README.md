# Recipe App

A modern recipe management application built with Next.js, TypeScript, and HeroUI. Users can browse recipes, mark favorites, and add their own recipes.

## Features

### Acceptance Criteria & Implementation Status

- ✅ **I can view a list of all recipes** - Browse all recipes on the home page with responsive card layout
- ✅ **I can save recipes to my favourites** - Heart icon on recipe cards with persistent localStorage storage
- ✅ **I can create a custom recipe** - Add Recipe modal with dynamic ingredient/instruction fields
- ✅ **I can view my custom recipes in a list** - Filter toggle between "All Recipes" and "My Recipes"
- ✅ **I can view a given recipe in more detail** - Individual recipe detail pages with full information
- ✅ **Recipe includes required data:**
  - ✅ Cooking time
  - ✅ Ingredients (dynamic list)
  - ✅ Instructions (numbered steps)
  - ✅ Reviews (display existing reviews)
- ❌ **I can rate recipes** - Outstanding feature not yet implemented

### Additional Features
- Responsive design with modern UI components
- Type-safe TypeScript implementation
- Comprehensive test coverage

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Run Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **UI Library:** HeroUI (NextUI)
- **Styling:** Tailwind CSS
- **Testing:** Jest + React Testing Library
- **Icons:** React Icons
