# ReactJS-ExpressJS-Webpack3 boilerplate
Hello there, young padawan! You've stumbled upon my boilerplate. So, what exactly is this?

## What does it do?
In a nutshell, this repository sets up a project with live-reload capability. That function is driven by the latest versions of react-hot-loader and Webpack 3. Everything is served by ExpressJS. As a result, this also uses webpack-hot-middleware and webpack-dev-middleware. Using this repository, you can edit the JSX files and the changes will be immediately shown in your browser window after a reload.

## Setting up and running
In order to set everything up and run:

   git clone git@github.com:ivanempire/webpack3-express-react-boilerplate.git
   cd webpack3-express-react-boilerplate
   npm install
   npm start

And then you start developing! All set.

## But there's already...
There are probably people thinking: "But wait, there are a bunch of boilerplate repos, why make another one?" The thing is, there are, but I noticed a couple issues (well, not issues, but I guess things I didn't like about them):

- Webpack 1.x.x --> many use an outdated version of Webpack. Everything changed when Webpack 2 came out, as a result, the loaders' section has to be edited for the new version.

- Lots of plugins --> other repositories have a bunch of HTML injection plugins, linting, etc. Although that's awesome, it's overkill for a starting point. This repository does not even include styles - add them yourselves, and expand the project as you see fit. This is meant to be a skeleton setup. I find it easier to start from very little and casually build up, as opposed to starting with every library ever and maniacally gutting away anything you don't need.
