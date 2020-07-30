# finiam.com

Finiam's website. Made with Gatsby and Preact.

Disclaimer: This is using `gatsby-plugin-preact` on production so be aware of that when importing external React libraries that might not work with Preact.

## Scripts

- `yarn dev` to run in development mode.
- `yarn build` to output the website to a `public` folder. Ideal for production environments.
- `yarn lint` to run JS linters
- `yarn lint-styles` to run CSS (and CSS-in-JS) linters

## Notables

Never update `gatsby-remark-relative-images`. Their `0.3.0` version will BREAK every single image on the blog right now so please avoid.
