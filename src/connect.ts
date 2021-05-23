// use discords slash API to connect and allow access
const fetch = require("node-fetch");

const tokenDetails = "GENERICAUTHORISATIONGOESHERE";

const json = {
  name: "blep",
  description: "Send a random adorable animal photo",
  options: [
    {
      name: "animal",
      description: "The type of animal",
      type: 3,
      required: true,
      choices: [
        {
          name: "Dog",
          value: "animal_dog",
        },
        {
          name: "Cat",
          value: "animal_cat",
        },
        {
          name: "Penguin",
          value: "animal_penguin",
        },
      ],
    },
    {
      name: "only_smol",
      description: "Whether to show only baby animals",
      type: 5,
      required: false,
    },
  ],
};

const headers = {
  Authorization: `Bearer ${TOKEN_DETAILS}`,
};

//run fetch post with credentials

const addSlashToGuild = fetch("");
