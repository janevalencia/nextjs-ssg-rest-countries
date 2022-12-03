# REST Countries API with Theme-Switcher

Solution developed by **Jane Valencia, 2022**.

This repo is to be forked, copied, and used for educational-purpose only.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Requirement](#requirement)
  - [Links](#links)
  - [Local setup](#local-setup)
- [Process](#process)
  - [Technical-stacks](#technical-stacks)
  - [Future backlogs](#future-backlogs)
  - [Useful resources](#useful-resources)
  - [Deployment](#deployment)
- [Author](#author)
- [Final thoughts](#final-thoughts)

## Overview

The REST Countries API is originally a challenge created by FEM (Frontend Mentor). 

Nonetheless, for the purpose of this repository, the challenge has been modified so that the solution is to be developed using the latest React framework, NextJS, and SSG (Static Site Generator) technology.

### The challenge

Your challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it similar or as close to the design file.

**To do this challenge, you should have a good understanding of HTML, CSS, JavaScript, and React.**

Check the mobile and desktop design in [/design](./design/) folder.

Check [the style-guide](./style-guide.md) for color-theme, typography, icons to be used.

There are no others assets for this challenge, as the country flags will be pulled from the [REST Countries API](https://restcountries.com) and you can use any icon font library for the icons.

Feel free to use other framework, such as Vue, Gatsby, React CRA, to develop your own solution.

### Requirement

Your users should be able to:

- See all countries from the API on the homepage.
- Search for a country using by its name, capital, and alternative spellings.
- Filter countries by region: Africa, Americas, Asia, Europe, Oceania.
- See the detail page of each country.
- Click through to the border countries on the detail page.
- Toggle the color scheme between light and dark mode.

Your app must be mobile-responsive!

### Links

- Solution Repository: [nextjs-ssg-rest-countries](https://github.com/janevalencia/nextjs-ssg-rest-countries)
- Live Site: [Where In The World? developed by Jane Valencia](https://nextjs-ssg-rest-countries.vercel.app/)

### Local setup

This project is bootstraped using `yarn`.

1. Make sure you have Nodejs installed on your machine.
2. Copy this project locally or download project as ZIP.
3. Open the code-editor of your choice and run `yarn` to start installing project dependencies.
4. Start the project on development server by running `yarn dev`.

If you wish to see the production build before deploying to any hosts, make sure you run `yarn build` and then `yarn start` to run the project in production-mode.

Further, before you deploy always making sure you have run `yarn lint` to ensure your project is following the standard coding-practice.

## Process

### Technical-stacks

- HTML5.
- CSS with [TailwindCSS](https://tailwindcss.com/).
- Typescript.
- [Next.js](https://nextjs.org/) - React framework.
- [React-Icons](https://react-icons.github.io/react-icons/) - Icons, but feel free to use FontAwesome or any other icon-libraries.
- [Axios](https://axios-http.com/docs/intro) - Promise-based HTTP Client, but feel free to use `fetch()`.
- The API I am using is https://restcountries.com/v2/

### Future backlogs

This project is currently final, though open to any suggestions to additional features and future improvements :) 

### Useful resources

Few articles that I found useful in developing this solution:

- NextJS SSG (get initial data on build) `getStaticProps()` https://nextjs.org/docs/basic-features/data-fetching/get-static-props 
- NextJS SSG (individual page on build) `getStaticPaths()` https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
- REST Countries API v2 to filter your response https://restcountries.com/v2/{service}?fields={field},{field},{field}
- Work with Axios in React project https://www.digitalocean.com/community/tutorials/react-axios-react
- Using Context API to have global dark/light theme-mode https://javascript.plainenglish.io/how-to-implement-dark-light-themes-in-a-next-js-app-using-context-hook-tailwindcss-336558dd4579

### Deployment

Make sure on your `package.json` has the following scripts:
```
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

Things you need to do before deploying the production build on Vercel:
1. Make sure you run `yarn lint`.
2. Then run `yarn build` and ensure you can create the static build without any errors. If you see any errors, please fix it before proceeding further.
3. Test your production-preview build by running `yarn start`.
4. Once it's all good, move on to Vercel!

As this project is built on using NextJS, I am deploying this solution using Vercel.

How to deploy NextJS project to Vercel:
1. Sign up a Vercel account using Github auth
2. Add new project to Vercel
3. Choose to connect with Github
4. Ensure your Github permits Vercel
5. When ask to configure project, no need to make any changes and just click Deploy!
6. Shouldn't take long and your project should now be live.
7. Optional: Vercel will take the default branch set on your Git project. If you wish to use other branch for example a `production` branch, then go to your project > settings > git > change the production branch to the branch you wish

Nonetheless, there are many ways to host your project for free, such as:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)

Simply choose the platform you are most comfortable with and familiar using.

**Remember to copy any of your production environment variable into the host platform you are using (if you have any).**

## Author

This solution is fully developed by Jane Valencia. 

Connect with me and drop a 👋 (hello):

- [LinkedIn](https://www.linkedin.com/in/janevalencia/)
- [Medium](https://medium.com/@janevalencia)
- [Instagram](https://www.instagram.com/janevlencia)

## Final thoughts

I had a lot of fun building this solution! 

Any feedback, mention, or questions over the solution are welcome. Please drop in your message into the [discussion-thread](TBA).

This challenge is completely free and made by the awesome team of Frontend Mentor (FEM). Please continue sharing it with anyone who will find it useful for practice.

**Have fun building!** 🚀
