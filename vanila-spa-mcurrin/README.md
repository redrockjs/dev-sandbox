# Vanillin
> Single-Page App built with JS and no dependencies - GH Pages support added on this fork

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/single-page-app-vanilla-js)](https://github.com/MichaelCurrin/single-page-app-vanilla-js/tags/?include_prereleases&sort=semver)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Hosted with GH Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://pages.github.com/)

_Badges created with [Badge Generator](https://michaelcurrin.github.io/badge-generator/badge-generator)._

This template can be used to generate a site, or for interest to look at the code to understand the fundamentals of what a SPA like React or Vue does for you internally.

But this is not being developed further or maintained. See [Notes](#notes) for more info.


## Preview

<div align="center">
    <a href="https://michaelcurrin.github.io/single-page-app-vanilla-js/">
        <img src="/sample.png" alt="Sample screenshot" width="700" title="Go to website">
    </a>
</div>

<div align="center">

[![View site GH Pages](https://img.shields.io/badge/View_site-GH_Pages-2ea44f?style=for-the-badge)](https://michaelcurrin.github.io/single-page-app-vanilla-js/)

</div>


## About

This app works with HTML, CSS and plain JS.

There are no dependencies. You don't even need Node.

The site is served as static site on [GitHub Pages](https://pages.github.com/). There is no build step. Just static assets - [index.html](/index.html) and the [static](/static/) directory. Unfortunately, on GH Pages you have to serve from the project root or `docs`, otherwise this app would have been added to a folder like `public` or `frontend`.


## Related projects

SPA templates that also have no Node or build step:

- https://github.com/MichaelCurrin/react-frontend-quickstart 
- https://github.com/MichaelCurrin/vue-frontend-quickstart

Traditional SPA app templates:

- https://github.com/MichaelCurrin/react-quickstart 
- https://github.com/MichaelCurrin/vue-quickstart


## Usage
> How to run locally

Clone this repo or your fork of it.

Start a local dev server in the repo root - see my [gist](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95) for ideas.

Open the browser at your localhost URL _without_ a subpath. e.g.

- https://localhost:5500

The pages are served under this subpath. But unfortunately you cannot go there directly, because of how this app's routing works, when set up to run for GH Pages as subpath. If you set up with Netlify then you don't need the subpath.

- http://localhost:8000/single-page-app-vanilla-js/


## Deploy

Just copy this project using the template button. Don't bother forking unless you want to contribute changes back here.

Deploy to GH Pages using your repo's Settings. There is no build step needed and so no GH Actions workflow.

View the deployed site:

- https://michaelcurrin.github.io/single-page-app-vanilla-js/


## Notes

### Background

This repo is forked from [dcode-youtube/single-page-app-vanilla-js](https://github.com/dcode-youtube/single-page-app-vanilla-js). I discovered it through this [dev.to post](https://dev.to/dcodeyt/building-a-single-page-app-without-frameworks-hl9). I liked the idea of building a SPA from scratch and thought the JS and CSS might come in useful sometime.

Regarding my contributions on my fork, I improved the posts section, added to the docs and changed up the routing so app can run on a project subpath on GitHub Pages. This last part involved moving all content to the project root or `static` directory and using the project name as prefix in all URLs, to match what GH Pages will do expect (e.g. `/posts` needs to be `/single-page-app-vanilla-js/posts`).

I also removed use Express and `server.js` since I documented an alternate way of serving the project locally, without an `npm install` step.

### Project name

I named the project _Vanillin_ in keeping with the vanilla JS approach of the original project.

See [Vanillin - Wikipedia](https://en.wikipedia.org/wiki/Vanillin) page.

> It is the primary component of the extract of the vanilla bean

### Limitations

There are some limitations. 

Like refreshing a page or inputting a valid path manually in the address bar will give a error result. So maybe sure to start off from the root page each time and you make a change to the app locally. Some routing on a local static server (in SPA mode) or Netlify config can fix this.

There is no hot-reloading with a basic static server but some provide this option for you.


## License

Released under [MIT](/LICENSE).

Forked from [dcode-youtube/single-page-app-vanilla-js](https://github.com/dcode-youtube/single-page-app-vanilla-js) which is licensed under `ISC` (similar to MIT) according to `package.json`.
