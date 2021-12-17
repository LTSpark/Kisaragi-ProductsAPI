"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ProductInformations",
      [
        {
          brand: "Brand 1",
          series: "Series 1",
          country: "Country 1",
          description: "Description 1",
          product_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Brand 2",
          series: "Series 2",
          country: "Country 2",
          description: "Description 2",
          product_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Brand 3",
          series: "Series 3",
          country: "Country 3",
          description: "Description 3",
          product_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Brand 4",
          series: "Series 4",
          country: "Country 4",
          description: "Description 4",
          product_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Brand 5",
          series: "Series 5",
          country: "Country 5",
          description: "Description 5",
          product_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Brand 6",
          series: "Series 6",
          country: "Country 6",
          description: "Description 6",
          product_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Brand 7",
          series: "Series 7",
          country: "Country 7",
          description: "Description 7",
          product_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Brand 8",
          series: "Series 8",
          country: "Country 8",
          description: "Description 8",
          product_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Brand 9",
          series: "Series 9",
          country: "Country 9",
          description: "Description 9",
          product_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
