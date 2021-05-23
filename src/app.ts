import { Interaction, MessageEmbed, Intents } from "discord.js";

import dotenv from "dotenv";

dotenv.config();

const Discord = require("discord.js");
const interactions = require("discord-slash-commands-client");

// create a new client
const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const token = process.env.DISCORD_TOKEN;
console.log(`token is ${token}`);

// attach the interaction client to discord.js client
client.interactions = new interactions.Client(token, "845642901689204747");

// attach and event listener for the ready event
client.on("ready", () => {
  console.log("Client is ready!");

  // Create a new command that we can test
  client.interactions
    .createCommand({
      name: "ping",
      description: "ping pong",
    })
    .then(console.log)
    .catch(console.error);
});

// attach and event listener for the interactionCreate event
client.on("interactionCreate", async (interaction: Interaction) => {
  if (interaction.name === "ping") {
    // send an initial reply
    await interaction.reply("Pong");

    // send a followup
    const messageId = await interaction.reply({
      content: "Follow up message",
      embeds: [new MessageEmbed().setDescription("Follow up test")],
    });

    setTimeout(() => {
      // delete initial reply
      interaction.delete();

      // edit 1st followup
      interaction.edit("Edited follow up message", messageId);
    }, 5000);
  }
});

// login
client.login(token);
