# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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