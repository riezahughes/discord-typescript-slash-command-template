import { Interaction, Intents } from "discord.js";

import dotenv from "dotenv";

import RoleAssignment from "./commands/assignRole";

import RoleList from "./roles.json";

dotenv.config();

const Discord = require("discord.js");
const interactions = require("discord-slash-commands-client");

// create a new client
const client = new Discord.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});
const token = process.env.DISCORD_TOKEN;

// attach the interaction client to discord.js client
client.interactions = new interactions.Client(
  token,
  process.env.DISCORD_CLIENT
);

// attach and event listener for the ready event
client.on("ready", () => {
  console.log("Bot starting up. Setting up slash commands with discord...");
  RoleList.forEach((role, i: number) => {
    setTimeout(() => {
      client.interactions
        .createCommand({
          name: role.name,
          description: role.description,
        })
        .then(console.log)
        .catch(console.error);
    }, i * 10000);
  });
});
// attach and event listener for the interactionCreate event
client.on("interactionCreate", async (interaction: Interaction) => {
  await interaction.reply(RoleAssignment(interaction, client));
});

// login
client.login(token);
