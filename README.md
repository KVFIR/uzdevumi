# Task Manager

Task Manager is a fairly customizable work management app that uses some popular task tracking solutions. The app includes a calendar, to-do list, semi-kanban board, and goal progress tracking.

## Table of contents:

- [Tech used](#tech-used)
- [Live version](#live)
- [Feature overview](#feature-overview)
- [Screenshots](#screenshots)
- [Performance](#performance)
- [Sign up](#sign-up)
- [Installation](#installation)
- [Assets sources](#assets-sources)

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

## Live:

https://mjezewski-taskmanager.netlify.app/

## Feature overview:

In this project user is able to:

- Register, log in and log out
- Add, edit and remove tasks
- Separate and allocate tasks to logical containers (spaces, statuses)
- That also means adding and removing above-mentioned, additionally, user can select status color displayed in the section headers
- Display tasks in the following ways:
  - To-Do List
  - Semi-Kanban Board
  - Calendar (day, week, month)
- Monitor goal progress via goals feature
- Get quick access to most important elements in Dashboard page
- Open short presentation with screenshots and description of functionality in each page (help button)

## Screenshots:

![task-manager-dashboard](https://user-images.githubusercontent.com/57302040/192273372-cdf8891c-a54d-4e63-bbd0-8977f6c22cd6.png)
![task-manager-list](https://user-images.githubusercontent.com/57302040/192273366-f68a753f-c322-4eae-a30f-f57579281bb5.png)
![task-manager-board](https://user-images.githubusercontent.com/57302040/192273378-dce2b4e0-3407-4a45-8dac-1124afc6af6b.png)
![task-manager-calendar-day](https://user-images.githubusercontent.com/57302040/192273381-33b882fe-ce3f-4b24-9ebc-bda675c90fae.png)
![task-manager-calendar-week](https://user-images.githubusercontent.com/57302040/192273370-d7a94abe-044e-4bbf-90db-665b4c0b4e55.png)
![task-manager-calendar-month](https://user-images.githubusercontent.com/57302040/192273383-47c6f849-b471-481f-9293-ef88a8cb73d1.png)
![task-manager-updatetask](https://user-images.githubusercontent.com/57302040/192273363-4cc66d05-a66c-4a1d-97dd-2b4a4e424a72.png)
![task-manager-goalPage](https://user-images.githubusercontent.com/57302040/192273373-28971418-5972-4233-a48d-f0ea4eca9cfe.png)
![task-manager-addgoal](https://user-images.githubusercontent.com/57302040/192273403-5986483d-c131-42c3-83c8-0cbcdcb1616d.png)
![task-manager-mobile](https://user-images.githubusercontent.com/57302040/192273355-7135a462-c649-4e59-8664-7ed9c4df95cc.png)

## Performance

![task-manager-lighthouse](https://user-images.githubusercontent.com/57302040/192273320-8d36f038-1554-4fab-845b-7940edde7d1e.png)

(Results may be diffrent on your device)

## Sign Up

You can enter any, even non-existent, email. I strongly recommend creating your own account because part of default content has attached time values based on the date of account creation (to demonstrate the calendar feature). However, if you don't want to create a new account, you can use premade test acc:

> login: test@test.com <br />
> password: test12345

## Installation

> git clone https://github.com/Karriuz/task-manager.git <br />
> npm install <br />
> npm run start

## Assets sources

icons: [material icons](https://fonts.google.com/icons) <br />
Background graphic in home page: [stock image](https://pixabay.com/vectors/background-abstract-colorful-wave-6360865/)
