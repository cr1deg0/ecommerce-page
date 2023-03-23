# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Tested with](#tested-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- [Solution URL](https://github.com/cr1deg0/ecommerce-page)
- [Live Site URL]()

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - for strong typing
- [Sass](https://sass-lang.com/) - For styles

### Tested with

- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

### What I learned

This has been a great project to further my understanding of useContext and useReducer React Hooks, together with Typescript. For example, the shopping cart state management is implemented with useReducer and put into a Context to facilitate the use between different components.

There is a custom hook (useSmallScreen) to monitor the with of the window on resizing and control the rendering of components for larger or small screens.

I've used this project to learn Sass; I've decided to create some global styles files, containing mixins and variables as well as base styles, and a style sheet for each component. I've found this way of organising the code clear and concise.

### Continued development

- TO DO: figure out how to implement controlled tab navigation in the Lightbox component, i.e. move the focus to the lightbox "Close" button after the images thumbnails (at the moment the focus moves to the main page).
- Keep practising useContext and useReducer with Typescript.
- Keep developing knowledge of testing tools.

### Useful resources

- [Dave Gray React Typescript Shopping Cart tutorial](https://www.youtube.com/watch?v=HQFeTj0dGBo&t=82s) - This helped me to understand how to implement the shopping cart with reducer + context + typescript

## Author

- Frontend Mentor - [@cr1deg0](https://www.frontendmentor.io/profile/cr1deg0)
