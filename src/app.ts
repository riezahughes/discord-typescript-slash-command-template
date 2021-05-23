import dotenv from "dotenv";

import { Message } from "discord.js";

dotenv.config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("online!");
});

client.on("message", async (message: Message) => {
  if (!client.application?.owner) await client.application?.fetch();

  if (
    message.content.toLowerCase() === "!deploy" &&
    message.author.id === client.application?.owner.id
  ) {
    const data = {
      name: "ping",
      description: "Replies with Pong!",
    };

    const command = await client.guilds.cache
      .get(process.env.GUILD_ID)
      ?.commands.create(data);
    console.log(command);
  }
});

client.login(process.env.DISCORD_TOKEN);
