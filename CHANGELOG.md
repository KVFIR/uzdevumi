# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-10-01

### Added
- Initial release of the project
- Basic task management functionality
- User authentication

### Changed
- Updated dependencies to resolve security vulnerabilities
- Resolved peer dependency warnings

### Fixed
- Security vulnerabilities in various dependencies

## [1.0.3] - 2024-10-01

### Security
- Updated Firebase and related packages to resolve @grpc/grpc-js vulnerability
- Updated postcss to version 8.4.31 to resolve parsing error
- Updated nth-check to version 2.0.1 to resolve regular expression complexity issue

### Dependencies
- Added @testing-library/dom to resolve peer dependency warning
- Updated @babel/plugin-syntax-flow and @babel/plugin-transform-react-jsx
- Added @babel/core to resolve multiple peer dependency warnings
