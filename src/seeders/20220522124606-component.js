'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "components",
      [
        {
          id: 3,
          title: "백준 티어_1",
          author: "mori8",
          description: "만약 로드된 후 애니메이션을 다시 보고싶으시면 ctrl + shift + R 을 눌러서 강력 새로고침을 하시면 다시 보실 수 있습니다!",
          image: "https://i.ibb.co/LZGnH5R/2020-08-26-2-02-58.png",
          code: "[![Solved.ac프로필](http://mazassumnida.wtf/api/generate_badge?boj=백준아이디)](https://solved.ac/백준아이디)",
          variable: "백준아이디",
          default_value: "jae04099",
          link: "https://github.com/mazassumnida/mazassumnida/blob/master/README.md",
          like: 5,
          new: 2,
        }
      ]
    )
  },
  // up: async (queryInterface, Sequelize) => {
  //   await queryInterface.bulkInsert(
  //     "component_tags",
  //     [
  //       {
  //         title: "New"
  //       },
  //       {
  //         title: "Rank"
  //       },
  //       {
  //         title: "Typo"
  //       },
  //       {
  //         title: "Graph"
  //       },
  //       {
  //         title: "Badge"
  //       },
  //     ]
  //   )
  // },
  // up: async (queryInterface, Sequelize) => {
  //   await queryInterface.bulkInsert(
  //     "templates",
  //     [
  //       {
  //         title: "Bakjoon Ranker",
  //         author: "LEEHYUNHO2001",
  //         description: "백준을 열심히 푸는 사람들을 위한 템플릿 입니다.",
  //         image: "https://user-images.githubusercontent.com/47337588/171867122-83bbada0-d715-481d-9e5e-4d5fd6d4c8a4.png",
  //         link: "https://github.com/jae04099",
  //         like: 2,
  //       }
  //     ]
  //   )
  // },
  // up: async (queryInterface, Sequelize) => {
  //   await queryInterface.bulkInsert(
  //     "template_tags",
  //     [
  //       {
  //         title: "AllGithub"
  //       },
  //       {
  //         title: "Actions"
  //       },
  //       {
  //         title: "Game Mode"
  //       },
  //       {
  //         title: "Code Mode"
  //       },
  //       {
  //         title: "Dynamic"
  //       },
  //       {
  //         title: "Realtime"
  //       },
  //       {
  //         title: "Descriptive"
  //       },
  //       {
  //         title: "Simple but Innovative Ones"
  //       },
  //       {
  //         title: "Anime"
  //       },
  //       {
  //         title: "Minimalistic"
  //       },
  //       {
  //         title: "GIFS"
  //       },
  //       {
  //         title: "Just Images"
  //       },
  //       {
  //         title: "Badges"
  //       },
  //       {
  //         title: "Fancy Fonts"
  //       },
  //       {
  //         title: "Icons"
  //       },
  //       {
  //         title: "Retro"
  //       },
  //     ]
  //   )
  // },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("components", null, {});
  },
};
