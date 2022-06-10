'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "templates",
      [
        {
          title: "Hi, I'm Thai Branga!",
          author: "Thaiane",
          description: "Code style theme.",
          image: "https://user-images.githubusercontent.com/47337588/172504116-06357d88-531e-4762-a0fb-f5b80d5fde58.png",
          link: "https://github.com/Thaiane/Thaiane",
          like: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    );
    await queryInterface.bulkInsert(
      "template_tags",
      [
        {
          title: "AllGithub",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Actions",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Game Mode",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Code Mode",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dynamic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Realtime",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Descriptive",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Simple but Innovative Ones",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Anime",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Minimalistic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "GIFS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Just Images",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Badges",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fancy Fonts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Icons",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Retro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
    await queryInterface.bulkInsert(
      "Theme_Tag",
      [
        {
          template_id: 1,
          template_tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
    const templates = await queryInterface.sequelize.query(`SELECT * FROM readme.templates;`)
    const templatesRows = templates[0];
    await queryInterface.bulkInsert(
      "components",
      [
        {
          title: "Github Followers",
          author: "shields.io",
          description: "A service for concise, consistent, and legible badges in SVG and raster format, which can easily be included in GitHub readmes or any other web page.",
          image: "https://user-images.githubusercontent.com/47337588/172857390-af8bb997-8db5-4d6f-b740-a581940c2724.png",
          code: "[![GitHub %user%](https://img.shields.io/github/followers/%user%?label=follow&style=social)](https://github.com/%user%)",
          variable: "%user%",
          type: "badge",
          link: "https://shields.io/",
          like: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          related_template: 1
        },
        {
          title: "Twitter",
          author: "shields.io",
          description: "A service for concise, consistent, and legible badges in SVG and raster format, which can easily be included in GitHub readmes or any other web page.",
          image: "https://user-images.githubusercontent.com/47337588/172848922-5c06584e-13f2-421b-9434-61805190f054.png",
          code: "[![Twitter: %user%](https://img.shields.io/twitter/follow/%user%?style=social)](https://twitter.com/%user%)",
          variable: "%user%",
          type: "badge",
          link: "https://shields.io/",
          like: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          related_template: 1
        },
        {
          title: "LinkedIn",
          author: "shields.io",
          description: "A service for concise, consistent, and legible badges in SVG and raster format, which can easily be included in GitHub readmes or any other web page.",
          image: "https://user-images.githubusercontent.com/47337588/172857669-05404aac-e136-48be-a493-d04d258cafc7.png",
          code: "[![Linkedin: %user%](https://img.shields.io/badge/-%user%-%bgColor%?style=flat-square&logo=Linkedin&logoColor=%logoColor%&link=https://www.linkedin.com/in/%user%/)](https://www.linkedin.com/in/%user%/)",
          variable: "%user%, %bgColor%, %logoColor%",
          type: "badge",
          link: "https://shields.io/",
          like: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          related_template: 1
        },
      ],
    );
    await queryInterface.bulkInsert(
      "component_tags",
      [
        {
          title: "New",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rank",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Typo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Graph",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
    await queryInterface.bulkInsert(
      "Function_Tag",
      [
        {
          component_id: 1,
          component_tags_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          component_id: 2,
          component_tags_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          component_id: 3,
          component_tags_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
    // },
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("components", null, {});
    await queryInterface.bulkDelete("component_tags", null, {});
    await queryInterface.bulkDelete("templates", null, {});
    await queryInterface.bulkDelete("template_tags", null, {});
    await queryInterface.bulkDelete("Theme_Tag", null, {});
    await queryInterface.bulkDelete("Function_Tag", null, {});
  },
};
