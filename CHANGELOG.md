# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.10] - 2024-10-10

### Changed
- Updated TeamOrderChangeBtn component to be more consistent with StatusOrderChangeBtn
- Simplified team reordering logic in TeamOrderChangeBtn
- Improved accessibility labels for TeamOrderChangeBtn

## [1.1.9] - 2024-10-07

### Added
- Created AdminTeamTable component for displaying tasks grouped by teams
- Implemented useTeamTasks hook for fetching tasks by team

### Changed
- Updated AdminList component to use team-based task grouping
- Modified interfaces to support team-based task structure
- Adjusted styling in AdminList.module.scss for team-based layout
- Updated AddTaskForm to accept teamId prop

## [1.1.8] - 2024-10-03

### Changed
- Updated Sass configuration to silence deprecation warnings about legacy API
- Updated webpack-dev-server configuration to address deprecated options warnings
- Modified config-overrides.js to include new Sass and webpack-dev-server settings

### Fixed
- Resolved warnings related to deprecated JavaScript API in Sass
- Addressed issues with deprecated onAfterSetupMiddleware and onBeforeSetupMiddleware options in webpack-dev-server

## [1.1.7] - 2024-10-02

### Added
- Created AdminList component as a copy of List component
- Added AdminTaskTable component
- Added AdminListHelp component
- Created AdminList.module.scss for styling

## [1.1.6] - 2024-10-02

### Changed
- Migrated from legacy JS API to modern API in Dart Sass.

## [1.1.5] - 2024-10-02

### Changed
- Converted Spaces to Teams for better organization

## [1.1.4] - 2024-10-02

### Changed
- Updated user authentication process to include role-based access
- Improved error handling in login and signup processes

### Fixed
- TypeScript errors related to user context and authentication

## [1.1.3] - 2024-10-01

### Changed
- Updated Latvian translations for various components
- Minor translation issues in Latvian language files

## [1.1.2] - 2024-10-01

### Added
- Display of application version in the sidebar
- Improved spacing in the sidebar layout

### Changed
- Updated Latvian translations for various components
- Refactored Sidebar component to include version display

### Fixed
- Issues with JSON imports in TypeScript by adding json.d.ts

## [1.1.1] - 2024-10-01

### Added
- Latvian language support
- Internationalization setup with react-i18next

### Changed
- Updated Home component to use translations
- Moved localization files to public folder

## [1.0.11] - 2024-10-01

### Changed
- Updated `module` and `moduleResolution` settings in `tsconfig.json` to use Node16
- Fixed Firebase auth module import issues

## [1.0.10] - 2024-10-01

### Changed
- Updated project dependencies
- Fixed yarn warnings

## [1.0.9] - 2024-10-01

### Changed
- Updated React and React DOM to the latest version
- Updated TypeScript to version 5.6.2
- Updated various dependencies to their latest versions
- Resolved issues with PostCSS and Sass loaders
- Updated webpack and related plugins

### Fixed
- Resolved peer dependency warnings
- Fixed compatibility issues between different package versions

### Security
- Updated dependencies to resolve security vulnerabilities

### Added
- New resolutions in package.json to ensure consistent package versions

## [1.0.8] - 2023-10-01

### Changed
- Updated webpack configuration in config-overrides.js
- Removed resolve-url-loader to address postcss.plugin deprecation warning
- Added postcss-loader with specific configuration to resolve PostCSS issues
- Updated sass-loader configuration to use modern Sass API

## [1.0.7] - 2023-10-01

### Changed
- Updated PostCSS to version 8
- Updated sass-loader, resolve-url-loader, and postcss-loader
- Added custom webpack configuration to resolve Sass deprecation warnings

## [1.0.6] - 2023-10-01

### Security
- Updated Firebase and related packages to resolve @grpc/grpc-js vulnerability
- Updated postcss to version 8.4.31 to resolve parsing error
- Updated nth-check to version 2.0.1 to resolve regular expression complexity issue

### Dependencies
- Added @testing-library/dom to resolve peer dependency warning
- Updated @babel/plugin-syntax-flow and @babel/plugin-transform-react-jsx
- Added @babel/core to resolve multiple peer dependency warnings

## [1.0.5] - 2023-10-01

### Changed
- Migrate to Yarn

### Fixed
- Resolved issues in NewGoal component
- Removed unused variables and imports
- Refactored handleSubmit function for better goal creation flow

## [1.0.0] - 2023-10-01

### Added
- Initial release of the project
- Basic task management functionality
- User authentication

### Changed
- Updated dependencies to resolve security vulnerabilities
- Resolved peer dependency warnings

### Fixed
- Security vulnerabilities in various dependencies