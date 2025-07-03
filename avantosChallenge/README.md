# Avantos Form Mapping Challenge

## 📥 Journey Builder – Prefill Mapping UI

A React-based coding challenge solution for Avantos, this project implements a simplified interface for managing field prefill logic across a Directed Acyclic Graph (DAG) of forms. It focuses on modular architecture, clean UX, and extensibility by design.

## Status

> **🚧 _Currently implementing field-mapping UI and graph-driven form rendering._ 🚧**

## Structure

- `src/components/`: UI components like `FormList`, `PrefillEditor`
- `src/hooks/`: Custom hooks like `useFormGraph`
- `src/api/`: API integration logic (e.g., `fetchGraph.ts`)
- `src/utils/`: Graph helpers, data source logic
- `src/types/`: TypeScript interfaces (`formTypes.ts`)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the mock API server

```bash
npm start
```

This will start the mock API server on `http://localhost:3000`

### 3. Start the development server

```bash
npm run dev
```

The React development server will start on `http://localhost:5173` (or similar port shown in terminal).

> **Note**: Both servers need to be running simultaneously. The React app proxies API requests to the mock server via the Vite configuration.

### 4. Open your browser

Navigate to the development server URL to view the application.

## ✨ Features

- **Form Graph Rendering**: Parses mock API response to display all available forms and their fields.
- **Prefill Editor UI**: Allows users to view, configure, and clear field-level prefill mappings per form.
- **Dynamic Source Picker Modal**: Users can select source fields from direct or transitive dependencies.
- **Inline Transform Options**: Includes support for calculated transforms like age and uppercase formatting.
- **Test Runner**: Preview prefill output for any form based on current mappings and mock data.
- **Pluggable Architecture**:
  - Easily add new data sources (e.g., global properties) via `dataSources.ts`
  - Extensible field transformation logic in `transformFunctions.ts`

---

## 🧠 Architecture Notes

- **Type-safe and Scalable**: All major entities—forms, fields, mappings—are typed via `formTypes.ts`.
- **Component Composition**:
  - `PrefillEditor`: manages mapping logic and editing state
  - `MappingRow`: renders individual field states
  - `SourcePickerModal`: lists candidate source fields based on DAG traversal
- **Hooks & Contexts**:
  - `useFormGraph`: handles normalized graph structure and fetching
  - `MappingContext` / `FormDataContext`: isolates state updates from UI logic

---
