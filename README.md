<p align="center">
  <a href="https://github.com/EllisMin/gatsby-blog-mdx">
    <img alt="icon" src="_assets/icon-code-rainbow.png" width="60" />
  </a>
</p>
<h1 align="center">
  gatsby-blog-mdx
</h1>

## Description

A ready-to-use, customizable personal blog with minimalistic design

## Demo

[Demo](https://gatsby-blog-mdx.now.sh/) is available here

## Features

- Simple blog with responsive design

  ![](/_assets/readme-images/imac-phone.png)

- Light / Dark Mode Switch

  ![](/_assets/readme-images/theme-chg.gif)

- Fast !

  - **gatsby-blog-mdx** is built on top of [Gatsby.js](https://www.gatsbyjs.org/) that pre-builds pages that's delivered to viewers instantly

- Mdx (or Markdown) to create post & about page

  - **Mdx** enables to use React components along with markdown in your post. This blog also includes some pre-built components to enhance your blog experience.

  - [Learn more](https://gatsby-blog-mdx.now.sh/2020/05/md-mdx/)

- Code syntax highlighting (Light / Dark)

  ![](/_assets/readme-images/light-dark-code.png)

- Comments plugins

  - Supports Facebook | Disqus | Utterances(GitHub) Comments

* Social Media Links & Share Buttons

  - Supports Email | GitHub | Facebook | Twitter | LinkedIn | Instagram | Medium

* Google Analytics

  - Google Analytics measure how users interact with your blog

- SEO + sitemap + RSS

  - Auto generates metadata & sitemap & rss to boost search engine result for your website.

* Easy & Highly Customizable

  - Customize everything by tweaking [customize.js](https://gatsby-blog-mdx.now.sh/2020/05/4-customize/)

## Get Started 🚀

### More detailed guide is available on [Demo site](https://gatsby-blog-mdx.now.sh)

1.  **Download using npx | npm**

    ```bash{promptUser: root}{outputLines: 1, 3}
    # Using npx
    npx gatsby new my-blog https://github.com/EllisMin/gatsby-blog-mdx
    # Using npm
    npm i -g gatsby-cli && gatsby new my-blog https://github.com/EllisMin/gatsby-blog-mdx
    ```

    > If you haven't, [download npm](https://nodejs.org/en/) with Node.js

2.  **That's it! Run your blog locally**

    ```bash{promptUser: root}
    cd my-blog
    npm start
    ```

    Then, open your web browser and go to `localhost:8000`

    **Post Example**

    Create `*.mdx` under `_posts` directory in the root directory

    ```
    ---
    title: First Post
    date: 2020-05-23
    tags: [category1]
    ---

    ## First post
    This is first post
    ```

    ### Learn more about [creating post](https://gatsby-blog-mdx.now.sh/2020/05/3-create-post/)

3.  **Modify `customize.js` to your needs**

    ### Learn more about [customizing config](https://gatsby-blog-mdx.now.sh/2020/05/4-customize/)

4.  **Deploy your Blog on Netlify 💫**

    ### Learn [how to deploy your blog online](https://gatsby-blog-mdx.now.sh/2020/05/5-deploy/)


## What's inside? 🔍
```
.
├── _assets             # Contains profile image & favicon
├── _posts              # All of your posts goes in here as well as any other files
├── src                 # All the front-end source code
├── customize.js        # ----> Modify this to customize your blog
├── customize-styles.js # ----> Modify this to customize stylings
├── ...
├── .gitignore          # Contains file names that won't be pushed to git repository
├── .prettierrc         # Helps formatting your code
├── gatsby-browser.js   # Contains gatsby browser APIs / extension of default gatsby settings
├── gatsby-config.js    # Contains site meta data & gatsby plugins
├── gatsby-node.js      # Contains gatsby node APIs--it's where post pages & slugs are created
├── gatsby-rss.js       # Contains gatsby RSS feed plugin configuration
├── gatsby-ssr.js       # Contains gatsby server-side rendering APIs
├── LICENSE             # Contains MIT License
├── package-lock.json   # Contains versions of npm dependencies used for this project
├── package.json        # Node.js manifest file that contains project's meta data
└── README.md           # Markdown file that describes the project
```

## Issues

[Issues](https://github.com/EllisMin/gatsby-blog-mdx/issues)

## License

[MIT](https://github.com/EllisMin/gatsby-blog-mdx/blob/master/LICENSE)