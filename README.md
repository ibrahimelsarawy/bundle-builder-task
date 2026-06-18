# Frontend Bundle Builder

## Overview

This project is a React + TypeScript implementation of the Bundle Builder coding exercise.

The application allows users to build a custom security system through a multi-step accordion interface, configure product variants, manage quantities, review their selections in real time, and save their configuration for future visits.

## Features

### Bundle Builder

* 4-step accordion workflow
* Camera selection
* Plan selection
* Sensor selection
* Accessory selection
* Step-by-step navigation

### Product Configuration

* Variant/color selection
* Variant-specific quantity tracking
* Quantity steppers
* Product selection highlighting
* Dynamic pricing display
* Discount badges

### Review Panel

* Live bundle summary
* Products grouped by category
* Quantity controls synchronized with product cards
* Shipping section
* Savings calculation
* Dynamic totals
* Checkout simulation

### Persistence

* Save bundle configuration using Local Storage
* Restore saved bundle on future visits or page refresh

### Responsive Design

* Desktop layout matching the provided design
* Tablet support
* Mobile-friendly responsive experience

## Tech Stack

* React
* TypeScript
* Vite
* Zustand
* Tailwind CSS
* React Icons
* Sonner

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Implementation Notes

### State Management

Zustand is used as the single source of truth for:

* Selected products
* Variant selections
* Product quantities
* Saved bundle data

### Variant Handling

Each product variant maintains its own quantity. Quantities are tracked independently and reflected in the review panel as separate entries.

### Persistence

Bundle configurations are stored in Local Storage and restored automatically when the application loads.

## Trade-offs / Notes

* Product data is driven from local data files.
* Checkout functionality is simulated for the purpose of the exercise.
* Local Storage is used for persistence.
* The application is structured using reusable and maintainable React components.

## Test Information

**Test ID: 41168**

## Live Demo

https://bundle-builder-task-beta.vercel.app/
