# Copilot Instructions for AI Agents

## Project Overview
- This is an Angular (v7) single-page application following the Tour of Heroes tutorial structure.
- Main features: hero dashboard, hero detail views, search, and messaging.
- Code is organized by feature in `src/app/components/` and by service in `src/app/services/`.
- Mock data is provided in `src/app/mock/heroes.ts`.

## Key Architectural Patterns
- **Component-driven**: Each UI feature is a component under `src/app/components/` (e.g., `dashboard`, `heroes`, `hero-detail`, `hero-search`, `messages`).
- **Service-based data flow**: Data and messaging are handled by Angular services in `src/app/services/` (notably `hero.service.ts` and `message.service.ts`).
- **Routing**: Navigation is managed in `src/app/app-routing.module.ts`.
- **In-memory data**: Uses `in-memory-data.service.ts` for simulating HTTP requests during development.

## Developer Workflows
- **Start dev server**: `ng serve` (default at http://localhost:4200/)
- **Build**: `ng build` (add `--prod` for production)
- **Unit tests**: `ng test` (Karma)
- **E2E tests**: `npx cypress open` (Cypress, see `cypress/`)
- **Linting**: `npx eslint . --ext .ts` (ESLint for TypeScript)
- **Generate code**: Use Angular CLI, e.g., `ng generate component <name>`

## Project-Specific Conventions
- **Feature folders**: Each major feature/component has its own folder under `src/app/components/`.
- **Service injection**: Services are injected via Angular's dependency injection, not imported directly.
- **SCSS styling**: Styles are written in SCSS, one file per component.
- **Testing**: Each component/service has a corresponding `.spec.ts` file for unit tests.
- **No backend**: All data is mocked; no real API calls are made.

## Integration Points
- **Angular CLI**: All build, serve, and test commands use Angular CLI.
- **In-memory web API**: `in-memory-data.service.ts` intercepts HTTP requests for local development.
- **No external state management**: State is managed via services and component inputs/outputs.

## Examples
- To add a new feature, create a new component in `src/app/components/`, add a route in `app-routing.module.ts`, and (if needed) a service in `src/app/services/`.
- To mock new data, update `src/app/mock/heroes.ts` and adjust `in-memory-data.service.ts`.

## Key Files
- `src/app/app.module.ts`: Main Angular module
- `src/app/app-routing.module.ts`: Routing configuration
- `src/app/services/hero.service.ts`: Hero data service
- `src/app/services/message.service.ts`: Messaging service
- `src/app/mock/heroes.ts`: Mock hero data
- `src/app/components/`: All UI components

---
If you are unsure about a workflow or pattern, check the README.md or look for examples in the `src/app/components/` and `src/app/services/` folders.
