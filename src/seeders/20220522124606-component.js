'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "components",
      [
        {
          id: 2,
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
          expired: 0        }
      ]
    )
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "component_tags",
      [
        {
          id: 2,
          title: "백준 티어_1",
          description: "만약 로드된 후 애니메이션을 다시 보고싶으시면 ctrl + shift + R 을 눌러서 강력 새로고침을 하시면 다시 보실 수 있습니다!",
          component_id: 1
        }
      ]
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("components", null, {});
  },
};
