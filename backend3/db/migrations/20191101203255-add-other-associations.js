"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        "userProjects", // name of Source model
        "profileId", // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: "profiles", // name of Target model
            key: "id" // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        }
      )
      .then(() => {
        return queryInterface
          .addColumn(
            "experiences", // name of Source model
            "profileId", // name of the key we're adding
            {
              type: Sequelize.UUID,
              references: {
                model: "profiles", // name of Target model
                key: "id" // key in Target model that we're referencing
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
            }
          )
          .then(() => {
            return queryInterface.addColumn(
              "organizations", // name of Source model
              "profileId", // name of the key we're adding
              {
                type: Sequelize.UUID,
                references: {
                  model: "profiles", // name of Target model
                  key: "id" // key in Target model that we're referencing
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL"
              }
            );
          });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn(
        "userProjects", // name of Source model
        "profileId" // key we want to remove
      )
      .then(() => {
        return queryInterface
          .removeColumn(
            "experiences", // name of Source model
            "profileId" // key we want to remove
          )
          .then(() => {
            return queryInterface.removeColumn(
              "organizations", // name of Source model
              "profileId" // key we want to remove
            );
          });
      });
  }
};
