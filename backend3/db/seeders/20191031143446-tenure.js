"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "tenures",
      [
        {
          description_en: "Acting",
          description_fr: "Par intérim",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Assignment",
          description_fr: "Affectation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Deployment",
          description_fr: "Mutations",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Indeterminate",
          description_fr: "Indeterminée",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Secondment",
          description_fr: "Détachement",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Student",
          description_fr: "Étudiant",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Casual",
          description_fr: "Travailleur occasionnel",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Term",
          description_fr: "terme",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("tenures", null, {});
  }
};
