"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("templates", [
      {
        title: "Hi, I'm Thai Branga!",
        author: "Thaiane",
        description: "Code style theme.",
        image:
          "https://user-images.githubusercontent.com/47337588/172504116-06357d88-531e-4762-a0fb-f5b80d5fde58.png",
        link: "https://github.com/Thaiane/Thaiane",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("template_tags", [
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
    ]);
    await queryInterface.bulkInsert("Theme_Tag", [
      {
        template_id: 1,
        template_tags_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    const templates = await queryInterface.sequelize.query(
      `SELECT * FROM readme.templates;`
    );
    const templatesRows = templates[0];
    await queryInterface.bulkInsert("components", [
      {
        title: "Github Followers",
        author: "shields.io",
        description:
          "A service for concise, consistent, and legible badges in SVG and raster format, which can easily be included in GitHub readmes or any other web page.",
        image:
          "https://user-images.githubusercontent.com/47337588/172857390-af8bb997-8db5-4d6f-b740-a581940c2724.png",
        code: "[![GitHub %user%](https://img.shields.io/github/followers/%user%?label=follow&style=social)](https://github.com/%user%)",
        variable: "%user%",
        type: "badge",
        link: "https://shields.io/",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 1,
      },
      {
        title: "Twitter",
        author: "shields.io",
        description:
          "A service for concise, consistent, and legible badges in SVG and raster format, which can easily be included in GitHub readmes or any other web page.",
        image:
          "https://user-images.githubusercontent.com/47337588/172848922-5c06584e-13f2-421b-9434-61805190f054.png",
        code: "[![Twitter: %user%](https://img.shields.io/twitter/follow/%user%?style=social)](https://twitter.com/%user%)",
        variable: "%user%",
        type: "badge",
        link: "https://shields.io/",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 1,
      },
      {
        title: "LinkedIn",
        author: "shields.io",
        description:
          "A service for concise, consistent, and legible badges in SVG and raster format, which can easily be included in GitHub readmes or any other web page.",
        image:
          "https://user-images.githubusercontent.com/47337588/172857669-05404aac-e136-48be-a493-d04d258cafc7.png",
        code: "[![Linkedin: %user%](https://img.shields.io/badge/-%user%-%bgColor%?style=flat-square&logo=Linkedin&logoColor=%logoColor%&link=https://www.linkedin.com/in/%user%/)](https://www.linkedin.com/in/%user%/)",
        variable: "%user%, %bgColor%, %logoColor%",
        type: "badge",
        link: "https://shields.io/",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 1,
      },
      //
      {
        title: "user's velog latest posts(default)",
        author: "eungyeole",
        description: "velog 최신 포스트 가져오기",
        image:
          "https://user-images.githubusercontent.com/78518132/175769727-54b30779-f302-49e2-9874-9e0dc31a4610.png",
        code: `<a href=""https://velog.io/%user%"">
        <img src="https://velog-readme-stats.vercel.app/api?name=%user%&color=default"/>
       </a>`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/eungyeole/velog-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "user's velog latest posts(dark)",
        author: "eungyeole",
        description: "velog 최신 포스트 가져오기",
        image:
          "https://user-images.githubusercontent.com/78518132/175813324-e9a8e68c-2c07-4124-98f6-538de86660a9.png",
        code: `<a href=""https://velog.io/%user%"">
        <img src="https://velog-readme-stats.vercel.app/api?name=%user%&color=dark"/>
       </a>`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/eungyeole/velog-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Stats(default)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175770597-fb0c5cbc-78ba-47c1-80e8-81ad0bc5248c.png",
        code: `"<a href=""https://github.com/variable/github-readme-stats"">
        <img src="https://github-readme-stats.vercel.app/api?username=%user%&theme=default&show_icons=true"/>
       </a>"`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Stats(dark)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813447-8e8ffe04-acd7-4571-9ecf-4def4cd17d95.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=dark&show_icons=true"/></a>`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Stats(radical)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813535-c7f5f182-730e-479b-9afb-753d03b8a1af.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=radical&show_icons=true"/></a>`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Stats(merko)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813557-4ef4db10-b884-43f5-a415-551b4ea8d3f2.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=merko&show_icons=true"/></a>`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Stats(gruvbox)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813913-8c5f5024-a5d2-4965-841a-28f716ff7b4c.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=gruvbox&show_icons=true"/></a>`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Stats(gruvbox_light)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813889-ad4782df-d976-467f-98dd-ef12100536a4.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=gruvbox_light&show_icons=true"/></a>`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Repo card(default)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175770666-7e7cc68a-cfa7-41fe-b044-26a54b36659e.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=default&show_icons=true"/></a>`,
        variable: "%user%, %reponame%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Repo card(dark)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813742-98e6c566-ebfb-4ca0-8bc7-5034d6d109d2.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=dark&show_icons=true"/></a>`,
        variable: "%user%, %reponame%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Repo card(radical)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813755-1c1065a5-e73e-484f-8e62-9d417a371c84.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=radical&show_icons=true"/></a>`,
        variable: "%user%, %reponame%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Repo card(merko)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813772-ce25e990-07f4-4f0c-a2ba-97efdb62c871.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=merko&show_icons=true"/></a>`,
        variable: "%user%, %reponame%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Repo card(gruvbox)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813823-12f87f99-ba7d-4a5a-bb54-c62ab96251e1.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=gruvbox&show_icons=true"/></a>`,
        variable: "%user%, %reponame%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "GitHub Readme Repo card(gruvbox_light)",
        author: "anuraghazra",
        description: "⚡ Dynamically generated stats for your github readmes",
        image:
          "https://user-images.githubusercontent.com/78518132/175813865-27f3dbed-e24b-4eca-b52b-3a1d760ef2cf.png",
        code: `<a href-"https://github.com/%user%/%reponame%" ><img src="https://github-readme-stats.vercel.app/api/pin/?username=%user%&repo=%reponame%&theme=gruvbox_light&show_icons=true"/></a>`,
        variable: "%user%, %reponame%",
        type: "image",
        link: "https://github.com/anuraghazra/github-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "user's velog latest posts list",
        author: "eungyeole",
        description: "velog 최신 포스트 목록 가져오기",
        image:
          "https://user-images.githubusercontent.com/78518132/175771076-384ad5ad-bcf8-4a7f-a255-2f0bc497d5d4.png",
        code: `<a href=""https://velog.io/%user%"">
        <img src="https://velog-readme-stats.vercel.app/api/list?name=%user%&color=default"/>
       </a>`,
        variable: "%user%",
        type: "image",
        link: "https://github.com/eungyeole/velog-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
      {
        title: "velog-readme-badge",
        author: "eungyeole",
        description: "velog 뱃지 가져오기",
        image:
          "https://camo.githubusercontent.com/e3b47fec188c3241c9d30505e52e0f7fc1d83f5adf12d837299f9677ae04b195/68747470733a2f2f76656c6f672d726561646d652d73746174732e76657263656c2e6170702f6170692f62616467653f6e616d653d65756e6779656f6c65",
        code: `<a href=https://velog.io/@%user%><img src="https://velog-readme-stats.vercel.app/api/badge?name=%user%"/> </a>`,
        variable: "%user%",
        type: "badge",
        link: "https://github.com/eungyeole/velog-readme-stats",
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        related_template: 100,
      },
    ]);
    await queryInterface.bulkInsert("component_tags", [
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
    ]);
    await queryInterface.bulkInsert("Function_Tag", [
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
    ]);
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
