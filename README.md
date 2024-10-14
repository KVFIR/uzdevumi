# Task Manager

Task Manager is a highly customizable work management app that incorporates popular task tracking solutions. The app includes a calendar, to-do list, semi-kanban board, goal progress tracking, and admin features for user and team management.

## Table of contents:

- [Tech used](#tech-used)
- [Feature overview](#feature-overview)
- [Sign up](#sign-up)
- [Installation](#installation)
- [Assets sources](#assets-sources)
- [Versioning](#versioning)

## Tech used

- Typescript
- React
- React Router
- Sass(Scss)
- Firebase auth
- Firebase Firestore
- Headless UI
- Dayjs
- Netlify
- Yarn
- Node16 module resolution
- i18next for internationalization

## Feature overview:

In this project, users are able to:

- Register, log in, and log out
- Add, edit, and remove tasks
- Separate and allocate tasks to logical containers (teams, statuses)
- Add and remove teams and statuses, with the ability to select status colors
- Display tasks in the following ways:
  - To-Do List
  - Semi-Kanban Board
  - Calendar (day, week, month)
- Monitor goal progress via the goals feature
- Get quick access to important elements on the Dashboard page
- Open a short presentation with screenshots and descriptions of functionality on each page (help button)
- Use the application in Latvian language
- View the current application version in the sidebar

Admin users have additional capabilities:
- Manage user roles
- Assign and remove teams from users
- Reorder teams and statuses
- Access an admin-specific list view for better team and task management

## Sign Up

You can enter any email, even non-existent ones. We strongly recommend creating your own account as some default content has time values based on the account creation date (to demonstrate the calendar feature). However, if you prefer not to create a new account, you can use the premade test account:

> login: test@test.com
> password: test12345

## Installation

```
git clone https://github.com/KVFIR/uzdevumi.git
yarn install
yarn start
```

## Assets sources

Icons: [material icons](https://fonts.google.com/icons)
Background graphic on home page: [stock image](https://pixabay.com/vectors/background-abstract-colorful-wave-6360865/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/KVFIR/uzdevumi/tags).
For a detailed list of changes for each version, please see our [CHANGELOG.md](CHANGELOG.md).