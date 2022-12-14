const process = require("node:process");
require("dotenv").config();

module.exports = {
  application: {
    mongodbUrl: process.env.MONGO_URL
  },
  plugins: [
    "@indiekit/preset-hugo",
    "@indiekit/store-github"
  ],
  publication: {
    me: "https://yannickschutz.com",
    postTypes: [
      {
        type: "note",
        name: "Journal entry",
        post: {
          path: "content/journal/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "/journal/{yyyy}-{MM}-{dd}-{slug}"
        },
        media: {
          path: "content/journal/images/{yyyy}-{MM}-{dd}-{filename}",
          url: "{yyyy}-{MM}-{dd}-{filename}"
        }
      },
      {
        type: "photo",
        name: "Photograph",
        post: {
          path: "content/journal/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "journal/{yyyy}-{MM}-{dd}-{slug}"
        },
        media: {
          path: "content/journal/images/{yyyy}-{MM}-{dd}-{filename}",
          url: "{yyyy}-{MM}-{dd}-{filename}"
        }
      }
    ]
  },
  "@indiekit/preset-hugo": {
    frontMatterFormat: "yaml"
  },
  "@indiekit/store-github": {
    user: "ys",
    repo: "bonjour",
    branch: "main"
  }
};
