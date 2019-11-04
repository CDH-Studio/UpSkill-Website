"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        "education", // name of Source model
        "user_id", // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: "users", // name of Target model
            key: "id" // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      )
      .then(() => {
        return queryInterface
          .addColumn(
            "education", // name of Source model
            "school_id", // name of the key we're adding
            {
              type: Sequelize.UUID,
              references: {
                model: "schools", // name of Target model
                key: "id" // key in Target model that we're referencing
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
            }
          )
          .then(() => {
            return queryInterface.addColumn(
              "education", // name of Source model
              "diploma_id", // name of the key we're adding
              {
                type: Sequelize.UUID,
                references: {
                  model: "diplomas", // name of Target model
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
        "education", // name of Source model
        "user_id" // key we want to remove
      )
      .then(() => {
        return queryInterface
          .removeColumn(
            "education", // name of Source model
            "school_id" // key we want to remove
          )
          .then(() => {
            return queryInterface.removeColumn(
              "education", // name of Source model
              "diploma_id" // key we want to remove
            );
          });
      });
  }
};
