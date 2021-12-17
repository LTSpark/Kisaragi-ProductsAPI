"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Product 1",
          ownerId: "61baa0b92f1064030b358434",
          price: 10,
          quantity: 10,
          available: true,
          image: "https://picsum.photos/200/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 2",
          ownerId: "61baa0b92f1064030b358434",
          price: 20,
          quantity: 20,
          available: true,
          image: "https://picsum.photos/200/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 3",
          ownerId: "61baa0b92f1064030b358434",
          price: 30,
          quantity: 30,
          available: true,
          image: "https://picsum.photos/200/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 4",
          ownerId: "61baa0b92f1064030b358434",
          price: 40,
          quantity: 40,
          available: true,
          image: "https://picsum.photos/200/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 5",
          ownerId: "61baa0b92f1064030b358434",
          price: 50,
          quantity: 50,
          available: true,
          image: "https://picsum.photos/200/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 6",
          ownerId: "61baa0b92f1064030b358434",
          price: 60,
          quantity: 60,
          available: true,
          image: "https://picsum.photos/200/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 7",
          ownerId: "61baa0b92f1064030b358434",
          price: 70,
          quantity: 70,
          available: true,
          image: "https://picsum.photos/200/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 8",
          ownerId: "61baa0b92f1064030b358434",
          price: 80,
          quantity: 80,
          available: true,
          image: "https://picsum.photos/200/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 9",
          ownerId: "61baa0b92f1064030b358434",
          price: 90,
          quantity: 90,
          available: true,
          image: "https://picsum.photos/200/300",
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
